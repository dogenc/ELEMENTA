export const colors={1:'#e5eaef',6:'#526576',7:'#4b7fe0',8:'#e9655e',11:'#ae80db',16:'#dfb94b',17:'#76b779'};
export const symbols={1:'H',6:'C',7:'N',8:'O',11:'Na',16:'S',17:'Cl'};
export const radii={1:1.2,6:1.7,7:1.55,8:1.52,11:2.27,16:1.8,17:1.75};
export const sourceBase='https://openstax.org/books/chemistry-2e/pages/';
export const processes=[
{id:'ionic',name:'Ionenbindung',formula:'Na → Na⁺ + e⁻',chapter:'7-1-ionic-bonding',steps:['Ausgangsatome','Elektronenübertrag','Geladene Ionen','Ionengitter'],texts:[
'Natrium besitzt ein Außenelektron. Chlor besitzt sieben. Das Modell betrachtet zunächst einzelne Atome; die reale Salzbildung aus den Elementen umfasst weitere energetische Schritte.',
'Das Natriumatom gibt ein Elektron ab, das Chloratom nimmt es auf. Die Darstellung verfolgt die Elektronenbilanz, keine reale Flugbahn des Elektrons.',
'Na⁺ und Cl⁻ ziehen sich elektrostatisch an. Die Kernladung bleibt unverändert; verändert hat sich die Zahl der Elektronen.',
'Im Feststoff wirken Anziehungen in alle Raumrichtungen. Kochsalz besteht aus einem Gitter im Verhältnis 1:1, nicht aus einzelnen NaCl-Molekülen. Die gezeigte endliche Struktur ist ein Ausschnitt.']},
{id:'covalent',name:'Elektronenpaarbindung',formula:'H + H → H₂',chapter:'7-2-covalent-bonding',steps:['Zwei H-Atome','Annäherung','Gemeinsames Paar','H₂-Molekül'],texts:[
'Jedes Wasserstoffatom hat ein Proton und ein Elektron. Die Wolken zeigen vereinfacht den Raum, in dem sich die Elektronen aufhalten können.',
'Bei der Annäherung überlagern sich die Atomorbitale. Anziehung und Abstoßung bestimmen gemeinsam die Energie des Systems.',
'Das gemeinsame Elektronenpaar gehört zum Molekül. Eine erhöhte Elektronendichte zwischen den Kernen stabilisiert die Bindung.',
'Beim Gleichgewichtsabstand halten sich die Kräfte die Waage. H₂ besitzt eine kovalente Einfachbindung. Kugeln und Wolken sind eine didaktische Darstellung, keine berechnete Molekülorbitaldichte.']},
{id:'dissolve',name:'Salz in Wasser',formula:'NaCl(s) → Na⁺(aq) + Cl⁻(aq)',chapter:'11-1-the-dissolution-process',steps:['Ionenkristall','Wasser richtet sich aus','Ionen lösen sich','Hydrathüllen'],texts:[
'Im Salzkristall sind bereits Na⁺- und Cl⁻-Ionen vorhanden. Beim Lösen entstehen keine neuen Ionen durch Elektronenübertragung.',
'Wasser ist polar: Die Sauerstoffseite trägt eine negative, die Wasserstoffseite eine positive Partialladung. Die Moleküle orientieren sich zum jeweiligen Ion.',
'Wasser wechselwirkt mit den Ionen und kann sie aus dem Gitter lösen. Das Aufbrechen von Wechselwirkungen benötigt Energie, die Hydratation setzt Energie frei.',
'Um Na⁺ zeigt die Sauerstoffseite nach innen, um Cl⁻ die Wasserstoffseite. Diese beweglichen Hydrathüllen sind hier mit wenigen Molekülen schematisch gezeigt. In Lösung verteilen sich die Ionen.']}
];
export const moleculeTexts={
water:['Ein kleines Molekül mit großer Wirkung.','Wasser ist gewinkelt. Die polaren O–H-Bindungen ergeben zusammen ein permanentes Dipolmoment. Das erklärt unter anderem, warum Wassermoleküle sich an Ionen ausrichten.'],
salt:['Ein Kristall statt eines Moleküls.','NaCl beschreibt das Zahlenverhältnis von Natrium- und Chloridionen. Jedes innere Ion hat sechs nächste Nachbarn der entgegengesetzten Ladung. Der Gitterausschnitt wird geometrisch erzeugt; PubChem CID 5234 belegt die Stoffidentität.'],
glucose:['Energie in einer Kohlenstoffstruktur.','D-Glucose ist ein Einfachzucker mit sechs Kohlenstoffatomen. Die Hydroxygruppen ermöglichen Wechselwirkungen mit Wasser. Die Ansicht zeigt ein hinterlegtes PubChem-Konformer; in Lösung bestehen mehrere Formen im Gleichgewicht.'],
caffeine:['Zwei Ringe, viele Bindungen.','Koffein enthält Kohlenstoff, Wasserstoff, Stickstoff und Sauerstoff. Seine zusammenhängende Ringstruktur lässt sich in der Kugel-Stab-Ansicht verfolgen. Mehrfachbindungen erscheinen als parallele Stäbe; die angezeigte Bindungsordnung stammt aus PubChem.'],
'vitamin-c':['Ein Molekül mit Redoxfunktion.','Ascorbinsäure ist Vitamin C. Ihre sauerstoffhaltigen Gruppen prägen die Wechselwirkungen mit Wasser. Die Strukturansicht zeigt die neutrale Säure; Protonierung und Ladung hängen in Lösung vom pH-Wert ab.'],
glycine:['Die kleinste proteinogene Aminosäure.','Glycin besitzt als Seitenkette ein Wasserstoffatom und kein chirales α-Kohlenstoffatom. Das Modell zeigt die neutrale PubChem-Struktur. In Wasser dominiert in einem weiten pH-Bereich die Zwitterionenform.'],
alanine:['Eine Methylgruppe macht den Unterschied.','L-Alanin trägt eine Methylgruppe als Seitenkette. Am α-Kohlenstoff sind vier verschiedene Gruppen gebunden. Die räumliche Anordnung ist für die biologische Funktion entscheidend. Gezeigt ist die neutrale PubChem-Struktur.'],
cysteine:['Schwefel verbindet Strukturen.','L-Cystein besitzt eine Thiolgruppe. Durch Oxidation können zwei Cysteinreste eine Disulfidbrücke bilden. Das einzelne Molekül hier zeigt keine solche Brücke. In wässriger Lösung ist die Protonierung pH-abhängig.']};
// Associated Laguerre polynomial and real spherical harmonics (normalization cancels in sampling).
function laguerre(k,a,x){let p=1,q=1+a-x;if(k===0)return p;if(k===1)return q;for(let j=2;j<=k;j++){const t=((2*j-1+a-x)*q-(j-1+a)*p)/j;p=q;q=t;}return q;}
function legendre(l,m,x){let p=1;for(let i=1;i<=m;i++)p*=-(2*i-1)*Math.sqrt(Math.max(0,1-x*x));if(l===m)return p;let q=x*(2*m+1)*p;if(l===m+1)return q;for(let k=m+2;k<=l;k++){const v=((2*k-1)*x*q-(k+m-1)*p)/(k-m);p=q;q=v;}return q;}
export function orbitalCloud(n,l,m,count=11000){
 let seed=193+31*n+11*l+m;const rand=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return(seed+.5)/4294967296};
 const maxR=4*n*n+16*n;const cdf=[];let total=0;for(let i=0;i<2500;i++){let r=(i+.5)/2500*maxR,rho=2*r/n;let R=Math.exp(-rho/2)*rho**l*laguerre(n-l-1,2*l+1,rho);total+=r*r*R*R;cdf.push(total);}
 const drawR=()=>{let v=rand()*total,a=0,b=cdf.length-1;while(a<b){let mid=(a+b)>>1;if(cdf[mid]<v)a=mid+1;else b=mid;}return(a+rand())/cdf.length*maxR;};
 let maxA=0;for(let i=0;i<=1000;i++)maxA=Math.max(maxA,legendre(l,Math.abs(m),i/500-1)**2);maxA*=1.001;
 const positions=[],phases=[];while(phases.length<count){let u=rand()*2-1,phi=rand()*Math.PI*2;let a=legendre(l,Math.abs(m),u)*(m===0?1:m>0?Math.cos(m*phi):Math.sin(-m*phi));if(rand()*maxA>a*a)continue;let r=drawR(),rho=2*r/n;let radial=laguerre(n-l-1,2*l+1,rho);const scale=4.5/(n*n+3*n);positions.push(r*Math.sqrt(1-u*u)*Math.cos(phi)*scale,r*u*scale,r*Math.sqrt(1-u*u)*Math.sin(phi)*scale);phases.push(a*radial>=0?1:-1);}
 return {positions,phases};
}
