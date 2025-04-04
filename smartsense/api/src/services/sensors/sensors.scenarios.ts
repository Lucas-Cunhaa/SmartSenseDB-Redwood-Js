import type { Prisma, Sensor } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.SensorCreateArgs>({
  sensor: {
    one: {
      data: {
        name: 'String',
        owner: {
          create: {
            email: 'String2587244',
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
            email: 'String8454943',
            name: 'String',
            password: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Sensor, 'sensor'>
