module.exports = function(grunt) {

  grunt.initConfig({
    aws: grunt.file.readJSON('aws-keys.json'),
    aws_s3: {
      options: {
        accessKeyId: aws.AWSAccessKeyId, // Use the variables
        secretAccessKey: aws.AWSSecretKey, // You can also use env variables
        bucket: 'flink.com',
        differential: true,
        region: 'us-west-2'
      },
      upload: {
        files: [
          {expand: true, cwd: 'public', src: ['**'], dest: '/', action: 'upload'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-aws-s3');

  grunt.registerTask('deploy', ['aws_s3:upload']);
}
