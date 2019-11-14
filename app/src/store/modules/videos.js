  const getDefaultState = () => {
    return {
        options: [
            {
                name: 'video1',
                autoplay: true,
                controls: false,
                sources: [
                    {
                        src:"https://vod.immerss.live/2807/11468/c06e802bd63c4a7b91a3c35853a0f827/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
            {
                name: 'video2',
                autoplay: true,
                controls: false,
                sources: [
                    {
                        src:"https://vod.immerss.live/2807/11091/242eda86444c3da7bcbb61a50328fc06/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
             {
                name: 'video3',
                autoplay: true,
                controls: false,
                sources: [
                    {
                        src:"https://vod.immerss.live/2807/11090/628d55a52bfb3954c16f01c3c8c11822/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
            {
                name: 'video4',
                autoplay: true,
                controls: false,
                sources: [
                    {
                        src:"https://vod.immerss.live/2807/10968/9b94680d14d3de83373adf27ef501644/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
            {
                name: 'video5',
                autoplay: true,
                controls: false,
                sources: [
                    {
                        src:"https://vod.immerss.live/2807/10927/a5b29ff6d4a34e8df8b825598db96018/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
            {
                name: 'video6',
                autoplay: true,
                controls: false,
                sources: [
                    {
                        src:"https://vod.immerss.live/2807/10852/4d92a303146a44efde152183d0aeaef6/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
            {
                name: 'video7',
                autoplay: true,
                controls: false,
                sources: [
                    {
                        src:"https://vod.immerss.live/2807/10850/9c08c74c10bd599d639b773078e964f9/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
            {
                name: 'video8',
                autoplay: true,
                controls: false,
                sources: [
                    {
                        src:"https://vod.immerss.live/2807/10529/9109d2c765344e72694fd16899bb1f1f/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
            {
                name: 'video9',
                autoplay: true,
                controls: false,
                sources: [
                    {
                        src:"https://vod.immerss.live/2807/10520/2e80b727d09252dfba58be8f58f8a94e/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
            {
                name: 'video10',
                autoplay: true,
                controls: false,
                sources: [
                    {
                        src:"https://vod.immerss.live/2807/10510/701b7e1e2b6cb7c32e936d4c6bd38e72/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
            {
                name: 'video11',
                autoplay: true,
                controls: false,
                sources: [
                    {
                        src:"https://vod.immerss.live/2807/10440/450a838cb3434c2f79fdb6fa6125eac2/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
            {
                name: 'video12',
                autoplay: true,
                controls: false,
                sources: [
                    {
                        src:"https://vod.immerss.live/2807/10404/dc63e65273a69e9574b16e18244c9968/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
            {
                name: 'video13',
                autoplay: true,
                controls: false,
                sources: [
                    {
                        src:"https://vod.immerss.live/2807/10169/83af161f58e68059b0705a4afd86effc/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
            {
                name: 'video14',
                autoplay: true,
                controls: false,
                sources: [
                    {
                        src:"https://vod.immerss.live/2807/10078/5eced1314a3eff684e3ffea8f41efcf2/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
            {
                name: 'video15',
                autoplay: true,
                controls: false,
                sources: [
                    {
                        src:"https://vod.immerss.live/2807/9946/0078bffdd06f9df7c831e42ad7b7745b/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
            {
                name: 'video16',
                autoplay: true,
                controls: false,
                sources: [
                    {
                        src:"https://vod.immerss.live/2807/9922/3c7a3e1b4ef718be77044b883d377826/playlist.m3u8",
                        type: "application/x-mpegURL"
                    }
                ]
            },
        ]
    }
  }
  
  const getters = {
    getVideoOptions: state => state.options
  }
  
  const state = getDefaultState()
  
  
export default {
    namespaced: true,
    state,
    getters,
}
  