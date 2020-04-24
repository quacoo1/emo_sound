
let music = [
    {
        id: 1001,
        name: "Happy",
        artist: "Pharell Williams",
        mood: "happy"
    },
    {
        id: 1002,
        name: "Don't Worry Be Happy",
        artist: "Bobby McFerrin",
        mood: "happy"
    },
    {
        id: 1003,
        name: "Good Vibrations",
        artist: "The Beach Boys",
        mood: "happy"
    },
    {
        id: 1004,
        name: "Happy Together",
        artist: "The Turtles",
        mood: "happy"
    },
    {
        id: 1005,
        name: "Uptown Funk",
        artist: "Mark Ronson",
        mood: "happy"
    },
    {
        id: 1006,
        name: "When the party's over",
        artist: "Billie Eilish",
        mood: "sad"
    },
    {
        id: 1007,
        name: "Skinny Love",
        artist: "Bon Iver",
        mood: "sad"
    },
    {
        id: 1008,
        name: "Some One You Loved",
        artist: "Lewis Capaldi",
        mood: "sad"
    },
    {
        id: 1009,
        name: "Fix You",
        artist: "Cold Play",
        mood: "sad"
    },
    {
        id: 1010,
        name: "I'm Not The Only One",
        artist: "Sam Smith",
        mood: "sad"
    },
    {
        id: 1011,
        name: "The Way I am",
        artist: "Eminem",
        mood: "angry"
    },
    {
        id: 1012,
        name: "Fucking Hostile",
        artist: "Pantera",
        mood: "angry"
    },
    {
        id: 1013,
        name: "I've Been Tired",
        artist: "Pixies",
        mood: "angry"
    },
    {
        id: 1014,
        name: "So What",
        artist: "Pink",
        mood: "angry"
    },
    {
        id: 1015,
        name: "One Step Closer",
        artist: "Linkin Park",
        mood: "angry"
    },
    {
        id: 1016,
        name: "Hallelujah",
        artist: "Kelley Mooney",
        mood: "in-the-spirit"
    },
    {
        id: 1017,
        name: "Fellow",
        artist: "Josh Garrels",
        mood: "in-the-spirit"
    },

    {
        id: 1018,
        name: "Worship",
        artist: "SK Frimpong",
        mood: "in-the-spirit"
    },
    {
        id: 1019,
        name: "Moon Song",
        artist: "Gungor",
        mood: "in-the-spirit"
    },
    {
        id: 020,
        name: "Restoration Song",
        artist: "Sound Of Cloud",
        mood: "in-the-spirit"
    },
]


Vue.component('mood-area',{
    template: `
        <div class="moods">
            <button v-for=" (mood,index) in moods" :class="[mood.name, {active: activeMood==index } ]" :key="mood.id" @click="activate(index)" > {{ mood.icon }} </button>
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
                    name: 'in-the-spirit',
                    icon: '😇'
                }
            ],
            activeMood:0,
        }
    },

    methods: {
        activate( index ){
            this.activeMood = index;
            this.$emit('mood-swings', this.moods[this.activeMood].name);
        }
    },
    mounted() {
        this.$emit('mood-swings', this.moods[this.activeMood].name);
    },

});

Vue.component('playlist-area',{
    props:{
        selectedEmotion:{
            type: String,
            required: true,
        }
    },
    template:`
        <div>
            <div class="btn-generate" @click="generateTracks">generate playlist</div>
            <div class="playlist">
                <div v-if="!tracks.length" class="no-track"> Click Generate <span style="text-transform:capitalize"> {{ selectedEmotion.replace(/-/g,' ') }} </span> Playlist </div>
                <div v-else class="tracks">
                    <div v-for="track in tracks" :key="track.id" class="track">
                        <div class="track-info">
                            <div class="track-name"> {{ track.name }} </div>
                            <div class="track-artist">{{ track.artist }}</div>
                        </div>
                        <div>
                            <div class="btn-play"> <i class="fas fa-play"></i> </div>
                            <div class="btn-play"> <i class="fas fa-stop"></i> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    data(){
        return {
            tracks: []
        }
    },
    methods:{
        generateTracks(){
            this.tracks = [];

            music.forEach((track)=>{
                if(track.mood == this.selectedEmotion){
                    this.tracks.push(track);
                }
            })
        }
    }
});



const app = new Vue({
    el: '#app',
    data:{
        selectedEmotion: "",
    },
    methods:{
        updateEmotion(mood){
            this.selectedEmotion = mood;
        }
    }

});