<template>
    <div class="video-list">
        <div v-for="option in options" :key="option.id" class="wrapper">
            <VideoItem :options="option" />
        </div>
    </div>
</template>

<script>
import VideoItem from '../components/VideoItem'
import { mapGetters } from 'vuex'

export default {
    name: 'VideoList',
    components: {
        VideoItem
    },
    computed: {
        ...mapGetters('videos', {
            options: 'getVideoOptions'
        })
    }
}
</script>

<style lang="less">
    .video-list {
        display: inline-flex;
        flex-wrap: wrap;
        width: 100vw;
        height: 100vh;
        .wrapper {
            width: 25vw;
            height: 25vh;
        }
    }
</style>