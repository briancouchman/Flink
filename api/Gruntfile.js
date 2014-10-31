module.exports = function(grunt) {

    grunt.initConfig({
        scp: {
            options: {
                host: 'ec2-54-68-223-98.us-west-2.compute.amazonaws.com',
                username: 'ubuntu',
                privateKey: '/Library/Perso/GeoMatching/keys/leeloo-ec2/nodejsserver.pem'
            },

            upload: {
                files: [
                    {
                        cwd: 'controllers',
                        src: '**/*',
                        filter: 'isFile',
                        dest: 'leeloo'
                    }/*,
                    {
                        src: 'sockets/**',
                        // path on the server
                        dest: '/leeloo/'
                    },
                    {
                        src: 'index.js',
                        // path on the server
                        dest: '/leeloo/index.js'
                    },
                    {
                        src: 'package.json',
                        // path on the server
                        dest: '/leeloo/package.json'
                    }*/
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-scp');


    grunt.registerTask('upload', ['scp:upload']);
}
