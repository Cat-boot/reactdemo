export let defaultState={
    count:0
}
export let counterHooksReducer=((state=defaultState, active)=>{
    switch (active.type) {
        case 'inc':
            return {...state,...active.payload};
        case 'dec':
            return {...state,...active.payload};
        default:
            return state
    }

})