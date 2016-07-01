module.exports = function(cli) {
    cli
        .command('rollback [connections]')
        .description('rollback migrations. If no connections specified, it will run migrations for all connections')
        .option('-c, --count', 'count of how many migrations should be rollbacked')
        .option('-t, --to', 'specify to which migrations should be rollbacked')
        .action(function(connections, options) {
            
        })
        .on('--help', function() {
           console.log('    Examples:');
           console.log();
           console.log('      $ waterline rollback');
           console.log('      $ waterline rollback -c 2');
           console.log('      $ waterline rollback -t 20160701095926');
           console.log('      $ waterline rollback -t 20160701095926_my_migrations');
           console.log();
        });
};
