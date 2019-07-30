import { mapComputeds } from '../map-computeds'
import mixin from '../propsExample'
const { computed } = mixin
global.globalThis = { vm: {} }
global.globalThis.vm['_globalComputed'] = computed
const takeWidth = computed.takeWidth
const takeHeight = computed.takeHeight

test('test if function returns a valid value', () => {
  expect(mapComputeds(['takeWidth', 'takeHeight'])).toMatchObject({
    takeWidth: takeWidth,
    takeHeight: takeHeight
  })
})
