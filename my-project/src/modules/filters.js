import Vue  from 'vue'

Vue.filter('math',function(value){

    var num = (value/100)
    var value = num.toFixed(2)
    return value
})