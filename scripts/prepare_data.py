"""Refresh bundled PubChem records. Python 3; no application build required."""
import json, pathlib, urllib.request, re, time
ROOT=pathlib.Path(__file__).resolve().parents[1]/'dist'/'data'
def fetch(url):
 for attempt in range(3):
  try: return json.load(urllib.request.urlopen(url,timeout=30))
  except Exception:
   if attempt==2: raise
   time.sleep(1)
def save(name,data): (ROOT/name).write_text(json.dumps(data,ensure_ascii=False,separators=(',',':'))+'\n')
raw=fetch('https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON');save('periodic-source.json',raw)
names='Wasserstoff Helium Lithium Beryllium Bor Kohlenstoff Stickstoff Sauerstoff Fluor Neon Natrium Magnesium Aluminium Silicium Phosphor Schwefel Chlor Argon Kalium Calcium Scandium Titan Vanadium Chrom Mangan Eisen Cobalt Nickel Kupfer Zink Gallium Germanium Arsen Selen Brom Krypton Rubidium Strontium Yttrium Zirconium Niob Molybdän Technetium Ruthenium Rhodium Palladium Silber Cadmium Indium Zinn Antimon Tellur Iod Xenon Caesium Barium Lanthan Cer Praseodym Neodym Promethium Samarium Europium Gadolinium Terbium Dysprosium Holmium Erbium Thulium Ytterbium Lutetium Hafnium Tantal Wolfram Rhenium Osmium Iridium Platin Gold Quecksilber Thallium Blei Bismut Polonium Astat Radon Francium Radium Actinium Thorium Protactinium Uran Neptunium Plutonium Americium Curium Berkelium Californium Einsteinium Fermium Mendelevium Nobelium Lawrencium Rutherfordium Dubnium Seaborgium Bohrium Hassium Meitnerium Darmstadtium Röntgenium Copernicium Nihonium Flerovium Moscovium Livermorium Tenness Oganesson'.split()
groups={'Nonmetal':'Nichtmetalle','Noble gas':'Edelgase','Alkali metal':'Alkalimetalle','Alkaline earth metal':'Erdalkalimetalle','Metalloid':'Halbmetalle','Halogen':'Halogene','Post-transition metal':'Weitere Metalle','Transition metal':'Übergangsmetalle','Lanthanide':'Lanthanoide','Actinide':'Actinoide'}
rows=[dict(zip(raw['Table']['Columns']['Column'],r['Cell'])) for r in raw['Table']['Row']]
by_symbol={r['Symbol']:r for r in rows}
def config(s):
 prefix=re.search(r'\[([A-Za-z]+)\]',s)
 return (config(by_symbol[prefix[1]]['ElectronConfiguration']) if prefix else [])+[(int(n),l,int(c)) for n,l,c in re.findall(r'(\d)([spdf])(\d+)',s)]
for i,r in enumerate(rows):
 z=i+1; entries=config(r['ElectronConfiguration']); shells=[sum(c for n,l,c in entries if n==k) for k in range(1,8)]
 assert sum(shells)==z,(z,entries)
 if z<=2: period,col=1,(1 if z==1 else 18)
 elif z<=10: period,col=2,(z-2 if z<=4 else z+8)
 elif z<=18: period,col=3,(z-10 if z<=12 else z)
 elif z<=36: period,col=4,z-18
 elif z<=54: period,col=5,z-36
 elif z<=71: period,col=(6,z-54) if z<=56 else (8,z-54)
 elif z<=86: period,col=6,z-68
 elif z<=103: period,col=(7,z-86) if z<=88 else (9,z-86)
 else: period,col=7,z-100
 rows[i]={'z':z,'symbol':r['Symbol'],'name':names[i],'mass':r['AtomicMass'],'config':r['ElectronConfiguration'],'orbitals':entries,'shells':shells[:max(n for n,l,c in entries)],'category':groups.get(r['GroupBlock'],r['GroupBlock']),'en':r['Electronegativity'] or '—','state':{'Gas':'gasförmig','Solid':'fest','Liquid':'flüssig','Expected to be a Solid':'voraussichtlich fest','Expected to be a Gas':'voraussichtlich gasförmig'}.get(r['StandardState'],r['StandardState']),'row':period,'col':col}
save('elements.json',rows)
mols=[('water','Wasser',962,'H₂O'),('salt','Kochsalz',5234,'NaCl'),('glucose','D-Glucose',5793,'C₆H₁₂O₆'),('caffeine','Koffein',2519,'C₈H₁₀N₄O₂'),('vitamin-c','Vitamin C',54670067,'C₆H₈O₆'),('glycine','Glycin',750,'C₂H₅NO₂'),('alanine','L-Alanin',5950,'C₃H₇NO₂'),('cysteine','L-Cystein',5862,'C₃H₇NO₂S')]
index=[]
for key,name,cid,formula in mols:
 kind='2d' if key=='salt' else '3d'
 url=f'https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/{cid}/record/JSON?record_type={kind}'
 data=fetch(url);save(key+'-source.json',data)
 pc=data['PC_Compounds'][0];co=pc['coords'][0];conf=co['conformers'][0];lookup={aid:i for i,aid in enumerate(pc['atoms']['aid'])}
 atoms=[{'element':pc['atoms']['element'][lookup[aid]],'xyz':[conf['x'][j],conf['y'][j],conf.get('z',[0]*len(co['aid']))[j]]} for j,aid in enumerate(co['aid'])]
 idx={aid:i for i,aid in enumerate(co['aid'])};b=pc.get('bonds',{})
 bonds=[[idx[a],idx[c],o] for a,c,o in zip(b.get('aid1',[]),b.get('aid2',[]),b.get('order',[]))]
 record={'id':key,'name':name,'cid':cid,'formula':formula,'kind':'lattice' if key=='salt' else 'conformer','source':url,'retrieved':'2026-10-04','atoms':atoms,'bonds':bonds}
 save(key+'.json',record);index.append({k:v for k,v in record.items() if k not in ('atoms','bonds')});print(name,len(atoms),flush=True)
save('molecules.json',index)
