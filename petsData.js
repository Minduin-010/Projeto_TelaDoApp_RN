// 🐾 Pet Adopt - Dados dos Pets
// Arquivo externo contendo todos os dados dos pets disponíveis para adoção

// ============ DADOS DOS PETS ============

export const PETS_DATA = [
  {
    id: '1',
    nome: 'Max',
    raca: 'Golden Retriever',
    idade: 2,
    descricao:
      'Amigável e energético, adora brincar e passear. Perfeito para famílias!',
    imagem: require('../assets/foto1.jpg'),
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
    imagem: require('../assets/foto2.jpg'),
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
    imagem: require('../assets/foto3.jpg'),
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
    imagem: require('../assets/foto4.jpg'),
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
    descricao:
      'Protetor e leal. Ideal para quem busca um companheiro confiável.',
    imagem: require('../assets/foto5.jpg'),
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
    imagem: require('../assets/foto6.jpg'),
    temperamento: 'Brincalhão, Curioso',
    peso: '3 kg',
    sexo: 'Fêmea',
    vacinado: true,
    castrado: false,
  },
];

// ============ CORES POR TIPO DE ANIMAL ============

export const PET_COLORS = {
  Cachorro: '#FF6B6B',
  Gato: '#FFB84D',
  Coelho: '#95E1D3',
  Pássaro: '#C7CEEA',
};

// ============ STATUS DE INFORMAÇÕES ============

export const PET_STATUS = {
  vacinado: '✓ Vacinado',
  castrado: '✓ Castrado',
  naoVacinado: '✗ Não vacinado',
  naoCastrado: '✗ Não castrado',
};