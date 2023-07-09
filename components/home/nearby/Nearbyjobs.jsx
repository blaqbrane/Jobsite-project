import React,{useState} from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import { useRouter } from 'expo-router'
import styles from './nearbyjobs.style'
import { COLORS} from '../../../constants';
import useFetch from '../../../hook/useFetch';
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard';

const Nearbyjobs = () => {
  const router = useRouter();
  const{data,isLoading,error,refetch} = useFetch('search', {query:'React developer',num_pages:1 })

    // keep track of first api request
    const [first, setFirst] = useState(true);

    // refecth api data
    const fetch = () => {
      refetch();
      setFirst(false);
    };
  
     
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
            data?.map((item) => (
              <NearbyJobCard item={item} key={`nearby-job${item?.job_id}`} 
              handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
              />
          
            ))
          )
        }
      </View>
    </View>
  )
}

export default Nearbyjobs