<template>
    <!-- <v-dialog style="position:absolute; left: 50%; top: 50%;"> -->
    <v-dialog v-model="aboutClick" max-width="500" persistent style="overflow-y: hidden;">
        <v-card id="finalCheck" v-model="aboutClick" min-height="540">
        <v-card-title class="surfaceTitle"><span style="position: relative; bottom: 10px; right: 7px;">About the County Road Inventory Map</span></v-card-title>
        <v-card-text style="position: relative; color: black; top: 28.5rem; left: 0%; font-size: 10px; text-align: left;"><u>Build Version: 1.5.3</u></v-card-text>
        <div>
            <v-card-text style="position: relative; color: black; bottom:2.5rem; left: 0%; text-align: left;">The County Road Inventory Map is a tool for county officials to verify and make updates to TxDOT’s 
                                                                                                        roadway inventory. <a id="hoverLink" href='https://capitol.texas.gov/tlodocs/74R/billtext/html/SB00971F.htm' target="_blank">
                                                                                                        The Texas Legislature requires TxDOT to administer this program</a> to ensure accuracy
                                                                                                        of the mileage reported to the Department of Motor Vehicles and Comptroller of Public Accounts for the
                                                                                                        purpose of allocation of highway funds.</v-card-text>
        </div>
        <v-divider style="position: relative; bottom: 1.5rem; color:black;"></v-divider>
        <!-- <v-card-text style="poistion: absolute; text-align: left; color: black;">Overview: this is a new version of the DUSA application. Refer to this section to review updates to the map.</v-card-text> -->

        <div style="position:inherit; top: 20rem;">
            <v-card-text style="text-align: left; color: black; margin-left: 1rem;" v-for="(i, index) in updateList" :key=index><ul style="position:relative; line-height: 1px; white-space: nowrap; padding: 0rem;"><li>{{updateList[index]}}</li></ul></v-card-text>
        </div>

        <div style="position: relative; left: 12rem; top: 4rem;"><v-btn style="border:1px solid black;" underline tile color="#14375A" outlined @click="close(); clearEditBtn=false"><u>close</u></v-btn></div>
        
      </v-card>
    </v-dialog>
    <!-- </v-dialog> -->
</template>

<script>
export default {
    name: 'about',
    data (){
      return {
        updateList:['Added Geometry Checks (Self-Intersection, Minimum geometry length)', 'Updated sign-up URL','Added link to training videos','Adjusted Action item Body text font', 'Disabled mile info after ending asset mileage is completed', 
                    'Adjusted Missing Attributes/Discard Edit Popup']
      }
    },
    methods:{
        close(){
            this.aboutClick = false
        }
    },
    computed:{
        aboutClick:{
            get(){
                return this.$store.state.isAbout
            },
            set(bool){
                this.$store.commit('setIsAbout', bool)
            }
        },
        clearEditBtn:{
            get(){
                return this.$store.state.isClearAboutHelpTools
            },
            set(isBool){
                this.$store.commit('setIsAboutHelpTools', isBool)
            }
      },
    }
}
</script>
<style scoped>
.surfaceTitle{
  position: inherit;
  background-color: #14375A;
  text-align: left;
  color: white;
  top: 0%;
  bottom:10px;
  height:40px;
  padding: 0%;
  width: 100%;
  font-size: 16px;
}

#finalCheck{
    position: inherit;
    top:50%;
    width: 500px;
    left: 50%;
    border-radius: 0px;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}


#hoverLink{
    color: blue;
    text-decoration: none;
}
#hoverLink:hover{
    text-decoration: underline;
}
</style>