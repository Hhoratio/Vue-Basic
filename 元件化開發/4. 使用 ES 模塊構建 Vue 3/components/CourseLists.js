// import courses from '../data/courses.js'

export default {
    // data() {
    //     return {
    //         courses
    //     }
    // },
    props: ['data'],
    template: `<div>{{data.title}} - {{data.content}}</div>`
}