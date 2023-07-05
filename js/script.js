const { createApp } = Vue

  createApp({
    data() {
      return {
        mailingList:[

        ]
      }
    },

    methods:{
        
    },

    mounted(){
       for (let i = 0; i < 10; i++) {
           
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=>{
                const result = response.data.response;
                console.log('result', result)
                this.mailingList.push(result)
            })
        
        
       } 
    }
  }).mount('#app');
