import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    paddingBottom: 33
  },
  button: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1C1C1C'
  },
  subtitle: {
    fontSize: 17
  }
});