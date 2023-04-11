const ReducerDetail =(state,action)=>{
    switch(action.type){
        case "ADD":
        return {
            ...state, counter: state.counter+1
        }
        case "SUBTRACT":
        return {
            ...state, counter: state.counter-1
        }
        case "RESET":
            return{
                ...state, counter:0
            }
    }
   
}
export default ReducerDetail;