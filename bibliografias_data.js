/**
 * Base de Datos de Bibliografías Médicas y Libros de Texto
 * Portal Educativo de Morfofisiología y Ciencias Médicas
 */

var BIBLIOGRAFIAS_DATA = [
  {
    "id": "harrison_vol1",
    "title": "Harrison: Principios de Medicina Interna (Volumen 1)",
    "author": "Fauci, Braunwald, Kasper, Hauser, Longo, Jameson, Loscalzo",
    "category": "Medicina Interna",
    "edition": "17ª Edición (2008)",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/medicina%20interna%20-harrison%202008-%20vol%201.pdf",
    "size": "50.2 MB",
    "description": "El tratado de referencia mundial en medicina interna. Abarca fundamentos de la medicina clínica, manifestaciones cardinales y presentación de enfermedades, genética celular y medicina regenerativa.",
    "icon": "🩺",
    "badge": "Tratado Esencial"
  },
  {
    "id": "harrison_vol2",
    "title": "Harrison: Principios de Medicina Interna (Volumen 2)",
    "author": "Fauci, Braunwald, Kasper, Hauser, Longo, Jameson, Loscalzo",
    "category": "Medicina Interna",
    "edition": "17ª Edición (2008)",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/medicina%20interna%20-harrison%202008-%20vol%202.pdf",
    "size": "63.9 MB",
    "description": "Segundo volumen del tratado de medicina interna enfocado en patologías específicas: enfermedades cardiovasculares, respiratorias, renales, gastrointestinales, endocrinología y neurología clínica.",
    "icon": "🩺",
    "badge": "Tratado Esencial"
  },
  {
    "id": "harrison_manual",
    "title": "Manual de Medicina de Harrison",
    "author": "Kasper, Braunwald, Fauci, Hauser, Longo, Jameson",
    "category": "Medicina Interna",
    "edition": "16ª Edición",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Manual%20de%20Medicina%20Harrison%2016ed.pdf",
    "size": "5.5 MB",
    "description": "Guía práctica condensada para el médico y estudiante de medicina en áreas clínicas. Presenta diagnóstico rápido, signos clave y esquemas terapéuticos paso a paso en guardias médicas.",
    "icon": "📖",
    "badge": "Manual Clínico"
  },
  {
    "id": "suros_semiologia",
    "title": "Semiología Médica y Técnica Exploratoria",
    "author": "Antonio Surós Batlló, Juan Surós Batlló",
    "category": "Semiología y Propedéutica",
    "edition": "8ª Edición",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Seemiologia_Suuros_8edicion.pdf",
    "size": "94.3 MB",
    "description": "Obra cumbre de la semiología médica hispanoparlante. Métodos de exploración física, inspección, palpación, percusión y auscultación detallados por cada aparato y sistema orgánico.",
    "icon": "🔍",
    "badge": "Semiología Clásica"
  },
  {
    "id": "cossio_semiologia",
    "title": "Semiología Médica",
    "author": "Pedro Cossio, I. Fustinoni, C. A. Rospide",
    "category": "Semiología y Propedéutica",
    "edition": "Edición Médica de Consulta",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/semiologia_de_cossio.pdf",
    "size": "27.8 MB",
    "description": "Texto clásico de semiología médica con enfoque fisiopatológico en la anamnesis, historia clínica, examen físico razonado e interpretación de signos y síntomas.",
    "icon": "📋",
    "badge": "Semiología"
  },
  {
    "id": "schwartz_cirugia",
    "title": "Principios de Cirugía de Schwartz",
    "author": "F. Charles Brunicardi, Dana K. Andersen, Timothy R. Billiar",
    "category": "Cirugía",
    "edition": "Edición de Estudio y Consulta",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Schwartz.pdf",
    "size": "12.3 MB",
    "description": "Texto fundamental de cirugía general. Principios de respuesta biológica al trauma quirúrgico, manejo perioperatorio, hemostasia, infección quirúrgica y técnicas operatorias básicas.",
    "icon": "🔪",
    "badge": "Cirugía General"
  },
  {
    "id": "michans_cirugia",
    "title": "Cirugía de Michans",
    "author": "Pedro Michans y colaboradores",
    "category": "Cirugía",
    "edition": "5ª Edición (2002 - Optimizado)",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Cirugia%20de%20Michans%20-%205ta%20ed%20-%202002%20-%20OPTIMIZADO.pdf",
    "size": "65.6 MB",
    "description": "Tratado latinoamericano insigne de patología quirúrgica. Abordaje de abdomen agudo, patología hepatobiliar, patología de tiroides, tórax y tubo digestivo con razonamiento clínico-quirúrgico.",
    "icon": "🏥",
    "badge": "Cirugía Mayor"
  },
  {
    "id": "guariglia_cirugia",
    "title": "Semiología y Clínica Quirúrgica",
    "author": "Guariglia y colaboradores",
    "category": "Cirugía",
    "edition": "Edición Universitaria",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/libro%20Guarilia.pdf",
    "size": "19.3 MB",
    "description": "Guía especializada en el examen físico del paciente quirúrgico, semiología de heridas, hernias, masas abdominales y patología vascular periférica.",
    "icon": "🩹",
    "badge": "Clínica Quirúrgica"
  },
  {
    "id": "cto_traumatologia",
    "title": "Manual CTO de Traumatología y Ortopedia",
    "author": "Grupo CTO Medicina",
    "category": "Traumatología",
    "edition": "19ª Edición / Medikando",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/19%20TRAUMATOLOGIA%20BY%20MEDIKANDO%20CTO.pdf",
    "size": "49.2 MB",
    "description": "Compendio sintético de alta eficiencia académica con esquemas, algoritmos de tratamiento para fracturas, luxaciones, lesiones ligamentosas, tumores óseos y patología ortopédica.",
    "icon": "🦴",
    "badge": "Manual CTO"
  },
  {
    "id": "manual_fracturas",
    "title": "Manual de Fracturas",
    "author": "Kenneth A. Egol, Kenneth J. Koval, Joseph D. Zuckerman",
    "category": "Traumatología",
    "edition": "Manual Práctico de Ortopedia",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Manual%20de%20fracturas.pdf",
    "size": "99.8 MB",
    "description": "Manual práctico exhaustivo sobre clasificación, mecanismo lesional, anatomía patológica, estudio radiológico y opciones de osteosíntesis e inmovilización de todas las fracturas corporales.",
    "icon": "🩻",
    "badge": "Ortopedia y Trauma"
  },
  {
    "id": "fundamentos_obstetricia",
    "title": "Fundamentos de Obstetricia (SEGO)",
    "author": "Sociedad Española de Ginecología y Obstetricia",
    "category": "Obstetricia y Ginecología",
    "edition": "Edición Oficial SEGO",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/FUNDAMENTOS%20OBSTETRICIA.pdf",
    "size": "18.9 MB",
    "description": "Tratado formativo sobre el control prenatal, fisiología del embarazo, monitorización fetal intraparto, mecanismos del parto eutócico y patología obstétrica prevalente.",
    "icon": "🤰",
    "badge": "Obstetricia Oficial"
  },
  {
    "id": "parto_pretermino",
    "title": "Manejo del Parto Pretérmino",
    "author": "Guías Clínicas Especializadas",
    "category": "Obstetricia y Ginecología",
    "edition": "Guía de Práctica Clínica",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/LIBRO_MANEJO_PARTO_PRETERMINO.pdf",
    "size": "22.7 MB",
    "description": "Protocolos actualizados para la predicción, prevención, tocolisis, maduración pulmonar fetal con corticoides y neuroprotección con sulfato de magnesio en la amenaza de parto pretérmino.",
    "icon": "👶",
    "badge": "Guía Perinatal"
  },
  {
    "id": "juan_aller_obstetricia",
    "title": "Obstetricia Moderna (Compendio por Capítulos)",
    "author": "Dr. Juan Aller, Dr. Gustavo Pagés",
    "category": "Obstetricia y Ginecología",
    "edition": "3ª Edición Digital",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%201.pdf",
    "size": "45 Capítulos en PDF",
    "description": "Obra de referencia obstétrica de los Dres. Juan Aller y Gustavo Pagés. Disponible con acceso y descarga capítulo por capítulo, incluyendo diagnóstico prenatal, monitorización y patologías de la gestación.",
    "icon": "📚",
    "badge": "Obra Completa por Capítulos",
    "chapters": [
      {
        "name": "Cap 1",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%201.pdf",
        "size": "0.15 MB"
      },
      {
        "name": "Cap 2",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%202.pdf",
        "size": "0.16 MB"
      },
      {
        "name": "Cap 3",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%203.pdf",
        "size": "0.57 MB"
      },
      {
        "name": "Cap 4",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%204.pdf",
        "size": "0.19 MB"
      },
      {
        "name": "Cap 5",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%205.pdf",
        "size": "0.23 MB"
      },
      {
        "name": "Cap 6",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%206.pdf",
        "size": "0.12 MB"
      },
      {
        "name": "Cap 7",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%207.pdf",
        "size": "0.18 MB"
      },
      {
        "name": "Cap 8",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%208.pdf",
        "size": "0.17 MB"
      },
      {
        "name": "Cap 9",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%209.pdf",
        "size": "0.11 MB"
      },
      {
        "name": "Cap 10",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2010.pdf",
        "size": "0.20 MB"
      },
      {
        "name": "Cap 11",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2011.pdf",
        "size": "0.14 MB"
      },
      {
        "name": "Cap 12",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2012.pdf",
        "size": "0.16 MB"
      },
      {
        "name": "Cap 13",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2013.pdf",
        "size": "0.22 MB"
      },
      {
        "name": "Cap 14",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2014.pdf",
        "size": "0.10 MB"
      },
      {
        "name": "Cap 15",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2015.pdf",
        "size": "0.25 MB"
      },
      {
        "name": "Cap 16",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2016.pdf",
        "size": "0.10 MB"
      },
      {
        "name": "Cap 17",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2017.pdf",
        "size": "0.15 MB"
      },
      {
        "name": "Cap 18",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2018.pdf",
        "size": "0.32 MB"
      },
      {
        "name": "Cap 19",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2019.pdf",
        "size": "0.18 MB"
      },
      {
        "name": "Cap 20",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2020.pdf",
        "size": "0.17 MB"
      },
      {
        "name": "Cap 21",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2021.pdf",
        "size": "0.13 MB"
      },
      {
        "name": "Cap 22",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2022.pdf",
        "size": "0.12 MB"
      },
      {
        "name": "Cap 23",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2023.pdf",
        "size": "0.12 MB"
      },
      {
        "name": "Cap 24",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2024.pdf",
        "size": "0.10 MB"
      },
      {
        "name": "Cap 25",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2025.pdf",
        "size": "0.20 MB"
      },
      {
        "name": "Cap 26",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2026.pdf",
        "size": "0.11 MB"
      },
      {
        "name": "Cap 28",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2028.pdf",
        "size": "0.20 MB"
      },
      {
        "name": "Cap 29",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2029.pdf",
        "size": "0.22 MB"
      },
      {
        "name": "Cap 30",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2030.pdf",
        "size": "0.31 MB"
      },
      {
        "name": "Cap 31",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2031.pdf",
        "size": "0.22 MB"
      },
      {
        "name": "Cap 32",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2032.pdf",
        "size": "0.15 MB"
      },
      {
        "name": "Cap 33",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2033.pdf",
        "size": "0.09 MB"
      },
      {
        "name": "Cap 34",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2034.pdf",
        "size": "0.12 MB"
      },
      {
        "name": "Cap 35",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2035.pdf",
        "size": "0.09 MB"
      },
      {
        "name": "Cap 36",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2036.pdf",
        "size": "0.18 MB"
      },
      {
        "name": "Cap 37",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2037.pdf",
        "size": "0.14 MB"
      },
      {
        "name": "Cap 38",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2038.pdf",
        "size": "0.11 MB"
      },
      {
        "name": "Cap 39",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2039.pdf",
        "size": "0.12 MB"
      },
      {
        "name": "Cap 40",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2040.pdf",
        "size": "0.17 MB"
      },
      {
        "name": "Cap 41",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2041.pdf",
        "size": "0.19 MB"
      },
      {
        "name": "Cap 42",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2042.pdf",
        "size": "0.32 MB"
      },
      {
        "name": "Cap 43",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2043.pdf",
        "size": "0.12 MB"
      },
      {
        "name": "Cap 44",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2044.pdf",
        "size": "0.10 MB"
      },
      {
        "name": "Cap 45",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/Cap%2045.pdf",
        "size": "0.20 MB"
      },
      {
        "name": "enfermedad hipertensiva",
        "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Juan%20Aller%20libro%20_OBSTETRICIA%20MODERNA_/enfermedad%20hipertensiva.pdf",
        "size": "0.15 MB"
      }
    ]
  },
  {
    "id": "netter_anatomia",
    "title": "Atlas de Anatomía Humana",
    "author": "Frank H. Netter, MD",
    "category": "Anatomía Humana",
    "edition": "4ª Edición",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Netter%20_%20Atlas%20de%20Anatomia%20Humana_%204_%20Edicion%20_%20PDFDrive%20_.pdf",
    "size": "59.8 MB",
    "description": "El atlas anatómico de referencia mundial. Ilustraciones magistrales y relaciones topográficas de cabeza y cuello, dorso, tórax, abdomen, pelvis y miembros con enfoque clínico.",
    "icon": "🫀",
    "badge": "Atlas Ilustrado"
  },
  {
    "id": "saladin_anatomia_fisiologia",
    "title": "Anatomía y Fisiología: La Unidad entre Forma y Función",
    "author": "Kenneth S. Saladin",
    "category": "Morfofisiología y Anatomía",
    "edition": "6ª Edición",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/morfofisiliologia-saladin-anatomia-y-fisiologia.pdf",
    "size": "40.4 MB",
    "description": "Tratado integrador fundamental de la anatomía y fisiología médica. Fundamento indispensable para Morfofisiología I, II y III con esquemas histológicos, celulares y de sistemas orgánicos.",
    "icon": "🔬",
    "badge": "Morfofisiología Integral"
  },
  {
    "id": "afifi_neuroanatomia",
    "title": "Neuroanatomía Funcional: Texto y Atlas",
    "author": "Adel K. Afifi, Ronald A. Bergman",
    "category": "Neuroanatomía",
    "edition": "2ª Edición",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/NeuroanatomIa%20Funcional.%20Texto%20y%20Atlas.%20Afifi.pdf",
    "size": "29.4 MB",
    "description": "Correlación funcional y clínica del sistema nervioso central y periférico. Aborda cortes axiales y sagitales, resonancias magnéticas, vías sensitivo-motoras y diagnóstico topográfico.",
    "icon": "⚡",
    "badge": "Neuroanatomía Clínica"
  },
  {
    "id": "netter_neurologia",
    "title": "Neurología Esencial de Netter",
    "author": "Karl E. Misulis, Thomas C. Head (Ilustraciones: Frank H. Netter)",
    "category": "Neurología Clínica",
    "edition": "2ª Edición",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Neurologia_Netter.pdf",
    "size": "12.3 MB",
    "description": "Compendio clínico ilustrado de neurología aplicada. Diagnóstico rápido, exploración neurológica y manejo terapéutico de ictus, cefaleas, epilepsia, pares craneales y trastornos neuromusculares.",
    "icon": "🩺",
    "badge": "Neurología Clínica"
  },
  {
    "id": "fustinoni_neurologia",
    "title": "Semiología del Sistema Nervioso (Fustinoni)",
    "author": "Osvaldo Fustinoni, J. C. Fustinoni",
    "category": "Semiología y Neurología",
    "edition": "14ª Edición",
    "file": "https://ugvwcdvwmxijzmkfjydb.supabase.co/storage/v1/object/public/morfo-files/Bibliografias/Fustinoni.pdf",
    "size": "55.3 MB",
    "description": "Obra cumbre de la exploración clínica y semiológica del sistema nervioso. Examen minucioso de pares craneales, motilidad, taxia, tono, sensibilidad, reflejos y síndromes neurológicos clásicos.",
    "icon": "🧠",
    "badge": "Semiología Neurológica"
  }
];
