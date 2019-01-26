import day from 'dayjs'

export default Vue => {
    Vue.filter('format_time',(val)=>{
        day(val).format('YYYY-MM-DD HH:mm:ss')
    })
}