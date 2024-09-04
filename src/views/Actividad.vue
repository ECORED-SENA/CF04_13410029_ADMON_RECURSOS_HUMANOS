<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema:
        'El proceso de la nómina y prestaciones sociales en la administración del talento humano',
      titulo: 'Cuestionario',
      introduccion:
        'Identificar  los conceptos clave, procesos, y normativas relacionadas con la gestión de nómina en Colombia.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la gestión de nómina?',
          imagen: require('@/assets/actividad/1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'El proceso de contratación de empleados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El cálculo, registro y pago de salarios y prestaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La gestión de la productividad laboral.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La planificación de vacaciones y descansos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el porcentaje de aportes a salud que debe pagar el empleador en Colombia?',
          imagen: require('@/assets/actividad/2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '4 %', esCorrecta: false },
            { id: 'b', texto: '10 %', esCorrecta: false },
            {
              id: 'c',
              texto: '8,5 %',
              esCorrecta: true,
            },
            { id: 'd', texto: '6,5 %', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto: '¿Qué se entiende por "devengado" en la gestión de nómina?',
          imagen: require('@/assets/actividad/3.png'),
          opciones: [
            {
              id: 'a',
              texto:
                'El valor total de los ingresos que obtiene un empleado durante el periodo de pago.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El monto descontado del salario del empleado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los beneficios adicionales recibidos por el empleado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El aporte a la seguridad social del empleado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes elementos es considerado una deducción en la nómina?',
          imagen: require('@/assets/actividad/4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Comisiones.', esCorrecta: false },
            { id: 'b', texto: 'Retención en la fuente.', esCorrecta: true },
            { id: 'c', texto: 'Primas de servicios.', esCorrecta: false },
            { id: 'd', texto: 'Vacaciones.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el porcentaje de aportes para pensión a cargo del empleador en Colombia?',
          imagen: require('@/assets/actividad/1.png'),
          opciones: [
            { id: 'a', texto: '4 %', esCorrecta: false },
            { id: 'b', texto: '6 %', esCorrecta: false },
            { id: 'c', texto: '8 %', esCorrecta: false },
            { id: 'd', texto: '12 %', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué función cumple el proceso de revisión de prenómina?',
          imagen: require('@/assets/actividad/2.png'),
          opciones: [
            {
              id: 'a',
              texto:
                'Verificar y corregir posibles errores antes del pago final.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Realizar el pago directo a los empleados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Calcular las horas extras trabajadas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Administrar las vacaciones de los empleados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué término se refiere al valor que un empleado recibe finalmente después de las deducciones?',
          imagen: require('@/assets/actividad/3.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Devengado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Neto a pagar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Salario bruto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Apropiaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué tipo de prestación social incluye la prima de servicios?',
          imagen: require('@/assets/actividad/4.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Seguridad social.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prestaciones económicas adicionales.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Seguro de vida.', esCorrecta: false },
            { id: 'd', texto: 'Riesgos laborales.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es el porcentaje de aporte parafiscal que las empresas deben pagar al Instituto Colombiano de Bienestar Familiar (ICBF)?',
          imagen: require('@/assets/actividad/1.png'),
          opciones: [
            { id: 'a', texto: '3 %', esCorrecta: true },
            { id: 'b', texto: '2 %', esCorrecta: false },
            { id: 'c', texto: '5 %', esCorrecta: false },
            { id: 'd', texto: '4 %', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes opciones describe mejor la función del salario mínimo en Colombia?',
          imagen: require('@/assets/actividad/2.png'),
          opciones: [
            {
              id: 'a',
              texto:
                'El salario mínimo establece la remuneración mínima que un trabajador debe recibir por sus servicios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El salario mínimo es una bonificación adicional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El salario mínimo solo aplica a los contratos temporales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El salario mínimo es la base para calcular los impuestos laborales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
