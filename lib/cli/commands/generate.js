module.exports = function(cli) {
    cli
        .command('generate <connection> <topic>')
        .description('generate a migrate for specified connection')
        .option('-f, --force', 'if file already exists it will be overwritten')
        .action(function(connections, options) {
            
        })
        .on('--help', function() {
           console.log('    Examples:');
           console.log();
           console.log('      $ waterline generate myconnection add_examples');
           console.log();
        });
};
