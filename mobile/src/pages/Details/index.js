import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Feather} from '@expo/vector-icons';

import logo from '../../assets/logo.png';

import styles from './styles';

function Details() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />

        <TouchableOpacity onPress={() => {}}>
          <Feather name="arrow-left" size={16} color="#e82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incidentCard}>
        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>DESCRIÇÃO:</Text>
        <Text style={styles.incidentValue}>
          A cadelinha Jolie foi atropelado na rua Souza e precisa de cuidados médicos.
          A cadelinha Jolie foi atropelado na rua Souza e precisa de cuidados médicos
        </Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={[styles.incidentValue, {marginBottom: 0}]}>R$ 120,00</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.contactBoxTitle}>Salve o dia!</Text>
        <Text style={styles.contactBoxTitle}>Seja o herói desse caso</Text>

        <Text style={[styles.incidentValue, {marginTop: 20}]}>Contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action}><Text style={styles.actionText}>Whatsapp</Text></TouchableOpacity>
          <TouchableOpacity style={styles.action}><Text style={styles.actionText}>E-mail</Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Details;