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
        test('Dispatchs correct action and payload', () => {
            const expectedActions = {
                'payload': 'a new todo',
                'type': 'ADD_TODO'
            };
            store.dispatch(Actions.addTodo('a new todo'));
            expect(store.getActions()).toEqual([expectedActions]);
        })
    })
    // describe("addTodo", () => {
    //     test('Dispatchs correct action and payload', () => {
    //         store.dispatch(Actions.addTodo('a new fucking todo'));
    //         expect(store.getActions()).toMatchSnapshot();
    //     })
    // })

    describe("toggleTodoStatus", () => {
        const expectedActions = {
            'payload': 1,
            'type': 'TOGGLE_TODO_STATUS'
        };
        test('status changes in correct way', () => {
            store.dispatch(Actions.toggleTodoStatus(1));
            expect(store.getActions()).toEqual([expectedActions])
        })
    })

    // describe("toggleTodoStatus", () => {
    //     test('status changes in correct way', () => {
    //         store.dispatch(Actions.toggleTodoStatus(1));
    //         expect(store.getActions()).toMatchSnapshot();
    //     })
    // })
})