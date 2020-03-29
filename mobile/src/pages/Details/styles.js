import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  incidentCard: {
    marginTop: 44,
    borderRadius: 8,
    padding: 24,
    backgroundColor: '#fff',
    marginBottom: 16,
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 15,
    color: '#737380',
    marginBottom: 24,
  },

  contactBox: {
    borderRadius: 8,
    padding: 24,
    backgroundColor: '#fff',
  },  

  contactBoxTitle: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    borderWidth: 0,
    borderRadius: 8,
    height: 50,
    width: '48%',
    backgroundColor: '#e02041',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  actionText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold'
  },
}); 