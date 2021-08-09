import fetch from 'node-fetch';
import { IDeployProps } from "../actions/deploy"
import { Service } from '../models';
export const getService = async (props: IDeployProps): Promise<undefined | Service> => {
  const params = new URLSearchParams({
    filters: JSON.stringify({name: [props.name]})
  })

  const request = await fetch(`${props.api}/services?${params}`)
  const services = await request.json()

  if (!services || !services.length) {
    return undefined
  }

  return services[0] as Service
}

export const createService = async (props: IDeployProps) => {
  return null;
}

export const updateService = async (service: Service, props: IDeployProps) => {
  if (!service || !props.image) {
    return undefined
  }

  const spec = { ...service.Spec }
  spec.TaskTemplate.ContainerSpec.Image = props.image

  const { ID, Version: { Index }} = service

  const params = new URLSearchParams({
    version: `${Index}`
  })

  const request = await fetch(`${props.api}/services/${ID}/update?${params}`, {
    method: 'POST',
    body: JSON.stringify(spec)
  })

  const result = await request.json()
  return result;
}