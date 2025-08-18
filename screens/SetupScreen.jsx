import {View, Text, StyleSheet, TextInput, TouchableOpacity, Button, useColorScheme, StatusBar} from "react-native";
import { useCallback, useEffect, useState, useMemo,} from 'react';
import { SelectList } from 'react-native-dropdown-select-list'
import { SquareArrowDown } from 'lucide-react';
import RadioGroup from 'react-native-radio-buttons-group';




import {
  useNavigation,
  createStaticNavigation,
  DefaultTheme,
  useTheme,
} from '@react-navigation/native';




export default function SetupScreen() {
   
  const [name, onChangeName] = useState('');
  const [age, onChangeAge] = useState('');
  const [height, onChangeHeight] = useState('');
  const [weight, onChangeWeight] = useState('');



  const workoutPlans = [
    { key: '1', value: 'half-marathon - 21 km' },
    { key: '2', value: 'marathon - 42 km' },
    { key: '3', value: 'ocr - obstacle course run' },
  ];

  const [selectedplan, setSelectedplan] = useState("");

  const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'never',
            value: 'option1'
        },
        {
            id: '2',
            label: 'once a week',
            value: 'option2'
        },
        {
            id: '3',
            label: 'twice a week',
            value: 'option3'
        },
        {
            id: '4',
            label: '3 times a week',
            value: 'option4'
        },
        {
            id: '5',
            label: '5 times a week',
            value: 'option5'
        }
    ]), []);

    const [selectedId, setSelectedId] = useState();

return (<>
  <View style={styles.wrapper}>
    <View style={styles.container}>
      <Text style={styles.setupTitle}>US3R S3TUP</Text>
    </View>
    <View style={styles.box}>
      {/* Input fields for users personal info */}
      <View style={styles.inputRow}>
        <Text style ={styles.label}>name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
          placeholder="insert your name"
          placeholderTextColor="#505050" /> 
      </View>
      <View style={styles.inputRow}>
        <Text style ={styles.label}>age:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeAge}
          value={age}
          keyboardType="numeric"
          placeholder="insert your age"
          placeholderTextColor="#505050" />
      </View>
      <View style={styles.inputRow}>
        <Text style ={styles.label}>height:</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeHeight}
          value={height}
          keyboardType="numeric"
          placeholder="insert your height"
          placeholderTextColor="#505050"/>
     </View>
     <View style={styles.inputRow}>
       <Text style ={styles.label}>weight:</Text>
       <TextInput
          style={styles.input}
          onChangeText={onChangeWeight}
          value={weight}
          keyboardType="numeric"
          placeholder="insert your weight"
          placeholderTextColor="#505050"/>
    </View>
 {/* Dropdown selector for user to choose training plan */}
    <View style={styles.planSelector}>
        <Text style ={styles.planLabel}>select your training plan:</Text>
         <SelectList
         boxStyles={{borderRadius:0, backgroundColor: "#22181c", }}
         inputStyles={{color: "#f7fff7", fontSize:20,}}
           arrowicon={<Text style={{ color: "#505050", fontSize: 16 }}>▼</Text>}
           dropdownStyles={{borderRadius:0, backgroundColor: "#22181c",margin:0 }}
           dropdownTextStyles={{ color: "#505050", fontSize: 16 }}
          setSelected={setSelectedplan}
          data={workoutPlans}
          save="value"
          placeholder="premade plans"
          search={false} 
          fontFamily='TurretMedium'
        />

    </View>
    {/* radio selector for user to choose workout freq */}
  <View style={styles.freqSelector}>
          <Text style={styles.freqLabel}>how often do you workout now?</Text>
          <View style={styles.radioContainer}>
            <View style={styles.radioGroupRow}>
              {radioButtons.map((btn) => (
                <View key={btn.id} style={styles.radioOption}>
                  <TouchableOpacity
                    style={[
                      styles.radioCircle,
                      selectedId === btn.id && styles.radioCircleSelected,
                    ]}
                    onPress={() => setSelectedId(btn.id)}
                  />
                  
                </View>
              ))}
            </View>
           <Text style={styles.selectedValueText}>
         {radioButtons.find(btn => btn.id === selectedId)?.label || 'none'}
        </Text>
          </View>
        </View>
    {/* calender date selector */}
  <View style={styles.dateSelector}>
          <Text style={styles.dateLabel}>when is your deadline?</Text>
          <View style={styles.dateContainer}>
           
           
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
    },
  box: {
    marginTop:4,
    marginLeft:24,
    marginRight:24,
    padding:18,
    height:640,
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
   alignItems: "center",
   },
  planSelector: {
    marginTop:14,
    width: '100%',
    alignItems: "start",
    justifyContent: "flex-start",
  },
  freqSelector: {
    flex:1,
    marginTop:8,
    height:200,
    color: '#f7fff7',
    width: '100%',
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dateSelector: {
    flex:1,
    marginTop:28,
    height:20,
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
    height:180,
    alignItems: 'center',
  },
  smallTextLight: {
    color: '#f7fff7',
    fontSize:20,
    fontWeight: 400,
    fontFamily: 'TurretMedium',
  },
  setupTitle: {
    color: '#f7fff7',
    fontSize:48,
    fontFamily: 'Iceberg',
    textShadowColor:"#22181c",
    textShadowOffset: { width: 2, height: 3 },  
    textShadowRadius: 6
  },
radioGroupRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 2,
  width: '100%',
  paddingTop:2,
  paddingBottom:12,
  alignItems: 'center',
},
radioOption: {
  alignItems: 'center',
  marginHorizontal: 10,
},
radioCircle: {
  width: 24,
  height: 24,
  borderRadius: 12,
  borderWidth: 2,
  borderColor: '#f7fff7',
  backgroundColor: 'transparent',
},

radioCircleSelected: {
  backgroundColor: '#8d8c8a',
},
radioLabel: {
  marginTop: 4,
  color: '#f7fff7',
  fontSize: 14,
  fontFamily: 'TurretMedium',
},
selectedValueText:{
    color: '#f7fff7',
    fontSize:20,
    fontWeight: 400,
    fontFamily: 'TurretMedium',
    justifyContent: 'center'
},
})




