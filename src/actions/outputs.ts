export default {
  invalidCommand: (command: string) => `plox: '${command}' is not a plox command. See 'plox --help.`,
  notFound: (name: string) => `plox: Service or container '${name}' not found.`
}
