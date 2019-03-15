// src/__test__/components/Link.test.js
import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import {UserList} from '../../components/UserList'
import User from '../../components/User'
import React from 'react'
import {configureStore} from '../../store' 

const store = configureStore()

const props = {
    users : [{username: "asasassssss", email: "sasassss", name: "ddang", id: 77},
    {username: "1111", email: "2222", name: "3333", id: 77}],
    pages : [1],
    error:'',
    match : { params : { page : 1}}
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
        const tree = shallow(<UserList {...props}/>);
        console.log(tree.state())
        // expect(tree.find(User)).to.have.lengthOf(1);
        expect(shallowToJson(tree)).toMatchSnapshot();
    })
})



// // src/__test__/components/Link.test.js
// import renderer from 'react-test-renderer';
// import React from 'react';
// import Link from '../../components/Link';



// describe('Components > Link', () => {
//     it('Render a snapshot for Link use renderer', () => {
//         const tree = renderer.create(<Link {...props} />).toJSON();
        
//         expect(tree).toMatchSnapshot();
//     })
// })