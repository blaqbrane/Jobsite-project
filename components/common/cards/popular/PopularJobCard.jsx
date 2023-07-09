import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { checkImageURL } from '../../../../utils'
import { getTimeDiffrence } from '../../../../getDate/getDate'

import styles from './popularjobcard.style'

const PopularJobCard = ({item,selectedJob,handleCardPress}) => {
  const {days, hours} = getTimeDiffrence(item.job_posted_at_datetime_utc)
  console.log(item.employer_logo)
  return (
    <TouchableOpacity style={styles.container(selectedJob,item)} onPress={() => handleCardPress(item)}>
      <TouchableOpacity style={styles.logoContainer(selectedJob,item)}>
          <Image
          source={{uri: checkImageURL(item.employer_logo) ? 
          item.employer_logo : "https://static6.depositphotos.com/1037613/650/i/950/depositphotos_6509200-stock-photo-searching-for-jobs.jpg"
        }}
          resizeMode='contain'
          style={styles.logoImage}
          />
          
      </TouchableOpacity>
      <Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob,item)} numberOfLines={1}>
          {item.job_title}
        </Text>
        <Text style={styles.location}>
            {item.job_country}/ {days > 2 ? `${days - 1} days ago`: days === 2 ? `${days-1} day ago`: days === 1 ? `${hours} hours ago` : `${hours} hours ago`}
        </Text>
      </View>

    </TouchableOpacity>
  )
}

export default PopularJobCard