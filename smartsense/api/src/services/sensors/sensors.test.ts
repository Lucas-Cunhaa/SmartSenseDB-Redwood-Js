import type { Sensor } from '@prisma/client'

import {
  sensors,
  sensor,
  createSensor,
  updateSensor,
  deleteSensor,
} from './sensors'
import type { StandardScenario } from './sensors.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('sensors', () => {
  scenario('returns all sensors', async (scenario: StandardScenario) => {
    const result = await sensors()

    expect(result.length).toEqual(Object.keys(scenario.sensor).length)
  })

  scenario('returns a single sensor', async (scenario: StandardScenario) => {
    const result = await sensor({ id: scenario.sensor.one.id })

    expect(result).toEqual(scenario.sensor.one)
  })

  scenario('creates a sensor', async (scenario: StandardScenario) => {
    const result = await createSensor({
      input: { name: 'String', userId: scenario.sensor.two.userId },
    })

    expect(result.name).toEqual('String')
    expect(result.userId).toEqual(scenario.sensor.two.userId)
  })

  scenario('updates a sensor', async (scenario: StandardScenario) => {
    const original = (await sensor({ id: scenario.sensor.one.id })) as Sensor
    const result = await updateSensor({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a sensor', async (scenario: StandardScenario) => {
    const original = (await deleteSensor({
      id: scenario.sensor.one.id,
    })) as Sensor
    const result = await sensor({ id: original.id })

    expect(result).toEqual(null)
  })
})
