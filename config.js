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
            alignment: 'left',
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
                center: [-122.3331, 47.5969],
                zoom: 16.5,
                pitch: 64,
                bearing: 64
            },
            onChapterEnter: [{
                layer: 'lumen-field',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'lumen-field',
                opacity: 0
            }]
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
            onChapterEnter: [{
                layer: 'time-zones',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'time-zones',
                opacity: 0
            }]
        },
        {
            id: 'fourth',
            alignment: 'left',
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
                center: [-104.9959, 39.7559],
                zoom: 16.5,
                pitch: 64,
                bearing: 8
            },
            onChapterEnter: [{
                layer: 'coors-field',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'coors-field',
                opacity: 0
            }]
        },
        {
            id: 'fifth',
            alignment: 'left',
            title: 'PANDEMIC BASKETBALL',
            description: `
                <img src="./images/nba.png">
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
            onChapterEnter: [{
                layer: 'venues',
                opacity: 1
            }, ],
            onChapterExit: [{
                layer: 'venues',
                opacity: 0
            }]
        },
        {
            id: 'atl',
            alignment: 'left',
            title: 'ATLANTA HAWKS',
            description: `
                Venue: State Farm Arena<br>
                Time Zone: Eastern
                <img src="./images/hawks.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>- 4.02</td>
                  <td>- 8.02</td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 6.33</td>
                  <td>- 1.69</td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 14.40</td>
                  <td>- 6.80</td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>+ 6.20</td>
                  <td>+ 0.80</td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 6.33</td>
                  <td>- 18.33</td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 6.33</td>
                  <td>- 18.33</td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 0.36</td>
                  <td>- 4.73</td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 5.73</td>
                  <td>+ 7.11</td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>- 5.27</td>
                  <td>- 8.55</td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 6.76</td>
                  <td>- 3.89</td>
                </tr>
              </table>
                `,
            location: {
                center: [-84.3963, 33.7573],
                zoom: 16.5,
                pitch: 64,
                bearing: 8
            },
            onChapterEnter: [{
                layer: 'state-farm-arena',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'state-farm-arena',
                opacity: 0
            }]
        },
        {
            id: 'bos',
            alignment: 'left',
            title: 'BOSTON CELTICS',
            description: `
                TD Garden
                <img src="./images/celtics.png">            
                `,
            location: {
                center: [-71.0621, 42.3662],
                zoom: 16.5,
                pitch: 64,
                bearing: -24
            },
            onChapterEnter: [{
                layer: 'td-garden',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'td-garden',
                opacity: 0
            }]
        },
        {
            id: 'bkn',
            alignment: 'left',
            title: 'BROOKLYN NETS',
            description: `
                Barclays Center
                <img src="./images/nets.png">            
                `,
            location: {
                center: [-73.9779, 40.6826],
                zoom: 16.5,
                pitch: 32,
                bearing: 24
            },
            onChapterEnter: [{
                layer: 'barclays-center',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'barclays-center',
                opacity: 0
            }]
        },
        {
            id: 'cha',
            alignment: 'left',
            title: 'CHARLOTTE HORNETS',
            description: `
                Spectrum Center
                <img src="./images/hornets.png">
                `,
            location: {
                center: [-80.8394, 35.2252],
                zoom: 16.5,
                pitch: 64,
                bearing: 8
            },
            onChapterEnter: [{
                layer: 'spectrum-center',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'spectrum-center',
                opacity: 0
            }]
        },
        {
            id: 'cle',
            alignment: 'left',
            title: 'CLEVELAND CAVALIERS',
            description: `
                Rocket Mortgage Fieldhouse
                <img src="./images/cavaliers.png">                
                `,
            location: {
                center: [-81.6881, 41.4981],
                zoom: 16.5,
                pitch: 64,
                bearing: 64
            },
            onChapterEnter: [{
                layer: 'rocket-mortgage-fieldhouse',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'rocket-mortgage-fieldhouse',
                opacity: 0
            }]
        },
        {
            id: 'det',
            alignment: 'left',
            title: 'DETROIT PISTONS',
            description: `
                Little Caesars Arena
                <img src="./images/pistons.png">            
                `,
            location: {
                center: [-83.0573, 42.3411],
                zoom: 16.5,
                pitch: 64,
                bearing: 8
            },
            onChapterEnter: [{
                layer: 'little-caesars-arena',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'little-caesars-arena',
                opacity: 0
            }]
        },
        {
            id: 'ind',
            alignment: 'left',
            title: 'INDIANA PACERS',
            description: `
                Bankers Life Fieldhouse
                <img src="./images/pacers.png">            
                `,
            location: {
                center: [-86.1575, 39.7640],
                zoom: 16.5,
                pitch: 64,
                bearing: 8
            },
            onChapterEnter: [{
                layer: 'bankers-life-fieldhouse',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'bankers-life-fieldhouse',
                opacity: 0
            }]
        },
        {
            id: 'mia',
            alignment: 'left',
            title: 'MIAMI HEAT',
            description: `
                American Airlines Arena
                <img src="./images/heat.png">            
                `,
            location: {
                center: [-80.1870, 25.7799],
                zoom: 16.5,
                pitch: 64,
                bearing: -64
            },
            onChapterEnter: [{
                layer: 'american-airlines-arena',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'american-airlines-arena',
                opacity: 0
            }]
        },
        {
            id: 'ny',
            alignment: 'left',
            title: 'NEW YORK KNICKS',
            description: `
                Madison Square Garden
                <img src="./images/knicks.png">            
                `,
            location: {
                center: [-73.9955, 40.7505],
                zoom: 16.5,
                pitch: 32,
                bearing: 0
            },
            onChapterEnter: [{
                layer: 'madison-square-garden',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'madison-square-garden',
                opacity: 0
            }]
        },
        {
            id: 'orl',
            alignment: 'left',
            title: 'ORLANDO MAGIC',
            description: `
                Amway Center
                <img src="./images/magic.png">            
                `,
            location: {
                center: [-81.3850, 28.5392],
                zoom: 16.5,
                pitch: 64,
                bearing: 8
            },
            onChapterEnter: [{
                layer: 'amway-center',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'amway-center',
                opacity: 0
            }]
        },
        {
            id: 'phi',
            alignment: 'left',
            title: 'PHILADELPHIA 76ERS',
            description: `
                Wells Fargo Center
                <img src="./images/76ers.png">            
                `,
            location: {
                center: [-75.1730, 39.9009],
                zoom: 16.5,
                pitch: 32,
                bearing: -32
            },
            onChapterEnter: [{
                layer: 'wells-fargo-center',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'wells-fargo-center',
                opacity: 0
            }]
        },
        {
            id: 'tor',
            alignment: 'left',
            title: 'TORONTO RAPTORS',
            description: `
                Scotiabank Arena
                <img src="./images/raptors.png">            
                `,
            location: {
                center: [-79.3808, 43.6435],
                zoom: 16.5,
                pitch: 64,
                bearing: 8
            },
            onChapterEnter: [{
                layer: 'scotiabank-arena',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'scotiabank-arena',
                opacity: 0
            }]
        },
        {
            id: 'was',
            alignment: 'left',
            title: 'WASHINGTON WIZARDS',
            description: `
                Capital One Arena
                <img src="./images/wizards.png">            
                `,
            location: {
                center: [-77.0208, 38.8966],
                zoom: 16.5,
                pitch: 64,
                bearing: -64
            },
            onChapterEnter: [{
                layer: 'capital-one-arena',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'capital-one-arena',
                opacity: 0
            }]
        },
        {
            id: 'chi',
            alignment: 'left',
            title: 'CHICAGO BULLS',
            description: `
                Venue: United Center<br>
                Time Zone: Central
                <img src="./images/bulls.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>- 9.80</td>
                  <td>- 7.02</td>
                  <td><b style="color:lightcoral">- 2.78</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>- 1.69</td>
                  <td>- 0.08</td>
                  <td><b style="color:lightcoral">- 1.61</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 17.00</td>
                  <td>- 18.00</td>
                  <td><b style="color:greenyellow">+ 1.00</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 4.80</td>
                  <td>- 4.00</td>
                  <td><b style="color:lightcoral">- 0.80</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>- 8.00</td>
                  <td>- 7.67</td>
                  <td><b style="color:lightcoral">- 0.33</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>- 13.33</td>
                  <td>- 5.33</td>
                  <td><b style="color:lightcoral">- 8.00</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>- 6.00</td>
                  <td>- 9.56</td>
                  <td><b style="color:greenyellow">+ 3.56</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 3.78</td>
                  <td>- 2.88</td>
                  <td><b style="color:greenyellow">+ 6.66</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>- 9.96</td>
                  <td>- 3.71</td>
                  <td><b style="color:lightcoral">- 6.51</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>- 1.63</td>
                  <td>+ 2.80</td>
                  <td><b style="color:lightcoral">- 4.43</b></td>
                </tr>
              </table>            
                `,
            location: {
                center: [-87.6767, 41.8807],
                zoom: 16.5,
                pitch: 64,
                bearing: 8
            },
            onChapterEnter: [{
                layer: 'united-center',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'united-center',
                opacity: 0
            }]
        },
        {
            id: 'dal',
            alignment: 'left',
            title: 'DALLAS MAVERICKS',
            description: `
                American Airlines Center
                <img src="./images/mavericks.png">            
                `,
            location: {
                center: [-96.8111, 32.7922],
                zoom: 16.5,
                pitch: 64,
                bearing: 64
            },
            onChapterEnter: [{
                layer: 'american-airlines-center',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'american-airlines-center',
                opacity: 0
            }]
        },
        {
            id: 'hou',
            alignment: 'left',
            title: 'HOUSTON ROCKETS',
            description: `
                Toyota Center
                <img src="./images/rockets.png">            
                `,
            location: {
                center: [-95.3636, 29.7508],
                zoom: 16.5,
                pitch: 64,
                bearing: 8
            },
            onChapterEnter: [{
                layer: 'toyota-center',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'toyota-center',
                opacity: 0
            }]
        },
        {
            id: 'mem',
            alignment: 'left',
            title: 'MEMPHIS GRIZZLIES',
            description: `
                FedEx Forum
                <img src="./images/grizzlies.png">            
                `,
            location: {
                center: [-90.0522, 35.1395],
                zoom: 16.5,
                pitch: 64,
                bearing: 64
            },
            onChapterEnter: [{
                layer: 'fedex-forum',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'fedex-forum',
                opacity: 0
            }]
        },
        {
            id: 'mil',
            alignment: 'left',
            title: 'MILWAUKEE BUCKS',
            description: `
                Fiserv Forum
                <img src="./images/bucks.png">            
                `,
            location: {
                center: [-87.9191, 43.0451],
                zoom: 16.5,
                pitch: 64,
                bearing: -32
            },
            onChapterEnter: [{
                layer: 'fiserv-forum',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'fiserv-forum',
                opacity: 0
            }]
        },
        {
            id: 'min',
            alignment: 'left',
            title: 'MINNESOTA TIMBERWOLVES',
            description: `
                Target Center
                <img src="./images/timberwolves.png">            
                `,
            location: {
                center: [-93.2777, 44.9795],
                zoom: 16.5,
                pitch: 64,
                bearing: 8
            },
            onChapterEnter: [{
                layer: 'target-center',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'target-center',
                opacity: 0
            }]
        },
        {
            id: 'no',
            alignment: 'left',
            title: 'NEW ORLEANS PELICANS',
            description: `
                Smoothie King Center
                <img src="./images/pelicans.png">            
                `,
            location: {
                center: [-90.0844, 29.9490],
                zoom: 16.5,
                pitch: 64,
                bearing: 8
            },
            onChapterEnter: [{
                layer: 'smoothie-king-center',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'smoothie-king-center',
                opacity: 0
            }]
        },
        {
            id: 'okc',
            alignment: 'left',
            title: 'OKLAHOMA CITY THUNDER',
            description: `
                Chesapeake Energy Arena
                <img src="./images/thunder.png">            
                `,
            location: {
                center: [-97.5166, 35.4634],
                zoom: 16.5,
                pitch: 32,
                bearing: 8
            },
            onChapterEnter: [{
                layer: 'chesapeake-energy-arena',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'chesapeake-energy-arena',
                opacity: 0
            }]
        },
        {
            id: 'sa',
            alignment: 'left',
            title: 'SAN ANTONIO SPURS',
            description: `
                AT&T Center
                <img src="./images/spurs.png">            
                `,
            location: {
                center: [-98.4388, 29.4270],
                zoom: 16.5,
                pitch: 64,
                bearing: 8
            },
            onChapterEnter: [{
                layer: 'att-center',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'att-center',
                opacity: 0
            }]
        },
        {
            id: 'den',
            alignment: 'left',
            title: 'DENVER NUGGETS',
            description: `
                Ball Arena
                <img src="./images/nuggets.png">            
                `,
            location: {
                center: [-105.0095, 39.7488],
                zoom: 16.5,
                pitch: 64,
                bearing: 64
            },
            onChapterEnter: [{
                layer: 'ball-arena',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'ball-arena',
                opacity: 0
            }]
        },
        {
            id: 'pho',
            alignment: 'left',
            title: 'PHOENIX SUNS',
            description: `
                Phoenix Suns Arena
                <img src="./images/suns.png">            
                `,
            location: {
                center: [-112.0727, 33.4457],
                zoom: 16.5,
                pitch: 32,
                bearing: 8
            },
            onChapterEnter: [{
                layer: 'phoenix-suns-arena',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'phoenix-suns-arena',
                opacity: 0
            }]
        },
        {
            id: 'uta',
            alignment: 'left',
            title: 'UTAH JAZZ',
            description: `
                Vivint Arena
                <img src="./images/jazz.png">            
                `,
            location: {
                center: [-111.9022, 40.7683],
                zoom: 16.5,
                pitch: 64,
                bearing: 8
            },
            onChapterEnter: [{
                layer: 'vivint-arena',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'vivint-arena',
                opacity: 0
            }]
        },
        {
            id: 'gs',
            alignment: 'left',
            title: 'GOLDEN STATE WARRIORS',
            description: `
                Chase Center
                <img src="./images/warriors.png">            
                `,
            location: {
                center: [-122.3877, 37.7667],
                zoom: 16.5,
                pitch: 64,
                bearing: -64
            },
            onChapterEnter: [{
                layer: 'chase-center',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'chase-center',
                opacity: 0
            }]
        },
        {
            id: 'lac',
            alignment: 'left',
            title: 'LOS ANGELES CLIPPERS',
            description: `
                Staples Center
                <img src="./images/clippers.png">            
                `,
            location: {
                center: [-118.2688, 34.0430],
                zoom: 16.5,
                pitch: 64,
                bearing: 8
            },
            onChapterEnter: [{
                layer: 'staples-center',
                opacity: 0.5
            }, ],
            onChapterExit: []
        },
        {
            id: 'lal',
            alignment: 'left',
            title: 'LOS ANGELES LAKERS',
            description: `
                Staples Center
                <img src="./images/lakers.png">            
                `,
            location: {
                center: [-118.2688, 34.0430],
                zoom: 16.5,
                pitch: 64,
                bearing: 8
            },
            onChapterEnter: [],
            onChapterExit: [{
                layer: 'staples-center',
                opacity: 0
            }]
        },
        {
            id: 'por',
            alignment: 'left',
            title: 'PORTLAND TRAIL BLAZERS',
            description: `
                Moda Center
                <img src="./images/blazers.png">            
                `,
            location: {
                center: [-122.6677, 45.5322],
                zoom: 16.5,
                pitch: 64,
                bearing: 32
            },
            onChapterEnter: [{
                layer: 'moda-center',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'moda-center',
                opacity: 0
            }]
        },
        {
            id: 'sac',
            alignment: 'left',
            title: 'SACRAMENTO KINGS',
            description: `
                Golden 1 Center
                <img src="./images/kings.png">            
                `,
            location: {
                center: [-121.5005, 38.5811],
                zoom: 16.5,
                pitch: 64,
                bearing: 64
            },
            onChapterEnter: [{
                layer: 'golden-1-center',
                opacity: 0.5
            }, ],
            onChapterExit: [{
                layer: 'golden-1-center',
                opacity: 0
            }]
        }
    ]
};