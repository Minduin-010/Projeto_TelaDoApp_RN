// 🐾 Pet Adopt - Componente PetDetail
// Exibe informações detalhadas do pet com ScrollView

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';

const { width } = Dimensions.get('window');

// ============ COMPONENTE PETDETAIL ============

const PetDetail = ({ pet, onBack }) => {
  const [liked, setLiked] = useState(false);

  const handleAdoptPress = () => {
    Alert.alert(
      `Adoção de ${pet.nome}`,
      `Parabéns! Você iniciou o processo de adoção de ${pet.nome}!\n\nEntraremos em contato em breve para completar os detalhes.`,
      [
        {
          text: 'Cancelar',
          onPress: () => {},
        },
        {
          text: 'Confirmar',
          onPress: () =>
            Alert.alert('✓ Solicitação enviada com sucesso!'),
        },
      ]
    );
  };

  const petType = pet.raca.includes('Gato') ? 'Gato' : 'Cachorro';
  const cardColor = petType === 'Gato' ? '#FFB84D' : '#FF6B6B';

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        {/* ===== HEADER COM IMAGEM ===== */}
        <View style={styles.headerContainer}>
          <Image
            source={pet.imagem}
            style={styles.headerImage}
            resizeMode="cover"
          />
          <View
            style={[styles.petTypeBadge, { backgroundColor: cardColor }]}
          >
            <Text style={styles.petTypeText}>{petType}</Text>
          </View>

          {/* ===== BOTÕES HEADER ===== */}
          <View style={styles.headerButtonsRow}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={onBack}
            >
              <Text style={styles.backBtnText}>← Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.likeBtn,
                liked && styles.likeBtnActive,
              ]}
              onPress={() => setLiked(!liked)}
            >
              <Text style={styles.likeBtnText}>
                {liked ? '❤️' : '🤍'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ===== INFORMAÇÕES PRINCIPAIS ===== */}
        <View style={styles.mainInfoSection}>
          <Text style={styles.petTitle}>{pet.nome}</Text>
          <Text style={styles.petSubtitle}>{pet.raca}</Text>

          <View style={styles.infoGrid}>
            <View style={styles.infoGridBox}>
              <Text style={styles.infoGridIcon}>🎂</Text>
              <Text style={styles.infoGridLabel}>Idade</Text>
              <Text style={styles.infoGridValue}>
                {pet.idade} {pet.idade === 1 ? 'ano' : 'anos'}
              </Text>
            </View>

            <View style={styles.infoGridBox}>
              <Text style={styles.infoGridIcon}>⚖️</Text>
              <Text style={styles.infoGridLabel}>Peso</Text>
              <Text style={styles.infoGridValue}>{pet.peso}</Text>
            </View>

            <View style={styles.infoGridBox}>
              <Text style={styles.infoGridIcon}>
                {pet.sexo === 'Macho' ? '♂️' : '♀️'}
              </Text>
              <Text style={styles.infoGridLabel}>Sexo</Text>
              <Text style={styles.infoGridValue}>{pet.sexo}</Text>
            </View>
          </View>
        </View>

        {/* ===== DESCRIÇÃO ===== */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionHeading}>Sobre {pet.nome}</Text>
          <Text style={styles.descriptionText}>{pet.descricao}</Text>
        </View>

        {/* ===== TEMPERAMENTO ===== */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionHeading}>Temperamento</Text>
          <View style={styles.tagsWrapper}>
            {pet.temperamento.split(', ').map((tag, index) => (
              <View key={index} style={styles.temperamentTag}>
                <Text style={styles.temperamentTagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* ===== SAÚDE E CUIDADOS ===== */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionHeading}>Saúde & Cuidados</Text>

          <View style={styles.healthItemsContainer}>
            <View
              style={[
                styles.healthItemBox,
                {
                  backgroundColor: pet.vacinado ? '#D4F4DD' : '#FFD6D6',
                },
              ]}
            >
              <Text style={styles.healthItemIcon}>
                {pet.vacinado ? '✓' : '✗'}
              </Text>
              <View style={styles.healthItemContent}>
                <Text style={styles.healthItemTitle}>Vacinado</Text>
                <Text style={styles.healthItemDescription}>
                  {pet.vacinado
                    ? 'Vacinação em dia'
                    : 'Vacinação pendente'}
                </Text>
              </View>
            </View>

            <View
              style={[
                styles.healthItemBox,
                {
                  backgroundColor: pet.castrado ? '#D4F4DD' : '#FFD6D6',
                },
              ]}
            >
              <Text style={styles.healthItemIcon}>
                {pet.castrado ? '✓' : '✗'}
              </Text>
              <View style={styles.healthItemContent}>
                <Text style={styles.healthItemTitle}>Castrado</Text>
                <Text style={styles.healthItemDescription}>
                  {pet.castrado
                    ? 'Castração realizada'
                    : 'Castração pendente'}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* ===== PRÓXIMOS PASSOS ===== */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionHeading}>Próximos Passos</Text>
          <View style={styles.stepsContainer}>
            <View style={styles.stepItemBox}>
              <Text style={styles.stepItemNumber}>1</Text>
              <Text style={styles.stepItemDescription}>
                Clique em "Quero Adotar" para iniciar o processo
              </Text>
            </View>
            <View style={styles.stepItemBox}>
              <Text style={styles.stepItemNumber}>2</Text>
              <Text style={styles.stepItemDescription}>
                Preencheremos um formulário de pré-adoção
              </Text>
            </View>
            <View style={styles.stepItemBox}>
              <Text style={styles.stepItemNumber}>3</Text>
              <Text style={styles.stepItemDescription}>
                Visitaremos sua casa para verificação
              </Text>
            </View>
            <View style={styles.stepItemBox}>
              <Text style={styles.stepItemNumber}>4</Text>
              <Text style={styles.stepItemDescription}>
                Assinaremos o contrato de adoção
              </Text>
            </View>
            <View style={styles.stepItemBox}>
              <Text style={styles.stepItemNumber}>5</Text>
              <Text style={styles.stepItemDescription}>
                {pet.nome} vai para sua casa! 🎉
              </Text>
            </View>
          </View>
        </View>

        {/* ===== CONTATO ===== */}
        <View style={styles.contentSection}>
          <Text style={styles.sectionHeading}>
            Informações de Contato
          </Text>
          <View style={styles.contactContainer}>
            <Text style={styles.contactItemText}>
              📞 (11) 98765-4321
            </Text>
            <Text style={styles.contactItemText}>
              📧 contato@petadopt.com.br
            </Text>
            <Text style={styles.contactItemText}>
              📍 São Paulo, SP
            </Text>
          </View>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>

      {/* ===== BOTÃO ADOPTAR FIXO ===== */}
      <View style={styles.adoptButtonContainer}>
        <TouchableOpacity
          style={styles.adoptBtn}
          onPress={handleAdoptPress}
        >
          <Text style={styles.adoptBtnText}>
            💚 Quero Adotar {pet.nome}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ============ ESTILOS ============

const styles = StyleSheet.create({
  // ===== CONTAINER =====
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },

  scrollView: {
    flex: 1,
  },

  // ===== HEADER =====
  headerContainer: {
    position: 'relative',
    height: 300,
    backgroundColor: '#F5F5F5',
  },

  headerImage: {
    width: '100%',
    height: '100%',
  },

  petTypeBadge: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },

  petTypeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  // ===== HEADER BUTTONS =====
  headerButtonsRow: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  backBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },

  backBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

  likeBtn: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  likeBtnActive: {
    backgroundColor: 'rgba(255, 107, 107, 0.2)',
  },

  likeBtnText: {
    fontSize: 20,
  },

  // ===== MAIN INFO =====
  mainInfoSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },

  petTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2C3E50',
    marginBottom: 4,
  },

  petSubtitle: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 16,
    fontWeight: '500',
  },

  infoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  infoGridBox: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 4,
  },

  infoGridIcon: {
    fontSize: 24,
    marginBottom: 4,
  },

  infoGridLabel: {
    fontSize: 11,
    color: '#7F8C8D',
    fontWeight: '600',
    marginBottom: 2,
  },

  infoGridValue: {
    fontSize: 12,
    color: '#2C3E50',
    fontWeight: '700',
  },

  // ===== CONTENT SECTION =====
  contentSection: {
    backgroundColor: '#FFFFFF',
    marginVertical: 8,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  sectionHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 12,
  },

  // ===== DESCRIPTION =====
  descriptionText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
    fontWeight: '400',
  },

  // ===== TEMPERAMENT TAGS =====
  tagsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  temperamentTag: {
    backgroundColor: '#FFE5E5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },

  temperamentTagText: {
    fontSize: 12,
    color: '#FF6B6B',
    fontWeight: '600',
  },

  // ===== HEALTH ITEMS =====
  healthItemsContainer: {
    gap: 10,
  },

  healthItemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 12,
  },

  healthItemIcon: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  healthItemContent: {
    flex: 1,
  },

  healthItemTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 2,
  },

  healthItemDescription: {
    fontSize: 12,
    color: '#666',
  },

  // ===== STEPS =====
  stepsContainer: {
    gap: 10,
  },

  stepItemBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },

  stepItemNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFE5E5',
    color: '#FF6B6B',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 32,
    flexShrink: 0,
  },

  stepItemDescription: {
    flex: 1,
    fontSize: 13,
    color: '#555',
    lineHeight: 20,
    paddingTop: 6,
  },

  // ===== CONTACT =====
  contactContainer: {
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
  },

  contactItemText: {
    fontSize: 13,
    color: '#2C3E50',
    fontWeight: '500',
  },

  // ===== ADOPT BUTTON =====
  adoptButtonContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
  },

  adoptBtn: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  adoptBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});

export default PetDetail;