import { View,Text , ScrollView, SafeAreaView} from 'react-native'
import { useState } from 'react'
import { Stack,useRouter } from 'expo-router'
import { COLORS, SIZES, icons,images } from '../constants'
import { ScreenHeaderBtn,Welcome,Popularjobs,Nearbyjobs } from '../components'
export default Home =() =>{
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('')
  return(
    <SafeAreaView style={{flex:1, backgroundColor:COLORS.lightWhite}}>
      <Stack.Screen
      options={{
        headerStyle:{backgroundColor:'white'},
        headerShadowVisible:false,
        headerLeft: () => (<ScreenHeaderBtn iconUrl ={icons.menu} dimension="60%" />),
        headerRight: () => (<ScreenHeaderBtn iconUrl ={images.profile} dimension="60%" />),
        headerTitleAlign:'center',
        headerTitleStyle:{color:"coral"},
        headerTitle:'RemoteJ',
      }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex:1, padding: SIZES.medium}}>
          <Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm}
          handleClick={() => {
            if(searchTerm){
              router.push(`/search/${searchTerm}`)
            }
          }}
          />
          <Popularjobs/>
          <Nearbyjobs/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}