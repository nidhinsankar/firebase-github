import React from 'react'
import { Card , CardBody} from 'reactstrap';

const UserCard = ({user}) =>{

    return (
        <Card className='text-primary mt-3 mb-4'>
            <img src={user.avatar_url} alt={user.login} className='img-thumbnail' />
            <CardBody>
                <div className='text-primary'>{user.name}</div>
                <div className='text-primary'>{user.location}</div>
                <div className='text-primary'>{user.bio}</div>
                <div className='text-info'>followers :{user.followers}</div>
                <div className='text-info'>for hiring :{user.hireable ? "Yes" : "Nope"}</div>
            </CardBody>
        </Card>
    );
}

export default UserCard;