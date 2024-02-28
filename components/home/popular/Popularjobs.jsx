import {useState} from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import {COLORS,icons,images,SIZES} from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hooks/useFetch'
const Popularjobs = () => {
  const router = useRouter();
  const [selectedJob, setSelectedJob] = useState()
  const handleOnPress =(item)=>{
    router.push(`/job-details/${item.job_id}`)
    setSelectedJob(item.job_id)
  }
  const {data,isLoading,error}=useFetch('Search',{query:'React Developer',num_pages:1})
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popular jobs</Text>
      <TouchableOpacity style={styles.headerBtn}><Text>Show all</Text></TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
      {isLoading?(<ActivityIndicator size='large' color={COLORS.primary}/>):error?(<Text>Something Went Wrong</Text>)
        :(
          <FlatList
            data={data}
            renderItem={({item})=>(
              <PopularJobCard 
              item={item}
              handleOnPress={handleOnPress}
              selectedjob={selectedJob}
              />
        )}
            keyExtractor={item=>item?.job_id}
            contentContainerStyle={{columnGap:SIZES.medium}}
            horizontal
          />
        )}
      </View>
    </View>
  )
}

export default Popularjobs