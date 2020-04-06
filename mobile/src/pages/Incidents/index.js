import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import logo from '../../assets/logo.png';

import styles from './styles';

function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  const navigation = useNavigation();

  function navigateToDetails() {
    navigation.navigate('Details');
  }

  async function loadIncidents() {
    const response = await api.get('/incidents');

    setIncidents(response.data);
    setTotal(response.headers['x-total-count']);  
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />

        <Text style={styles.total}>
          Total de <Text style={styles.strong}>{total}</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo!</Text>

      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

      <FlatList 
        data={incidents}
        style={styles.incidentList}
        showsVerticalScrollIndicator={false}
        keyExtractor={incident => String(incident.id)}
        renderItem={({item: incident}) => (
          <View style={styles.incidentCard}>
            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency', 
                currency: 'BRL'
              }).format(incident.value)}
            </Text>

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