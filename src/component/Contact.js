import React,{Component} from 'react';
import ClassCounter from './testingComponents/classCounter';

class Contact extends Component{
    render(){
        return(
            <div style={{textAlign:'center'}}>
            <h2>class Component</h2>
            <ClassCounter parentName="Contact"/>
            </div>
        );
    }
}
export default Contact;