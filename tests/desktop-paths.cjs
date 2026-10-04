const {resolveAsset,isAppURL}=require('../desktop/paths.cjs');
const assert=require('node:assert/strict'),path=require('node:path');const root=path.resolve('dist');
assert.equal(resolveAsset(root,'elementa://app/'),path.join(root,'index.html'));
assert.equal(resolveAsset(root,'elementa://app/data/caffeine.json'),path.join(root,'data','caffeine.json'));
for(const url of ['elementa://evil/index.html','https://app/index.html','elementa://app/%2e%2e%2fsecret','elementa://app/%5c..%5csecret','elementa://app/%00','elementa://user@app/index.html','elementa://app:42/index.html','not a url'])assert.equal(resolveAsset(root,url),null,url);
assert.ok(isAppURL('elementa://app/#molecule/caffeine'));console.log('PASS desktop protocol paths and origin boundaries');
