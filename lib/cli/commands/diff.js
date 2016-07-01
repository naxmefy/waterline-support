module.exports = function(cli) {
    cli
        .command('diff <connection>')
        .description('compare current model setting with a database and create diff')
        .action(function(options) {
            
        })
        .on('--help', function() {
           console.log('    Hint:');
           console.log('    We use umigrate - so diff currently only available for mariadb (mysql)');
           console.log();
           console.log('    Examples:');
           console.log();
           console.log('      $ waterline diff myconnection');
           console.log();
        });
};
