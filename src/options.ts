import { flags } from '@oclif/command'

export enum CONNECTION_MODE {
  PUBLIC = 'public',
  SSH = 'ssh',
}

export const options = {
  version: flags.version({
    char: 'v'
  }),
  help: flags.help({
    char: 'h'
  }),
  api: flags.string({
    char: 'a',
    description: 'Docker Engine API URL',
    required: true,
  }),
  name: flags.string({
    char: 'n',
    description: 'container or service name',
    required: true,
  }),
  image: flags.string({
    char: 'i',
    description: 'docker image',
    required: true,
  }),
  user: flags.string({
    char: 'u',
    description: 'host username, e.g: root'
  }),
  password: flags.string({
    char: 'p',
    description: 'host user password'
  }),
  registry: flags.string({
    char: 'r',
    description: 'registry url'
  }),
  token: flags.string({
    char: 't',
    description: 'registry auth token'
  }),
  mode: flags.enum({
    char: 'm',
    default: CONNECTION_MODE.PUBLIC,
    options: [CONNECTION_MODE.PUBLIC, CONNECTION_MODE.SSH],
    description: 'Hit API on internet or via SSH connection',
  }),
}

export default options;
