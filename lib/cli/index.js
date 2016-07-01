var cli = require("commander");
var requireDir = require('require-dir');
var _ = require('lodash');
var debug = require('debug');

var pkg = require('../../package.json');

module.exports = function() {
    cli
        .version(pkg.version);
        
    cli.log = debug('waterline-support');
        
    _.forEach(requireDir('./commands'), function(cmd) {
        cmd(cli);
    });
    
    cli.action(function(cmd) {
        console.log('Command %s not found', cmd);
    });
    
    cli.parse(process.argv);
    
    if(!process.argv.slice(2).length) {
        cli.outputHelp();
    }
};
