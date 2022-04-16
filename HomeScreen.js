import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';

export default function HomeScreen({navigation}) {
  
  return (
    <View >
      <ScrollView>
  {/* .................................................First View start Here ................................................................*/}

        <View>
      <View style={styles.DetailsBlock}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}} >
          <Image 
            source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/Iphone.jpeg')}
            style={styles.profileimage} 
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.txt}>{'First Name'}</Text>
      <Text style={styles.txt1}>{'. Following'}</Text>

      <Text style={styles.txt2}>{'All Details are here...'}</Text>

      <View style={styles.ImageContainer}>
        <Image resizeMode='cover'
          style={{height: 230, width: '100%'}}
          source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/Iphone.jpeg')}
        />
      </View>
      <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
        <TouchableOpacity>
          <Image
           resizeMode='contain'
            style={styles.likeComment}
            source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/like.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          resizeMode='contain'
            style={styles.likeComment} //use justificonent-- space betwwen
            source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/comment.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.likeComment}
            source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/share.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.likeComment}
            source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/send.png')}
          />
        </TouchableOpacity>
      </View>
      </View>


    
      {/* .................................................second View start Here ................................................................*/}





      <View style={{marginTop:10}}>
      <View style={styles.DetailsBlock}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}} >
          <Image
            source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/Iphone.jpeg')}
            style={styles.profileimage} 
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.txt}>{'First Name'}</Text>
      <Text style={styles.txt1}>{'. Following'}</Text>

      <Text style={styles.txt2}>{'All Details are here...'}</Text>

      <View style={styles.ImageContainer}>
        <Image
          style={{height: 230, width: '100%'}}
          source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/Iphone.jpeg')}
        />
      </View>
      <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
        <TouchableOpacity>
          <Image
           resizeMode='contain'
            style={styles.likeComment}
            source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/like.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          resizeMode='contain'
            style={styles.likeComment} //use justificonent-- space betwwen
            source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/comment.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.likeComment}
            source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/share.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.likeComment}
            source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/send.png')}
          />
        </TouchableOpacity>
      </View>
      </View>



       {/* .................................................Third View start Here ................................................................*/}





       <View style={{marginTop:10}}>
      <View style={styles.DetailsBlock}>
        <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}} >
          <Image
            source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/Iphone.jpeg')}
            style={styles.profileimage} 
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.txt}>{'First Name'}</Text>
      <Text style={styles.txt1}>{'. Following'}</Text>

      <Text style={styles.txt2}>{'All Details are here...'}</Text>

      <View style={styles.ImageContainer}>
        <Image
          style={{height: 230, width: '100%'}}
          source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/Iphone.jpeg')}
        />
      </View>
      <View style={{flexDirection: 'row',justifyContent:'space-around'}}>
        <TouchableOpacity>
          <Image
           resizeMode='contain'
            style={styles.likeComment}
            source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/like.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image 
          resizeMode='contain'
            style={styles.likeComment} //use justificonent-- space betwwen
            source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/comment.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.likeComment}
            source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/share.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.likeComment}
            source={require('/Users/appinventiv/Desktop/Proj/src/assests/images/MyProjectImages/send.png')}
          />
        </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    //color: 'blue',
    marginTop: 5,
    marginLeft: 75,
    fontWeight: 'bold',
    //position:'absolute'
  },
  txt1: {
    marginLeft: 155,
    color: 'grey',
    bottom: 16,
  },
  txt2: {
    // marginTop:23,
    marginLeft: 75,
    color: 'grey',
    bottom: 10,
  },
  profileimage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    position: 'absolute',
  },
  DetailsBlock: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 5,

  },
  ImageContainer: {
    marginTop: 30,
  },
  likeComment: {
    height: 20,
    width: 20,
  //  marginLeft: 30,
    marginTop: 16,
    
  },
  DetailsBlock2: {
    flexDirection: 'row',
    marginTop: 50,
  },
});