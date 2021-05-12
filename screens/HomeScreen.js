import React from 'react';
import {View ,Text,StyleSheet } from 'react-native';
 import {Container,
  PostImg,
  PostText,
  UserInfoText,
  PostTime,
  UserName, Card,UserInfo,UserImg, InteractionWrapper, Interaction} from '../styles/FeedStyles';

 const HomeScreen = () => {

  return (
    
    <Container>
      <Card>
        <UserInfo>
          <UserImg source={require('../assets/users/user-3.jpg') } />
          <UserName>Jenny Done</UserName>
          <PostTime>6 Hours ago </PostTime>
        </UserInfo>
        <PostText>Hello World </PostText>
        <PostImg source={require('../assets/posts/post-img-2.jpg') }/> 
        <InteractionWrapper>
          <Interaction>
            <Text>Give </Text>
          </Interaction>
          </InteractionWrapper>    
      </Card>
    </Container>
    );
  };
  
  export default HomeScreen;
  