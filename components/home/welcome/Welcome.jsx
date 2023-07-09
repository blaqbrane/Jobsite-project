import React,{useState} from 'react'
import { View, Text ,FlatList ,TextInput,TouchableOpacity,Image, TextInputComponent} from 'react-native'

import styles from './welcome.style'
import { useRouter } from 'expo-router';
import { icons,SiZES} from '../../../constants'

const jobTypes = ["Full Time", "Part Time", "Contractor","Freelance","Internship"]

const Welcome = ({searchTerm, setSearchTerm,handleClick}) => {
  const[activeJobType, setActiveJobType] = useState("Contractor")
  const router = useRouter()
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Blaqbrane</Text>
        <Text style={styles.welcomeMessage}>Find your dream job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
          style = {styles.searchInput}
          placeholder='What job are you looking for?'
          value={searchTerm}
          onChangeText={(val) => setSearchTerm(val)}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image 
          source={icons.search}
          resizeMode='contain'
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View> 

      <View style ={styles.tabsContainer}>
          <FlatList
          data={jobTypes}
          renderItem={({item}) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)}
            onPress={() => {setActiveJobType(TextInputComponent)
            router.push(`/search/${item}`)
            }}
            
            >
              <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item + 1}
          horizontal
          contentContainerStyle={{columnGap: 16}}
          />
      </View>
    </View>
  )
}

export default Welcome