module.exports = function(cli) {
    cli
        .command('init')
        .description('initialise folder for work with waterline')
        .option('-y, --yes', 'accept everything with default values')
        .option('-c, --coffee', 'init files in coffee-script')
        .option('-r, --rc', 'init will create a waterline rc file')
        .option('-f, --force', 'if folder or file already exists it will be overwritten')
        .action(function(options) {
            
        })
        .on('--help', function() {
           console.log('    Examples:');
           console.log();
           console.log('      $ waterline init');
           console.log('      $ waterline init --yes');
           console.log('      $ waterline init --coffee');
           console.log('      $ waterline init --coffee --yes');
           console.log('      $ waterline init --rc');
           console.log();
        });
};
