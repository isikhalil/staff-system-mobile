import moment from 'moment';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';

import { Text, View } from '../components/Themed';
import { useTypedSelector } from '../hooks/useTypeSelector';
import { getStaffs } from '../redux/actionCreators/getStaffs';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const dispatch = useDispatch();
  const [postId, setPostID] = useState("");
  const { staffs, loading, error } = useTypedSelector((state) => state.staffs);

  useEffect(() => {
    async function loadStaffs() {
      console.log("Loading staff list");

      await dispatch(getStaffs())
    }

    loadStaffs()
  }, [])

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.push('Modal', item)}>
      <View style={styles.item}>
        <View>
          <Text style={styles.title}>{item.firstName} {item.lastName}</Text>
          <Text style={styles.subtitle}>{moment(item.birthDate).format('DD.MM.YYYY')}</Text>
        </View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.department}</Text>
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
