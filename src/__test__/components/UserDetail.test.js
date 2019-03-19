import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import React from 'react'
import {UserDetail}  from '../../components/UserDetail';


const props = { user:
    {
        username : 'trandang',
        name : 'teko vietnam',
        email : 'dang.th@teko.vn',
        id: 1
    },
    match : { params : { page : 1}},
    UserDetail: jest.fn(),
    ChangeDetail: jest.fn(),
}
describe('Components > User', () => {
    //fake event onChange input
    const event = {
        preventDefault() {},
        target: { value: 'the-value' }
      };
    // Snapshot use renderer
    
    it('Render a snapshot for Link use enzyme', () => {
    const tree = shallow(<UserDetail {...props}/>);
    let mockFn = jest.fn()
    tree.instance().handleFormChange = mockFn
        expect(tree.find('div.card-header').text()).toEqual('Cập nhật thông tin nhân viên '+props.user.username)
        //test input form
        expect(tree.find('input').at(0).props().placeholder).toEqual(props.user.email)
        tree.find('input').at(0).simulate('change', event)
        expect(mockFn).toHaveBeenCalledTimes(0)
        expect(tree.find('input').at(1).props().placeholder).toEqual(props.user.name)
        tree.find('input').at(1).simulate('change', event)
        expect(mockFn).toHaveBeenCalledTimes(1)
        //test class button
        expect(tree.find('button').hasClass('btn btn-sm btn-primary')).toEqual(true)
        //test button click
        tree.find('button').simulate('click')
        expect(props.ChangeDetail).toHaveBeenCalledTimes(1)
        expect(shallowToJson(tree)).toMatchSnapshot();
    })
})