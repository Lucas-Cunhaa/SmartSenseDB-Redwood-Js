import type { Prisma, Sensor } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SensorCreateArgs>({
  sensor: {
    one: {
      data: {
        name: 'String',
        owner: {
          create: {
            email: 'String7479278',
            name: 'String',
            password: 'String',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        owner: {
          create: {
            email: 'String9810991',
            name: 'String',
            password: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Sensor, 'sensor'>
