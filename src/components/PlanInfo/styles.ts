import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  planInfo: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    paddingBottom: 33,
  },
  plan: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 14,
    marginTop: 34
  },
  price: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  value: {
    fontWeight: 'bold',
    color: '#1C1C1C',
    fontSize: 32
  },
  recurrence: {
    marginBottom: 7,
    color: '#585656'
  },
  note: {
    color: '#8C8C8C',
    fontSize: 12
  },
});