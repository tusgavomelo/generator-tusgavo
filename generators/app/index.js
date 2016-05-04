var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  writing: function () {
    var that = this;
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationRoot(),
      {
        appname: that.appname
      }
    );

    this.fs.copyTpl(
      this.templatePath('**/.*'),
      this.destinationRoot(),
      {
        title: that.appname
      }
    );

  }
});
