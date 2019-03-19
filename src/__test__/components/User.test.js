import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import React from 'react'
import { User } from '../../components/User';


const props = { username : 'trandang',
    name : 'teko vietnam',
    email : 'dang.th@teko.vn',
    id: 1,
    user_del: jest.fn()}
describe('Components > User', () => {
    // Snapshot use renderer
   
    it('Render a snapshot for Link use enzyme', () => {
    const tree = shallow(<User {...props}/>);
        expect(tree.find('tr')).toHaveLength(1);
        expect(tree.find('td').at(0).text()).toEqual(props.username)
        expect(tree.find('td').at(1).text()).toEqual(props.name)
        expect(tree.find('td').at(2).text()).toEqual(props.email)
        expect(tree.find('a').at(0).hasClass('btn btn-info')).toEqual(true)
        expect(tree.find('a').at(0).props().href).toEqual('/modify/'+props.id)
        expect(tree.find('button').hasClass('btn btn-danger')).toEqual(true)
        //test handle button
        tree.find('button').simulate('click')
        expect(props.user_del).toHaveBeenCalledTimes(1)
        //test matchSnapShot
        expect(shallowToJson(tree)).toMatchSnapshot();
    })
})