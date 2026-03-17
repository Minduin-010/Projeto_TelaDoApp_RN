// 🐾 Pet Adopt - Componente PetCard
// Exibe informações resumidas do pet em um card atraente

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

// ============ COMPONENTE PETCARD ============

const PetCard = ({ pet, onPress }) => {
  const petType = pet.raca.includes('Gato') ? 'Gato' : 'Cachorro';
  const cardColor = petType === 'Gato' ? '#FFB84D' : '#FF6B6B';

  return (
    <TouchableOpacity
      style={[styles.card, { borderLeftColor: cardColor }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      {/* ===== IMAGEM DO PET ===== */}
      <View style={styles.cardImage}>
        <Image
          source={pet.imagem}
          style={styles.image}
          defaultSource={require('../assets/foto6.jpg')}
        />
        <View style={[styles.typeBadge, { backgroundColor: cardColor }]}>
          <Text style={styles.typeBadgeText}>{petType}</Text>
        </View>
      </View>

      {/* ===== CONTEÚDO DO CARD ===== */}
      <View style={styles.cardContent}>
        <Text style={styles.petName} numberOfLines={1}>
          {pet.nome}
        </Text>

        <Text style={styles.petRace} numberOfLines={1}>
          {pet.raca}
        </Text>

        <View style={styles.petInfoRow}>
          <Text style={styles.petAge}>
            🎂 {pet.idade} {pet.idade === 1 ? 'ano' : 'anos'}
          </Text>
          <Text style={styles.petGender}>
            {pet.sexo === 'Macho' ? '♂ Macho' : '♀ Fêmea'}
          </Text>
        </View>

        <View style={styles.petVaccineRow}>
          <View
            style={[
              styles.vaccineBadge,
              {
                backgroundColor: pet.vacinado ? '#D4F4DD' : '#FFD6D6',
              },
            ]}
          >
            <Text style={styles.vaccineText}>
              {pet.vacinado ? '✓ Vacinado' : '✗ Não vacinado'}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.detailsButtonText}>Ver Detalhes →</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

// ============ ESTILOS ============

const styles = StyleSheet.create({
  // ===== CARD PRINCIPAL =====
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
    borderLeftWidth: 4,
  },

  // ===== IMAGEM =====
  cardImage: {
    position: 'relative',
    width: 120,
    height: 140,
  },

  image: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
  },

  typeBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  typeBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  // ===== CONTEÚDO =====
  cardContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },

  petName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 2,
  },

  petRace: {
    fontSize: 12,
    color: '#7F8C8D',
    marginBottom: 8,
    fontWeight: '500',
  },

  // ===== INFORMAÇÕES =====
  petInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  petAge: {
    fontSize: 11,
    color: '#555',
    fontWeight: '600',
  },

  petGender: {
    fontSize: 11,
    color: '#555',
    fontWeight: '600',
  },

  // ===== STATUS VACINAÇÃO =====
  petVaccineRow: {
    marginBottom: 8,
  },

  vaccineBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },

  vaccineText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#333',
  },

  // ===== BOTÃO =====
  detailsButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  detailsButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },
});

export default PetCard;