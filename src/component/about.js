import React from 'react'
import { useState } from 'react'
import FunctionalCounter from './testingComponents/functionalCounter'

function About() {
    return (
        <div style={{textAlign:'center'}}>
            <h2>Functional Component</h2>
            <FunctionalCounter parentName="About"/>
        </div>
    )
}

export default About
