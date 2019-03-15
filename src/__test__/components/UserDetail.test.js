import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import React from 'react'
import {UserDetail}  from '../../components/UserDetail';


const props = { user:{username : 'trandang',
name : 'teko vietnam',
email : 'dang.th@teko.vn',
id: 1}}
describe('Components > User', () => {
    // Snapshot use renderer
   
    it('Render a snapshot for Link use enzyme', () => {
    const tree = shallow(<UserDetail {...props}/>);
        console.log(tree.state())
        // expect(tree.find(User)).to.have.lengthOf(1);
        expect(shallowToJson(tree)).toMatchSnapshot();
    })
})