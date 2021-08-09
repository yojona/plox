import Plox = require("..");
import { createService, getService, updateService } from "../api/service";
import { CONNECTION_MODE } from "../options";

export interface IDeployProps {
  user: string | undefined;
  password: string | undefined;
  registry: string | undefined;
  token: string | undefined;
  mode: string;
  name: string;
  image: string;
  api: string | undefined;
}

export const deploy = async (plox: Plox, options: IDeployProps) => {
  if (options.mode === CONNECTION_MODE.SSH) {
    return plox.error('SSH connection is not supported yet.')
  }

  const service = await getService(options)

  if (!service) {
    plox.log(`Service '${options.name}' not found. Creating service '${options.name}'...`)
    return await createService(options)
  }

  plox.log(`Updating service '${options.name}'...`)
  await updateService(service, options)

  return null;
};