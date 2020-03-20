const redux = require('redux')
const createStore = redux.createStore


//define the action.
BUY_CAKE = 'BUY_CAKE'

function buyCake(){
    return{
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

//state of the app: keeps the state of the app
const initialState = {
    numOfCakes: 10
}

//write the reducer
const reducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state, //se crea una copia por si acaso
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

//allowing the main tasks, 1st one already done
const store = createStore(reducer)
//2nd
console.log('Initial state: ',store.getState())
//4th, 1st part
const unsubscribe = store.subscribe(() => console.log('Updated state ',store.getState()))
//3rd
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
//4th, 2nd part
unsubscribe()
