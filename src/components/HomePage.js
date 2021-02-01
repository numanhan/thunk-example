import React from 'react'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import {connect} from 'react-redux';
//actionlar import 
import {fetchUsers} from '../actions/users';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
 
function HomePage(props)  {
    
    const {users, fetchUsers} = props
    console.log(users)
    return (
        <>
        <Grid
        container
        direction='row'
        justify='space-evenly'
        alignItems='center'
        style={{
            position:'absolute',
            top:'40%'
        }}
        >
            {users.map((item)=>
           <Card key={item.id} style={{marginTop:"10px"}}>
           <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Name:{item.name}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                    Price:{item.id}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                    Phone:{item.phone}
                </Typography>
           
           
           </CardContent>
           <CardActions>
               <Button size="small" >-</Button>
             <Button size="small">Add To Wishlist</Button>
             <Button size="small">+</Button>
           </CardActions>
         </Card>
            )}
            <Grid container item xs={12} direction="row" justify="center" style={{padding:"5em"}}>
                <Button variant='contained' onClick={fetchUsers }>List Products</Button>

            </Grid>
        </Grid>
        
        </>
        
    )
}

const mapStateToProps= (state) => ({
    users: state.users.listOfUsers,
})


const mapDispatchToProps = {
    fetchUsers

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage)

