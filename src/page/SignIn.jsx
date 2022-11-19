import React, { useContext, useState } from 'react'
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import firebase from 'firebase/app';
import UserContext from '../Context/UserContext';
import { toast } from 'react-toastify';


const SignIn = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const context = useContext(UserContext)
    const HandleSignIn = (e) =>{
        e.preventDefault();
        console.log("Handle sign in")

        firebase
            .auth()
            .signInWithEmailAndPassword(email,password)
            .then(res =>{
                console.log(res)
                context.setUser({email:res.user.email,uid:res.user.uid})
            })
            .catch(err =>{
                console.log('error message',err)
                toast(err.message,{
                    type:'error'
                })
            })
    }

    return (
        <Container className="text-center">
        <Row>
          <Col lg={6} className="offset-lg-3 mt-5">
            <Card>
              <Form onSubmit={HandleSignIn}>
                <CardHeader className="">SignIn here</CardHeader>
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
                  <Button type="submit" block color="primary">
                    Sign In
                  </Button>
                </CardFooter>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default SignIn;