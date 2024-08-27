<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bgi.align-items-center
      .col-lg-12.col-12.px-lg-5.px-4.pb-4 
        .row.justify-content-center.align-items-center          
          .col-lg-12
            p(data-aos="fade-down") La gestión de la nómina y las prestaciones sociales ha evolucionado significativamente en las últimas décadas. Antiguamente, este proceso era visto como una tarea manual, limitada a calcular y pagar salarios, lo que requería tiempo y recursos considerables. Sin embargo, con el avance tecnológico y la transformación organizacional, la nómina ha pasado a ser un pilar fundamental en la administración del talento humano, desempeñando un rol clave no solo en la compensación de los empleados, sino también en la planificación financiera y la toma de decisiones estratégicas dentro de las organizaciones.  
            .row.justify-content-center.align-items-center         
              .col-lg-9.my-3
                .bg1.brad.p-4.mb-4
                  img.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')        

                  p(data-aos="fade-down").mb-0 Hoy en día, la nómina es un proceso automatizado que se gestiona mediante software especializado, lo que permite una mayor precisión y eficiencia en la administración de los recursos humanos. Este cambio no solo ha optimizado el tiempo, sino que también ha facilitado la adaptación de las empresas a nuevas normativas legales, que buscan garantizar los derechos salariales y prestacionales de los trabajadores.  
                .bg2.brad.text-white.mb-4.p-4
                  .row.justify-content-center.align-items-center(data-aos="fade-right")
                    .col-auto
                      img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.png', alt='')        
                    .col.my-3
                      p(data-aos="fade-down").mb-0 Además, la tendencia creciente de externalizar este proceso a través de servicios de outsourcing ha permitido que muchas organizaciones se enfoquen en su misión principal, delegando esta función crítica a expertos en el área. Esto no solo garantiza el cumplimiento legal, sino que también optimiza los costos y mejora la eficiencia operativa.
                      
              .col-lg-3.my-3.d-none.d-lg-block
                img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')  

            p(data-aos="fade-down") Este componente formativo aborda los componentes esenciales del proceso de nómina, detallando los elementos clave que deben ser considerados para asegurar que las organizaciones cumplan con sus obligaciones legales y financieras, mientras proporcionan una remuneración justa y precisa a sus colaboradores.                             
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
