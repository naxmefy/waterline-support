module.exports = function(cli) {
    cli
        .command('migrate [connections]')
        .description('run migrations to latest. If no connections specified, it will run migrations for all connections')
        .option('-c, --count', 'count of how many migrations should be migrated')
        .option('-t, --to', 'specify to which migrations should be migrated')
        .action(function(connections, options) {
            
        })
        .on('--help', function() {
           console.log('    Examples:');
           console.log();
           console.log('      $ waterline migrate');
           console.log();
        });
};
