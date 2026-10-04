import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {orbitalCloud,processes} from '../dist/chemistry.js';
const json=p=>JSON.parse(readFileSync(new URL('../dist/data/'+p,import.meta.url)));
const elements=json('elements.json');assert.equal(elements.length,118);const cells=new Set();
for(const e of elements){assert.equal(e.shells.reduce((a,b)=>a+b,0),e.z);assert.ok(e.name&&e.symbol);const cell=e.row+':'+e.col;assert.ok(!cells.has(cell),'Duplicate periodic cell '+cell);cells.add(cell);assert.ok(e.col>=1&&e.col<=18);}
assert.deepEqual(elements[23].shells,[2,8,13,1]);assert.deepEqual(elements[28].shells,[2,8,18,1]);assert.deepEqual(elements[45].shells,[2,8,18,18]);
for(const m of json('molecules.json')){const d=json(m.id+'.json');assert.equal(d.cid,m.cid);assert.ok(d.atoms.length>0);for(const a of d.atoms)assert.ok(a.xyz.every(Number.isFinite));for(const [a,b,o] of d.bonds){assert.ok(a>=0&&b>=0&&a<d.atoms.length&&b<d.atoms.length);assert.ok(d.kind==='lattice'?o===7:o>=1&&o<=3);}if(m.id==='water'){assert.equal(d.atoms.length,3);assert.equal(d.bonds.length,2);}}
for(const [n,l,m] of[[1,0,0],[2,1,1],[3,2,-2],[4,3,3],[7,1,0]]){const c=orbitalCloud(n,l,m,300);assert.equal(c.positions.length,900);assert.ok(c.positions.every(Number.isFinite));if(l>0){assert.ok(c.phases.includes(1));assert.ok(c.phases.includes(-1));}}
assert.equal(processes.length,3);for(const p of processes){assert.equal(p.steps.length,4);assert.equal(p.texts.length,4);}
console.log('PASS: 118 elements, configurations, grid, 8 PubChem datasets, orbital samples, 3 processes');
