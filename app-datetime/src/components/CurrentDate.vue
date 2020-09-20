<template>
    <section>
        <h1>{{ msg }}</h1>
        <div>
{{displayDate}}
        </div>
    </section>
</template>

<script>
    export default {
        name: "CurrentDate",
        props: {
            msg: String
        },
        beforeDestroy () {
            clearInterval(this.polling)
        },
        created () {
            this.pollData()
        },
        data(){
            return {
                displayDate: new Date(),
                polling: null
            }
        },
        methods: {
            pollData () {
                this.polling = setInterval(() => {
                    this.displayDate = new Date()
                }, 1000)
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }
</style>
