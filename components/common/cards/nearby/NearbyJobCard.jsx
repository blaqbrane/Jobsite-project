import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from '../../../../utils'
import styles from './nearbyjobcard.style'
import { getTimeDiffrence } from '../../../../getDate/getDate'

const NearbyJobCard = ({item,handleNavigate}) => {

  const {days, hours} = getTimeDiffrence(item.job_posted_at_datetime_utc)
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
          <Image
          source={{uri: checkImageURL(item.employer_logo) ? 
          item.employer_logo : "https://static6.depositphotos.com/1037613/650/i/950/depositphotos_6509200-stock-photo-searching-for-jobs.jpg"
        }}
          resizeMode='contain'
          style={styles.logImage}
          />
          
      </TouchableOpacity>
      
      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.jobType}>
            {item.job_employment_type}
        </Text>
      </View>
      <View>
        <Text style={styles.jobDate}>{days > 2 ? `${days - 1} days ago`: days === 2 ? `${days-1} day ago`: days === 1 ? `${hours} hours ago` : `${hours} hours ago`} </Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard;