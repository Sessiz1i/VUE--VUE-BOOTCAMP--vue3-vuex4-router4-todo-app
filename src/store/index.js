import {createStore} from 'vuex'
import todo from "@/router/todoModule"
export default createStore({
    modules: {
        todo
    }
})
