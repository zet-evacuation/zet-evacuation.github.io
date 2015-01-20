module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    },
    assemble: {
        options: {
            layout: "src/layouts/default.hbs",
            flatten: true
        },
        pages: {
            files: {
                './': ['src/pages/*.hbs']
            }
        }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('assemble');
    
  // Default task(s).
  grunt.registerTask('default', ['cssmin', 'assemble']);
};