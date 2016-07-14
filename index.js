#!/usr/bin/env node

'use strict';

const program = require('commander');

program
    .version('1.0.0')
    .option('-g, --generate-array','Generates big array for Codility exercises')
    //.option('-v, --verbose [optional]','Optional option to increase verbosity')
    //.option('-I, --another-input <required>','required user input')
    .parse(process.argv); // end with parse to parse through the input

