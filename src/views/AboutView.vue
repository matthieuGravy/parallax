<template>
  <div class="about">
    <section class="about-me">
      <h2>About me</h2>
      <p>
        I've traversed various professional paths and taken on diverse challenges before realizing
        that I needed to work more independently. My initial journey led me to the nightlife scene
        when I was 20. My athletic energy drove me there, seeking an active and enjoyable pursuit.
        Reality caught up swiftly: it was demanding, slow, and required exceptional diplomacy.
        Earnings were there, but contracts were scarce.
      </p>
      <br />
      <p>
        This prompted me to explore security work, seeking variety in my jobs. I then returned to
        education to earn my diploma. However, doors to leadership roles seemed locked. I then
        pursued studies in sociology and anthropology. Even though the subjects intrigued me, I
        wasn't clear on the skills I'd gain, and the format of the curriculum seemed ill-fitted.
      </p>
      <br />
      <p>
        I later delved into the world of e-business, where digital and commerce intersect. Despite
        my interest in the subjects, the teaching and overall atmosphere didn't match my
        expectations. I decided to take a breather to refocus. I then took on the role of a manager
        at Pizza Hut, working weekends. I loved putting my newfound digitalization skills into
        practice and learning how to manage a team. I excelled, revitalized teams, and achieved
        record monthly and annual sales, despite the center facing challenges. I'm proud of this
        achievement, but the challenges of employee life no longer appealed to me.
      </p>
      <br />
      <p>
        My customer-centric and satisfaction-focused experience motivated me to cross over and offer
        my skills from the other side. I thus honed my web development skills and continue to refine
        my knowledge in various programming languages. My goal? To undertake projects that I'm
        passionate about while delivering quality solutions to those aiming to succeed in the
        digital world.
      </p>
    </section>
    <h2>About my skills</h2>
    <h2>Want you see my cv?</h2>
    <p></p>
    <div>
      <h1>{{ title }}</h1>
      <button @click="changeLanguage">{{ buttonText }}</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      language: 'fr',
      translations: {
        fr: {
          title: 'Bienvenue sur mon site !',
          buttonText: 'Cliquez ici'
        },
        en: {
          title: 'Welcome to my site!',
          buttonText: 'Click here'
        }
      }
    }
  },
  computed: {
    title() {
      return this.translations[this.language].title
    },
    buttonText() {
      return this.translations[this.language].buttonText
    }
  },
  methods: {
    changeLanguage() {
      this.language = this.language === 'fr' ? 'en' : 'fr'
    }
  }
}
</script>

<style lang="scss" scoped>
.about {
  background-color: black;
  height: 100vh;
  color: white;
  .about-me {
    background-color: blue;
    padding-top: 6rem;
  }
}
</style>
