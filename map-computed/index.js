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
      [elm]: {
        // eslint-disable-next-line
        ...globalThis.vm['_globalComputed'][elm]
      }
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
