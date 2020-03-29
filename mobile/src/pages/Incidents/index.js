import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import logo from '../../assets/logo.png';

import styles from './styles';

function Incidents() {
  const navigation = useNavigation();

  function navigateToDetails() {
    navigation.navigate('Details');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />

        <Text style={styles.total}>
          Total de <Text style={styles.strong}>0 casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo!</Text>

      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

      <FlatList 
        data={[1, 2, 3]}
        style={styles.incidentList}
        showsVerticalScrollIndicator={false}
        keyExtractor={incident => String(incident)}
        renderItem={() => (
          <View style={styles.incidentCard}>
            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>R$ 120,00</Text>

            <TouchableOpacity 
              style={styles.detailsButton}
              onPress={navigateToDetails}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default Incidents;