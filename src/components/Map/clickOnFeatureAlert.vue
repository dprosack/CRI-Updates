<template>
    <div>
        <v-card id="deny">
            <v-card-title class="surfaceTitle" >
                <v-card-text style="bottom: 1.7rem; position:relative; font-size: 15px; text-align: left; right: 1.7rem">
                    <v-icon color="white" style="position:relative; bottom: .1rem; left: 0rem;">mdi-alert-circle</v-icon>
                    Cannot Select Road
                </v-card-text>
            </v-card-title>
            <v-card-text style="text-align:left; padding-top: 10px; color:black">
                Please save your work in the stepper, to edit the selected road.
            </v-card-text>
            <v-btn tile @click="setDenyFalse()" style="poistion:relative; left: 6rem;" plain outlined color="#204E70"><u>close</u></v-btn>
        </v-card>
    </div>
   
</template>
<script>

export default {
    components: {},
    name: 'denyClickFeat',
    data(){
      return{
      }
    },
    methods:{
        setDenyFalse(){
            this.denyFeature = false
        }
    },
    computed:{
        denyFeature:{
            get(){
                return this.$store.state.denyFeatClick
            },
            set(deny){
                this.$store.commit('setdenyFeatClick', deny)
            }
        }
    }

}
</script>


<style scoped>
#deny{
    position: relative;
    top: 200px;
    width: 300px;
    left: 800px;
    height: 150px;
    border-radius: 0px;
}
.surfaceTitle{
  background-color: #204E70;
  color: white;
  height:30px;
  width: 100%;
  font-size: 25px;
  text-align: left;
}

</style>