<template>
    
</template>


<script>
import axios from 'axios';
export default {
    mounted: function () {
        const path = "http://0.0.0.0:5000/api/listing"
        axios.get(path).then((response) => {
            console.log(response.data);
            console.log(JSON.parse(response.data))
        })
        .catch((error) => {
            console.log(error)
        })
    }
}
</script>