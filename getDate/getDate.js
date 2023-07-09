
import moment from 'moment';

 export const getTimeDiffrence = (dataPosted) =>{
  const currentDate = moment()
  const postedDate = moment(dataPosted)
  const duration = moment.duration(currentDate.diff(postedDate));
  const days = Math.ceil(duration.asDays())
  const hours = Math.ceil(duration.asHours());
  return{
    days,hours
  }
}