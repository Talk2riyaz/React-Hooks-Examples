import React, {useContext} from 'react'
import { BioData } from "./ComA";

const Comc = ({ name }) => {
    const channelName = useContext(BioData);
    return <h1>Hello c Component   { channelName } </h1>
}

export default Comc

// consumer