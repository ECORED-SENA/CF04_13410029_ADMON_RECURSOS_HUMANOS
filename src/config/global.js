export default {
  global: {
    componenteFormativo:
      'El proceso de la nómina y prestaciones sociales en la administración del talento humano',
    descripcionCurso:
      'Este componente formativo aborda la evolución y gestión de la nómina en las organizaciones modernas, destacando su importancia en la administración del talento humano. Se analizan los componentes clave del proceso, como el devengado, las deducciones, y las apropiaciones, así como la relevancia del marco legal en Colombia para garantizar un pago preciso y justo a los colaboradores.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'El proceso de la nómina',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Elementos de la nómina',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Seguridad social',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'El salario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Cálculo del salario mínimo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Salario mínimo',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/13410029_CF04_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'El proceso de la nómina',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022). Análisis de la normativa de nómina y seguridad social [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ePwq6PIQaXM',
    },
    {
      tema: 'Elementos de la nómina',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Liquidación de nómina – Ejemplo 1. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=AYvf1eq5RR8',
    },
    {
      tema: 'Seguridad social',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Regímenes de afiliación al Sistema General de Seguridad Social en Salud. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/f4N9drI26o0?si=_7GqMnZwIRINqhcF',
    },
    {
      tema: 'El salario',
      referencia: 'Banco de la República. (2021). Salarios.',
      tipo: 'Página web',
      link: 'https://www.banrep.gov.co/es/estadisticas/salarios',
    },
    {
      tema: 'Cálculo del salario mínimo',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Pagos laborales. [Archivo de video] Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RJTrjvZ6ycM',
    },
  ],
  glosario: [
    {
      termino: 'Apropiaciones',
      significado:
        'obligaciones financieras que la empresa debe pagar en nombre del empleado, incluyendo contribuciones a salud, pensión, riesgos laborales y aportes parafiscales.',
    },
    {
      termino: 'Cesantías',
      significado:
        'prestación social que consiste en un ahorro anual acumulado por el empleador para el empleado, destinado a cubrir periodos de desempleo o retirarse bajo ciertas condiciones.',
    },
    {
      termino: 'Deducciones',
      significado:
        'cantidades que se restan del salario bruto de un empleado, como los aportes a la seguridad social, retenciones fiscales, embargos judiciales y otros descuentos autorizados.',
    },
    {
      termino: 'Devengado',
      significado:
        'total de ingresos brutos que un empleado ha ganado durante un periodo de pago, antes de aplicar cualquier deducción.',
    },
    {
      termino: 'Nómina',
      significado:
        'registro detallado de los salarios, deducciones y pagos realizados a los empleados de una organización en un periodo determinado, generalmente mensual o quincenal.',
    },
    {
      termino: 'Prestaciones sociales',
      significado:
        'beneficios adicionales otorgados a los empleados, como primas de servicios, cesantías, intereses sobre cesantías y vacaciones, que complementan su salario.',
    },
    {
      termino: 'Prima de servicios',
      significado:
        'pago adicional equivalente a un mes de salario que el empleador debe realizar al empleado cada semestre, normalmente en junio y diciembre.',
    },
    {
      termino: 'Salario',
      significado:
        'remuneración que recibe el empleado por su trabajo, que puede incluir salario básico, horas extras, comisiones y otros ingresos.',
    },
    {
      termino: 'Salario mínimo',
      significado:
        'remuneración mínima que un trabajador debe recibir por sus servicios, establecida legalmente por el gobierno.',
    },
    {
      termino: 'Seguridad social',
      significado:
        'sistema que cubre la protección de los empleados en términos de salud, pensión y riesgos laborales, garantizando su bienestar y el de sus familias.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asobancaria. (2013). ¿Cómo se calcula el salario mínimo?. <i>Saber más, ser más: Programa de educación financiera de los bancos en Colombia</i>.',
      link:
        'http://www.asobancaria.com/sabermassermas/como-se-calcula-el-salario-minimo/',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1950, agosto 5). Decreto 2663 de 1950: <i>Código Sustantivo del Trabajo</i>. Diario Oficial No. 27.452.',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (2012). <i>Ley 1607 de 2012, por la cual se expiden normas en materia tributaria y se dictan otras disposiciones</i>.',
      link: 'http://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=51040',
    },
    {
      referencia: 'Gerencie. (2010). <i>Partes de la nómina</i>.',
      link: 'http://www.gerencie.com/partes-de-la-nomina.html',
    },
    {
      referencia: 'Gerencie. (2011). <i>Apropiaciones de nómina</i>.',
      link: 'http://www.gerencie.com/apropiaciones-de-nomina.html',
    },
    {
      referencia: 'Gerencie. (2016). <i>Auxilio de transporte</i>.',
      link: 'http://www.gerencie.com/auxilio-de-transporte.html',
    },
    {
      referencia: 'Gerencie. (2016). <i>Liquidación de la nómina</i>.',
      link: 'http://www.gerencie.com/liquidacion-de-la-nomina.html',
    },
    {
      referencia:
        'Gestión.org. (s.f.). <i>La administración del talento humano</i>.',
      link:
        'http://www.gestion.org/recursos-humanos/gestion-competencias/4948/la-administracion-del-talento-humano/',
    },
    {
      referencia:
        'Presidencia de la República de Colombia. (2013). Decreto 1828 de 2013, por medio del cual se reglamenta parcialmente la Ley 1607 de 2012. Diario Oficial No. 48.899.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Orlando Vidal Perdomo',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda',
        },
        {
          nombre: 'Didier Andrés Ospina Osorio',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial - Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
