import { SlideItem } from '../types';

export const SLIDES_DATA: SlideItem[] = [
  {
    id: 1,
    title: 'Tour Jurídico em Brasília',
    subtitle: 'Imersão acadêmica e institucional para estudantes de Direito.',
    badge: 'a definir • 4 dias / 3 noites',
    category: 'Abertura',
    type: 'cover',
    notes: 'Apresentar o Tour Jurídico em Brasília: data a definir (4 dias / 3 noites) de imersão prática nos órgãos centrais da República.'
  },
  {
    id: 2,
    title: 'A proposta da viagem',
    category: 'Proposta',
    type: 'proposal',
    content: [
      'Brasília reúne alguns dos espaços mais importantes da vida política, jurídica e institucional do país.',
      'Nesta viagem acadêmica, estudantes de Direito terão a oportunidade de observar de perto o funcionamento de órgãos centrais da República, ampliando o repertório construído em sala de aula e vivenciando, de forma concreta, temas que fazem parte da formação jurídica contemporânea.',
      'Mais do que uma viagem, esta é uma experiência de aproximação entre estudo, cidade, instituições e realidade profissional.'
    ],
    notes: 'Enfatizar o ganho de repertório prático além da sala de aula e a vivência das instituições em funcionamento.'
  },
  {
    id: 3,
    title: 'Foto/Reprodução — Viagem Acadêmica | Brasília – DF',
    subtitle: 'Supremo Tribunal Federal',
    category: 'Registro',
    type: 'stj_photo',
    notes: 'Mostrar foto real de turmas anteriores com trajes formais e Cerimonial do STF.'
  },
  {
    id: 4,
    title: 'Por que Brasília faz sentido para estudantes de Direito',
    subtitle: 'Brasília permite observar, em escala real, como se articulam instituições centrais da vida pública brasileira.',
    category: 'Relevância',
    type: 'why_brasilia',
    content: [
      'Para estudantes de Direito, a cidade oferece uma oportunidade rara de acompanhar de perto espaços ligados à produção das leis, ao funcionamento do sistema de justiça, à organização do Estado e à dinâmica política do país.',
      'Ao longo da viagem, será possível compreender melhor como esses órgãos se relacionam, como atuam na prática e como questões jurídicas, políticas e institucionais ganham forma no cotidiano da capital federal.'
    ],
    notes: 'Destacar o diferencial no currículo e na compreensão das decisões dos tribunais superiores.'
  },
  {
    id: 5,
    title: 'O que você vai viver nesta experiência',
    category: 'Experiências',
    type: 'experiences',
    bullets: [
      'Congresso Nacional, gabinetes e comissões',
      'Palácio Itamaraty e Instituto Rio Branco',
      'Reunião do Pleno do STF - Supremo Tribunal Federal',
      'Visita guiada ao Conselho Federal da OAB - Ordem dos Advogados do Brasil',
      'Visita guiada e Sessão do TSE - Tribunal Superior Eleitoral',
      'Brasília para além dos edifícios do poder, com Memorial JK, Catedral Metropolitana e Vila Planalto'
    ],
    notes: 'Passar pelos 6 pilares de vivência: Congresso, Itamaraty, Sessão STF, OAB, TSE e Cultura/História com Memorial JK.'
  },
  {
    id: 6,
    title: 'Memória da Viagem & Produção Audiovisual',
    subtitle: 'Clique e veja o que torna essa viagem uma experiência inesquecível.',
    category: 'Vídeo & Memória',
    type: 'video_memory',
    content: [
      'Em todas nossas viagens, embarcamos com o grupo um vídeo-maker que fará o registro das atividades.',
      'Vídeo ilustrativo da produção de Memória da Viagem, que será oferecida após o retorno de Brasília.'
    ],
    notes: 'Mencionar a presença de vídeomaker exclusivo acompanhando a turma durante toda a viagem.'
  },
  {
    id: 7,
    title: 'Visão geral da viagem',
    category: 'Roteiro Geral',
    type: 'overview_days',
    notes: 'Apresentar a linha do tempo sintética dos dias (4 dias / 3 noites).'
  },
  {
    id: 8,
    title: 'Entrada no coração político de Brasília',
    dayNumber: '01',
    category: 'Jornada Jurídica',
    type: 'day_detail',
    bullets: [
      'Praça dos Três Poderes e Panteão dos Heróis da Nação',
      'Almoço no Congresso, no Restaurante Taioba, inserindo o grupo no ambiente institucional desde a chegada',
      'Visita ao Congresso Nacional, apresentando o Poder Legislativo, seu funcionamento, as comissões e gabinetes parlamentares',
      'Encerramento das atividades, chegada e acomodação no Bay Park Flat Hotel'
    ],
    options: [
      'Ida de ônibus até o shopping próximo, com retorno coletivo após 1h30',
      'Refeição por delivery no hotel',
      'Autonomia para sair, jantar e retornar por conta própria'
    ],
    notes: 'Detalhes do Dia 1: Almoço no Taioba, visita guiada ao Congresso Nacional e check-in no Bay Park Flat Hotel.'
  },
  {
    id: 9,
    title: 'Estado, democracia e sistema eleitoral',
    dayNumber: '02',
    category: 'Jornada Jurídica',
    type: 'day_detail',
    bullets: [
      'Visita ao Palácio Itamaraty, sede do Ministério das Relações Exteriores, ampliando a percepção do grupo sobre a dimensão diplomática do Estado brasileiro',
      'Almoço no Restaurante-Escola do SENAC, no 10º andar do Anexo IV da Câmara',
      'Visita ao Instituto Rio Branco, sede da Escola de Diplomacia brasileira',
      'Memorial Juscelino Kubitschek, fundador de Brasília',
      'Encerramento das atividades do dia no TSE - Tribunal Superior Eleitoral, aproximando o grupo do papel da Justiça Eleitoral no processo democrático brasileiro'
    ],
    options: [
      'Ida de ônibus até o shopping próximo, com retorno coletivo após 1h30',
      'Refeição por delivery no hotel',
      'Autonomia para sair, jantar e retornar por conta própria'
    ],
    notes: 'Detalhes do Dia 2: Palácio Itamaraty, almoço no SENAC Anexo IV, Instituto Rio Branco, Memorial JK e Tribunal Superior Eleitoral (TSE).'
  },
  {
    id: 10,
    title: 'Cidade, advocacia e Suprema Corte',
    dayNumber: '03',
    category: 'Jornada Jurídica',
    type: 'day_detail',
    bullets: [
      'Visita à Catedral Metropolitana de Brasília, apresentando a cidade também por sua dimensão urbana, estética e monumental',
      'Visita ao Conselho Federal da OAB - Ordem dos Advogados do Brasil, aproximando o grupo de uma instituição central para a história e a prática da advocacia no país',
      'Almoço no Restaurante Tia Zélia, na Vila Planalto, conectando a experiência à memória dos candangos e a um território político tradicional da capital',
      'Acompanhamento de reunião do pleno do STF - Supremo Tribunal Federal, permitindo observar ritos, linguagem e funcionamento da mais alta Corte do país'
    ],
    options: [],
    notes: 'Detalhes do Dia 3: Catedral, Conselho Federal da OAB, Tia Zélia na Vila Planalto, reunião do pleno do STF e encerramento.'
  },
  {
    id: 11,
    title: 'O que está incluso / não está incluso',
    category: 'Inclusões',
    type: 'inclusions',
    bullets: [
      'Traslado ida e volta Ourinhos x Brasília x Ourinhos',
      'Hospedagem no Bay Park Flat Hotel em quarto quádruplo',
      'Café da manhã nos dias 2, 3 e 4',
      'Almoço nos dias 1, 2 e 3',
      'Educadores da Universo Lúdico com experiência em Brasília',
      'Guia local com Cadastur',
      'Transporte em Brasília, em ônibus rodoviário',
      'Água mineral no ônibus',
      'Seguro-viagem',
      'Story-maker'
    ],
    options: [
      'Jantar nos dias 1 e 2',
      'Despesas pessoais e com alimentação durante o traslado ida e volta de ônibus'
    ],
    notes: 'Pacote completo: traslado ida e volta Ourinhos x Brasília, hotel, café da manhã nos dias 2, 3 e 4, almoços, transporte executivo em Brasília, seguro e guias cadastrados.'
  },
  {
    id: 12,
    title: 'Bay Park Flat Hotel',
    category: 'Hospedagem',
    type: 'hotel_photo',
    notes: 'Acomodação em quarto quádruplo com café da manhã no Bay Park Flat Hotel.'
  },
  {
    id: 13,
    title: 'Seu Guia Digital de Viagem',
    subtitle: 'BÔNUS EXCLUSIVO - TECNOLOGIA NA VIAGEM',
    category: 'App Exclusivo',
    type: 'travel_app_guide',
    bullets: [
      'Roteiro Dia a Dia: Programação completa com horários, endereços e detalhes sobre as visitas.',
      'Orientação sobre trajes: Orientação clara sobre as vestimentas adequadas para cada visita e dicas para garantir seu conforto.',
      'O que Levar na Mala: Checklist interativo de bagagem (mala de até 10kg + mochila) para não esquecer nenhum item.',
      'Transporte terrestre (Ônibus com ar condicionado): Instruções de embarque e traslado'
    ],
    notes: 'Destacar o aplicativo móvel exclusivo com todas as informações da viagem.'
  },
  {
    id: 14,
    title: 'Mais do que uma viagem, uma experiência acadêmica',
    category: 'Conceito',
    type: 'academic_quote',
    content: [
      'Ao longo de três dias de atividades, a proposta busca aproximar os estudantes de Direito de instituições, espaços e dinâmicas que fazem parte da vida pública brasileira.',
      'Mais do que visitar lugares emblemáticos, a viagem convida o grupo a observar como temas discutidos na graduação ganham forma concreta na capital federal.',
      'Trata-se de uma experiência que articula formação acadêmica, repertório institucional, convivência universitária e leitura crítica da cidade.'
    ],
    notes: 'Reforçar o compromisso pedagógico e a integração acadêmica entre os alunos.'
  },
  {
    id: 15,
    title: 'INVESTIMENTO e condições de adesão',
    category: 'Investimento',
    type: 'investment',
    notes: 'Período de adesão: a definir. Taxa de inscrição R$ 150 à vista no Pix. Valor individual de ÔNIBUS: 12x R$ 287,00 (4 dias / 3 noites / 3 dias de atividades).'
  },
  {
    id: 16,
    title: 'Como fazer sua reserva',
    category: 'Passo a Passo Reserva',
    type: 'reservation_steps',
    notes: 'Etapas da reserva: Taxa R$ 150 após reunião (30 interessados). Encerramento das vagas. Limite máximo de 58 participantes.'
  },
  {
    id: 17,
    title: 'como pagar o saldo da viagem',
    subtitle: 'em até 12x no cartão de crédito',
    category: 'Pagamento Saldo',
    type: 'payment_code',
    content: [
      'você receberá um código referente ao número da viagem',
      'acesse o site www.universoludico.com.br',
      'entre na área do aluno e insira o código.',
      'siga as etapas até concluir a compra de forma fácil e segura!'
    ],
    notes: 'Passo a passo para pagar o saldo da viagem em até 12x no cartão de crédito. Código da Viagem XXXXXX. Atenção! Todo o processo de inscrição precisa ser feito em até 24h após o pagamento da taxa de reserva.'
  },
  {
    id: 18,
    title: 'Uma experiência para sair da sala de aula e ver o Direito em funcionamento',
    category: 'Encerramento & Contatos',
    type: 'team_contact',
    content: [
      'Brasília é um dos poucos lugares do país em que estudantes de Direito podem, em poucos dias, observar de perto instituições centrais da vida pública brasileira e compreender melhor como temas debatidos na graduação ganham forma concreta na realidade institucional do país.',
      'Mais do que visitar espaços emblemáticos, esta viagem propõe uma experiência acadêmica intensa, organizada e significativa, construída para aproximar formação universitária, vivência coletiva e contato direto com o funcionamento da República.'
    ],
    notes: 'Contatos da equipe da Universo Lúdico e Pati Tour à disposição para tirar dúvidas na reunião.'
  }
];
