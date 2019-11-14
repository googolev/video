<template>
    <div class="video-item">
       <video :ref="options.name" class="video-js"></video>
    </div>
</template>

<script>
import videojs from 'video.js';

export default {
    name: 'VideoItem',
    props: {
        options: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            player: null
        }
    },
    mounted() {
        console.log(this.options)
        this.player = videojs(this.$refs[this.options.name], this.options, function onPlayerReady() {
            console.log('onPlayerReady', this);
            this.play()
        })
    },
    beforeDestroy() {
        if (this.player) {
            this.player.dispose()
        }
    }
}
</script>

<style lang="less">
    .video-item {
        width: 100%;
        height: 100%;
        .video-js {
            width: 100%;
            height: 100%;
        }
    }
</style>