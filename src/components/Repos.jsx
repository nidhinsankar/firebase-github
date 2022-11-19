import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { ListGroup, ListGroupItem } from 'reactstrap';


const Repos = ({repos_url}) =>{

    const [repos,setRepos] = useState([])

    const fetchRepos = async() =>{
        try {
            const {data} = await axios.get(repos_url);
            setRepos(data)
        } catch (error) {
            toast('unable to find user',{
                type:'error'
            })
        }
    }

    useEffect(()=>{
        fetchRepos()
    },[repos_url])

    return (
        <ListGroup>
            {repos.map(repo =>(
                <ListGroupItem key={repo.id}>
                    <div className='text-primary'>{repo.name}</div>
                    <div className='text-info'>{repo.visibility}</div>
                    <div className='text-info'>{repo.language}</div>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
}

export default Repos;