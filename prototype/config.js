var config = {
    style: 'mapbox://styles/mapbox/dark-v10',
    accessToken: 'pk.eyJ1IjoibWVhZG93b2ZoYXkiLCJhIjoiY2swY3JoNDlmMDBjNzNicWVhNGM5aHFmaiJ9._nvQjnpu5KGnViUWQwCMUg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Prototype Map',
    subtitle: 'United Center (Chicago Bulls)',
    byline: 'By Shawn (Shan Huan) Wu',
    footer: 'Source: Sources',
    chapters: [
        {
            id: 'first-identifier',
            alignment: 'left',
            hidden: false,
            title: '2020-21 Season',
            image: '',
            description: 'Overall Average Points Scored: 114.7<br> Overall Average Opponents Points Scored: 114.8<br> Average Points Scored at Home: 104.6<br> Average Points Against at Home: 107.9',
            location: {
                center: [-87.67420, 41.88063],
                zoom: 13,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'EST',
            image: '',
            description: 'Starting with the roadtrip to D.C., the Bulls played a total of 7 away games against EST opponents.<br> Average Points Scored: 119.0 (<b style="color:green">+14.4</b>)<br> Average Points Against: 112.3 (<b style="color:red">+4.4</b>)',
            location: {
                center: [-77.02086, 38.89817],
                zoom: 13,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'center',
            hidden: false,
            title: 'PST',
            image: '',
            description: 'The Bulls played 4 games against West Coast opponents so far, starting with Portland.<br> Average Points Scored: 119.3 (<b style="color:green">+14.7</b>)<br> Average Points Against: 120.1 (<b style="color:red">+12.2</b>)',
            location: {
                center: [-122.66659, 45.53167],
                zoom: 13,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};