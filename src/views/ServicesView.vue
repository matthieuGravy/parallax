<script>
import servicesData from '@/assets/data/servicesData.json'
import spa from '../components/spa.vue'
export default {
  components: {
    spa
  },
  data() {
    return {
      data: servicesData,
      currentLanguage: 'français',
      languages: ['français', 'english'],
      creationVisible: false
    }
  },
  methods: {
    changeLanguage(language) {
      this.currentLanguage = language
    },
    getText(key) {
      return this.data[this.currentLanguage][key]
    },
    toggleCreation() {
      this.creationVisible = !this.creationVisible
    }
  },
  computed: {
    toggleMsg() {
      return this.creationVisible ? 'back' : 'En savoir plus'
    }
  }
}
</script>
<template>
  <div class="vide"></div>
  <div class="language-buttons">
    <button v-for="language in languages" :key="language" @click="changeLanguage(language)">
      {{ language }}
    </button>
  </div>
  <section class="spa">
    <div class="prici">
      <div>Interagir avec JSON</div>
      <div>
        <h3>{{ currentLanguage }}</h3>
        <p>{{ getText('servicesTitle') }}</p>
        <p>{{ getText('servicesDescription') }}</p>
      </div>

      <h2>{{ getText('spaCreation') }}</h2>
      <p>
        {{ getText('CreationJob') }}
        <a href="#" @click="toggleCreation">{{ toggleMsg }}</a>
      </p>
      <div class="creation-cartoon" v-show="creationVisible">
        <spa></spa>
      </div>
    </div>
  </section>

  <section class="veille">
    <div class="container-arena">
      <article class="arena">
        <h2>Personalisation</h2>
        <p>
          Une personalisation pour vos besoin et ceux de vos clients, je peux réaliser un site
          multilingue
        </p>
        <p>
          Mettez en avant votre capacité à créer des vitrines sur mesure qui répondent aux besoins
          spécifiques de chaque client. Mettez l'accent sur la flexibilité de votre approche et
          votre volonté de personnaliser chaque projet pour offrir une solution unique.
        </p>
      </article>
      <article class="arena">
        <h2>UX</h2>
        <p>
          Insistez sur l'importance que vous accordez à l'expérience utilisateur. Expliquez comment
          vous optimisez la navigation, la fluidité des interactions et la facilité d'utilisation
          pour offrir une expérience engageante et intuitive à vos utilisateurs.
        </p>
      </article>
      <article class="arena">
        <h2>Performances et vitesse</h2>
        <p>
          Mettez en avant les performances élevées de vos vitrines. Mentionnez comment vous
          optimisez le chargement des pages, réduisez les temps de chargement et assurez une
          réactivité rapide pour offrir une expérience utilisateur fluide et satisfaisante.
        </p>
      </article>
      <article class="arena">
        <h2>Réactivité mobile</h2>
        <p>
          Mettez en évidence votre capacité à créer des vitrines qui s'adaptent parfaitement aux
          différents appareils et tailles d'écran. Expliquez comment vous garantissez une expérience
          cohérente et conviviale, que ce soit sur ordinateur de bureau, tablette ou téléphone
          portable.
        </p>
      </article>
      <article class="arena">
        <h2>Animations interactives avec GSAP</h2>
        <p>
          Mettez en avant votre expertise dans l'utilisation de GSAP pour créer des animations
          dynamiques et engageantes. Expliquez comment vous pouvez ajouter des effets visuels
          spectaculaires, des transitions fluides et des mouvements élégants à vos vitrines. Mettez
          l'accent sur votre capacité à rendre l'expérience utilisateur plus immersive et captivante
          grâce à l'utilisation de cette puissante bibliothèque d'animation.
        </p>
      </article>
      <article class="arena">
        <h2>Support et suivi</h2>
        <p>
          Mettez en avant votre engagement à fournir un support continu à vos clients. Expliquez
          comment vous restez disponible pour les aider, apporter des modifications ou effectuer des
          mises à jour une fois que la vitrine est en ligne.
        </p>
      </article>
    </div>
  </section>
</template>
<style lang="scss">
.vide {
  margin-top: 10vh;
}
.spa {
  width: 100%;
  background-color: beige;
  max-width: 1280px;
  margin: auto;

  .spa-creation {
    display: flex;
    background-color: rebeccapurple;
    display: flex;
    flex-direction: column;
    height: 90vh;
    .creation-cartoon {
      background-color: red;
      visibility: visible;
      flex: 1;
    }
  }

  .refresh {
    background-color: aqua;
    height: 90vh;
  }
}
.veille {
  width: 100%;
  background-color: blue;
  padding: 6.4rem 0;
  .container-arena {
    margin: auto;
    max-width: 1024px;
    background-color: yellow;
    display: grid;
    grid-gap: 5rem;
    padding: 0.7em;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    justify-content: space-around;
    article {
      background-color: red;
      height: 10rem;
      min-width: 15rem;
      p {
        visibility: hidden;
      }
    }
  }
}
</style>
