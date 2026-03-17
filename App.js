// 🐾 Pet Adopt - Aplicação React Native
// App.js - Arquivo principal com tudo integrado

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';

const { width } = Dimensions.get('window');

// ============ DADOS DOS PETS ============

const PETS_DATA = [
  {
    id: '1',
    nome: 'Max',
    raca: 'Golden Retriever',
    idade: 2,
    descricao:
      'Amigável e energético, adora brincar e passear. Perfeito para famílias!',
    imagem: require('./assets/foto1.jpg'),
    temperamento: 'Alegre, Sociável',
    peso: '30 kg',
    sexo: 'Macho',
    vacinado: true,
    castrado: true,
  },
  {
    id: '2',
    nome: 'Luna',
    raca: 'Gato Persa',
    idade: 3,
    descricao:
      'Gata tranquila e carinhosa, gosta de dormir em lugares aconchegantes.',
    imagem: require('./assets/foto2.jpg'),
    temperamento: 'Tranquilo, Carinhoso',
    peso: '4 kg',
    sexo: 'Fêmea',
    vacinado: true,
    castrado: true,
  },
  {
    id: '3',
    nome: 'Charlie',
    raca: 'Labrador Chocolate',
    idade: 1,
    descricao:
      'Filhote dócil e cheio de energia. Precisa de treinamento básico.',
    imagem: require('./assets/foto3.jpg'),
    temperamento: 'Dócil, Energia',
    peso: '28 kg',
    sexo: 'Macho',
    vacinado: true,
    castrado: false,
  },
  {
    id: '4',
    nome: 'Bella',
    raca: 'Gato Siamês',
    idade: 2,
    descricao: 'Gata elegante e inteligente. Adora interagir com seus donos.',
    imagem: require('./assets/foto4.jpg'),
    temperamento: 'Inteligente, Brincalhão',
    peso: '3.5 kg',
    sexo: 'Fêmea',
    vacinado: true,
    castrado: true,
  },
  {
    id: '5',
    nome: 'Rex',
    raca: 'Pastor Alemão',
    idade: 4,
    descricao: 'Protetor e leal. Ideal para quem busca um companheiro confiável.',
    imagem: require('./assets/foto5.jpg'),
    temperamento: 'Leal, Protetor',
    peso: '35 kg',
    sexo: 'Macho',
    vacinado: true,
    castrado: true,
  },
  {
    id: '6',
    nome: 'Mimi',
    raca: 'Gato Vira-Lata',
    idade: 1,
    descricao: 'Filhota brincalhona e curiosa. Pura energia e alegria!',
    imagem: require('./assets/foto6.jpg'),
    temperamento: 'Brincalhão, Curioso',
    peso: '3 kg',
    sexo: 'Fêmea',
    vacinado: true,
    castrado: false,
  },
];

// ============ COMPONENTE: PetCard ============

const PetCard = ({ pet, onPress }) => {
  const petType = pet.raca.includes('Gato') ? 'Gato' : 'Cachorro';
  const cardColor = petType === 'Gato' ? '#FFB84D' : '#FF6B6B';

  return (
    <TouchableOpacity
      style={[styles.petCard, { borderLeftColor: cardColor }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.petCardImage}>
        <Image source={pet.imagem} style={styles.petImage} />
        <View style={[styles.petBadge, { backgroundColor: cardColor }]}>
          <Text style={styles.petBadgeText}>{petType}</Text>
        </View>
      </View>

      <View style={styles.petCardContent}>
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

        <View style={styles.petVaccineStatus}>
          <View
            style={[
              styles.petStatusBadge,
              {
                backgroundColor: pet.vacinado ? '#D4F4DD' : '#FFD6D6',
              },
            ]}
          >
            <Text style={styles.petStatusText}>
              {pet.vacinado ? '✓ Vacinado' : '✗ Não vacinado'}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.petButton}>
          <Text style={styles.petButtonText}>Ver Detalhes →</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

// ============ COMPONENTE: PetDetail ============

const PetDetail = ({ pet, onBack }) => {
  const [liked, setLiked] = useState(false);
  const petType = pet.raca.includes('Gato') ? 'Gato' : 'Cachorro';
  const cardColor = petType === 'Gato' ? '#FFB84D' : '#FF6B6B';

  return (
    <View style={styles.detailContainer}>
      <ScrollView
        style={styles.detailScroll}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
      >
        <View style={styles.detailHeader}>
          <Image
            source={pet.imagem}
            style={styles.detailImage}
            resizeMode="cover"
          />
          <View
            style={[styles.detailBadge, { backgroundColor: cardColor }]}
          >
            <Text style={styles.detailBadgeText}>{petType}</Text>
          </View>

          <View style={styles.detailHeaderButtons}>
            <TouchableOpacity
              style={styles.detailBackButton}
              onPress={onBack}
            >
              <Text style={styles.detailBackText}>← Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.detailLikeButton,
                liked && styles.detailLikeActive,
              ]}
              onPress={() => setLiked(!liked)}
            >
              <Text style={styles.detailLikeText}>
                {liked ? '❤️' : '🤍'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.detailMainInfo}>
          <Text style={styles.detailName}>{pet.nome}</Text>
          <Text style={styles.detailRace}>{pet.raca}</Text>

          <View style={styles.detailInfoGrid}>
            <View style={styles.detailInfoBox}>
              <Text style={styles.detailInfoIcon}>🎂</Text>
              <Text style={styles.detailInfoLabel}>Idade</Text>
              <Text style={styles.detailInfoValue}>
                {pet.idade} {pet.idade === 1 ? 'ano' : 'anos'}
              </Text>
            </View>
            <View style={styles.detailInfoBox}>
              <Text style={styles.detailInfoIcon}>⚖️</Text>
              <Text style={styles.detailInfoLabel}>Peso</Text>
              <Text style={styles.detailInfoValue}>{pet.peso}</Text>
            </View>
            <View style={styles.detailInfoBox}>
              <Text style={styles.detailInfoIcon}>
                {pet.sexo === 'Macho' ? '♂️' : '♀️'}
              </Text>
              <Text style={styles.detailInfoLabel}>Sexo</Text>
              <Text style={styles.detailInfoValue}>{pet.sexo}</Text>
            </View>
          </View>
        </View>

        <View style={styles.detailSection}>
          <Text style={styles.detailSectionTitle}>Sobre {pet.nome}</Text>
          <Text style={styles.detailDescription}>{pet.descricao}</Text>
        </View>

        <View style={styles.detailSection}>
          <Text style={styles.detailSectionTitle}>Temperamento</Text>
          <View style={styles.detailTags}>
            {pet.temperamento.split(', ').map((tag, index) => (
              <View key={index} style={styles.detailTag}>
                <Text style={styles.detailTagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.detailSection}>
          <Text style={styles.detailSectionTitle}>Saúde & Cuidados</Text>
          <View style={styles.detailHealth}>
            <View
              style={[
                styles.detailHealthItem,
                {
                  backgroundColor: pet.vacinado ? '#D4F4DD' : '#FFD6D6',
                },
              ]}
            >
              <Text style={styles.detailHealthIcon}>
                {pet.vacinado ? '✓' : '✗'}
              </Text>
              <View>
                <Text style={styles.detailHealthLabel}>Vacinado</Text>
                <Text style={styles.detailHealthDesc}>
                  {pet.vacinado
                    ? 'Vacinação em dia'
                    : 'Vacinação pendente'}
                </Text>
              </View>
            </View>
            <View
              style={[
                styles.detailHealthItem,
                {
                  backgroundColor: pet.castrado ? '#D4F4DD' : '#FFD6D6',
                },
              ]}
            >
              <Text style={styles.detailHealthIcon}>
                {pet.castrado ? '✓' : '✗'}
              </Text>
              <View>
                <Text style={styles.detailHealthLabel}>Castrado</Text>
                <Text style={styles.detailHealthDesc}>
                  {pet.castrado
                    ? 'Castração realizada'
                    : 'Castração pendente'}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>

      <View style={styles.detailBottomButton}>
        <TouchableOpacity style={styles.detailAdoptButton}>
          <Text style={styles.detailAdoptText}>
            💚 Quero Adotar {pet.nome}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ============ COMPONENTE: Filtros ============

const ScrollableFilters = () => {
  const [selectedFilter, setSelectedFilter] = useState('Todos');
  const filters = ['Todos', 'Cães', 'Gatos', 'Filhotes', 'Adultos'];

  return (
    <FlatList
      data={filters}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[
            styles.filterBtn,
            selectedFilter === item && styles.filterBtnActive,
          ]}
          onPress={() => setSelectedFilter(item)}
        >
          <Text
            style={[
              styles.filterBtnText,
              selectedFilter === item && styles.filterBtnTextActive,
            ]}
          >
            {item}
          </Text>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.filtersList}
      scrollEventThrottle={16}
    />
  );
};

// ============ APP PRINCIPAL ============

export default function App() {
  const [selectedPet, setSelectedPet] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPets, setFilteredPets] = useState(PETS_DATA);

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text === '') {
      setFilteredPets(PETS_DATA);
    } else {
      const filtered = PETS_DATA.filter(
        (pet) =>
          pet.nome.toLowerCase().includes(text.toLowerCase()) ||
          pet.raca.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredPets(filtered);
    }
  };

  const handleBack = () => {
    setSelectedPet(null);
  };

  const renderPetCard = ({ item }) => (
    <PetCard pet={item} onPress={() => setSelectedPet(item)} />
  );

  if (selectedPet) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
        <PetDetail pet={selectedPet} onBack={handleBack} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FF6B6B" />

      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerIcon}>🐾</Text>
          <View>
            <Text style={styles.headerTitle}>Pet Adopt</Text>
            <Text style={styles.headerSubtitle}>
              Encontre seu novo melhor amigo
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="🔍 Buscar por nome ou raça..."
          placeholderTextColor="#AAA"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      <View style={styles.filtersSection}>
        <ScrollableFilters />
      </View>

      {filteredPets.length > 0 ? (
        <FlatList
          data={filteredPets}
          renderItem={renderPetCard}
          keyExtractor={(item) => item.id}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          ListFooterComponent={<View style={{ height: 20 }} />}
          maxToRenderPerBatch={10}
          updateCellsBatchingPeriod={50}
          initialNumToRender={10}
          removeClippedSubviews={true}
        />
      ) : (
        <View style={styles.emptyStateContainer}>
          <Text style={styles.emptyStateIcon}>🔍</Text>
          <Text style={styles.emptyStateTitle}>Nenhum pet encontrado</Text>
          <Text style={styles.emptyStateText}>
            Tente buscar por outro nome ou raça
          </Text>
        </View>
      )}

      <View style={styles.footerSection}>
        <Text style={styles.footerText}>
          Total de pets: {filteredPets.length} de {PETS_DATA.length}
        </Text>
      </View>
    </SafeAreaView>
  );
}

// ============ ESTILOS ============

const styles = StyleSheet.create({
  // ===== CONTAINER =====
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },

  // ===== HEADER =====
  header: {
    backgroundColor: '#FF6B6B',
    paddingHorizontal: 20,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  headerIcon: {
    fontSize: 40,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#FFFFFF',
    marginBottom: 2,
  },

  headerSubtitle: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
  },

  // ===== SEARCH =====
  searchSection: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },

  searchInput: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#333',
  },

  // ===== FILTERS =====
  filtersSection: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    paddingVertical: 8,
  },

  filtersList: {
    paddingHorizontal: 16,
    gap: 8,
  },

  filterBtn: {
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'transparent',
  },

  filterBtnActive: {
    backgroundColor: '#FF6B6B',
    borderColor: '#FF6B6B',
  },

  filterBtnText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },

  filterBtnTextActive: {
    color: '#FFFFFF',
  },

  // ===== PET CARD =====
  petCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    flexDirection: 'row',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
    borderLeftWidth: 4,
  },

  petCardImage: {
    position: 'relative',
    width: 120,
    height: 140,
  },

  petImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F5F5F5',
  },

  petBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  petBadgeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  petCardContent: {
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

  petVaccineStatus: {
    marginBottom: 8,
  },

  petStatusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },

  petStatusText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#333',
  },

  petButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  petButtonText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '700',
  },

  // ===== DETAIL VIEW =====
  detailContainer: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },

  detailScroll: {
    flex: 1,
  },

  detailHeader: {
    position: 'relative',
    height: 300,
    backgroundColor: '#F5F5F5',
  },

  detailImage: {
    width: '100%',
    height: '100%',
  },

  detailBadge: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },

  detailBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  detailHeaderButtons: {
    position: 'absolute',
    top: 16,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  detailBackButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },

  detailBackText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },

  detailLikeButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  detailLikeActive: {
    backgroundColor: 'rgba(255, 107, 107, 0.2)',
  },

  detailLikeText: {
    fontSize: 20,
  },

  detailMainInfo: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },

  detailName: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2C3E50',
    marginBottom: 4,
  },

  detailRace: {
    fontSize: 14,
    color: '#7F8C8D',
    marginBottom: 16,
    fontWeight: '500',
  },

  detailInfoGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  detailInfoBox: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 4,
  },

  detailInfoIcon: {
    fontSize: 24,
    marginBottom: 4,
  },

  detailInfoLabel: {
    fontSize: 11,
    color: '#7F8C8D',
    fontWeight: '600',
    marginBottom: 2,
  },

  detailInfoValue: {
    fontSize: 12,
    color: '#2C3E50',
    fontWeight: '700',
  },

  detailSection: {
    backgroundColor: '#FFFFFF',
    marginVertical: 8,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  detailSectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 12,
  },

  detailDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
    fontWeight: '400',
  },

  detailTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  detailTag: {
    backgroundColor: '#FFE5E5',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },

  detailTagText: {
    fontSize: 12,
    color: '#FF6B6B',
    fontWeight: '600',
  },

  detailHealth: {
    gap: 10,
  },

  detailHealthItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 12,
  },

  detailHealthIcon: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  detailHealthLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 2,
  },

  detailHealthDesc: {
    fontSize: 12,
    color: '#666',
  },

  detailBottomButton: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
  },

  detailAdoptButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },

  detailAdoptText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  // ===== LIST =====
  listContainer: {
    paddingVertical: 8,
  },

  // ===== EMPTY STATE =====
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  emptyStateIcon: {
    fontSize: 60,
    marginBottom: 16,
  },

  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2C3E50',
    marginBottom: 8,
    textAlign: 'center',
  },

  emptyStateText: {
    fontSize: 14,
    color: '#7F8C8D',
    textAlign: 'center',
    lineHeight: 20,
  },

  // ===== FOOTER =====
  footerSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#EFEFEF',
    alignItems: 'center',
  },

  footerText: {
    fontSize: 12,
    color: '#999',
    fontWeight: '600',
  },
});