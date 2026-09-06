/**
 * Morfofisiología Humana II - Base de Datos de Clases Orientadoras y Laminarios Médicos
 * Contiene metadatos de las 14 Actividades Orientadoras, 44 Láminas Histológicas,
 * 61 Casos de Malformaciones Congénitas y Presentaciones PPT de Estudio.
 */

var CLASES_ORIENTADORAS_DATA = [
  {
    id: 1,
    ao: "AO 01",
    week: 1,
    title: "Generalidades del Sistema Nervioso y Sistema Nervioso Periférico",
    theme: "Tema 1: Generalidades y SNP",
    pdfFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_01.pdf",
    slidesFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_01DIA.pdf",
    videoFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_01VID.mp4",
    videoDriveId: "1JMTMNOaHsLkPPrRoPjGPiTbk-_P0aBBN",
    videoDriveUrl: "https://drive.google.com/file/d/1JMTMNOaHsLkPPrRoPjGPiTbk-_P0aBBN/preview",
    description: "Concepto evolutivo del sistema nervioso, propiedades funcionales (excitabilidad y conductibilidad), origen embriológico y diferenciación del tubo neural. Organización del tejido nervioso: neuronas, neuroglias, sustancia gris y sustancia blanca. Concepto de arco reflejo y bases bioquímicas.",
    topics: ["Filogenia y ontogenia del SNC", "Tejido nervioso y neuroglias", "Sustancia gris y sustancia blanca", "Arco reflejo"]
  },
  {
    id: 2,
    ao: "AO 02",
    week: 1,
    title: "Sistema Nervioso Periférico: Receptores, Nervios Espinales y Plexos Somáticos",
    theme: "Tema 1: Generalidades y SNP",
    pdfFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_2.pdf",
    slidesFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_2DIA.pdf",
    videoFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_2VID.mp4",
    videoDriveId: "1LJkCa-PTCDeX-ftbVQ_Oi5sBfK_6ORdf",
    videoDriveUrl: "https://drive.google.com/file/d/1LJkCa-PTCDeX-ftbVQ_Oi5sBfK_6ORdf/preview",
    description: "Receptores sensoriales periféricos, transducción, potencial generador y adaptación. Fibras mielínicas y amielínicas, vainas de Schwann y nodos de Ranvier. Constitución de los nervios espinales, ramos anteriores y formación de los plexos cervical, braquial, lumbar y sacrococcígeo.",
    topics: ["Transducción y receptores", "Fibras nerviosas y mielinización", "Nervios espinales y ganglios", "Plexos somáticos y lesiones"]
  },
  {
    id: 3,
    ao: "AO 03",
    week: 2,
    title: "Médula Espinal: Configuración Externa, Interna y Actividad Refleja",
    theme: "Tema 2: Sistema Nervioso Central",
    pdfFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_03.pdf",
    slidesFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_03DIA.pdf",
    videoFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_03VID.mp4",
    videoDriveId: "15RUl4aw2kjpZaQ0C7HZaCc8ZU_5aCmkv",
    videoDriveUrl: "https://drive.google.com/file/d/15RUl4aw2kjpZaQ0C7HZaCc8ZU_5aCmkv/preview",
    description: "Límites, topografía y engrosamientos de la médula espinal. Sustancia gris (astas anteriores, posteriores y laterales; laminación de Rexed) y sustancia blanca (cordones o funículos anterior, lateral y posterior). Segmento medular, reflejo miotático y arco reflejo espinal.",
    topics: ["Configuración externa y raíces", "Sustancia gris medular", "Funículos y tractos medulares", "Reflejos espinales"]
  },
  {
    id: 4,
    ao: "AO 04",
    week: 3,
    title: "Tronco Encefálico: Médula Oblongada, Puente y Mesencéfalo",
    theme: "Tema 2: Sistema Nervioso Central",
    pdfFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_04.pdf",
    slidesFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_04DIA.pdf",
    videoFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_04VID.mp4",
    videoDriveId: "14FL3oeSSqALFvU_IqeOGg0UmptFlHpn2",
    videoDriveUrl: "https://drive.google.com/file/d/14FL3oeSSqALFvU_IqeOGg0UmptFlHpn2/preview",
    description: "Morfología externa e interna del bulbo raquídeo, puente de Varolio y mesencéfalo. Cuarto ventrículo (fosa romboidea). Núcleos de los nervios craneales (pares III al XII), núcleos propios (olivares, rojos, sustancia negra) y centros reflejos vitales de la vida vegetativa.",
    topics: ["Médula oblongada y puente", "Mesencéfalo y colículos", "Fosa romboidea y IV ventrículo", "Núcleos de los pares craneales"]
  },
  {
    id: 5,
    ao: "AO 05",
    week: 4,
    title: "Cerebelo y Formación Reticular",
    theme: "Tema 2: Sistema Nervioso Central",
    pdfFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_05.pdf",
    slidesFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_05DIA.pdf",
    videoFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_05VID.mp4",
    videoDriveId: "1_MG55tqcTXfMhINSVPUuVU_Zxgh6guUP",
    videoDriveUrl: "https://drive.google.com/file/d/1_MG55tqcTXfMhINSVPUuVU_Zxgh6guUP/preview",
    description: "Evolución filogenética del cerebelo (Arquicerebelo, Paleocerebelo, Neocerebelo). Morfología, corteza cerebelosa (capas molecular, de Purkinje y granular), núcleos profundos y pedúnculos cerebelosos. Funciones de equilibrio, tono muscular y coordinación motora. Sistema activador reticular ascendente (SARA).",
    topics: ["Capas de la corteza cerebelosa", "Núcleos centrales del cerebelo", "Coordinación motora y eferencias", "Formación reticular y vigilia"]
  },
  {
    id: 6,
    ao: "AO 06",
    week: 5,
    title: "Diencéfalo: Tálamo, Hipotálamo, Epitálamo y Tercer Ventrículo",
    theme: "Tema 2: Sistema Nervioso Central",
    pdfFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_06.pdf",
    slidesFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_06DIA.pdf",
    videoFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_06VID.mp4",
    videoDriveId: "1PhX5R3s73AofgeaR_Dn_b3iVZi8GZAAi",
    videoDriveUrl: "https://drive.google.com/file/d/1PhX5R3s73AofgeaR_Dn_b3iVZi8GZAAi/preview",
    description: "Estructura y relaciones del diencéfalo y tercer ventrículo. Tálamo óptico como estación de relevo sensitivo-sensorial. Hipotálamo: núcleos hipotalámicos, funciones de integración autonómica, termorregulación, homeostasis e ingesta. Epitálamo y glándula pineal. Sistema Límbico y conducta.",
    topics: ["Núcleos talámicos y relevo", "Centros hipotalámicos homeostáticos", "Glándula pineal y melatonina", "Circuito de Papez y Sistema Límbico"]
  },
  {
    id: 7,
    ao: "AO 07",
    week: 6,
    title: "Telencéfalo: Corteza Cerebral, Áreas Funcionales y Ganglios Basales",
    theme: "Tema 2: Sistema Nervioso Central",
    pdfFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_07.pdf",
    slidesFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_07DIA.pdf",
    videoFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_07VID.mp4",
    videoDriveId: "12dWv__5yZzlI8D0BbI5Tb12cC0d31fGn",
    videoDriveUrl: "https://drive.google.com/file/d/12dWv__5yZzlI8D0BbI5Tb12cC0d31fGn/preview",
    description: "Hemisferios cerebrales, cisuras, surcos y giros. Estructura histológica de la corteza cerebral (isocorteza en 6 capas). Mapa citoarquitectónico de Brodmann (áreas motoras, sensoriales y de asociación). Ganglios de la base (cuerpo estriado: núcleo caudado, putamen y globo pálido) y circuito extrapiramidal.",
    topics: ["Surcos y lóbulos cerebrales", "Capas histológicas corticales", "Áreas funcionales de Brodmann", "Núcleos basales y vía extrapiramidal"]
  },
  {
    id: 8,
    ao: "AO 08",
    week: 7,
    title: "Sistema Nervioso Autónomo (Vegetativo): Simpático y Parasimpático",
    theme: "Tema 2: Sistema Nervioso Central",
    pdfFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_08.pdf",
    slidesFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_08DIA.pdf",
    videoFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_08VID.mp4",
    videoDriveId: "12dWv__5yZzlI8D0BbI5Tb12cC0d31fGn",
    videoDriveUrl: "https://drive.google.com/file/d/12dWv__5yZzlI8D0BbI5Tb12cC0d31fGn/preview",
    description: "Organización central y periférica del sistema nervioso autónomo. División simpática (toracolumbar) y parasimpática (craneosacra). Neurona preganglionar y posganglionar. Neurotransmisores (acetilcolina y noradrenalina), receptores adrenérgicos y colinérgicos. Respuestas fisiológicas de lucha o reposo.",
    topics: ["División simpática toracolumbar", "División parasimpática craneosacra", "Neurotransmisores y receptores", "Acciones viscerales y homeostasis"]
  },
  {
    id: 9,
    ao: "AO 09",
    week: 8,
    title: "Vías de Conducción Nerviosa Aferentes (Sensitivas y Sensoriales)",
    theme: "Tema 2: Sistema Nervioso Central",
    pdfFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_09.pdf",
    slidesFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_09DIA.pdf",
    videoFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_09VID.mp4",
    videoDriveId: "1q9vxMIX-GLPu0bufqWDTbFyr_KBrYRpQ",
    videoDriveUrl: "https://drive.google.com/file/d/1q9vxMIX-GLPu0bufqWDTbFyr_KBrYRpQ/preview",
    description: "Cadenas neuronales de la aferencia. Vías de la sensibilidad somática general: termoalgésica (haz espinotalámico lateral), tacto simple (haz espinotalámico anterior) y propiocepción consciente/tacto discriminativo (fascículos grácil y cuneiforme). Vías espinocerebelosas inconscientes.",
    topics: ["Vía termoalgésica espinotalámica", "Sistema columna dorsal - lemnisco medial", "Vías espinocerebelosas", "Relevo talámico y corteza somestésica"]
  },
  {
    id: 10,
    ao: "AO 10",
    week: 9,
    title: "Vías de Conducción Nerviosa Eferentes (Motoras) y Control del Movimiento",
    theme: "Tema 2: Sistema Nervioso Central",
    pdfFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_10.pdf",
    slidesFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_10DIA.pdf",
    videoFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_10VID.mp4",
    videoDriveId: "1bLLvZSIlx4F-EqzOZQkSSw0Pl994DkqR",
    videoDriveUrl: "https://drive.google.com/file/d/1bLLvZSIlx4F-EqzOZQkSSw0Pl994DkqR/preview",
    description: "Vía piramidal: tractos corticoespinal (anterior y lateral) y corticonuclear (geniculado). Motoneurona superior e inferior. Síndrome de motoneurona superior vs inferior. Vías extrapiramidales (rubroespinal, vestibuloespinal, reticuloespinal y tectoespinal) y control postural y motor fino.",
    topics: ["Tracto corticoespinal piramidal", "Tracto corticonuclear", "Síndromes motores piramidales", "Vías extrapiramidales de apoyo"]
  },
  {
    id: 11,
    ao: "AO 11",
    week: 10,
    title: "Órganos de los Sentidos: Analizador Visual (Ojo, Retina y Vía Óptica)",
    theme: "Tema 2: Sistema Nervioso Central",
    pdfFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_11.pdf",
    slidesFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_11DIA.pdf",
    videoFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_11VID.mp4",
    videoDriveId: "1jhdB9MPV8eUQpY8oQsKzJwZ7JduS2oP6",
    videoDriveUrl: "https://drive.google.com/file/d/1jhdB9MPV8eUQpY8oQsKzJwZ7JduS2oP6/preview",
    description: "Globo ocular: túnicas fibrosa, vascular y nerviosa. Medios refringentes (córnea, humor acuoso, cristalino, cuerpo vítreo). Histología de la retina (10 capas, fotorreceptores: conos y bastones). Fotoquímica de la visión. Vía óptica (nervio, quiasma, tracto, cuerpo geniculado lateral y corteza visual primaria 17).",
    topics: ["Túnicas y medios transparentes del ojo", "Histología de la retina", "Fisiología de fotorreceptores", "Vía óptica y corteza occipital"]
  },
  {
    id: 12,
    ao: "AO 12",
    week: 11,
    title: "Órganos de los Sentidos: Analizador Auditivo y Vestibular",
    theme: "Tema 2: Sistema Nervioso Central",
    pdfFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_12.pdf",
    slidesFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_12DIA.pdf",
    videoFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_12VID.mp4",
    videoDriveId: "1OY5-ChKlimnZ7RUMd7huluvzOcfz_-0F",
    videoDriveUrl: "https://drive.google.com/file/d/1OY5-ChKlimnZ7RUMd7huluvzOcfz_-0F/preview",
    description: "Oído externo, medio e interno. Estructura del laberinto óseo y membranoso. Órgano de Corti y cóclea (audición). Aparato vestibular: máculas utricular y sacular (gravedad y aceleración lineal) y crestas ampollares (aceleración angular). Vía auditiva y vía vestibular hacia núcleos vestibulares y cerebelo.",
    topics: ["Anatomía del oído medio e interno", "Histología del Órgano de Corti", "Máculas, otolitos y crestas ampollares", "Vías coclear y vestibular"]
  },
  {
    id: 13,
    ao: "AO 13",
    week: 12,
    title: "Sistema Endocrino: Eje Hipotálamo-Hipofisario y Glándulas Periféricas",
    theme: "Tema 3: Sistema Endocrino",
    pdfFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_13.pdf",
    slidesFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_13DIA.pdf",
    videoFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_13VID.mp4",
    videoDriveId: "1vB5ql7kivFzaCzK9mbDf5s6edMWRzbPm",
    videoDriveUrl: "https://drive.google.com/file/d/1vB5ql7kivFzaCzK9mbDf5s6edMWRzbPm/preview",
    description: "Morfofisiología de las glándulas de secreción interna. Eje hipotálamo-hipofisario: adenohipófisis y neurohipófisis. Hormonas tróficas y liberadoras. Histología y función de tiroides, paratiroides, corteza y médula suprarrenal, y porción endocrina del páncreas (islotes de Langerhans).",
    topics: ["Eje hipotálamo - adenohipófisis", "Neurohipófisis y oxitocina / ADH", "Tiroides, paratiroides y suprarrenales", "Mecanismos de retroalimentación (feedback)"]
  },
  {
    id: 14,
    ao: "AO 14",
    week: 12,
    title: "Integración Neuroendocrina y Control Homeostático Global",
    theme: "Tema 3: Sistema Endocrino",
    pdfFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_14.pdf",
    slidesFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_14DIA.pdf",
    videoFile: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/Clases%20orientadoras/MFH_II_-_AO_14VID.mp4",
    videoDriveId: "1D2atcyhgD0QWNx-iLGhbRdWKw7IlUcGu",
    videoDriveUrl: "https://drive.google.com/file/d/1D2atcyhgD0QWNx-iLGhbRdWKw7IlUcGu/preview",
    description: "Interacción de los sistemas nervioso y endocrino en la regulación del medio interno. Mecanismos de retroalimentación positiva y negativa. Respuesta neuroendocrina ante el estrés (eje simpático-adrenomedular y eje corticosuprarrenal). Adaptación metabólica y homeostasis integral.",
    topics: ["Integración neuro-hormonal", "Mecanismos de retroalimentación", "Fisiopatología del estrés y adaptación", "Resumen de Morfofisiología Humana II"]
  }
];

var LAMINARIO_HISTOLOGICO_DATA = [
  {
    id: 1,
    num: 1,
    title: "Fotomicrografía de Corteza Cerebral (Cresil Violeta 40x)",
    stain: "Cresil Violeta",
    magnification: "40x",
    category: "Cerebro / Corteza",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%201%20Fotomicrografia%20cerebro%20cresil%20violeta%2040x.jpg",
    description: "Corte histológico de corteza cerebral teñido con cresil violeta (tinción de Nissl). Se observan somas neuronales con grumos basófilos prominentes correspondientes al retículo endoplasmático rugoso y núcleos pálidos con nucléolo evidente."
  },
  {
    id: 2,
    num: 2,
    title: "Fotomicrografía de Médula Espinal (Cresil Violeta / H&E 40x)",
    stain: "Cresil Violeta",
    magnification: "40x",
    category: "Médula Espinal",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%202%20Fotomicrografia%20cerebro%20cresil%20violeta%2040x.jpg",
    description: "Detalle panorámico a 40x de tejido nervioso central mostrando la densidad de neuroglias y cuerpos neuronales multipolares con sustancia cromófila."
  },
  {
    id: 3,
    num: 3,
    title: "Fotomicrografía de Médula Espinal (Técnica Argéntica 200x)",
    stain: "Impregnación Argéntica",
    magnification: "200x",
    category: "Médula Espinal",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%203%20Fotomicrografia%20%20medula%20espinal%20argentica%20200x.jpg",
    description: "Asta anterior de médula espinal con impregnación de plata. Se aprecian grandes motoneuronas multipolares con su red dendrítica y axones proyectándose hacia las raíces motoras."
  },
  {
    id: 4,
    num: 4,
    title: "Fotomicrografía de Médula Espinal (Técnica Argéntica 400x)",
    stain: "Impregnación Argéntica",
    magnification: "400x",
    category: "Médula Espinal",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%204%20Fotomicrografia%20%20medula%20espinal%20argentica%20400x%20_1_.jpg",
    description: "Alta resolución de motoneurona alfa medular. Se distinguen las neurofibrillas intracitoplasmáticas, el cono axónico desprovisto de gránulos y prolongaciones ramificadas."
  },
  {
    id: 5,
    num: 5,
    title: "Fotomicrografía de Corteza Cerebelosa (H&E 400x)",
    stain: "Hematoxilina y Eosina",
    magnification: "400x",
    category: "Cerebelo",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%205%20Fotomicrografia%20cerebelo%20hematoxilina%20eosina%20400x.jpg",
    description: "Transición entre la capa molecular y la capa granular del cerebelo. Se aprecian los pericariones piriformes de las células de Purkinje alineados en una monocapa característica."
  },
  {
    id: 6,
    num: 6,
    title: "Esquema Estructural de Fibra Nerviosa",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Nervio Periférico",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%206%20Esquema%20Fibra%20nerviosa.JPG",
    description: "Ilustración esquemática del cilindroeje (axón), axolema, vaina de mielina formada por capas concéntricas de membrana plasmática de la célula de Schwann y neurolema."
  },
  {
    id: 7,
    num: 7,
    title: "Esquema de Fibra Nerviosa y Nodos de Ranvier",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Nervio Periférico",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%207%20esquema%20fibra%20nerviosa.JPG",
    description: "Representación didáctica de los segmentos internodales y las interrupciones periódicas de la vaina mielínica (nodos de Ranvier) que permiten la conducción saltatoria del potencial de acción."
  },
  {
    id: 8,
    num: 8,
    title: "Diagrama Morfofuncional de Fibra Mielínica",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Nervio Periférico",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%208%20Fibra%20nerviosa%20mielinica.JPG",
    description: "Estructura tridimensional de una fibra nerviosa periférica mielinizada mostrando la envoltura de endoneuro circundante y la disposición de los núcleos de las células de Schwann."
  },
  {
    id: 9,
    num: 9,
    title: "Fotomicrografía de Nervio Periférico Longitudinal (200x)",
    stain: "Hematoxilina y Eosina",
    magnification: "200x",
    category: "Nervio Periférico",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%209%20fotomicrografia%20nervio%20perif%20long%20200x.jpg",
    description: "Corte longitudinal de fascículo nervioso periférico. Las fibras nerviosas presentan un curso ondulado característico con núcleos alargados de células de Schwann y fibroblastos endoneurales."
  },
  {
    id: 10,
    num: 10,
    title: "Fotomicrografía de Nervio Periférico Longitudinal (400x)",
    stain: "Hematoxilina y Eosina",
    magnification: "400x",
    category: "Nervio Periférico",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2010%20Fotomicrografia%20nervio%20perif%20long%20400x.jpg",
    description: "Mayor aumento del corte longitudinal de nervio periférico evidenciando los espacios claros dejados por los lípidos mielínicos disueltos durante la preparación técnica."
  },
  {
    id: 11,
    num: 11,
    title: "Fotomicrografía de Nervio Periférico Longitudinal (800x)",
    stain: "Hematoxilina y Eosina",
    magnification: "800x",
    category: "Nervio Periférico",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2011%20Fotomicrografia%20nervio%20perif%20long%20800x.jpg",
    description: "Detalle ultraestructural al microscopio óptico a 800x de un nodo de Ranvier y la relación axón-célula de Schwann en una fibra mielínica madura."
  },
  {
    id: 12,
    num: 12,
    title: "Fotomicrografía de Ganglio Craneoespinal (Argéntica 40x)",
    stain: "Impregnación Argéntica",
    magnification: "40x",
    category: "Ganglio Nervioso",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2012%20Fotomicrografia%20ganglio%20nervioso%20craneorspinal%20argentica%2040x.jpg",
    description: "Vista panorámica de ganglio de la raíz dorsal (sensitivo). Se observan los acúmulos esféricos de neuronas pseudounipolares agrupadas en la periferia del ganglio y los tractos centrales de fibras."
  },
  {
    id: 13,
    num: 13,
    title: "Fotomicrografía de Ganglio Craneoespinal (Argéntica 400x)",
    stain: "Impregnación Argéntica",
    magnification: "400x",
    category: "Ganglio Nervioso",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2013%20Fotomicrografia%20ganglio%20craneoespinal%20argentica%20400x.jpg",
    description: "Detalle a 400x de neuronas ganglionares pseudounipolares teñidas con sales de plata. Se evidencia la emergencia en 'T' del axón único y la corona de células satélites que las rodea."
  },
  {
    id: 14,
    num: 14,
    title: "Fotomicrografía de Ganglio Nervioso (Argéntica 400x)",
    stain: "Impregnación Argéntica",
    magnification: "400x",
    category: "Ganglio Nervioso",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2014%20Fotomicrografia%20ganglio%20nervioso%20argentica%20400x.jpg",
    description: "Corte de ganglio con tinción argéntica contrastando las fibras nerviosas que ingresan y egresan del ganglio sensorial frente al estroma conectivo."
  },
  {
    id: 15,
    num: 15,
    title: "Fotomicrografía de Ganglio Nervioso (H&E 200x)",
    stain: "Hematoxilina y Eosina",
    magnification: "200x",
    category: "Ganglio Nervioso",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2015%20Fotomicrografia%20%20ganglio%20nervioso%20Hematoxilina%20eosina%20200x.jpg",
    description: "Ganglio sensitivo con tinción universal H&E. Se identifican grandes cuerpos neuronales esféricos con núcleos centrales vesiculosos y cápsula de células gliocíticas satélites (anficitos)."
  },
  {
    id: 16,
    num: 16,
    title: "Fotomicrografía de Ganglio Nervioso (H&E 400x)",
    stain: "Hematoxilina y Eosina",
    magnification: "400x",
    category: "Ganglio Nervioso",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2016%20Fotomicrografia%20%20ganglio%20nervioso%20Hematoxilina%20eosina%20400x.jpg",
    description: "Detalle a 400x de neurona pseudounipolar rodeada completamente por la capa de células capsulares satélites y tejido conjuntivo endoganglionar vascularizado."
  },
  {
    id: 17,
    num: 17,
    title: "Esquema de Receptores de Sensibilidad General (Corpúsculos)",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Receptores Sensoriales",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2017%20esquema%20receptor%20sensibilidad%20general.JPG",
    description: "Morfología comparativa de mecanorreceptores encapsulados: Corpúsculo de Meissner (tacto fino), Corpúsculo de Pacini (presión y vibración) y terminaciones libres intraepidérmicas."
  },
  {
    id: 18,
    num: 18,
    title: "Esquema de Receptores de Ruffini, Krause y Huso Neuromuscular",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Receptores Sensoriales",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2018%20Esquema%20receptor%20sensibilidad%20general.JPG",
    description: "Esquemas didácticos de corpúsculos de Ruffini (calor y estiramiento tisular), bulbos terminales de Krause (frío) y husos neuromusculares propioceptivos."
  },
  {
    id: 19,
    num: 19,
    title: "Fotomicrografía de Nervio Periférico Transversal (100x)",
    stain: "Hematoxilina y Eosina",
    magnification: "100x",
    category: "Nervio Periférico",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2019%20Fotomicrografia%20nervio%20perif%20transv%20100x.jpg",
    description: "Corte transversal panorámico de tronco nervioso mostrando los tres compartimentos de tejido conectivo: Epineuro (externo), Perineuro (delimitando fascículos) y Endoneuro (entre axones)."
  },
  {
    id: 20,
    num: 20,
    title: "Fotomicrografía de Nervio Periférico Transversal (400x)",
    stain: "Hematoxilina y Eosina",
    magnification: "400x",
    category: "Nervio Periférico",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2020%20Fotomicrografia%20nervio%20perif%20transv%20400x.jpg",
    description: "Detalle a 400x de fibras nerviosas en corte transversal. El punto acidófilo central corresponde al axón rodeado por el halo claro circular que ocupaba la vaina de mielina."
  },
  {
    id: 21,
    num: 21,
    title: "Esquema de Configuración Interna de la Médula Espinal",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Médula Espinal",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2021%20esquema%20medula%20espinal.JPG",
    description: "Diagrama en 'H' de la médula espinal distinguiendo astas anteriores (motoras somáticas), astas posteriores (sensitivas), comisura gris, conducto del epéndimo y cordones de sustancia blanca."
  },
  {
    id: 22,
    num: 22,
    title: "Fotomicrografía de Médula Espinal (Argéntica 400x)",
    stain: "Impregnación Argéntica",
    magnification: "400x",
    category: "Médula Espinal",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2022%20Medula%20espinal%20argentica%20400x.jpg",
    description: "Campo de sustancia gris medular mostrando el denso neuropilo formado por prolongaciones neuronales y gliales impregnadas selectivamente con sales de plata."
  },
  {
    id: 23,
    num: 23,
    title: "Fotomicrografía de Médula Espinal (Argéntica 800x)",
    stain: "Impregnación Argéntica",
    magnification: "800x",
    category: "Médula Espinal",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2023%20medula%20espinal%20argentica%20800x.jpg",
    description: "Gran aumento (800x) enfocado en sinapsis por contacto y terminales boutons sobre el soma y dendritas de neuronas radiculares medulares."
  },
  {
    id: 24,
    num: 24,
    title: "Fotomicrografía de Sustancia Blanca Medular (Argéntica 800x)",
    stain: "Impregnación Argéntica",
    magnification: "800x",
    category: "Médula Espinal",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2024%20medula%20espinal%20argentica%20sust%20blanca%20800x.jpg",
    description: "Corte de cordón blanco medular. Se identifican axones mielinizados que viajan longitudinalmente en los tractos ascendentes y descendentes medulares."
  },
  {
    id: 25,
    num: 25,
    title: "Fotomicrografía de Célula de Purkinje (Impregnación Argéntica)",
    stain: "Impregnación Argéntica",
    magnification: "400x",
    category: "Cerebelo",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2025%20Fotomicrografia%20celula%20Purkinje%20plata.jpg",
    description: "Neurona de Purkinje cerebelosa teñida con método argéntico de Golgi. Destaca el espectacular y frondoso árbol dendrítico ramificado en un único plano hacia la capa molecular."
  },
  {
    id: 26,
    num: 26,
    title: "Fotomicrografía de Corteza Cerebelosa (H&E 500x)",
    stain: "Hematoxilina y Eosina",
    magnification: "500x",
    category: "Cerebelo",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2026%20fotomicrografia%20cerebelo%20hematoxilina%20eosina%20500x.jpg",
    description: "Estratigrafía cerebelosa con H&E: capa molecular externa eosinófila con escasas células en cesta, capa intermedia de Purkinje y capa de granos intensamente basófila por miles de diminutos somas."
  },
  {
    id: 27,
    num: 27,
    title: "Esquema Citoarquitectónico de la Corteza Cerebral",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Cerebro / Corteza",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2027%20Esquema%20Corteza%20cerebral.JPG",
    description: "Diagrama de las seis capas de la isocorteza cerebral: I. Molecular, II. Granular externa, III. Piramidal externa, IV. Granular interna, V. Piramidal interna (células gigantes de Betz) y VI. Multiforme."
  },
  {
    id: 28,
    num: 28,
    title: "Esquema de las Meninges Craneoespinales",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Meninges",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2028%20Esquema%20meninges.JPG",
    description: "Disposición anatómica de las meninges: Duramadre (paquimeninge fibrosa), Aracnoides con sus trabéculas y espacio subaracnoideo con LCE, y Piamadre íntimamente adherida a la superficie neural."
  },
  {
    id: 29,
    num: 29,
    title: "Esquema de Senos Venosos y Vellosidades Aracnoideas",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Meninges",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2029%20esquema%20meninges.JPG",
    description: "Ilustración de la reabsorción del líquido cerebroespinal a través de las granulaciones aracnoideas (vellosidades de Pacchioni) hacia el seno sagital superior."
  },
  {
    id: 30,
    num: 30,
    title: "Esquema del Botón y Receptor Gustativo",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Sentidos Especiales (Gusto)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2030%20Esquema%20Receptor%20Gustativo.JPG",
    description: "Estructura del corpúsculo gustativo intrapapilar mostrando el poro gustativo apical, células sensoriales gustativas con microvellosidades, células de sostén y células basales regenerativas."
  },
  {
    id: 31,
    num: 31,
    title: "Fotomicrografía de Corpúsculo Gustativo (H&E 400x)",
    stain: "Hematoxilina y Eosina",
    magnification: "400x",
    category: "Sentidos Especiales (Gusto)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2031%20Foromicrografia%20%20corpusculo%20gustativos%20hematoxilina%20eosina%20400x.jpg",
    description: "Corte de papila lingual circunvalada mostrando los botones gustativos ovoides pálidos inmersos en el epitelio plano estratificado no queratinizado de las paredes del surco papilar."
  },
  {
    id: 32,
    num: 32,
    title: "Esquema de la Mucosa y Receptor Olfatorio",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Sentidos Especiales (Olfato)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2032%20esquema%20Receptor%20Olfatorio.JPG",
    description: "Epitelio olfatorio neurosensorial con neuronas olfatorias bipolares, cilios olfatorios apicales con receptores odoríferos acoplados a proteína G, células sustentaculares y glándulas de Bowman."
  },
  {
    id: 33,
    num: 33,
    title: "Esquema General del Globo Ocular",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Órgano de la Visión (Ojo)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2033%20Esquema%20Globo%20Ocular.JPG",
    description: "Corte sagital del ojo humano señalando córnea, esclera, coroides, cuerpo ciliar, iris, cristalino, cámara anterior, cámara posterior, retina, disco óptico y fóvea central."
  },
  {
    id: 34,
    num: 34,
    title: "Esquema de las 10 Capas de la Retina",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Órgano de la Visión (Ojo)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2034%20Esquema%20capas%20de%20la%20Retina.JPG",
    description: "Estratigrafía retiniana de externa a interna: 1. Epitelio pigmentario, 2. Conos y bastones, 3. Limitante externa, 4. Nuclear externa, 5. Plexiforme externa, 6. Nuclear interna, 7. Plexiforme interna, 8. Células ganglionares, 9. Fibras del nervio óptico, 10. Limitante interna."
  },
  {
    id: 35,
    num: 35,
    title: "Fotomicrografía de Capas de la Retina (H&E 100x)",
    stain: "Hematoxilina y Eosina",
    magnification: "100x",
    category: "Órgano de la Visión (Ojo)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2035%20Fotomicrografia%20capas%20de%20la%20%20Retina%20hematoxilina%20eosina%20100x.jpg",
    description: "Corte histológico panorámico de pared ocular mostrando la capa de epitelio pigmentario con gránulos de melanina y la alternancia de capas nucleares y plexiformes de la retina neural."
  },
  {
    id: 36,
    num: 36,
    title: "Fotomicrografía de Capas de la Retina (H&E 250x)",
    stain: "Hematoxilina y Eosina",
    magnification: "250x",
    category: "Órgano de la Visión (Ojo)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2036%20Capas%20Retina%20hematoxilina%20eosina%20250x.jpg",
    description: "Mayor aumento donde se identifican claramente los núcleos de conos y bastones (nuclear externa), los núcleos de células bipolares, horizontales y amacrinas (nuclear interna) y las neuronas ganglionares."
  },
  {
    id: 37,
    num: 37,
    title: "Esquema Fotorreceptor: Fotorreceptores Bastones",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Órgano de la Visión (Ojo)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2037%20Esquema%20Bastones.JPG",
    description: "Estructura del bastón retiniano: segmento externo con discos membranosos apilados ricos en rodopsina para la visión escotópica (en penumbra), pedículo conectivo y cuerpo celular."
  },
  {
    id: 38,
    num: 38,
    title: "Esquema Fotorreceptor: Fotorreceptores Conos",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Órgano de la Visión (Ojo)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2038%20Esquema%20Conos.JPG",
    description: "Estructura del cono retiniano: segmento externo cónico con fotopsinas (yodopsinas) para la visión fotópica diurna y la discriminación de colores (rojo, verde y azul en la fóvea)."
  },
  {
    id: 39,
    num: 39,
    title: "Esquema Anatómico del Oído Interno (Laberinto)",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Órgano de Audición y Equilibrio",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2039%20esquema%20del%20oido%20interno.JPG",
    description: "Laberinto óseo y laberinto membranoso: caracol o cóclea con sus tres rampas, vestíbulo (utrículo y sáculo) y los tres canales semicirculares dispuestos en los tres planos del espacio."
  },
  {
    id: 40,
    num: 40,
    title: "Esquema de Máculas Vestibulares y Crestas Ampollares",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Órgano de Audición y Equilibrio",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2040%20Esquema%20Maculas%20y%20Crestas.JPG",
    description: "Receptores del equilibrio: mácula del utrículo y sáculo con su membrana otolítica (otoconias) y cresta ampollar con su cúpula gelatinosa sensible al flujo endolinfático."
  },
  {
    id: 41,
    num: 41,
    title: "Esquema de Células Sensoriales Ciliadas Vestibulares",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Órgano de Audición y Equilibrio",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2041%20esquema%20Celulas%20sensoriales%20receptor%20vestibular.JPG",
    description: "Morfología de las células ciliadas tipo I (en cáliz) y tipo II (cilíndricas), mostrando el quinetocilio y los estereocilios graduados cuya deflexión modula la despolarización celular."
  },
  {
    id: 42,
    num: 42,
    title: "Esquema Histológico del Órgano Espiral de Corti",
    stain: "Esquema Anatómico",
    magnification: "Esquema",
    category: "Órgano de Audición y Equilibrio",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2042%20Esquema%20del%20organo%20de%20Corti.JPG",
    description: "Detalle del Órgano de Corti asentado sobre la membrana basilar: células ciliadas internas y externas, membrana tectoria, pilares de Corti (túnel de Corti) y células de sostén (Deiters y Hensen)."
  },
  {
    id: 43,
    num: 43,
    title: "Fotomicrografía de Órgano de Corti (H&E 400x)",
    stain: "Hematoxilina y Eosina",
    magnification: "400x",
    category: "Órgano de Audición y Equilibrio",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2043Fotomicrografia%20Organo%20de%20Corti%20hematoxilina%20eosina%20400x.jpg",
    description: "Corte de la rampa media o conducto coclear mostrando el órgano espiral de Corti, la membrana basilar vibrátil y la estria vascular productora de endolinfa rica en potasio."
  },
  {
    id: 44,
    num: 44,
    title: "Fotomicrografía de Órgano de Corti (H&E 200x)",
    stain: "Hematoxilina y Eosina",
    magnification: "200x",
    category: "Órgano de Audición y Equilibrio",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIOS%20HISTOLOGICO/Figura%2044%20Fotomicrografia%20Organo%20de%20Corti%20hematoxilina%20eosina%20200x.jpg",
    description: "Sección helicoidal del caracol a 200x exhibiendo la rampa vestibular, la rampa timpánica, el ganglio espiral de Corti en el modiolo y la rampa coclear intermedia."
  }
];

var LAMINARIO_MALFORMACIONES_DATA = [
  {
    id: 1,
    title: "Anencefalia (Meroanencefalia)",
    system: "Sistema Nervioso Central (Tubo Neural)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/anencefalia.JPG",
    description: "Falla catastrófica en el cierre del neuroporo anterior/craneal alrededor del día 24-26 de gestación. Ausencia de bóveda craneal (acrania) y degeneración del tejido telencefálico expuesto al líquido amniótico (área cerebrovasculosa)."
  },
  {
    id: 2,
    title: "Niño con Anencefalia",
    system: "Sistema Nervioso Central (Tubo Neural)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Nino%20con%20anencefalia.jpg",
    description: "Presentación clínica neonatal de anencefalia: ausencia de calota craneana, protrusión ocular ('ojos saltones o de sapo') por cavidades orbitarias poco profundas e implantación baja de orejas."
  },
  {
    id: 3,
    title: "Holoacrania o Acrania Completa",
    system: "Sistema Nervioso Central (Tubo Neural)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Holoacrania%20o%20acrania._ausencia%20completa%20de%20craneo_.jpg",
    description: "Defecto severo caracterizado por la ausencia completa de los huesos de la bóveda craneal debido a falla en la migración mesenquimatosa periencefálica asociada a defectos del neuroectodermo."
  },
  {
    id: 4,
    title: "Acrania Congénita",
    system: "Sistema Nervioso Central (Tubo Neural)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/ACRANI_2.JPG",
    description: "Espécimen patológico que evidencia la falta total de desarrollo del hueso frontal, parietales y porción escamosa del occipital, con exposición directa de la masa encefálica amorfa."
  },
  {
    id: 5,
    title: "Encefalocele Frontal",
    system: "Sistema Nervioso Central (Tubo Neural)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/encefalocele%20frontal.JPG",
    description: "Herniación del tejido encefálico y meninges a través de un defecto óseo del cráneo en la región frontal anterior (craneosinostosis/disrafismo craneal anterior)."
  },
  {
    id: 6,
    title: "Meningocele Occipital",
    system: "Sistema Nervioso Central (Tubo Neural)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/meningocele%20occipital.JPG",
    description: "Protrusión de las meninges rellenas de líquido cerebroespinal a través de un defecto óseo occipital, sin inclusión de tejido encefálico en el interior de la bolsa herniaria."
  },
  {
    id: 7,
    title: "Paciente con Meningocele",
    system: "Sistema Nervioso Central (Tubo Neural)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Paciente%20con%20meningocele.jpg",
    description: "Caso clínico de paciente pediátrico con masa fluctuante meníngea recubierta por piel íntegra en la línea media lumbosacra / dorsal posterior."
  },
  {
    id: 8,
    title: "Mielomeningocele e Hidrocefalia Secundaria",
    system: "Sistema Nervioso Central (Tubo Neural)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/mielomeningocele%20y%202ria%20hidrocefalia.JPG",
    description: "Forma grave de espina bífida quística abierta por fallo en el cierre del neuroporo posterior. La médula espinal y raíces nerviosas se encuentran atrapadas en la pared del saco, coexistiendo con malformación de Chiari II e hidrocefalia."
  },
  {
    id: 9,
    title: "Hendidura Facial Unilateral Grave (Labio y Paladar Hendido)",
    system: "Cabeza, Cuello y Cara",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Hendidura%20facial%20unilateral%20grave.jpg",
    description: "Falta de fusión entre el proceso maxilar prominente y el proceso nasal medial en la 6ta a 7ma semana de desarrollo embrionario, con extensión hacia el suelo de la fosa nasal y paladar primario."
  },
  {
    id: 10,
    title: "Tetralogía de Fallot",
    system: "Sistema Cardiovascular",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/tetralogia%20de%20fallot.JPG",
    description: "Cardiopatía congénita cianógena clásica provocada por división desigual del tronco arterioso y cono por desplazamiento anterosuperior del tabique conotruncal. Se compone de: 1. Estenosis infundibular pulmonar, 2. Comunicación interventricular (CIV), 3. Cabalgamiento aórtico sobre el defecto, y 4. Hipertrofia ventricular derecha compensatoria."
  },
  {
    id: 11,
    title: "Coartación de la Aorta",
    system: "Sistema Cardiovascular",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/coartacion%20de%20la%20aorta.JPG",
    description: "Estrechamiento significativo de la luz de la aorta torácica, usualmente situado distal al origen de la arteria subclavia izquierda cerca de la inserción del ligamento arterioso (tipo yuxtaductal)."
  },
  {
    id: 12,
    title: "Conducto Arterioso Persistente (CAP)",
    system: "Sistema Cardiovascular",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/conducto%20arterioso%20persistente.JPG",
    description: "Fallo en el cierre fisiológico postnatal del sexto arco aórtico izquierdo (ductus arteriosus) que normalmente conecta la arteria pulmonar izquierda con el arco aórtico, produciendo un shunt izquierda-derecha continuo."
  },
  {
    id: 13,
    title: "Defectos Septales Atriales (CIA)",
    system: "Sistema Cardiovascular",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/defectos%20septales%20atriales.JPG",
    description: "Comunicación interauricular por reabsorción excesiva del septum primum o hipoplasia del septum secundum dejando un agujero oval permeable persistente de gran tamaño."
  },
  {
    id: 14,
    title: "Defectos Septales Arteriales y Troncales",
    system: "Sistema Cardiovascular",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/defectos%20septales%20arteriales.jpg",
    description: "Persistencia del tronco arterioso común por ausencia total de tabicación aortopulmonar por falta de migración de células de las crestas neurales cardíacas."
  },
  {
    id: 15,
    title: "Defecto Septal Interventricular Membranoso (CIV)",
    system: "Sistema Cardiovascular",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/defecto%20septal%20interventricular%20membranoso.JPG",
    description: "Cardiopatía acianógena más común. Falta de desarrollo de la porción membranosa del tabique interventricular derivada del tejido de las almohadillas endocárdicas fusionadas."
  },
  {
    id: 16,
    title: "Anomalías del Arco Aórtico",
    system: "Sistema Cardiovascular",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/anomalias%20del%20arco%20aortico.JPG",
    description: "Variantes patológicas y anomalías posicionales derivadas de la persistencia o regresión atípica de los 6 pares de arcos aórticos faríngeos embrionarios."
  },
  {
    id: 17,
    title: "Cayado Aórtico Doble",
    system: "Sistema Cardiovascular",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/cayado%20aortico%20doble.JPG",
    description: "Persistencia anómala de la porción distal de la aorta dorsal derecha formando un anillo vascular completo que comprime la tráquea y el esófago provocando estridor y disfagia."
  },
  {
    id: 18,
    title: "Arco Aórtico Derecho / Interrumpido",
    system: "Sistema Cardiovascular",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Arco%20Aortico.jpg",
    description: "Esquema morfológico de variantes vasculares mayores del arco aórtico y nacimiento anómalo de los troncos supraaórticos."
  },
  {
    id: 19,
    title: "Atresia Tricuspídea y Defectos Septales Compensatorios",
    system: "Sistema Cardiovascular",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/atresia%20tricusp%20mas%20defectos%20septales%20atriales%20e%20interventriculares%20compensatorios.JPG",
    description: "Obliteración completa del orificio auriculoventricular derecho con hipoplasia ventricular derecha, requiriendo obligatoriamente CIA y CIV para la viabilidad circulatoria."
  },
  {
    id: 20,
    title: "Estenosis Pulmonar Derecha / Valvular",
    system: "Sistema Cardiovascular",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/estenosis%20pulmonar%20derecha.JPG",
    description: "Fusión o engrosamiento de las valvas semilunares de la arteria pulmonar reduciendo el flujo sanguíneo hacia el lecho vascular pulmonar."
  },
  {
    id: 21,
    title: "Anomalías de Vena Cava (Persistencia Vena Cava Izquierda 1)",
    system: "Sistema Cardiovascular",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/vena%20cava1.jpg",
    description: "Fallo en la regresión de la vena cardinal anterior izquierda que desemboca anómalamente en el seno coronario dilatado de la aurícula derecha."
  },
  {
    id: 22,
    title: "Anomalías de Vena Cava (Duplicación Vena Cava Inferior 2)",
    system: "Sistema Cardiovascular",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/vena%20cava2.jpg",
    description: "Falta de anastomosis entre las venas subcardinales y supracardinales embrionarias dando origen a doble vena cava inferior por debajo del nivel renal."
  },
  {
    id: 23,
    title: "Riñón en Herradura (Fusión Renal)",
    system: "Sistema Urogenital",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/rinon%20en%20herradura.JPG",
    description: "Fusión de los polos inferiores de ambos riñones metanéfricos durante su ascenso en la pelvis falsa. El istmo parenquimatoso queda atrapado bajo el origen de la arteria mesentérica inferior."
  },
  {
    id: 24,
    title: "Riñón Pélvico (Ectopia Renal)",
    system: "Sistema Urogenital",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/rinon%20pelvico.JPG",
    description: "Fallo en el ascenso del riñón definitivo desde su sitio embrionario en la pelvis verdadera hacia la fosa lumbar retroperitoneal."
  },
  {
    id: 25,
    title: "Riñón Poliquístico Congénito (Enfermedad Poliquística)",
    system: "Sistema Urogenital",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/rinon%20poliquistico.JPG",
    description: "Alteración genética que provoca la dilatación quística progresiva de los túbulos colectores y nefronas debido a fallas en la interacción recíproca entre la yema ureteral y el blastema metanéfrico."
  },
  {
    id: 26,
    title: "Duplicación Completa del Uréter",
    system: "Sistema Urogenital",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/duplicacion%20completa%20del%20ureter.JPG",
    description: "Nacimiento precoz de dos yemas ureterales independientes a partir del conducto mesonéfrico (de Wolff), originando dos uréteres completos que drenan independientemente en la vejiga o sitio ectópico."
  },
  {
    id: 27,
    title: "Duplicación Parcial del Uréter",
    system: "Sistema Urogenital",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/duplicacion%20parcial%20del%20ureter.JPG",
    description: "Bifurcación temprana de una única yema ureteral antes de penetrar en el blastema metanéfrico, dando un uréter bífido en 'Y' con un solo orificio vesical común."
  },
  {
    id: 28,
    title: "Duplicación Ureteral Clínica Completa",
    system: "Sistema Urogenital",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Duplicacion%20Completa%20del%20Uretre.jpg",
    description: "Estudio anatómico y radiográfico mostrando la duplicidad pieloureteral completa según la regla de Weigert-Meyer."
  },
  {
    id: 29,
    title: "Duplicación Ureteral Parcial Radiológica",
    system: "Sistema Urogenital",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Duplicacion%20Parcial%20del%20Uretre.jpg",
    description: "Urograma excretor demostrando la unión proximal de los conductos pieloureterales en un trayecto vesical común."
  },
  {
    id: 30,
    title: "Hipospadias Congénito",
    system: "Sistema Urogenital",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/hipospadias.JPG",
    description: "Fusión incompleta de los pliegues uretrales en la superficie ventral del pene debido a una insuficiente estimulación androgénica fetal, dejando el meato uretral ectópico ventral."
  },
  {
    id: 31,
    title: "Hipospadias Clínico Grado I - II",
    system: "Sistema Urogenital",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Hipospadias1.jpg",
    description: "Aspecto clínico del glande y cuerpo esponjoso con desembocadura del meato en la cara ventral coronal o subcoronal."
  },
  {
    id: 32,
    title: "Micropene Congénito",
    system: "Sistema Urogenital",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Micropene%201.jpg",
    description: "Longitud fálica significativamente menor a 2.5 desviaciones estándar para la edad gestacional por insuficiencia androgénica o hipopituitarismo primario."
  },
  {
    id: 33,
    title: "Hidrocele Congénito Infantil",
    system: "Sistema Urogenital",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Hidocele.jpg",
    description: "Acumulación de líquido peritoneal en la cavidad de la túnica vaginal del testículo por falta de obliteración del conducto peritoneovaginal (processus vaginalis)."
  },
  {
    id: 34,
    title: "Útero Bicorne",
    system: "Sistema Urogenital",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/utero%20bicorne.JPG",
    description: "Fusión incompleta de los extremos craneales de los conductos paramesonéfricos (de Müller), resultando en un útero con dos cuernos que desembocan en un solo cérvix."
  },
  {
    id: 35,
    title: "Útero y Vagina Dobles (Didelfo)",
    system: "Sistema Urogenital",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/utero%20y%20vagina%20dobles.JPG",
    description: "Fallo total en la fusión de los conductos de Müller a lo largo de toda su extensión, produciendo dos cuerpos uterinos independientes, dos cérvix y tabique vaginal longitudinal completo."
  },
  {
    id: 36,
    title: "Atresia del Cérvix",
    system: "Sistema Urogenital",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/atresia%20del%20cervix.JPG",
    description: "Falta de canalización del cordón uterovaginal distal en la porción cervical provocando obstrucción anatómica del tracto de salida uterino."
  },
  {
    id: 37,
    title: "Atresia Vaginal Congénita",
    system: "Sistema Urogenital",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Atresia%20Vaginal.jpg",
    description: "Fallo en la vacuolización y recanalización de la placa vaginal formada a partir de los bulbos sinovaginales del seno urogenital."
  },
  {
    id: 38,
    title: "Onfalocele Congénito",
    system: "Aparato Digestivo y Pared Abdominal",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/onfalocele.JPG",
    description: "Persistencia de la herniación fisiológica de las asas intestinales en el cordón umbilical más allá de la semana 10. Las vísceras quedan cubiertas por una membrana traslúcida de amnios y peritoneo."
  },
  {
    id: 39,
    title: "Hernia Diafragmática Congénita (Bochdalek)",
    system: "Aparato Digestivo y Pared Abdominal",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/hernia%20diafragmatica.JPG",
    description: "Fallo en el cierre de la membrana pleuroperitoneal posterolateral (generalmente izquierda) que permite el paso de vísceras abdominales al tórax provocando hipoplasia pulmonar grave."
  },
  {
    id: 40,
    title: "Sitios Anatómicos Frecuentes de Hernias Diafragmáticas",
    system: "Aparato Digestivo y Pared Abdominal",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/sitios%20mas%20comunes%20de%20las%20hernias%20diafragmaticas.JPG",
    description: "Esquema que ilustra el trígono lumbocostal (foramen de Bochdalek posterolateral), el trígono esternocostal (foramen de Morgagni retroesternal) y el hiato esofágico."
  },
  {
    id: 41,
    title: "Páncreas Anular",
    system: "Aparato Digestivo y Pared Abdominal",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/pancreas%20anular.JPG",
    description: "La yema pancreática ventral bífida migra en direcciones opuestas alrededor de la segunda porción del duodeno, formando un anillo glandular constrictor que causa estenosis/duodenal."
  },
  {
    id: 42,
    title: "Posiciones Anormales y Ectopias de Glándulas Parotídeas",
    system: "Cabeza, Cuello y Cara",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/posiciones%20anormales%20de%20las%20gland.parotideas.JPG",
    description: "Alteraciones en el brote y ramificación epitelial de la cavidad bucal primitiva que forman conductos accesorios o lóbulos ectópicos glandulares."
  },
  {
    id: 43,
    title: "Niña con Amelia Unilateral y Focomelia",
    system: "Aparato Locomotor y Extremidades",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Nina%20con%20amelia%20unilateral.Paciente%20con%20un%20tipo%20de%20meromelia%20denominado%20focomelia.jpg",
    description: "Defectos por reducción de extremidades: Amelia (ausencia completa de un miembro) y Focomelia (ausencia de segmentos largos proximales con manos o pies insertados directamente al tronco)."
  },
  {
    id: 44,
    title: "Polidactilia y Sindactilia en Extremidades",
    system: "Aparato Locomotor y Extremidades",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Polidactilia_%20dedos%20extra.Sindactilia_%20dedos%20fusionados.Hendidura%20del%20pie.jpg",
    description: "Polidactilia (presencia de dedos supernumerarios por inducción anómala de la zona de actividad polarizante ZPA) y Sindactilia (fusión de dedos por falla en la apoptosis interdigital mediada por BMP-4)."
  },
  {
    id: 45,
    title: "Polidactilia Preaxial / Postaxial",
    system: "Aparato Locomotor y Extremidades",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/polidactilia.JPG",
    description: "Duplicación digital aislada en mano o pie con presencia de falanges bien formadas o rudimentos dérmicos digitiformes."
  },
  {
    id: 46,
    title: "Sindactilia Cutánea / Ósea",
    system: "Aparato Locomotor y Extremidades",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/sindactilia.JPG",
    description: "Falta de separación de los rayos digitales durante la 7ma y 8va semana embrionaria con persistencia de membranas interdigitales."
  },
  {
    id: 47,
    title: "Bandas Amnióticas y Amputaciones Congénitas",
    system: "Aparato Locomotor y Extremidades",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Amputaciones%20de%20dedos%20como%20consecuencia%20de%20la%20fonnacion%20de%20bandas%20amnioticas.jpg",
    description: "Secuencia de bridas amnióticas: roturas precoces del amnios que generan hebras fibrosas que estrangulan, constriñen y amputan dedos o segmentos enteros de extremidades fetales in útero."
  },
  {
    id: 48,
    title: "Sirenomelia (Síndrome de Regresión Caudal)",
    system: "Aparato Locomotor y Extremidades",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/sirenomelia.JPG",
    description: "Grave anomalía del mesodermo caudal antes del día 28 que provoca fusión de ambas extremidades inferiores en una sola estructura ('cola de sirena'), agenesia renal bilateral y ano imperforado."
  },
  {
    id: 49,
    title: "Acondroplasia Infantil y Juvenil",
    system: "Aparato Locomotor y Extremidades",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Nino%20de%203%20meses%20con%20acondroplasia.Acondroplasia%20en%20una%20nina%20de%2015%20anos.jpg",
    description: "Forma más común de enanismo desproporcionado por mutación autosómica dominante con ganancia de función en el receptor FGFR3, alterando la osificación endocondral de huesos largos con macrocefalia."
  },
  {
    id: 50,
    title: "Pie Zambo Congénito (Pie Equinovaro)",
    system: "Aparato Locomotor y Extremidades",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/pie%20zambo.JPG",
    description: "Deformidad musculoesquelética caracterizada por inversión, aducción del antepié y flexión plantar (equino) por oligohidramnios o restricciones mecánicas posicionales uterinas."
  },
  {
    id: 51,
    title: "Pie Hendido (Mano / Pie en Pinza de Langosta)",
    system: "Aparato Locomotor y Extremidades",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/pie%20hendido.JPG",
    description: "Ectrodactilia: ausencia de los rayos digitales centrales (2do, 3ro o 4to rayo) con una hendidura profunda en 'V' en la parte media de la mano o pie."
  },
  {
    id: 52,
    title: "Costilla Cervical en Horquilla y Hemivértebra",
    system: "Aparato Locomotor y Extremidades",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Costilla%20cervical%20en%20orquilla.Hemivertebra.jpg",
    description: "Anomalía segmentaria vertebral debida a la formación de solo la mitad del cuerpo vertebral por fallo en un centro de condrificación, asociándose a costilla supernumeraria en C7."
  },
  {
    id: 53,
    title: "Escoliosis Congénita por Hemivértebras",
    system: "Aparato Locomotor y Extremidades",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/escoliosis%20congenita.jpg",
    description: "Desviación lateral y rotacional severa de la columna vertebral producida por defectos primarios en la segmentación o formación de los somitas embrionarios."
  },
  {
    id: 54,
    title: "Deformidad Cifoescoliótica",
    system: "Aparato Locomotor y Extremidades",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Deformidad%20cifoescoliotica.jpg",
    description: "Curvatura anómala combinada del plano anteroposterior (cifosis) y lateral de la columna con compromiso restrictivo de la caja torácica."
  },
  {
    id: 55,
    title: "Espondilolistesis Congénita",
    system: "Aparato Locomotor y Extremidades",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/Espondilolistesis.jpg",
    description: "Desplazamiento anterior patológico de un cuerpo vertebral sobre el subyacente (usualmente L5 sobre S1) por defecto o displasia de la pars interarticularis."
  },
  {
    id: 56,
    title: "Fallo en la Fusión de Componentes del Esternón",
    system: "Aparato Locomotor y Extremidades",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/fallo%20en%20la%20fusion%20de%20lo%20componentes%20del%20esternon.JPG",
    description: "Hendidura esternal / fisura por falta de unión en la línea media de las dos barras esternales mesenquimatosas bilaterales en la semana 7."
  },
  {
    id: 57,
    title: "Teratoma Sacrococcígeo",
    system: "Sistema Nervioso Central (Tubo Neural)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/teratoma%20sacrococcigeo.JPG",
    description: "Tumor congénito originado por restos pluripotenciales de la línea primitiva que no degeneraron en la región caudal, conteniendo derivados de las 3 hojas germinativas (ectodermo, mesodermo y endodermo)."
  },
  {
    id: 58,
    title: "Defectos Craneales en Radiografía Pediátrica",
    system: "Sistema Nervioso Central (Tubo Neural)",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/RADIO_29.JPG",
    description: "Estudio radiológico que documenta fontanelas ampliamente abiertas, disostosis craneocleidocraneal y huesos suturales wormianos."
  },
  {
    id: 59,
    title: "Malformación Craneofacial Congénita",
    system: "Cabeza, Cuello y Cara",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/NINOC_1C.JPG",
    description: "Presentación clínica con dismorfismo craneofacial complejo, retrognatismo e hipotelorismo ocular."
  },
  {
    id: 60,
    title: "Caso Clínico de Dismorfología Neonatal",
    system: "Aparato Locomotor y Extremidades",
    src: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario%20_Malformaciones%20II_/9980.jpg",
    description: "Fotografía clínica de archivo de evaluación pediátrica neonatal en sala de cuidados perinatales ante anomalías congénitas múltiples."
  }
];

var LAMINARIOS_PPT_DATA = [
  {
    id: 1,
    title: "Laminario Completo de Morfofisiología Humana II",
    file: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/laminariodmorfoii-130613104602-phpapp02.pptx",
    format: "PPTX (Presentación de Diapositivas)",
    size: "39.4 MB",
    description: "Compendio integral en diapositivas con microfotografías, esquemas y cortes histológicos y anatómicos del sistema nervioso, analizadores sensoriales y sistema endocrino para Morfo II."
  },
  {
    id: 2,
    title: "Laminario Básico Ilustrado de Morfofisiología",
    file: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/Laminario-Basico.ppt",
    format: "PPT (Presentación)",
    size: "4.8 MB",
    description: "Guía visual resumida con los principales preparados de microscopía y esquemas representativos de los tejidos fundamentales y órganos neuroendocrinos."
  },
  {
    id: 3,
    title: "Laminario Anatómico de Morfología",
    file: "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Morfo%202/LAMINARIOS/LAMINARIO%20ANATOMICO/laminario%20de%20morfo%201.ppt",
    format: "PPT (Presentación)",
    size: "9.7 MB",
    description: "Atlas esquemático de anatomía regional y segmentaria complementario para el estudio de las vías de conducción, órganos efectores y relaciones topográficas."
  }
];
