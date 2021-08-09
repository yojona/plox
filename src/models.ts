export type ProtocolConfig = {
  Protocol: 'tcp' | string,
  TargetPort: number,
  PublishedPort: number,
  PublishMode?: 'ingress' | string
}

export type Service = {
  ID: string,
  Version: {
    Index: number
  },
  CreatedAt: string,
  UpdatedAt: string,
  Spec: {
    Name: string,
    Labels?: {
      [key: string]: string
    },
    TaskTemplate: {
      ContainerSpec: {
        Image: string,
        Init?: boolean,
        DNSConfig?: any,
        Isolation?: string,
        Args?: string[],
      },
      Resources: {
        Limits?: any,
        Reservations?: any
      },
      Placement?: any,
      ForceUpdate: number ,
      Runtime?: string
    },
    Mode: {
      Replicated?: {
        Replicas?: number
      }
    },
    UpdateConfig?: {
      Parallelism?: number,
      Delay?: number,
      FailureAction?: 'pause' | 'rollback' | string
      Monitor: number,
      MaxFailureRatio?: number
    },
    RollbackConfig?: {
      Parallelism?: number,
      Delay?: number,
      FailureAction?: 'pause' | 'rollback' | string
      Monitor: number,
      MaxFailureRatio?: number
    },
    EndpointSpec: {
      Mode: 'vip' | string,
      Ports: ProtocolConfig[]
    }
  },
  PreviousSpec?: Service,
  [key: string]: any
}