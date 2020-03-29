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

  total: {
    fontSize: 15,
    color: '#737380',
  },

  strong: {
    fontWeight: 'bold'
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 48,
    marginBottom: 16,
    color: '#13131a'
  },

  description: {
    fontSize: 16,
    color: '#737380',
    lineHeight: 24,
  },

  incidentList: {
    marginTop: 32,
  },

  incidentCard: {
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

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    color: '#e02041',
    fontWeight: 'bold',
  },
});