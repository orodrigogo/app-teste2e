import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFF'
  },
  options: {
    width: 200,
    backgroundColor: '#F7F7F7',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 25
  },
  details: {
    color: '#8C8C8C',
    textAlign: 'center',
    fontSize: 12,
    marginTop: 22
  },
  confirmation: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12,
    color: '#0085FF',
    marginBottom: 12
  }
});