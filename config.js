var config = {
    style: 'mapbox://styles/meadowofhay/ckoqlhy064t2l17tmtl7kp0k0',
    accessToken: 'pk.eyJ1IjoibWVhZG93b2ZoYXkiLCJhIjoiY2swY3JoNDlmMDBjNzNicWVhNGM5aHFmaiJ9._nvQjnpu5KGnViUWQwCMUg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'dark',
    footer: 'Map Authored By: Shan Huan Wu',
    chapters: [{
            id: 'first',
            alignment: 'left',
            title: 'HOME ADVANTAGE',
            description: `
                <img src="./images/sports.jpg">
                
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second',
            alignment: 'right',
            title: '1. CROWD INVOLVEMENT',
            description: `
                <img src="./images/lumen.jpg">
                <p>Although difficult to quantify, the psychological effects of cheers and boos from fans are arguably the most influential 
                to both athletes and referees.</p>
                <p>In American football, fans tend to stay silent when the home team is on offense, making it
                easier to run audibles and hear snap counts. Conversely, crowds generate as much noise as possible when the opposing team
                has the ball to try to disrupt communication.</p>
                <p><i>Example: Lumen Field, home of the NFL team Seattle Seahawks, is notorious for its loud atmosphere. With the help of its
                fanbase, the 12s, Seattle consistently leads the NFL in inducing false-start and delay-of-game penalties. From 2002-2012,
                the Seahawks compiled a 59-29 record at home while going 33-55 on the road.</i></p>
                `,
            location: {
                center: [-122.3266, 47.5952],
                zoom: 16,
                pitch: 64,
                bearing: -32
            },
            onChapterEnter: [
                {
                    layer: 'lumen-field',
                    opacity: 0.5
                },
            ],
            onChapterExit: [
                {
                    layer: 'lumen-field',
                    opacity: 0
                }
            ]
        },
        {
            id: 'third',
            alignment: 'left',
            title: '2. TRAVEL CONSIDERATIONS',
            description: `
                <img src="./images/clock.jpg">
                <p>Secondly, the physical effects of travel fatigue and time difference play a significant role.</p>
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'time-zones',
                    opacity: 0.5
                },
            ],
            onChapterExit: [
                {
                    layer: 'time-zones',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fourth',
            alignment: 'right',
            title: '3. ENVIRONMENTAL FACTORS',
            description: `
                <img src="./images/coors.jpg">
                <p>Lastly, the familiarity of the environment rounds out the three major ingredients of home advantage.</p>
                <p>In baseball, every stadium has different dimensions, giving the home team a slight advantage via the familiarity of
                their own park. Outdoor arenas also help home athletes, as they will be more accustomed to the local weather and altitude.</p>
                <p><i>Example: Coors Field, home of the MLB team Colorado Rockies, is unique due to Denver's high elevation. The lower air
                density results in batted balls traveling farther, allowing Colorado to consistently lead the MLB in doubles, triples, and HRs.
                From 2012-2015, the Rockies were first in the league in runs scored at home but came in last for runs scored on the road.</i></p>
                `,
            location: {
                center: [-104.9917, 39.7559],
                zoom: 16,
                pitch: 64,
                bearing: 8
            },
            onChapterEnter: [
                {
                    layer: 'coors-field',
                    opacity: 0.5
                },
            ],
            onChapterExit: [
                {
                    layer: 'coors-field',
                    opacity: 0
                }
            ]
        }
    ]
};