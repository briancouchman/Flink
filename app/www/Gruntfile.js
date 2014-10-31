module.exports = function(grunt) {

    grunt.initConfig({
        compress: {
            main: {
                options: {
                    archive: 'dist/leeloo.zip'
                },
                files: [
                    {src: ['css/**', 'img/**', 'scripts/**', 'views/**', 'bower_components/**', 'js/**', 'res/**', 'index.html', 'config.xml', 'icon.jpg']}
                ]
            }
        },

        "phonegap-build": {
            release: {
                options: {
                    archive: "dist/leeloo.zip",
                    "appId": "1092260",
                    "user": {
                        "email": "brian.couchman@gmail.com",
                        "password": "rswcufa5"
                    },
                    download: {
                        android: 'dist/leeloo.apk'
                    }
                }
            }
        },

        shell: {
            install: {
                cmd: [
                    "adb uninstall com.whynuts.leeloo",
                    "adb install dist/leeloo.apk"
                ].join('&&')
            },
            clean: {
                cmd:  [
                    "rm dist/leeloo.zip",
                    "rm dist/leeloo.apk"
                ].join("&&"),
                failOnError: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-phonegap-build');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('package', ['shell:clean','compress']);
    grunt.registerTask('build', ['package', 'phonegap-build:release']);
    grunt.registerTask('install', ['exec:uninstall', 'shell:install']);

    grunt.registerTask('deploy', ['build', 'install']);
}
