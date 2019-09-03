# map-computeds
A lib to generate on-demand computed for VueJs components

Why should I use this lib? 
* It helps to make your computeds from mixins more explict, easier to mantain and you just import what you want :)

How to use it ?

First, you need to create an file to be your source, with the computeds you want to insert

```
export default {
    computed: {
        takeWidth () {
          let splittedWidth = this.width.split('')
          if (splittedWidth.indexOf('%') !== -1) {
            return { width: `${this.width}` }
          }
          return { width: `${this.width}px` }
        },
        takeHeight () {
          let splittedHeight = this.height.split('')
          if (splittedHeight.indexOf('%') !== -1) {
            return { height: `${this.height}` }
          }
          return { height: `${this.height}px` }
        },
        takeFontSize () {
          return { fontSize: `${this.fontSize}px` }
        },
        takeFontColor () {
          return { color: `${this.fontColor}` }
        },
        takeBackgroundColor () {
          return { backgroundColor: `${this.backgroundColor}` }
        },
        takeBorderRadius () {
          return { borderRadius: `${this.borderRadius}` }
        },
        takeBorderStyle () {
          return { borderStyle: `${this.borderStyle}` }
        },
        takeBorderColor () {
          return { borderColor: `${this.borderColor}` }
        },
        takePadding () {
          return { padding: `${this.padding}` }
        },
        takePositionAbsolute () {
          if (!this.isPositionAbsolute) {
            return {}
          }
          return {
            top: `${this.top}`,
            left: `${this.left}`
          }
    }
  }
}
```
then, you need to import it on main.js and register the lib plugin like that
```
import { mapComputedPlugin } from 'map-computeds'

const { props, computed } = mixin
Vue.use(mapComputedPlugin, computed)
```

Finally, just use it inside your component !!!
```
computed: {
    ...mapComputeds(['takeWidth', 'takeHeight'])
 }
```

To upgrade this lib to it's full potencial, consider using map-props :)
https://github.com/gabrielrizzo/map-prop
