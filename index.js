#!/usr/bin/env node
/* eslint max-len: 0 */

'use strict';

const program = require('commander');
let glob      = require("glob");
let kebabCase  = require("lodash/kebabCase");
let uniq       = require("lodash/uniq");
let each       = require("lodash/each");

program
    .version('1.0.0')
    .option('-g, --generate-array','Generates big array for Codility exercises')
    .action(function(req,optional){
        console.log('.action() allows us to implement the command');
        console.log('User passed %s', req);
        if (optional) {
            optional.forEach(function(opt){
                console.log("User passed optional arguments: %s", opt);
            });
        }
    });

// Parse CLI arguments
program.parse(process.argv);

