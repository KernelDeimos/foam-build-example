/**
 * @license
 * Copyright 2022 The FOAM Authors. All Rights Reserved.
 * http://www.apache.org/licenses/LICENSE-2.0
 */

// TODO: don't actually load files
// print warning if uglify not found
// create sourcemap
// merge with processArgs.js

const startTime = Date.now();
const path_     = require('path');
const fs_       = require('fs');
const path = require('path/posix');

require('./foam3/src/foam_node.js');

var [argv, X, flags] = require('./foam3/tools/processArgs.js')(
  '',
  { version: '', license: '', pom: 'pom' },
  { debug: true, java: false, web: true }
);

foam.require(X.pom, false, true);


const outPath = 'runtime/journals';

if ( ! fs_.existsSync(outPath) ) {
    fs_.mkdirSync(outPath, { recursive: true });
}

async function findJournals({ jrls, srcPath }) {
    const walker = foam.util.filesystem.FileWalker.create();
    walker.files.sub((_1, _2, info) => {
        for ( const fileInfo of info.files ) {
            const extName = path_.extname(fileInfo.name);
            if ( extName !== '' && extName !== '.jrl' ) continue;
            const fullPath = fileInfo.fullPath;
            const baseName = path_.basename(fileInfo.name, extName);
            if ( ! jrls[baseName] ) jrls[baseName] = '';
            jrls[baseName] += fs_.readFileSync(fullPath).toString();
        }
    })
    await walker.walk(srcPath);
}

const main = async function () {
    const jrls = {};
    names = fs_.readFileSync('./journals').toString().split('\n');
    for ( let name of names ) {
        if ( name === '' ) continue;
        jrls[name] = '';
    }
    await findJournals({ jrls, srcPath: 'foam3/src' });
    await findJournals({ jrls, srcPath: 'myproject/src' });

    for ( const key in jrls ) {
        fs_.writeFileSync(path_.join(outPath, key + '.0'), jrls[key]);
        fs_.writeFileSync(path_.join(outPath, key), '');
    }
};

main();