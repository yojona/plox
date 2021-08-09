interface IDeployProps {
  user: string | undefined;
  password: string | undefined;
  registry: string | undefined;
  token: string | undefined;
}

export const deploy = async (options: IDeployProps) => {
  console.log('deploying...')
  return null;
};