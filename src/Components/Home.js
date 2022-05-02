import React, { useState, useEffect } from "react";
import { Table, Container, Button } from "react-bootstrap";


const Home = props => {
     const promplist=[
        "Who would win the smash",
        "Who is the better actor",
    ];
   
    /*const [promplist,changePromplist]=useState();
    useEffect(()=>{
        const getInfo=async()=>{
            let votePrompts= await window.contract.getAllPrompt();
            changePromplist(votePrompts);
        };
        getInfo();
    },[]);*/
    return (
        <Container>
            <Table style={{margin: "5vh"}} striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>List of Polls</th>
                        <th>Go to Poll</th>
                    </tr>
                </thead>
                <tbody>
                    {promplist.map((el, index)=>{
                        return(<tr key={index}>
                            <td>{index+1}</td>
                            <td>{el}</td>
                            <td>
                                <Button onClick={()=>props.changeCandidates(el)}>Go to Poll</Button>
                            </td>
                        </tr>);
                    })}
                </tbody>
            </Table>
        </Container>
    );
};



export default Home;