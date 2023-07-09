import React from 'react'
import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import { COLORS,SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch';
const Popularjobs = () => {
  const router = useRouter();
  const{data,isLoading,error,refetch} = useFetch('search', {query:'Python',num_pages:1 })

    // keep track of first api request
    const [first, setFirst] = useState(true);

    // refecth api data
    const fetch = () => {
      refetch();
      setFirst(false);
    };
  
    // keep track of current selected job
    const [selectedJob, setSelectedJob] = useState("");
  
    // handle job card press
    const handleCardPress = (item) => {
      // redirect to job-details route
      router.push(`/job-details/${item.job_id}`);
      // set selected job
      setSelectedJob(item.job_id);
    };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity >
          <Text style={styles.headerBtn}>
              Show all
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {
          isLoading ? (
            <ActivityIndicator size='large' colors={COLORS.primary}/>
          ): error ? (
            first ? (
              // refetch data
              fetch()
            ) :(
            <Text>Something went wrong</Text>
            )
          ):(
            <FlatList
            data={data}
            renderItem={({item}) => (
            <PopularJobCard item={item} selectedJob={selectedJob}
            handleCardPress={handleCardPress}/>
            )}
           keyExtractor={item => item?.job_id}
           contentContainerStyle={{columnGap:SIZES.medium}}
           horizontal
            />
          )
        }
      </View>
    </View>
  )
}

export default Popularjobs