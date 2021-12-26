import { useEffect } from 'react';
import moment from 'moment';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'; 
import { useDispatch } from 'react-redux';
 
import { Text, View } from '../components/Themed';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { getStaffs } from '../redux/actionCreators/getStaffs';
import { filterStaffs } from '../redux/actionCreators/filterStaffs';

export default function TabTwoScreen() {
  const dispatch = useDispatch();
  const { staffs, loading, error } = useTypedSelector((state) => state.staffs);

  useEffect(() => {
    async function loadFilterStaffs() {
      console.log("Loading staff list");

      await dispatch(filterStaffs(13,6,20))
    }

    loadFilterStaffs()
  }, [])

  const renderItem = ({ item }) => (
    <TouchableOpacity  > 
      <View style={styles.item}>
        <View>
          <Text style={styles.title}>{item.firstName} {item.lastName}</Text> 
        </View>
        <View>
          <Text style={styles.subtitle}>{item.title}</Text>
          <Text style={styles.subtitle}>Şehir: {item.province}</Text>
          <Text style={styles.subtitle}>Tarih: {moment(item.startDate).format('DD.MM.YYYY')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      style={styles.list}
      data={staffs}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
  },
  list: {
    marginVertical: 8
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    fontSize: 14,
    color: '#cccccc'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 10
  },
});
