import { flags } from '@oclif/command'

export const options = {
  version: flags.version({char: 'v'}),
  help: flags.help({char: 'h'}),
  user: flags.string({ char: 'u', description: 'host username, e.g: root'}),
  password: flags.string({ char: 'p', description: 'host user password'}),
  registry: flags.string({ char: 'r', description: 'registry url'}),
  token: flags.string({ char: 't', description: 'registry auth token'})
}

export default options;
