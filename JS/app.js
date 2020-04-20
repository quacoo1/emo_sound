Vue.component('mood_bar',{
    template: `
        <div class="moods">
            <button v-for=" (mood,index) in moods" :class="[mood.name, {active: activeMood==index } ]" :key="mood.id" @click="activate(index)" > {{ mood.icon }} </button>
            <h1>" {{ moods[activeMood].name.replace( /-/g , ' ' ) }} "</h1>
        </div>
    `,

    data(){
        return {
            moods:[
                {
                    id: 1231,
                    name: 'happy',
                    icon: '😊'
                },
                {
                    id: 1232,
                    name: 'sad',
                    icon: '😞'
                },
                {
                    id: 1233,
                    name: 'angry',
                    icon: '😠'
                },
                {
                    id: 1234,
                    name: 'in-the-spirt',
                    icon: '😇'
                }
            ],
            activeMood:0,
        }
    },

    methods: {
        activate( index ){
            this.activeMood = index;
        }
    }

});


const app = new Vue({
    el: '#app',
});