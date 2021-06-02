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
                <p>What is it?</p>
                <p>In team sports, <i>home advantage</i> is the term used to describe the phenomenon that teams generally perform better
                at home than on the road. For as long as there has been team sports, there has been debate on home advantage. Does it
                really exist? If so, what causes it?</p>
                <p>Let us start by exploring the three things most commonly believed to be factors:</p>
                <p><i>1. Crowd Involvement<br>
                2. Travel Considerations<br>
                3. Environment</i></p>
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
                the Seahawks compiled a 59-29 (67.0%) record at home while going 33-55 (37.5%) on the road.</i></p>
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
                <p>A traveling team is limited to hotel acccomadations while the home team has all the luxuries of players' own
                homes. No bed is ever as comfortable as your own, especially compounded with getting on and off planes or buses.</p>
                <p><i>Example: Any eastern team traveling to compete in the west. The United States, as shown on the right, has
                four primary time zones, altering the time during these trips by up to three hours. By the time the game ends,
                players' internal clocks may be well past their bedtimes.</i></p>
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
            title: '3. ENVIRONMENT',
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
        },
        {
            id: 'fifth',
            alignment: 'left',
            title: 'PANDEMIC BASKETBALL',
            description: `
                <p>Since all basketball stadiums are indoors with standard dimensions, environmental factors are naturally limited in the
                NBA. For the most part, players can expect more or less the same atmosphere every single game. Furthermore, due to the
                COVID-19 pandemic, the 2020-21 NBA Season saw the majority of the team either heavily limit or outright prohibit fan
                attendance. Thus, with two major factors essentially out of the equation this project will use data and statistics to see
                the effects of travel on home court advantage.</p>
                <p><i>Let's get started!</i></p>                
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'atl',
            alignment: 'left',
            title: 'ATLANTA HAWKS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bos',
            alignment: 'left',
            title: 'BOSTON CELTICS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'bkn',
            alignment: 'left',
            title: 'BROOKLYN NETS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cha',
            alignment: 'left',
            title: 'CHARLOTTE HORNETS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cle',
            alignment: 'left',
            title: 'CLEVELAND CAVALIERS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'det',
            alignment: 'left',
            title: 'DETROIT PISTONS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ind',
            alignment: 'left',
            title: 'INDIANA PACERS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'mia',
            alignment: 'left',
            title: 'MIAMI HEAT',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ny',
            alignment: 'left',
            title: 'NEW YORK KNICKS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'orl',
            alignment: 'left',
            title: 'ORLANDO MAGIC',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'phi',
            alignment: 'left',
            title: 'PHILADELPHIA 76ERS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tor',
            alignment: 'left',
            title: 'TORONTO RAPTORS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'was',
            alignment: 'left',
            title: 'WASHINGTON WIZARDS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chi',
            alignment: 'left',
            title: 'CHICAGO BULLS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'dal',
            alignment: 'left',
            title: 'DALLAS MAVERICKS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'hou',
            alignment: 'left',
            title: 'HOUSTON ROCKETS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'mem',
            alignment: 'left',
            title: 'MEMPHIS GRIZZLIES',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'mil',
            alignment: 'left',
            title: 'MILWAUKEE BUCKS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'min',
            alignment: 'left',
            title: 'MINNESOTA TIMBERWOLVES',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'no',
            alignment: 'left',
            title: 'NEW ORLEANS PELICANS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'okc',
            alignment: 'left',
            title: 'OKLAHOMA CITY THUNDER',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sa',
            alignment: 'left',
            title: 'SAN ANTONIO SPURS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'den',
            alignment: 'left',
            title: 'DENVER NUGGETS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'pho',
            alignment: 'left',
            title: 'PHOENIX SUNS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'uta',
            alignment: 'left',
            title: 'UTAH JAZZ',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'gs',
            alignment: 'left',
            title: 'GOLDEN STATE WARRIORS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'lac',
            alignment: 'left',
            title: 'LOS ANGELES CLIPPERS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'lal',
            alignment: 'left',
            title: 'LOS ANGELES LAKERS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'por',
            alignment: 'left',
            title: 'PORTLAND TRAIL BLAZERS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sac',
            alignment: 'left',
            title: 'SACRAMENTO KINGS',
            description: `            
                `,
            location: {
                center: [-108, 38],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};