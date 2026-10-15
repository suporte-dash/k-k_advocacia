import type React from "react";
import {
  Baby,
  Anchor,
  Clock,
  ShieldAlert,
  HeartPulse,
  Scale,
  FileText,
  HelpCircle,
} from "lucide-react";

export type ServiceCategory =
  | "todos"
  | "aposentadorias"
  | "maternidade"
  | "defeso"
  | "incapacidade"
  | "planejamento";

export interface DetailedService {
  id: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  categoryLabel: string;
  badge: string;
  icon: React.ElementType;
  overview: string;
  targetAudience: string;
  analysisPoints: string[];
  recommendedDocuments: string[];
  whatsappMessage: string;
}

export const ALL_DETAILED_SERVICES: DetailedService[] = [
  {
    id: "salario-maternidade",
    title: "Salário-maternidade",
    shortTitle: "Salário-maternidade",
    category: "maternidade",
    categoryLabel: "Maternidade & Adoção",
    badge: "Benefício Familiar",
    icon: Baby,
    overview:
      "Amparo financeiro devido à pessoa que se afasta da atividade profissional por motivo de parto, adoção, guarda judicial para fins de adoção ou aborto não criminoso, promovendo proteção e dignidade à família.",
    targetAudience:
      "Trabalhadoras urbanas CLT, desempregadas em período de graça, seguradas especiais rurais, pescadoras artesanais e Microempreendedoras Individuais (MEI).",
    analysisPoints: [
      "Manutenção da qualidade de segurada no momento do parto ou do evento da adoção",
      "Verificação de cumprimento de carência de 10 meses para MEI e contribuintes individuais",
      "Isenção legal de carência para trabalhadoras com carteira assinada no meio urbano",
      "Comprovação documental do trabalho rural ou pesca artesanal nos 10 meses que antecederam o parto",
    ],
    recommendedDocuments: [
      "Certidão de nascimento da criança ou termo de guarda judicial / adoção",
      "Documentos pessoais da mãe (RG e CPF) e comprovante de residência",
      "Carteira de Trabalho (CTPS) e Extrato Previdenciário (CNIS)",
      "Comprovantes de atividade rural ou licença de pesca (para seguradas especiais)",
    ],
    whatsappMessage: "Olá! Gostaria de uma orientação jurídica aprofundada sobre Salário-maternidade.",
  },
  {
    id: "seguro-defeso",
    title: "Seguro-defeso",
    shortTitle: "Seguro-defeso",
    category: "defeso",
    categoryLabel: "Pesca Artesanal",
    badge: "Pesca no Litoral Paraense",
    icon: Anchor,
    overview:
      "Amparo de renda concedido ao pescador e à pescadora artesanal profissional durante os períodos de paralisação temporária da atividade pesqueira, fixados pelos órgãos ambientais para a reprodução e preservação das espécies.",
    targetAudience:
      "Pescadores e pescadoras artesanais de Salinópolis e da região litorânea do Pará que exerçam a pesca de forma ininterrupta e como fonte exclusiva de sustento familiar.",
    analysisPoints: [
      "Regularidade do Registro Geral da Atividade Pesqueira (RGP) e licença ativa no sistema oficial",
      "Comprovação de exercício da pesca profissional nos meses que antecederam o período de defeso",
      "Verificação de regularidade das contribuições previdenciárias ou notas de comercialização do pescado",
      "Ausência de vínculo de emprego urbano concomitante ou outro benefício previdenciário contínuo",
    ],
    recommendedDocuments: [
      "RGP (Registro Geral da Atividade Pesqueira) com licença anual ativa",
      "Notas fiscais de venda do pescado ou declarações da colônia / associação de pescadores",
      "Extrato de consulta no sistema do Ministério da Pesca e Aquicultura / INSS",
      "Documentos pessoais (RG, CPF, comprovante de residência e NIT/PIS)",
    ],
    whatsappMessage: "Olá! Gostaria de orientações jurídicas sobre Seguro-defeso para pescador artesanal.",
  },
  {
    id: "aposentadorias",
    title: "Aposentadorias (Urbana, Rural & Especial)",
    shortTitle: "Aposentadorias",
    category: "aposentadorias",
    categoryLabel: "Aposentadorias",
    badge: "Idade, Tempo & Regras de Transição",
    icon: Clock,
    overview:
      "Análise aprofundada de todo o histórico de trabalho, contribuições e regras de transição da Reforma da Previdência (EC 103/2019), visando orientar o momento ideal e o benefício mais vantajoso.",
    targetAudience:
      "Trabalhadores urbanos de empresas privadas, autônomos, segurados rurais do campo, servidores com tempo misto e profissionais expostos a insalubridade ou periculosidade.",
    analysisPoints: [
      "Contagem minuciosa de tempo de contribuição, carência e idade atual",
      "Comparação entre regras de transição (pedágio 50%, pedágio 100%, pontos e idade mínima progressiva)",
      "Averbação e reconhecimento de tempo de serviço rural trabalhado na juventude",
      "Conversão de tempo especial trabalhado sob agentes nocivos à saúde (ruído, produtos químicos, etc.)",
    ],
    recommendedDocuments: [
      "Todas as Carteiras de Trabalho (CTPS físicas e digital)",
      "Carnês e guias de recolhimento previdenciário (GPS) para autônomos",
      "Extrato analítico completo do CNIS emitido pelo Meu INSS",
      "Perfil Profissiográfico Previdenciário (PPP) e LTCAT para períodos especiais",
    ],
    whatsappMessage: "Olá! Gostaria de uma análise detalhada para a minha Aposentadoria.",
  },
  {
    id: "pensao-morte",
    title: "Pensão por morte",
    shortTitle: "Pensão por morte",
    category: "maternidade",
    categoryLabel: "Maternidade & Família",
    badge: "Proteção Familiar",
    icon: ShieldAlert,
    overview:
      "Benefício previdenciário pago aos dependentes do segurado falecido para assegurar a manutenção da subsistência da família, com acolhimento humano e rigor técnico documental.",
    targetAudience:
      "Viúvas e viúvos, companheiros(as) em união estável, filhos menores de 21 anos ou inválidos, e pais sob dependência econômica comprovada.",
    analysisPoints: [
      "Confirmação da qualidade de segurado do falecido na data do óbito (inclusive período de graça)",
      "Comprovação consistente de união estável para casais sem certidão de casamento formal",
      "Cálculo exato das cotas familiares e verificação da duração legal do benefício conforme a idade do cônjuge",
      "Reunião de provas documentais para comprovar dependência econômica quando exigida pela lei",
    ],
    recommendedDocuments: [
      "Certidão de óbito do instituidor da pensão",
      "Documentos pessoais do falecido e de todos os dependentes que solicitam o amparo",
      "Certidão de casamento ou conjunto de provas de união estável (endereço conjunto, contas, filhos)",
      "Carteira de Trabalho ou extrato de contribuições do segurado falecido",
    ],
    whatsappMessage: "Olá! Preciso de orientação jurídica sobre Pensão por morte.",
  },
  {
    id: "auxilio-incapacidade",
    title: "Auxílio por incapacidade (Temporária & Permanente)",
    shortTitle: "Auxílio-doença / Invalidez",
    category: "incapacidade",
    categoryLabel: "Incapacidade & Saúde",
    badge: "Incapacidade & Doença",
    icon: HeartPulse,
    overview:
      "Suporte jurídico ao segurado que se encontra impedido de exercer suas funções habituais em virtude de enfermidade ou acidente, preparando o conjunto probatório para a perícia médica.",
    targetAudience:
      "Trabalhadores com carteira assinada, autônomos, MEI, trabalhadores rurais e pescadores que apresentam limitações de saúde comprovadas por médicos.",
    analysisPoints: [
      "Manutenção da qualidade de segurado e apuração de carência de 12 contribuições (quando exigida)",
      "Enquadramento em casos de isenção de carência (acidentes de qualquer natureza ou doenças graves)",
      "Análise da coerência e robustez dos laudos médicos e exames frente aos critérios periciais do INSS",
      "Diferenciação técnica entre auxílio temporário (auxílio-doença) e aposentadoria por incapacidade permanente",
    ],
    recommendedDocuments: [
      "Laudo médico circunstanciado com CID, histórico do tratamento e indicação do tempo de afastamento",
      "Exames de imagem, relatórios laboratoriais e prontuários médicos recentes",
      "Receituários médicos atualizados e comprovantes de medicamentos em uso",
      "Comunicação de Acidente de Trabalho (CAT) se a incapacidade tiver relação com a atividade profissional",
    ],
    whatsappMessage: "Olá! Gostaria de consultar sobre Auxílio por incapacidade temporária ou permanente.",
  },
  {
    id: "bpc-loas",
    title: "BPC / LOAS (Benefício Assistencial)",
    shortTitle: "BPC / LOAS",
    category: "incapacidade",
    categoryLabel: "Incapacidade & Saúde",
    badge: "Amparo Social",
    icon: Scale,
    overview:
      "Benefício assistencial de um salário mínimo mensal concedido a pessoas que não possuem meios de prover a própria subsistência e nem de tê-la provida pela sua família, independentemente de terem contribuído ao INSS.",
    targetAudience:
      "Idosos a partir de 65 anos de idade ou Pessoas com Deficiência (PcD) de qualquer faixa etária em situação de vulnerabilidade socioeconômica.",
    analysisPoints: [
      "Regularidade cadastral e atualização dos dados do núcleo familiar no Cadastro Único (CadÚnico)",
      "Apuração da renda per capita familiar e aplicação de deduções legais com gastos contínuos de saúde",
      "Comprovação de impedimento de longo prazo (mínimo de 2 anos) de natureza física, mental ou sensorial",
      "Orientação preventiva para a avaliação social e perícia médica obrigatórias",
    ],
    recommendedDocuments: [
      "Folha de resumo do Cadastro Único (CadÚnico) devidamente atualizada no CRAS",
      "Documentos de identificação (RG e CPF) de todos os membros que residem no mesmo domicílio",
      "Comprovantes de rendimentos ou declarações de ausência de renda de todos os membros da família",
      "Laudos médicos, receitas e comprovantes de despesas regulares com tratamentos médicos contínuos",
    ],
    whatsappMessage: "Olá! Gostaria de orientações sobre BPC/LOAS para idoso ou pessoa com deficiência.",
  },
  {
    id: "planejamento-cnis",
    title: "Planejamento Previdenciário & Acerto de CNIS",
    shortTitle: "Planejamento & CNIS",
    category: "planejamento",
    categoryLabel: "Planejamento & Acertos",
    badge: "Diagnóstico Preventivo",
    icon: FileText,
    overview:
      "Estudo detalhado e preventivo de todo o histórico contributivo para simular cenários futuros, corrigir indicadores de pendência no Meu INSS e definir o momento mais vantajoso para o pedido.",
    targetAudience:
      "Segurados que desejam se programar financeiramente, empresários, autônomos e qualquer trabalhador com pendências cadastrais no extrato do INSS.",
    analysisPoints: [
      "Identificação e saneamento de indicadores de erro no extrato previdenciário (PEXT, PREM-RET, AEXT-VI)",
      "Regularização de períodos sem data de encerramento de vínculo ou recolhimentos abaixo do piso",
      "Simulação de retorno financeiro para guiar o valor ideal de futuras contribuições",
      "Definição da melhor data para requerimento com o maior benefício financeiro possível",
    ],
    recommendedDocuments: [
      "Extrato analítico completo do CNIS com todas as remunerações históricas",
      "Todas as Carteiras de Trabalho e termos de rescisão de contrato de trabalho",
      "Comprovantes de recolhimento como autônomo, MEI ou facultativo",
      "Contracheques antigos para comprovação de valores que não constam no sistema",
    ],
    whatsappMessage: "Olá! Gostaria de solicitar um Planejamento Previdenciário com acerto do meu CNIS.",
  },
  {
    id: "recursos-negativas",
    title: "Recursos Administrativos e Ações Judiciais",
    shortTitle: "Recursos & Negativas",
    category: "planejamento",
    categoryLabel: "Planejamento & Acertos",
    badge: "Reversão de Negativas",
    icon: HelpCircle,
    overview:
      "Atuação técnica contra decisões desfavoráveis do INSS em casos de pedidos indeferidos, benefícios cessados indevidamente ou valores concedidos abaixo do correto.",
    targetAudience:
      "Segurados que tiveram requerimentos negados administrativamente ou buscam restabelecimento de benefício por via judicial.",
    analysisPoints: [
      "Leitura minuciosa da fundamentação jurídica contida na carta de indeferimento do INSS",
      "Avaliação de cabimento de recurso administrativo perante o Conselho de Recursos da Previdência (CRPS)",
      "Análise da viabilidade de ação perante a Justiça Federal com pedido de tutela de urgência",
      "Organização de novos elementos probatórios para suprir as exigências apontadas pelo órgão",
    ],
    recommendedDocuments: [
      "Cópia integral do processo administrativo baixado pelo portal Meu INSS",
      "Carta de indeferimento ou comunicação de cessação de benefício",
      "Toda a documentação que já havia sido protocolada no pedido original",
      "Novos documentos, laudos ou declarações capazes de sanar a exigência do INSS",
    ],
    whatsappMessage: "Olá! Meu benefício foi indeferido no INSS e gostaria de uma orientação jurídica.",
  },
];
