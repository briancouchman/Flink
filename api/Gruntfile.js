module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ec2: 'aws-keys.json'
  });

  grunt.loadNpmTasks('grunt-ec2');
}
