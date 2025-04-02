import type { Prisma, User } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: { email: 'String9625635', name: 'String', password: 'String' },
    },
    two: {
      data: { email: 'String8588272', name: 'String', password: 'String' },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
