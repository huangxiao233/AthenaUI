declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}
// Since *.vue files only export object-format components in v3, you can use ComponentOptions instead Component (the latter is a union type which includes FunctionalComponent