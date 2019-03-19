// src/__test__/components/Link.test.js
import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {UserList} from '../../components/UserList'
import User from '../../components/User'
import React from 'react'




const props = {
    users : [{username: "asasassssss", email: "sasassss", name: "ddang", id: 77},
    {username: "1111", email: "2222", name: "3333", id: 77}],
    pages : [1],
    error:'',
    match : { params : { page : 1}},
    UserList : jest.fn(),
    UserAdd : jest.fn(),
    user_del : jest.fn()
};

const state = {
    username : '',
    email : '',
    name : '',
    error: '', 
    key_search: ''
  }

describe('Components > UserList', () => {
    // Snapshot use renderer
   
    it('Render a snapshot for Link use enzyme', () => {
        window.alert = jest.fn()
        //fake event onChange input
        const event = {
          preventDefault() {},
          target: { value: 'the-value' }
        };
        const tree = shallow(<UserList {...props}/>);
        tree.instance().handleSubmit = jest.fn()
        tree.instance().handleFormChange = jest.fn()
        //kiem tra so User
        expect(tree.find('input')).toHaveLength(4)
        //test input form
        expect(tree.find('input').first().props().placeholder).toEqual('Key search')
        tree.find('input').first().simulate('change', event)
        expect(tree.instance().handleFormChange).toHaveBeenCalledTimes(0)
        expect(tree.find('input').at(1).props().placeholder).toEqual('Enter your username')
        tree.find('input').at(1).simulate('change', event)
        expect(tree.instance().handleFormChange).toHaveBeenCalledTimes(1)
        expect(tree.find('input').at(2).props().placeholder).toEqual('Enter your name')
        tree.find('input').at(2).simulate('change', event)
        expect(tree.instance().handleFormChange).toHaveBeenCalledTimes(2)
        expect(tree.find('input').at(3).props().placeholder).toEqual('Enter your email')
        tree.find('input').at(3).simulate('change', event)
        expect(tree.instance().handleFormChange).toHaveBeenCalledTimes(3)
        //test component User
        expect(tree.find(User)).toHaveLength(2)
        expect(tree.find(User).at(1).props()).toEqual(props.users[1])
        expect(tree.find(User).at(0).props()).toEqual(props.users[0])
        //test table header
        expect(tree.find('th')).toHaveLength(4)
        expect(tree.find('th').at(0).text()).toBe('Username')
        expect(tree.find('th').at(1).text()).toBe('Name')
        expect(tree.find('th').at(2).text()).toBe('Email')
        expect(tree.find('th').at(3).text()).toBe('Options')
        //test handle button
        //test button them user
        tree.find('button.btn-success').simulate('click')
        expect(tree.instance().handleSubmit).toHaveBeenCalledTimes(1);
        //match Snapshot
        expect(shallowToJson(tree)).toMatchSnapshot();
    })
})
