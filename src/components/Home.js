import axios from "axios";
import React, { useContext,  useState }  from "react";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Col, Container, Input, InputGroup, InputGroupAddon, Row } from "reactstrap";
import UserContext from "../Context/UserContext";
import Repos from "./Repos";
import UserCard from "./UserCard";

const Home = () => {

  const [query,setQuery] = useState('');
  const [user,setUser] = useState();
  const context = useContext(UserContext);

  const fetchRepo = async() =>{
    try {
      const {data} = await axios.get(`https://api.github.com/users/${query}`)
      setUser(data)
    } catch (error) {
      toast('unable to find repo',{
        type:'error'
      })
    }
  }   


  if(!context.user?.uid){
    return (<Redirect to="/signup" />)
  }

  return (
    <Container>
      <Row className="mt-3">
        <Col md='5'>
            <InputGroup>
                <Input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="enter user name" />
                <InputGroupAddon addonType="append">
                    <Button onClick={fetchRepo} color="primary">Search</Button>
                </InputGroupAddon>
            </InputGroup>
            {user ? <UserCard user={user} /> : null}
        </Col>
        <Col md='7'>
          {user ? <Repos repos_url={user.repos_url} /> : null}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
