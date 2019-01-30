import reducer from '../../store/reducer/';
import { Types } from '../../store/actions'

describe('test_reducers', () => {
    describe("Initial_State", () => {
        test('should be Empty', () => {
            const action = { type: 'dummy_action' };
            const initialState = [];
            expect(reducer(undefined, action)).toEqual(initialState);
        })
    })
    describe("ADD_TODO", () => {
        test('shoud add a new todo when empty', () => {
            const action = {
                type: Types.ADD_TODO,
                payload: 'i go to school tomorrow'
            }
            const expectState = [
                { id: 0, text: 'i go to school tomorrow', compeleted: false }
            ];
            expect(reducer(undefined,action)).toEqual(expectState);
        })
        test('shoud add a new todo when not empty', () => {
            const action = {
                type: Types.ADD_TODO,
                payload: 'i go to work'
            }
            const expectState = [
                { id: 0, text: 'i go to school tomorrow', compeleted: true },
                { id: 1, text: 'i go to work', compeleted: false },
            ];
            expect(reducer([{ id: 0, text: 'i go to school tomorrow', compeleted: true }],action)).toEqual(expectState);
        })
    })
})
