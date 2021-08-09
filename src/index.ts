import {Command } from '@oclif/command'
import { deploy } from './actions/deploy'
import outputs from './actions/outputs'
import options from './options'

class Plox extends Command {
  static description = 'Deploy to Docker'
  static flags = options

  static args = [{
    name: 'action',
    required: true,
  }]

  async run() {
    const {args, flags} = this.parse(Plox)

    switch (args['action']) {
      case 'deploy': return await deploy(this, flags);
      default: this.log(outputs.invalidCommand(args['action']))
    }
  }
}

export = Plox
