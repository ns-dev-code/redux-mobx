const {
    createStore,
    combineReducers,
    compose,
    bindActionCreators,
    applyMiddleware
} = require('redux')


const makeLouder = string => string.toUpperCase();
const repeatThreeTimes = string => string.repeat(3);
const embolden = string => string.bold();

const makeLouderAndBoldAndRepeatThreeTimes = compose(
    embolden, repeatThreeTimes, makeLouder
)
console.log(makeLouderAndBoldAndRepeatThreeTimes('hello'));

const reducer = (state, action) => {
    return state;
}

const store = createStore(reducer);

console.log(store)