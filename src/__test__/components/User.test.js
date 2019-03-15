import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import React from 'react'
import { User } from '../../components/User';


const props = { username : 'trandang',
    name : 'teko vietnam',
    email : 'dang.th@teko.vn',
    id: 1}
describe('Components > User', () => {
    // Snapshot use renderer
   
    it('Render a snapshot for Link use enzyme', () => {
    const tree = shallow(<User {...props}/>);
        console.log(tree.state())
        // expect(tree.find(User)).to.have.lengthOf(1);
        expect(shallowToJson(tree)).toMatchSnapshot();
    })
})