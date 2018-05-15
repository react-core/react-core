const Generator = require('yeoman-generator');
const path = require('path')
const { kebabCase } = require('lodash')

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.log('Initializing...');
  }

  async start() {
    this.answers = await this.prompt([
      {
        type    : 'input',
        name    : 'name',
        message : 'Enter the new name of your awesome component (i.e.: NewComponent): '
      },
      {
        type: 'list',
        name: 'organitzation',
        message: 'Choose a NPM organization',
            choices: [
                "@react-core"
            ]
        }
    ])

    const { name, organitzation } = this.answers

    const answers2 = await this.prompt([
      {
        type    : 'input',
        name    : 'package_name',
        message : 'Enter the name of package: ',
        default : `${organitzation}/${kebabCase(name)}` // Default to current folder name
      }
    ])

    const destination = `./packages/${name}`
    const rootFiles = ['package.json', 'README.md']
    const configFiles = ['.npmignore']
    const packageFiles = ['Component.js', 'Component.story.js', 'Component.test.js']

    this.destinationRoot(destination)

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      { package_name: kebabCase(`${organitzation}/${kebabCase(name)}`) }
    );

    rootFiles.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(file),
        this.destinationPath(file),
        { package_name: name }
      );
    })

    packageFiles.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(`component/${file}`),
        this.destinationPath(`src/${file.replace('Component', name)}`),
        { component_name: name }
      );
    })

    configFiles.forEach(file => {
      this.fs.copyTpl(
        this.templatePath(`config/${file}`),
        this.destinationPath(`${file}`)
      );
    })
  }
};
