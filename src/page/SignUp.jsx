import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'
import firebase from 'firebase/app'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { toast } from 'react-toastify'

const SignUp = () =>{

    const {setUser} = useContext(UserContext)
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const HandleSignUp = (e) =>{
      e.preventDefault();
      console.log(email,password)

        firebase
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .then(res=>{
            console.log(res)
            setUser({email:res.user.email,uid:res.user.uid})
            console.log()
        })
        .catch(err =>{
            console.log('it is error')
            toast(err.message,{
              type:'error',      
            })
        })
    }

    return (
      <Container className="text-center">
        <Row>
          <Col lg={6} className="offset-lg-3 mt-5">
            <Card>
              <Form>
                <CardHeader className="">Signup here</CardHeader>
                <CardBody>
                  <FormGroup row>
                    <Label for="email" sm={3}>
                      Email
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="provide your email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="password" sm={3}>
                      Password
                    </Label>
                    <Col sm={9}>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="your password here"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                      />
                    </Col>
                  </FormGroup>
                </CardBody>
                <CardFooter>
                  <Button onClick={(e)=> HandleSignUp(e)} block color="primary">
                    Sign Up
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default SignUp