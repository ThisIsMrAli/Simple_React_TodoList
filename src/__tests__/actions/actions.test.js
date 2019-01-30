import configureStore from 'redux-mock-store';

// Actions to be tested
import * as Actions from '../../store/actions.js';

const mockStore = configureStore();
const store = mockStore();

describe('test_actions', () => {
    beforeEach(() => { // Runs before each test in the suite
        store.clearActions();
    })
    describe("addTodo", () => {
        test('Dispatchs correct action and payload',()=>{
            const expectedActions = {
                'payload': 'a new todo',
                'type': 'ADD_TODO'
            };
            store.dispatch(Actions.addTodo('a new todo'));
            expect(store.getActions()).toEqual(expectedActions);
        })
    })
})