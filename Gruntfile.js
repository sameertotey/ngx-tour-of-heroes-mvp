module.exports = (grunt) => {
    grunt.registerTask('default', 'Hello World', () => grunt.log.writeln("##teamcity[buildProblemdescription='There is a problem with Hello World' identity='12345']"))
}