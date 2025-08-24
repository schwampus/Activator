import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button,  StatusBar} from "react-native";
import { useCallback, useEffect, useState, useMemo,} from 'react';
import { useRoute } from '@react-navigation/native';
import { format } from 'date-fns';



export default function DashboardScreen() {

const route = useRoute();
const { selectedPlan } = route.params;
const { selectedDate } = route.params;
const [workoutData, setWorkoutData] = useState(null);
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [workoutDays,setWorkoutDays] = useState(null);

const [woType, setWoType] = useState('');
const [woDistance, setWoDistance] = useState('');
const [woPace, setWoPace] = useState('');
const [woIntervals, setWoIntervals] = useState('');

{/* using route-params we can see what plan was selected on prev screen */} 

const fetchWorkoutPlan = async (plan) => {
    if (!plan) return;
   setIsLoading(true);
    try {
      let fileName;
      switch (plan) {
        case 'half-marathon - 21 km':
          fileName = 'half-marathon.json';
          break;
        case 'marathon - 42 km':
          fileName = 'marathon.json';
          break;
        case 'ocr - obstacle course run':
          fileName = 'ocr.json';
          break;
        default:
          throw new Error('Invalid plan selected');
      }
  {/* fetch the corresponding file to plan */} 
      const url = `https://www.hampusjerkfelt.com/json/${fileName}`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Failed to fetch ${fileName}: ${response.status}`);
      }

      const data = await response.json();
      setWorkoutData(data);
      setError(null);
      
    } catch (err) {
      setError(err.message);
      setWorkoutData(null);
    } finally {
      setIsLoading(false);
      
    }
  };

{/* add fetched info to screen using variables */} 

useEffect(() => {
    if (workoutData && workoutData.training_plan && workoutData.training_plan[0]) {
      setWorkoutDays(workoutData.training_plan[0].days.length);
      setWoType(workoutData.training_plan[0].days[0].type)
      setWoDistance(workoutData.training_plan[0].days[0].distance_km)
      setWoPace(workoutData.training_plan[0].days[0].pace)
      setWoIntervals(workoutData.training_plan[0].days[0].intervals)
    }
  }, [workoutData]);

  useEffect(() => {
    fetchWorkoutPlan(selectedPlan);
  }, [selectedPlan]);

return (<>
  <View style={styles.wrapper}>
    <View style={styles.container}>
      <Text style={styles.iceTitleLight}>W3LCOM3</Text>
    </View>
    <View style={styles.box}>
       <View>
        <Text style={styles.greyText}>your selected workout plan is: </Text>
       <Text style={styles.iceTitleDark}> {selectedPlan}</Text>
        <Text style ={styles.greyText}>that means you should workout {workoutDays } times a week from now on to be fit enough for your race on: </Text>
        <Text style={styles.boldText}> {format(selectedDate, 'dd MMMM yyyy')}  </Text>
      </View>
      <View style={styles.nextWo}>
     <Text style={styles.greyText}>Your upcoming workout:</Text> 
      <View style={styles.inputRow}>
              <Text style ={styles.label}>type:</Text>
              <Text
                style={styles.input}> {woType}</Text> 
            </View>
            <View style={styles.inputRow}>
              <Text style ={styles.label}>distance:</Text>
              <Text
                style={styles.input}> {woDistance} km</Text> 
            </View>
            <View style={styles.inputRow}>
              <Text style ={styles.label}>pace:</Text>
             <Text
                style={styles.input}> {woPace} </Text> 
           </View>
           <View style={styles.inputRow}>
             <Text style ={styles.label}>intervals:</Text>
             <Text
                style={styles.input}> {woIntervals ? ({woIntervals}) : "no intervals today" } </Text> 
          </View>
         </View> 
      </View>
    </View> 
  </> )
}

const styles = StyleSheet.create({
  wrapper: {
    flex:1,
     backgroundColor: '#1a535c',
  },
  container: {
    alignItems: 'center',
   paddingTop:30,
    },
  box: {
    height:480,
    marginTop:4,
    marginLeft:24,
    marginRight:24,
    paddingTop:10,
    paddingLeft:18,
    paddingRight:18,
    backgroundColor:'#f7fff7',
    alignItems: 'center',
    },
   inputRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin:2,
   },
  label: {
    width:100,
    color: "#22181c",
    fontSize:20,
    fontWeight: 400,
    fontFamily: 'TurretMedium',
  },
  input: {
   
   flex: 1,
   height: 40,
   backgroundColor: "#22181c",
   color:"#f7fff7",
   paddingLeft: 20,
   fontSize:16,
   fontWeight: 200,
   fontFamily: 'TurretMedium',
   alignItems: "",
   justifyContent: 'center',
   textAlign: 'auto'
   },
  planSelector: {
    marginTop:14,
    width: '100%',
    alignItems: "start",
    justifyContent: "flex-start",
  },
  freqSelector: {
    marginTop:8,
    color: '#f7fff7',
    width: '100%',
    alignItems: "center",
    justifyContent: "flex-start",
    
  },
  nextWo: {
    flex:1,
    marginTop:28,
    height:220,
    color: '#f7fff7',
    width: '100%',
    alignItems: "center",
    justifyContent: "flex-start",
    
  },
   planLabel: {
    width:380,
    color: "#22181c",
    fontSize:20,
    fontWeight: 400,
    fontFamily: 'TurretMedium',
  },
   freqLabel: {
    width: '100%',
    color: "#22181c",
    fontSize:20,
    fontWeight: 400,
    fontFamily: 'TurretMedium',
  },
    dateLabel: {
    width: '100%',
    color: "#22181c",
    fontSize:20,
    fontWeight: 400,
    fontFamily: 'TurretMedium',
  },
  radioContainer: {
   backgroundColor: "#22181c",
    borderRadius: 0,
    padding: 12,
    width: '100%',
    height:90,
    alignItems: 'center',
  },
  dateContainer: {
   backgroundColor: "#22181c",
    borderRadius: 0,
    padding: 12,
    width: '100%',
    height:160,
    alignItems: 'center',
  },
  smallTextLight: {
    color: '#f7fff7',
    fontSize:20,
    fontWeight: 400,
    fontFamily: 'TurretMedium',
  },
  iceTitleLight: {
    color: '#f7fff7',
    fontSize:48,
    fontFamily: 'Iceberg',
    textShadowColor:"#22181c",
    textShadowOffset: { width: 2, height: 3 },  
    textShadowRadius: 6
  },
  iceTitleDark: {
    color: "#22181c",
    fontSize:32,
    fontFamily: 'Iceberg',
  
  },
selectedValueText:{
    color: '#f7fff7',
    fontSize:20,
    fontWeight: 400,
    fontFamily: 'TurretMedium',
    justifyContent: 'center'
},
greyText:{
  color: "#505050",
  fontSize: 18,
  fontFamily: 'TurretMedium',
  textAlign: 'center'
},
boldText:{
  color: "#22181c",
  fontSize: 18,
  fontFamily: 'TurretBold',
  textAlign: 'center',
  margin:4
}
})




