// for testing purpouse
// import mixin from '../propsExample'
// const { computed } = mixin
// const globalThis = { vm: {} }
// globalThis.vm['_globalComputed'] = computed

export const mapComputeds = function (computedNames) {
  if (!Array.isArray(computedNames)) {
    throw new Error('Import module must be an Array')
  }

  return computedNames.reduce((acc, elm) => {
    // eslint-disable-next-line
    if (!globalThis.vm['_globalComputed'][elm]) {
      return acc
    }

    acc = {
      ...acc,
      // eslint-disable-next-line
      [elm]: globalThis.vm['_globalComputed'][elm]
    }
    return acc
  }, {})
}

export const mapComputedPlugin = {
  install (Vue, props) {
    // eslint-disable-next-line
    globalThis.vm['_globalComputed'] = props
  }
}
