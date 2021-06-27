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
                the effects of travel on home court advantage. By comparing the 2020-21 numbers with 2018-19, this project also seeks
                to extrapolate the effects of crowd involvement.</p>
                <h3>DIFFERENTIALS</h3>
                <p>The numbers shown in this project are point differentials. Due to the nature of the NBA, every season sees different teams
                in the top and bottom of the standings. Therefore, raw point totals and win/loss records are not good indicators when comparing
                across different seasons. A better team will be expected to score more points and win more games than a rebuilding one,
                regardless of home or away. Differentials compare a team's home performances to their away performances.
                In other words, a good team may win both at home and on the road, but winning by a bigger margin at home can be interpreted
                as a home court advantage. Likewise, a rebuilding team likely loses at home and away, but if the games are closer at home,
                then there are still signs of an advantage.</p> 
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
      id: '20-21',
      alignment: 'left',
      title: '2020-21 SEASON',
      description: `
                <img src="./images/differential2021.png">
                <p>These are the overall differentials for every NBA team in the 2020-21 season. The last column in the table is a boolean
                that simplifies the data: "True" means the team performed better at home than away, "False" signifies the opposite.
                From this table we can see that 70% (21/30) of the teams showed signs of an advantage at home. Of the three factors
                previously mentioned, we can deduce that travel is the only one applicable here.</p>
                <p>But within travel considerations, is it more so due to the time difference or the physical fatigue? Let's take a
                look at teams' performance within each time zone.</p>              
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
      id: 'eastern',
      alignment: 'left',
      title: 'EASTERN TIME ZONE',
      description: `
            # of Teams: 13
            <table style="width:100%" id="t">
            <tr>
              <th></th>
              <th>Home</th>
              <th>Away</th>
              <th>Differential</th>
            </tr>
            <tr>
              <td>2018 - 19 Overall</td>
              <td>+ 1.68</td>
              <td>- 3.54</td>
              <td><b style="color:greenyellow">+ 5.22</b></td>
            </tr>
            <tr>
              <td>2020 - 21 Overall</td>
              <td>+ 0.75</td>
              <td>- 2.49</td>
              <td><b style="color:greenyellow">+ 3.24</b></td>
            </tr>
            <tr>
              <td>2018 - 19 vs Pacific</td>
              <td>- 2.14</td>
              <td>- 5.72</td>
              <td><b style="color:greenyellow">+ 3.58</b></td>
            </tr>
            <tr>
              <td>2020 - 21 vs Pacific</td>
              <td>- 2.74</td>
              <td>- 2.78</td>
              <td><b style="color:greenyellow">+ 0.04</b></td>
            </tr>
            <tr>
              <td>2018 - 19 vs Mountain</td>
              <td>+ 1.15</td>
              <td>- 3.82</td>
              <td><b style="color:greenyellow">+ 4.97</b></td>
            </tr>
            <tr>
              <td>2020 - 21 vs Mountain</td>
              <td>- 2.05</td>
              <td>- 13.31</td>
              <td><b style="color:greenyellow">+ 11.26</b></td>
            </tr>
            <tr>
              <td>2018 - 19 vs Central</td>
              <td>+ 0.39</td>
              <td>- 3.06</td>
              <td><b style="color:greenyellow">+ 3.45</b></td>
            </tr>
            <tr>
              <td>2020 - 21 vs Central</td>
              <td>- 0.41</td>
              <td>+ 1.74</td>
              <td><b style="color:lightcoral">- 2.15</b></td>
            </tr>
            <tr>
              <td>2018 - 19 vs Eastern</td>
              <td>+ 3.21</td>
              <td>- 3.24</td>
              <td><b style="color:greenyellow">+ 6.45</b></td>
            </tr>
            <tr>
              <td>2020 - 21 vs Eastern</td>
              <td>+ 2.90</td>
              <td>- 2.90</td>
              <td><b style="color:greenyellow">+ 5.80</b></td>
            </tr>
          </table>           
            `,
      location: {
        center: [-88, 38],
        zoom: 4,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [{
        layer: 'eastern',
        opacity: 0.5
      }, ],
      onChapterExit: [{
        layer: 'eastern',
        opacity: 0
      }]
    },
    {
      id: 'central',
      alignment: 'left',
      title: 'CENTRAL TIME ZONE',
      description: `
            # of Teams: 9
            <table style="width:100%" id="t">
            <tr>
              <th></th>
              <th>Home</th>
              <th>Away</th>
              <th>Differential</th>
            </tr>
            <tr>
              <td>2018 - 19 Overall</td>
              <td>+ 2.88</td>
              <td>- 2.07</td>
              <td><b style="color:greenyellow">+ 4.95</b></td>
            </tr>
            <tr>
              <td>2020 - 21 Overall</td>
              <td>- 2.55</td>
              <td>- 1.47</td>
              <td><b style="color:lightcoral">- 1.08</b></td>
            </tr>
            <tr>
              <td>2018 - 19 vs Pacific</td>
              <td>+ 2.30</td>
              <td>- 4.37</td>
              <td><b style="color:greenyellow">+ 6.67</b></td>
            </tr>
            <tr>
              <td>2020 - 21 vs Pacific</td>
              <td>- 2.62</td>
              <td>- 4.36</td>
              <td><b style="color:greenyellow">+ 1.74</b></td>
            </tr>
            <tr>
              <td>2018 - 19 vs Mountain</td>
              <td>+ 3.71</td>
              <td>- 3.42</td>
              <td><b style="color:greenyellow">+ 7.13</b></td>
            </tr>
            <tr>
              <td>2020 - 21 vs Mountain</td>
              <td>- 9.70</td>
              <td>- 6.64</td>
              <td><b style="color:lightcoral">- 3.06</b></td>
            </tr>
            <tr>
              <td>2018 - 19 vs Central</td>
              <td>+ 2.23</td>
              <td>- 2.22</td>
              <td><b style="color:greenyellow">+ 4.45</b></td>
            </tr>
            <tr>
              <td>2020 - 21 vs Central</td>
              <td>- 0.15</td>
              <td>+ 0.28</td>
              <td><b style="color:lightcoral">- 0.44</b></td>
            </tr>
            <tr>
              <td>2018 - 19 vs Eastern</td>
              <td>+ 3.25</td>
              <td>- 0.52</td>
              <td><b style="color:greenyellow">+ 3.77</b></td>
            </tr>
            <tr>
              <td>2020 - 21 vs Eastern</td>
              <td>- 2.43</td>
              <td>+ 0.24</td>
              <td><b style="color:lightcoral">- 2.67</b></td>
            </tr>
          </table>              
            `,
      location: {
        center: [-103, 38],
        zoom: 4,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [{
        layer: 'central',
        opacity: 0.5
      }, ],
      onChapterExit: [{
        layer: 'central',
        opacity: 0
      }]
    }, {
      id: 'mountain',
      alignment: 'left',
      title: 'MOUNTAIN TIME ZONE',
      description: `
            # of Teams: 3
            <table style="width:100%" id="t">
            <tr>
              <th></th>
              <th>Home</th>
              <th>Away</th>
              <th>Differential</th>
            </tr>
            <tr>
              <td>2018 - 19 Overall</td>
              <td>+ 4.02</td>
              <td>- 4.11</td>
              <td><b style="color:greenyellow">+ 8.13</b></td>
            </tr>
            <tr>
              <td>2020 - 21 Overall</td>
              <td>+ 9.43</td>
              <td>+ 3.78</td>
              <td><b style="color:greenyellow">+ 5.65</b></td>
            </tr>
            <tr>
              <td>2018 - 19 vs Pacific</td>
              <td>+ 2.48</td>
              <td>- 5.30</td>
              <td><b style="color:greenyellow">+ 7.78</b></td>
            </tr>
            <tr>
              <td>2020 - 21 vs Pacific</td>
              <td>+ 9.80</td>
              <td>+ 1.01</td>
              <td><b style="color:greenyellow">+ 8.79</b></td>
            </tr>
            <tr>
              <td>2018 - 19 vs Mountain</td>
              <td>+ 9.75</td>
              <td>- 9.75</td>
              <td>0.00</td>
            </tr>
            <tr>
              <td>2020 - 21 vs Mountain</td>
              <td>+ 0.86</td>
              <td>+ 0.22</td>
              <td><b style="color:greenyellow">+ 0.64</b></td>
            </tr>
            <tr>
              <td>2018 - 19 vs Central</td>
              <td>+ 3.60</td>
              <td>- 4.39</td>
              <td><b style="color:greenyellow">+ 7.99</b></td>
            </tr>
            <tr>
              <td>2020 - 21 vs Central</td>
              <td>+ 7.01</td>
              <td>+ 9.65</td>
              <td><b style="color:lightcoral">- 2.64</b></td>
            </tr>
            <tr>
              <td>2018 - 19 vs Eastern</td>
              <td>+ 3.82</td>
              <td>- 1.15</td>
              <td><b style="color:greenyellow">+ 4.97</b></td>
            </tr>
            <tr>
              <td>2020 - 21 vs Eastern</td>
              <td>+ 13.31</td>
              <td>+ 2.05</td>
              <td><b style="color:greenyellow">+ 11.26</b></td>
            </tr>
          </table>              
            `,
      location: {
        center: [-118, 38],
        zoom: 4,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [{
        layer: 'mountain',
        opacity: 0.5
      }, ],
      onChapterExit: [{
        layer: 'mountain',
        opacity: 0
      }]
    },
    {
      id: 'pacific',
      alignment: 'left',
      title: 'PACIFIC TIME ZONE',
      description: `
            # of Teams: 5
            <table style="width:100%" id="t">
            <tr>
              <th></th>
              <th>Home</th>
              <th>Away</th>
              <th>Differential</th>
            </tr>
            <tr>
              <td>2018 - 19 Overall</td>
              <td>+ 3.91</td>
              <td>- 0.45</td>
              <td><b style="color:greenyellow">+ 4.36</b></td>
            </tr>
            <tr>
              <td>2020 - 21 Overall</td>
              <td>+ 3.28</td>
              <td>+ 0.53</td>
              <td><b style="color:greenyellow">+ 2.75</b></td>
            </tr>
            <tr>
              <td>2018 - 19 vs Pacific</td>
              <td>- 0.50</td>
              <td>+ 0.45</td>
              <td><b style="color:lightcoral">- 0.95</b></td>
            </tr>
            <tr>
              <td>2020 - 21 vs Pacific</td>
              <td>+ 2.22</td>
              <td>- 2.85</td>
              <td><b style="color:greenyellow">+ 5.07</b></td>
            </tr>
            <tr>
              <td>2018 - 19 vs Mountain</td>
              <td>+ 5.57</td>
              <td>- 2.97</td>
              <td><b style="color:greenyellow">+ 8.54</b></td>
            </tr>
            <tr>
              <td>2020 - 21 vs Mountain</td>
              <td>- 0.62</td>
              <td>- 10.80</td>
              <td><b style="color:greenyellow">+ 10.18</b></td>
            </tr>
            <tr>
              <td>2018 - 19 vs Central</td>
              <td>+ 3.98</td>
              <td>- 2.47</td>
              <td><b style="color:greenyellow">+ 6.45</b></td>
            </tr>
            <tr>
              <td>2020 - 21 vs Central</td>
              <td>+ 6.26</td>
              <td>+ 2.86</td>
              <td><b style="color:greenyellow">+ 3.40</b></td>
            </tr>
            <tr>
              <td>2018 - 19 vs Eastern</td>
              <td>+ 5.72</td>
              <td>+ 2.14</td>
              <td><b style="color:greenyellow">+ 7.86</b></td>
            </tr>
            <tr>
              <td>2020 - 21 vs Eastern</td>
              <td>+ 2.78</td>
              <td>+ 2.74</td>
              <td><b style="color:greenyellow">+ 0.04</b></td>
            </tr>
          </table>              
            `,
      location: {
        center: [-133, 38],
        zoom: 4,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [{
        layer: 'pacific',
        opacity: 0.5
      }, ],
      onChapterExit: [{
        layer: 'pacific',
        opacity: 0
      }]
    },
    {
      id: 'ic',
      alignment: 'left',
      title: 'INITIAL CONCLUSION',
      description: `
              <p>If we assume that time difference has an impact on players, then the data should show differentials getting worse and
              worse as teams travel further and further away from their normal time zone. This, however, does not appear to be the case
              across both seasons. There are no discernible correlations between time difference and performance. While time difference may
              still be a factor in individual games for individual players, it seems safe to assume that it is insignificant in determining
              the overall season performance of basketball teams. Since home court advantage still exists strongly in 2020-21, more emphasis
              can now be placed on the extra physical fatigue for away teams as the sole reason.</p>
              <p>Now that we've thoroughly examined the 2020-21 differentials, let's focus in on the 2018-19 table.</p>              
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
      id: '18-19',
      alignment: 'left',
      title: '2018-19 SEASON',
      description: `
              <img src="./images/differential1819.png">
              <p>Voila, it shows 96.67% (all but 1) of the teams performing better at home. With traveling mostly identical, the most
              logical explanation of this increase in performance is the presence of fans. It appears that having a crowd cheering / booing
              in the stands does indeed have a significant impact on players both home and away.</p>              
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
      id: 'fc',
      alignment: 'left',
      title: 'FINAL CONCLUSION',
      description: `
              <p>By choosing the NBA as the main focus, we effectively limited the possible factors to consider down to just two. The COVID-19
              pandemic allowed us to zoom in further by eliminating fan participation in the 2020-21 season. With 1 proposed factor remaining,
              we verified its influence by examining the season's differential data and confirming that home court advantage still exists.
              After separating the teams into their home time zones, we are able to disregard time difference as a factor and place more
              importance on the physical effects of traveling.</p>
              <p>Next, with the 2020-21 season statistics processed, we try to extrapolate the effects of crowd involvement by doing the same
              data wrangling with the 2018-19 season numbers. We can see that home court advantage among teams were much higher when fans were
              in the equation.</p>
              <p>So in conclusion, when it is safe again to do so, please go out and support your favorite teams. Not only will they appreciate
              it, the numbers strong suggest that it does help them win!.</p>
              <p><i>Continue scrolling for differential tables of every team. They will grouped by time zones going from east to west
              (Eastern, Central, Mountain, then Pacific). Within each zone, the teams will be listed in alphabetical order.</i></p>              
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
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>- 4.02</td>
                  <td>- 8.02</td>
                  <td><b style="color:greenyellow">+ 4.00</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 6.33</td>
                  <td>- 1.69</td>
                  <td><b style="color:greenyellow">+ 8.02</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 14.40</td>
                  <td>- 6.80</td>
                  <td><b style="color:lightcoral">- 7.60</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>+ 6.20</td>
                  <td>+ 0.80</td>
                  <td><b style="color:greenyellow">+ 5.40</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 6.33</td>
                  <td>- 18.33</td>
                  <td><b style="color:greenyellow">+ 24.66</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 6.33</td>
                  <td>- 18.33</td>
                  <td><b style="color:greenyellow">+ 24.66</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 0.36</td>
                  <td>- 4.73</td>
                  <td><b style="color:greenyellow">+ 5.09</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 5.73</td>
                  <td>+ 7.11</td>
                  <td><b style="color:lightcoral">- 1.38</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>- 5.27</td>
                  <td>- 8.55</td>
                  <td><b style="color:greenyellow">+ 3.28</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 6.76</td>
                  <td>- 3.89</td>
                  <td><b style="color:greenyellow">+ 10.65</b></td>
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
                Venue: TD Garden<br>
                Time Zone: Eastern
                <img src="./images/celtics.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 6.78</td>
                  <td>+ 2.10</td>
                  <td><b style="color:greenyellow">+ 4.68</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 3.00</td>
                  <td>- 0.08</td>
                  <td><b style="color:greenyellow">+ 3.08</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 3.00</td>
                  <td>+ 3.40</td>
                  <td><b style="color:lightcoral">- 6.40</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 2.40</td>
                  <td>+ 2.40</td>
                  <td><b style="color:lightcoral">- 4.80</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>- 9.67</td>
                  <td>- 3.00</td>
                  <td><b style="color:lightcoral">- 6.67</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 6.00</td>
                  <td>- 1.67</td>
                  <td><b style="color:greenyellow">+ 7.67</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 4.80</td>
                  <td>+ 5.40</td>
                  <td><b style="color:lightcoral">- 0.60</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 3.00</td>
                  <td>+ 3.82</td>
                  <td><b style="color:lightcoral">- 0.82</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 11.91</td>
                  <td>+ 1.04</td>
                  <td><b style="color:greenyellow">+ 10.87</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 3.95</td>
                  <td>- 3.06</td>
                  <td><b style="color:greenyellow">+ 7.01</b></td>
                </tr>
              </table>            
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
                Venue: Barclays Center<br>
                Time Zone: Eastern
                <img src="./images/nets.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 2.54</td>
                  <td>+ 2.68</td>
                  <td><b style="color:greenyellow">+ 5.22</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 6.44</td>
                  <td>+ 2.56</td>
                  <td><b style="color:greenyellow">+ 3.88</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>+ 1.20</td>
                  <td>- 3.20</td>
                  <td><b style="color:greenyellow">+ 4.40</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 1.00</td>
                  <td>+ 9.40</td>
                  <td><b style="color:lightcoral">- 10.40</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 1.00</td>
                  <td>+ 2.67</td>
                  <td><b style="color:lightcoral">- 1.67</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 16.33</td>
                  <td>- 6.67</td>
                  <td><b style="color:greenyellow">+ 23.00</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>- 0.82</td>
                  <td>- 0.64</td>
                  <td><b style="color:lightcoral">- 0.18</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 4.22</td>
                  <td>+ 6.18</td>
                  <td><b style="color:lightcoral">- 1.96</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 4.73</td>
                  <td>- 4.32</td>
                  <td><b style="color:greenyellow">+ 9.05</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 7.89</td>
                  <td>- 0.18</td>
                  <td><b style="color:greenyellow">+ 8.07</b></td>
                </tr>
              </table>             
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
                Venue: Spectrum Center<br>
                Time Zone: Eastern
                <img src="./images/hornets.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 3.68</td>
                  <td>- 5.88</td>
                  <td><b style="color:greenyellow">+ 9.56</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>- 0.11</td>
                  <td>- 3.75</td>
                  <td><b style="color:greenyellow">+ 3.64</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 6.40</td>
                  <td>- 23.60</td>
                  <td><b style="color:greenyellow">+ 17.20</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 3.00</td>
                  <td>- 11.60</td>
                  <td><b style="color:greenyellow">+ 8.60</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 6.00</td>
                  <td>- 5.33</td>
                  <td><b style="color:greenyellow">+ 11.33</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>- 8.67</td>
                  <td>- 14.67</td>
                  <td><b style="color:greenyellow">+ 6.00</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 0.45</td>
                  <td>- 3.60</td>
                  <td><b style="color:greenyellow">+ 4.05</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>- 3.91</td>
                  <td>+ 8.22</td>
                  <td><b style="color:lightcoral">- 12.13</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 7.27</td>
                  <td>- 3.09</td>
                  <td><b style="color:greenyellow">+ 10.36</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>- 3.75</td>
                  <td>- 5.63</td>
                  <td><b style="color:greenyellow">+ 1.88</b></td>
                </tr>
              </table>  
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
                Venue: Rocket Mortgage Fieldhouse<br>
                Time Zone: Eastern
                <img src="./images/cavaliers.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>- 9.78</td>
                  <td>- 11.88</td>
                  <td><b style="color:greenyellow">+ 2.10</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>- 6.86</td>
                  <td>- 10.03</td>
                  <td><b style="color:greenyellow">+ 3.17</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 12.40</td>
                  <td>- 10.80</td>
                  <td><b style="color:lightcoral">- 1.60</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 19.40</td>
                  <td>- 16.60</td>
                  <td><b style="color:lightcoral">- 2.80</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>- 10.67</td>
                  <td>- 15.67</td>
                  <td><b style="color:greenyellow">+ 5.00</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>- 21.00</td>
                  <td>- 27.67</td>
                  <td><b style="color:greenyellow">+ 6.67</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>- 10.45</td>
                  <td>- 11.27</td>
                  <td><b style="color:greenyellow">+ 0.82</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>- 7.50</td>
                  <td>- 0.40</td>
                  <td><b style="color:lightcoral">- 7.10</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>- 8.73</td>
                  <td>- 11.91</td>
                  <td><b style="color:greenyellow">+ 3.18</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>- 0.67</td>
                  <td>- 10.61</td>
                  <td><b style="color:greenyellow">+ 9.94</b></td>
                </tr>
              </table>                  
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
                Venue: Little Caesars Arena<br>
                Time Zone: Eastern
                <img src="./images/pistons.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 2.56</td>
                  <td>- 3.05</td>
                  <td><b style="color:greenyellow">+ 5.61</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>- 3.06</td>
                  <td>- 5.89</td>
                  <td><b style="color:greenyellow">+ 2.83</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>+ 4.00</td>
                  <td>- 6.00</td>
                  <td><b style="color:greenyellow">+ 10.00</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 4.60</td>
                  <td>- 8.60</td>
                  <td><b style="color:greenyellow">+ 4.00</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 10.67</td>
                  <td>+ 3.67</td>
                  <td><b style="color:greenyellow">+ 7.00</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>- 6.00</td>
                  <td>- 14.67</td>
                  <td><b style="color:greenyellow">+ 8.67</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 1.36</td>
                  <td>- 4.64</td>
                  <td><b style="color:greenyellow">+ 6.00</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>- 4.40</td>
                  <td>- 5.00</td>
                  <td><b style="color:greenyellow">+ 0.60</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 1.73</td>
                  <td>- 2.50</td>
                  <td><b style="color:greenyellow">+ 4.23</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>- 1.39</td>
                  <td>- 4.17</td>
                  <td><b style="color:greenyellow">+ 2.78</b></td>
                </tr>
              </table>               
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
                Venue: Bankers Life Fieldhouse<br>
                Time Zone: Eastern
                <img src="./images/pacers.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 7.63</td>
                  <td>+ 1.46</td>
                  <td><b style="color:greenyellow">+ 6.17</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>- 2.75</td>
                  <td>+ 2.67</td>
                  <td><b style="color:lightcoral">- 5.42</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>+ 6.80</td>
                  <td>- 9.20</td>
                  <td><b style="color:greenyellow">+ 16.00</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 10.80</td>
                  <td>- 2.00</td>
                  <td><b style="color:lightcoral">- 8.80</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 32.33</td>
                  <td>+ 12.00</td>
                  <td><b style="color:greenyellow">+ 20.33</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>- 8.67</td>
                  <td>- 4.00</td>
                  <td><b style="color:lightcoral">- 4.67</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 6.45</td>
                  <td>- 4.64</td>
                  <td><b style="color:greenyellow">+ 11.09</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>- 2.60</td>
                  <td>+ 7.30</td>
                  <td><b style="color:lightcoral">- 9.90</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 5.05</td>
                  <td>+ 5.50</td>
                  <td><b style="color:lightcoral">- 0.45</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 0.39</td>
                  <td>+ 2.50</td>
                  <td><b style="color:lightcoral">- 2.11</b></td>
                </tr>
              </table>              
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
                Venue: American Airlines Arena<br>
                Time Zone: Eastern
                <img src="./images/heat.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 0.24</td>
                  <td>- 0.71</td>
                  <td><b style="color:greenyellow">+ 0.95</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 1.31</td>
                  <td>- 0.42</td>
                  <td><b style="color:greenyellow">+ 1.73</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 5.60</td>
                  <td>+ 4.40</td>
                  <td><b style="color:lightcoral">- 10.00</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>+ 1.40</td>
                  <td>+ 0.80</td>
                  <td><b style="color:greenyellow">+ 0.60</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>- 1.67</td>
                  <td>- 8.67</td>
                  <td><b style="color:greenyellow">+ 7.00</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>- 9.67</td>
                  <td>- 18.33</td>
                  <td><b style="color:greenyellow">+ 8.66</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>- 2.50</td>
                  <td>- 1.55</td>
                  <td><b style="color:lightcoral">- 0.95</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 3.82</td>
                  <td>+ 2.89</td>
                  <td><b style="color:greenyellow">+ 0.93</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 2.96</td>
                  <td>- 0.36</td>
                  <td><b style="color:greenyellow">+ 3.32</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 1.59</td>
                  <td>+ 0.53</td>
                  <td><b style="color:greenyellow">+ 1.06</b></td>
                </tr>
              </table>              
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
                Venue: Madison Square Garden<br>
                Time Zone: Eastern
                <img src="./images/knicks.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>- 7.85</td>
                  <td>- 10.56</td>
                  <td><b style="color:greenyellow">+ 2.71</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 4.14</td>
                  <td>+ 0.47</td>
                  <td><b style="color:greenyellow">+ 3.67</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 10.00</td>
                  <td>- 11.60</td>
                  <td><b style="color:greenyellow">+ 1.60</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>+ 4.60</td>
                  <td>+ 1.40</td>
                  <td><b style="color:greenyellow">+ 3.20</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>- 19.00</td>
                  <td>- 16.67</td>
                  <td><b style="color:lightcoral">- 2.33</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>- 7.00</td>
                  <td>- 17.67</td>
                  <td><b style="color:greenyellow">+ 10.67</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>- 5.18</td>
                  <td>- 9.10</td>
                  <td><b style="color:greenyellow">+ 3.92</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 6.44</td>
                  <td>+ 1.91</td>
                  <td><b style="color:greenyellow">+ 4.53</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>- 7.18</td>
                  <td>- 10.17</td>
                  <td><b style="color:greenyellow">+ 2.99</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 4.68</td>
                  <td>+ 2.47</td>
                  <td><b style="color:greenyellow">+ 2.21</b></td>
                </tr>
              </table>              
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
                Venue: Amway Center<br>
                Time Zone: Eastern
                <img src="./images/magic.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 2.66</td>
                  <td>- 1.24</td>
                  <td><b style="color:greenyellow">+ 3.90</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>- 9.00</td>
                  <td>- 9.61</td>
                  <td><b style="color:greenyellow">+ 0.61</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 5.40</td>
                  <td>- 6.20</td>
                  <td><b style="color:greenyellow">+ 0.80</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 10.80</td>
                  <td>- 0.00</td>
                  <td><b style="color:lightcoral">- 10.80</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>- 0.33</td>
                  <td>- 8.00</td>
                  <td><b style="color:greenyellow">+ 7.67</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>- 8.33</td>
                  <td>- 25.00</td>
                  <td><b style="color:greenyellow">+ 16.67</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>- 0.40</td>
                  <td>- 1.09</td>
                  <td><b style="color:greenyellow">+ 0.69</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>- 17.18</td>
                  <td>- 9.56</td>
                  <td><b style="color:lightcoral">- 7.62</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 6.13</td>
                  <td>- 0.73</td>
                  <td><b style="color:greenyellow">+ 6.86</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>- 3.29</td>
                  <td>- 9.74</td>
                  <td><b style="color:greenyellow">+ 6.45</b></td>
                </tr>
              </table>              
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
                Venue: Wells Fargo Center<br>
                Time Zone: Eastern
                <img src="./images/76ers.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 8.05</td>
                  <td>- 2.66</td>
                  <td><b style="color:greenyellow">+ 10.71</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 8.92</td>
                  <td>+ 2.25</td>
                  <td><b style="color:greenyellow">+ 6.67</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>+ 4.60</td>
                  <td>- 2.00</td>
                  <td><b style="color:greenyellow">+ 6.60</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>+ 0.20</td>
                  <td>+ 2.40</td>
                  <td><b style="color:lightcoral">- 2.20</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 6.00</td>
                  <td>+ 2.00</td>
                  <td><b style="color:greenyellow">+ 4.00</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>- 2.33</td>
                  <td>- 9.67</td>
                  <td><b style="color:greenyellow">+ 7.34</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 11.40</td>
                  <td>- 4.18</td>
                  <td><b style="color:greenyellow">+ 15.58</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 9.22</td>
                  <td>+ 6.18</td>
                  <td><b style="color:greenyellow">+ 3.04</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 7.61</td>
                  <td>- 2.68</td>
                  <td><b style="color:greenyellow">+ 10.29</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 12.84</td>
                  <td>+ 1.76</td>
                  <td><b style="color:greenyellow">+ 11.08</b></td>
                </tr>
              </table>              
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
                Venue: Scotiabank Arena<br>
                Time Zone: Eastern
                <img src="./images/raptors.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 7.56</td>
                  <td>+ 4.61</td>
                  <td><b style="color:greenyellow">+ 2.95</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 1.50</td>
                  <td>- 5.22</td>
                  <td><b style="color:greenyellow">+ 6.72</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>+ 10.20</td>
                  <td>+ 12.20</td>
                  <td><b style="color:lightcoral">- 2.00</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>+ 3.60</td>
                  <td>- 15.80</td>
                  <td><b style="color:greenyellow">+ 19.40</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 1.67</td>
                  <td>+ 4.33</td>
                  <td><b style="color:lightcoral">- 2.66</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 5.67</td>
                  <td>- 7.33</td>
                  <td><b style="color:greenyellow">+ 13.00</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 0.91</td>
                  <td>+ 8.82</td>
                  <td><b style="color:lightcoral">- 7.91</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 0.11</td>
                  <td>- 2.82</td>
                  <td><b style="color:greenyellow">+ 2.93</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 11.09</td>
                  <td>+ 0.82</td>
                  <td><b style="color:greenyellow">+ 10.27</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 0.95</td>
                  <td>- 3.29</td>
                  <td><b style="color:greenyellow">+ 4.24</b></td>
                </tr>
              </table>              
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
                Venue: Capital One Arena<br>
                Time Zone: Eastern
                <img src="./images/wizards.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 1.76</td>
                  <td>- 7.56</td>
                  <td><b style="color:greenyellow">+ 9.32</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>- 0.08</td>
                  <td>- 3.58</td>
                  <td><b style="color:greenyellow">+ 3.50</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>+ 2.60</td>
                  <td>- 15.00</td>
                  <td><b style="color:greenyellow">+ 17.60</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>+ 0.40</td>
                  <td>+ 1.20</td>
                  <td><b style="color:lightcoral">- 0.80</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>- 7.67</td>
                  <td>+ 1.33</td>
                  <td><b style="color:lightcoral">- 9.00</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 10.67</td>
                  <td>- 7.33</td>
                  <td><b style="color:greenyellow">+ 18.00</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>- 1.36</td>
                  <td>- 8.60</td>
                  <td><b style="color:greenyellow">+ 7.24</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>- 2.27</td>
                  <td>- 3.22</td>
                  <td><b style="color:greenyellow">+ 0.95</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 4.41</td>
                  <td>- 6.65</td>
                  <td><b style="color:greenyellow">+ 11.06</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>- 0.71</td>
                  <td>- 4.42</td>
                  <td><b style="color:greenyellow">+ 3.71</b></td>
                </tr>
              </table>              
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
                Venue: American Airlines Center<br>
                Time Zone: Central
                <img src="./images/mavericks.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>- 4.02</td>
                  <td>- 8.02</td>
                  <td><b style="color:greenyellow">+ 4.00</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 6.33</td>
                  <td>- 1.69</td>
                  <td><b style="color:greenyellow">+ 8.02</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 14.40</td>
                  <td>- 6.80</td>
                  <td><b style="color:lightcoral">- 7.60</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>+ 6.20</td>
                  <td>+ 0.80</td>
                  <td><b style="color:greenyellow">+ 5.40</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 6.33</td>
                  <td>- 18.33</td>
                  <td><b style="color:greenyellow">+ 24.66</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 6.33</td>
                  <td>- 18.33</td>
                  <td><b style="color:greenyellow">+ 24.66</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 0.36</td>
                  <td>- 4.73</td>
                  <td><b style="color:greenyellow">+ 5.09</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 5.73</td>
                  <td>+ 7.11</td>
                  <td><b style="color:lightcoral">- 1.38</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>- 5.27</td>
                  <td>- 8.55</td>
                  <td><b style="color:greenyellow">+ 3.28</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 6.76</td>
                  <td>- 3.89</td>
                  <td><b style="color:greenyellow">+ 10.65</b></td>
                </tr>
              </table>            
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
                Venue: Toyota Center<br>
                Time Zone: Central
                <img src="./images/rockets.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 6.78</td>
                  <td>+ 2.10</td>
                  <td><b style="color:greenyellow">+ 4.68</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 3.00</td>
                  <td>- 0.08</td>
                  <td><b style="color:greenyellow">+ 3.08</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 3.00</td>
                  <td>+ 3.40</td>
                  <td><b style="color:lightcoral">- 6.40</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 2.40</td>
                  <td>+ 2.40</td>
                  <td><b style="color:lightcoral">- 4.80</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>- 9.67</td>
                  <td>- 3.00</td>
                  <td><b style="color:lightcoral">- 6.67</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 6.00</td>
                  <td>- 1.67</td>
                  <td><b style="color:greenyellow">+ 7.67</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 4.80</td>
                  <td>+ 5.40</td>
                  <td><b style="color:lightcoral">- 0.60</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 3.00</td>
                  <td>+ 3.82</td>
                  <td><b style="color:lightcoral">- 0.82</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 11.91</td>
                  <td>+ 1.04</td>
                  <td><b style="color:greenyellow">+ 10.87</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 3.95</td>
                  <td>- 3.06</td>
                  <td><b style="color:greenyellow">+ 7.01</b></td>
                </tr>
              </table>            
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
                Venue: FedEx Forum<br>
                Time Zone: Central
                <img src="./images/grizzlies.png">
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
                Venue: Fiserv Forum<br>
                Time Zone: Central
                <img src="./images/bucks.png"> 
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 3.68</td>
                  <td>- 5.88</td>
                  <td><b style="color:greenyellow">+ 9.56</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>- 0.11</td>
                  <td>- 3.75</td>
                  <td><b style="color:greenyellow">+ 3.64</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 6.40</td>
                  <td>- 23.60</td>
                  <td><b style="color:greenyellow">+ 17.20</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 3.00</td>
                  <td>- 11.60</td>
                  <td><b style="color:greenyellow">+ 8.60</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 6.00</td>
                  <td>- 5.33</td>
                  <td><b style="color:greenyellow">+ 11.33</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>- 8.67</td>
                  <td>- 14.67</td>
                  <td><b style="color:greenyellow">+ 6.00</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 0.45</td>
                  <td>- 3.60</td>
                  <td><b style="color:greenyellow">+ 4.05</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>- 3.91</td>
                  <td>+ 8.22</td>
                  <td><b style="color:lightcoral">- 12.13</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 7.27</td>
                  <td>- 3.09</td>
                  <td><b style="color:greenyellow">+ 10.36</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>- 3.75</td>
                  <td>- 5.63</td>
                  <td><b style="color:greenyellow">+ 1.88</b></td>
                </tr>
              </table>             
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
                Venue: Target Center<br>
                Time Zone: Central
                <img src="./images/timberwolves.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>- 4.02</td>
                  <td>- 8.02</td>
                  <td><b style="color:greenyellow">+ 4.00</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 6.33</td>
                  <td>- 1.69</td>
                  <td><b style="color:greenyellow">+ 8.02</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 14.40</td>
                  <td>- 6.80</td>
                  <td><b style="color:lightcoral">- 7.60</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>+ 6.20</td>
                  <td>+ 0.80</td>
                  <td><b style="color:greenyellow">+ 5.40</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 6.33</td>
                  <td>- 18.33</td>
                  <td><b style="color:greenyellow">+ 24.66</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 6.33</td>
                  <td>- 18.33</td>
                  <td><b style="color:greenyellow">+ 24.66</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 0.36</td>
                  <td>- 4.73</td>
                  <td><b style="color:greenyellow">+ 5.09</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 5.73</td>
                  <td>+ 7.11</td>
                  <td><b style="color:lightcoral">- 1.38</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>- 5.27</td>
                  <td>- 8.55</td>
                  <td><b style="color:greenyellow">+ 3.28</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 6.76</td>
                  <td>- 3.89</td>
                  <td><b style="color:greenyellow">+ 10.65</b></td>
                </tr>
              </table>            
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
                Venue: Smoothie King Center<br>
                Time Zone: Central
                <img src="./images/pelicans.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 6.78</td>
                  <td>+ 2.10</td>
                  <td><b style="color:greenyellow">+ 4.68</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 3.00</td>
                  <td>- 0.08</td>
                  <td><b style="color:greenyellow">+ 3.08</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 3.00</td>
                  <td>+ 3.40</td>
                  <td><b style="color:lightcoral">- 6.40</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 2.40</td>
                  <td>+ 2.40</td>
                  <td><b style="color:lightcoral">- 4.80</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>- 9.67</td>
                  <td>- 3.00</td>
                  <td><b style="color:lightcoral">- 6.67</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 6.00</td>
                  <td>- 1.67</td>
                  <td><b style="color:greenyellow">+ 7.67</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 4.80</td>
                  <td>+ 5.40</td>
                  <td><b style="color:lightcoral">- 0.60</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 3.00</td>
                  <td>+ 3.82</td>
                  <td><b style="color:lightcoral">- 0.82</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 11.91</td>
                  <td>+ 1.04</td>
                  <td><b style="color:greenyellow">+ 10.87</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 3.95</td>
                  <td>- 3.06</td>
                  <td><b style="color:greenyellow">+ 7.01</b></td>
                </tr>
              </table>            
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
                Venue: Chesapeake Energy Arena<br>
                Time Zone: Central
                <img src="./images/thunder.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 2.54</td>
                  <td>+ 2.68</td>
                  <td><b style="color:greenyellow">+ 5.22</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 6.44</td>
                  <td>+ 2.56</td>
                  <td><b style="color:greenyellow">+ 3.88</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>+ 1.20</td>
                  <td>- 3.20</td>
                  <td><b style="color:greenyellow">+ 4.40</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 1.00</td>
                  <td>+ 9.40</td>
                  <td><b style="color:lightcoral">- 10.40</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 1.00</td>
                  <td>+ 2.67</td>
                  <td><b style="color:lightcoral">- 1.67</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 16.33</td>
                  <td>- 6.67</td>
                  <td><b style="color:greenyellow">+ 23.00</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>- 0.82</td>
                  <td>- 0.64</td>
                  <td><b style="color:lightcoral">- 0.18</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 4.22</td>
                  <td>+ 6.18</td>
                  <td><b style="color:lightcoral">- 1.96</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 4.73</td>
                  <td>- 4.32</td>
                  <td><b style="color:greenyellow">+ 9.05</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 7.89</td>
                  <td>- 0.18</td>
                  <td><b style="color:greenyellow">+ 8.07</b></td>
                </tr>
              </table>            
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
                Venue: AT&T Center<br>
                Time Zone: Central
                <img src="./images/spurs.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 3.68</td>
                  <td>- 5.88</td>
                  <td><b style="color:greenyellow">+ 9.56</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>- 0.11</td>
                  <td>- 3.75</td>
                  <td><b style="color:greenyellow">+ 3.64</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 6.40</td>
                  <td>- 23.60</td>
                  <td><b style="color:greenyellow">+ 17.20</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 3.00</td>
                  <td>- 11.60</td>
                  <td><b style="color:greenyellow">+ 8.60</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 6.00</td>
                  <td>- 5.33</td>
                  <td><b style="color:greenyellow">+ 11.33</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>- 8.67</td>
                  <td>- 14.67</td>
                  <td><b style="color:greenyellow">+ 6.00</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 0.45</td>
                  <td>- 3.60</td>
                  <td><b style="color:greenyellow">+ 4.05</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>- 3.91</td>
                  <td>+ 8.22</td>
                  <td><b style="color:lightcoral">- 12.13</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 7.27</td>
                  <td>- 3.09</td>
                  <td><b style="color:greenyellow">+ 10.36</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>- 3.75</td>
                  <td>- 5.63</td>
                  <td><b style="color:greenyellow">+ 1.88</b></td>
                </tr>
              </table>              
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
                Venue: Ball Arena<br>
                Time Zone: Mountain
                <img src="./images/nuggets.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>- 4.02</td>
                  <td>- 8.02</td>
                  <td><b style="color:greenyellow">+ 4.00</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 6.33</td>
                  <td>- 1.69</td>
                  <td><b style="color:greenyellow">+ 8.02</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 14.40</td>
                  <td>- 6.80</td>
                  <td><b style="color:lightcoral">- 7.60</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>+ 6.20</td>
                  <td>+ 0.80</td>
                  <td><b style="color:greenyellow">+ 5.40</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 6.33</td>
                  <td>- 18.33</td>
                  <td><b style="color:greenyellow">+ 24.66</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 6.33</td>
                  <td>- 18.33</td>
                  <td><b style="color:greenyellow">+ 24.66</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 0.36</td>
                  <td>- 4.73</td>
                  <td><b style="color:greenyellow">+ 5.09</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 5.73</td>
                  <td>+ 7.11</td>
                  <td><b style="color:lightcoral">- 1.38</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>- 5.27</td>
                  <td>- 8.55</td>
                  <td><b style="color:greenyellow">+ 3.28</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 6.76</td>
                  <td>- 3.89</td>
                  <td><b style="color:greenyellow">+ 10.65</b></td>
                </tr>
              </table>            
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
                Venue: Phoenix Suns Arena<br>
                Time Zone: Mountain
                <img src="./images/suns.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 6.78</td>
                  <td>+ 2.10</td>
                  <td><b style="color:greenyellow">+ 4.68</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 3.00</td>
                  <td>- 0.08</td>
                  <td><b style="color:greenyellow">+ 3.08</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 3.00</td>
                  <td>+ 3.40</td>
                  <td><b style="color:lightcoral">- 6.40</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 2.40</td>
                  <td>+ 2.40</td>
                  <td><b style="color:lightcoral">- 4.80</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>- 9.67</td>
                  <td>- 3.00</td>
                  <td><b style="color:lightcoral">- 6.67</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 6.00</td>
                  <td>- 1.67</td>
                  <td><b style="color:greenyellow">+ 7.67</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 4.80</td>
                  <td>+ 5.40</td>
                  <td><b style="color:lightcoral">- 0.60</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 3.00</td>
                  <td>+ 3.82</td>
                  <td><b style="color:lightcoral">- 0.82</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 11.91</td>
                  <td>+ 1.04</td>
                  <td><b style="color:greenyellow">+ 10.87</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 3.95</td>
                  <td>- 3.06</td>
                  <td><b style="color:greenyellow">+ 7.01</b></td>
                </tr>
              </table>            
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
                Venue: Vivint Arena<br>
                Time Zone: Mountain
                <img src="./images/jazz.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 2.54</td>
                  <td>+ 2.68</td>
                  <td><b style="color:greenyellow">+ 5.22</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 6.44</td>
                  <td>+ 2.56</td>
                  <td><b style="color:greenyellow">+ 3.88</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>+ 1.20</td>
                  <td>- 3.20</td>
                  <td><b style="color:greenyellow">+ 4.40</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 1.00</td>
                  <td>+ 9.40</td>
                  <td><b style="color:lightcoral">- 10.40</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 1.00</td>
                  <td>+ 2.67</td>
                  <td><b style="color:lightcoral">- 1.67</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 16.33</td>
                  <td>- 6.67</td>
                  <td><b style="color:greenyellow">+ 23.00</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>- 0.82</td>
                  <td>- 0.64</td>
                  <td><b style="color:lightcoral">- 0.18</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 4.22</td>
                  <td>+ 6.18</td>
                  <td><b style="color:lightcoral">- 1.96</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 4.73</td>
                  <td>- 4.32</td>
                  <td><b style="color:greenyellow">+ 9.05</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 7.89</td>
                  <td>- 0.18</td>
                  <td><b style="color:greenyellow">+ 8.07</b></td>
                </tr>
              </table>            
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
                Venue: Chase Center<br>
                Time Zone: Pacific
                <img src="./images/warriors.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 3.68</td>
                  <td>- 5.88</td>
                  <td><b style="color:greenyellow">+ 9.56</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>- 0.11</td>
                  <td>- 3.75</td>
                  <td><b style="color:greenyellow">+ 3.64</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 6.40</td>
                  <td>- 23.60</td>
                  <td><b style="color:greenyellow">+ 17.20</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 3.00</td>
                  <td>- 11.60</td>
                  <td><b style="color:greenyellow">+ 8.60</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 6.00</td>
                  <td>- 5.33</td>
                  <td><b style="color:greenyellow">+ 11.33</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>- 8.67</td>
                  <td>- 14.67</td>
                  <td><b style="color:greenyellow">+ 6.00</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 0.45</td>
                  <td>- 3.60</td>
                  <td><b style="color:greenyellow">+ 4.05</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>- 3.91</td>
                  <td>+ 8.22</td>
                  <td><b style="color:lightcoral">- 12.13</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 7.27</td>
                  <td>- 3.09</td>
                  <td><b style="color:greenyellow">+ 10.36</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>- 3.75</td>
                  <td>- 5.63</td>
                  <td><b style="color:greenyellow">+ 1.88</b></td>
                </tr>
              </table>              
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
                Venue: Staples Center<br>
                Time Zone: Pacific
                <img src="./images/clippers.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>- 4.02</td>
                  <td>- 8.02</td>
                  <td><b style="color:greenyellow">+ 4.00</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 6.33</td>
                  <td>- 1.69</td>
                  <td><b style="color:greenyellow">+ 8.02</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 14.40</td>
                  <td>- 6.80</td>
                  <td><b style="color:lightcoral">- 7.60</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>+ 6.20</td>
                  <td>+ 0.80</td>
                  <td><b style="color:greenyellow">+ 5.40</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 6.33</td>
                  <td>- 18.33</td>
                  <td><b style="color:greenyellow">+ 24.66</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 6.33</td>
                  <td>- 18.33</td>
                  <td><b style="color:greenyellow">+ 24.66</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 0.36</td>
                  <td>- 4.73</td>
                  <td><b style="color:greenyellow">+ 5.09</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 5.73</td>
                  <td>+ 7.11</td>
                  <td><b style="color:lightcoral">- 1.38</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>- 5.27</td>
                  <td>- 8.55</td>
                  <td><b style="color:greenyellow">+ 3.28</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 6.76</td>
                  <td>- 3.89</td>
                  <td><b style="color:greenyellow">+ 10.65</b></td>
                </tr>
              </table>            
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
      onChapterExit: [{
        layer: 'staples-center',
        opacity: 0
      }]
    },
    {
      id: 'lal',
      alignment: 'left',
      title: 'LOS ANGELES LAKERS',
      description: `
                Venue: Staples Center<br>
                Time Zone: Pacific
                <img src="./images/lakers.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 6.78</td>
                  <td>+ 2.10</td>
                  <td><b style="color:greenyellow">+ 4.68</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 3.00</td>
                  <td>- 0.08</td>
                  <td><b style="color:greenyellow">+ 3.08</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>- 3.00</td>
                  <td>+ 3.40</td>
                  <td><b style="color:lightcoral">- 6.40</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 2.40</td>
                  <td>+ 2.40</td>
                  <td><b style="color:lightcoral">- 4.80</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>- 9.67</td>
                  <td>- 3.00</td>
                  <td><b style="color:lightcoral">- 6.67</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 6.00</td>
                  <td>- 1.67</td>
                  <td><b style="color:greenyellow">+ 7.67</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>+ 4.80</td>
                  <td>+ 5.40</td>
                  <td><b style="color:lightcoral">- 0.60</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 3.00</td>
                  <td>+ 3.82</td>
                  <td><b style="color:lightcoral">- 0.82</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 11.91</td>
                  <td>+ 1.04</td>
                  <td><b style="color:greenyellow">+ 10.87</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 3.95</td>
                  <td>- 3.06</td>
                  <td><b style="color:greenyellow">+ 7.01</b></td>
                </tr>
              </table>            
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
                Venue: Moda Center<br>
                Time Zone: Pacific
                <img src="./images/blazers.png">
                <table style="width:100%" id="t">
                <tr>
                  <th></th>
                  <th>Home</th>
                  <th>Away</th>
                  <th>Differential</th>
                </tr>
                <tr>
                  <td>2018 - 19 Overall</td>
                  <td>+ 2.54</td>
                  <td>+ 2.68</td>
                  <td><b style="color:greenyellow">+ 5.22</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 Overall</td>
                  <td>+ 6.44</td>
                  <td>+ 2.56</td>
                  <td><b style="color:greenyellow">+ 3.88</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Pacific</td>
                  <td>+ 1.20</td>
                  <td>- 3.20</td>
                  <td><b style="color:greenyellow">+ 4.40</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Pacific</td>
                  <td>- 1.00</td>
                  <td>+ 9.40</td>
                  <td><b style="color:lightcoral">- 10.40</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Mountain</td>
                  <td>+ 1.00</td>
                  <td>+ 2.67</td>
                  <td><b style="color:lightcoral">- 1.67</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Mountain</td>
                  <td>+ 16.33</td>
                  <td>- 6.67</td>
                  <td><b style="color:greenyellow">+ 23.00</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Central</td>
                  <td>- 0.82</td>
                  <td>- 0.64</td>
                  <td><b style="color:lightcoral">- 0.18</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Central</td>
                  <td>+ 4.22</td>
                  <td>+ 6.18</td>
                  <td><b style="color:lightcoral">- 1.96</b></td>
                </tr>
                <tr>
                  <td>2018 - 19 vs Eastern</td>
                  <td>+ 4.73</td>
                  <td>- 4.32</td>
                  <td><b style="color:greenyellow">+ 9.05</b></td>
                </tr>
                <tr>
                  <td>2020 - 21 vs Eastern</td>
                  <td>+ 7.89</td>
                  <td>- 0.18</td>
                  <td><b style="color:greenyellow">+ 8.07</b></td>
                </tr>
              </table>            
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
                Venue: Golden 1 Center<br>
                Time Zone: Pacific
                <img src="./images/kings.png">
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