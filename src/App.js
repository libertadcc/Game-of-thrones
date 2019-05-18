import React from 'react';
import './scss/main.scss';
import Houses from './Components/Houses';

const houses = [
  {
      "url": "https://www.anapioficeandfire.com/api/houses/1",
      "name": "House Algood",
      "region": "The Westerlands",
      "coatOfArms": "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
      "shield": "https://awoiaf.westeros.org/images/thumb/b/b3/House_Algood.svg/1200px-House_Algood.svg.png",
      "words": "",
      "id" : "1",
      "titles": [
          ""
      ],
      "seats": [
          ""
      ],
      "currentLord": "",
      "heir": "",
      "overlord": "https://www.anapioficeandfire.com/api/houses/229",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
          ""
      ],
      "cadetBranches": [],
      "swornMembers": []
  },
  {
      "url": "https://www.anapioficeandfire.com/api/houses/2",
      "name": "House Allyrion of Godsgrace",
      "region": "Dorne",
      "coatOfArms": "Gyronny Gules and Sable, a hand couped Or",
      "shield": "https://awoiaf.westeros.org/images/thumb/a/a6/House_Allyrion.svg/1200px-House_Allyrion.svg.png",
      "words": "No Foe May Pass",
      "id" : "2",
      "titles": [
          ""
      ],
      "seats": [
          "Godsgrace"
      ],
      "currentLord": "https://www.anapioficeandfire.com/api/characters/298",
      "heir": "https://www.anapioficeandfire.com/api/characters/1922",
      "overlord": "https://www.anapioficeandfire.com/api/houses/285",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
          ""
      ],
      "cadetBranches": [],
      "swornMembers": [
          "https://www.anapioficeandfire.com/api/characters/298",
          "https://www.anapioficeandfire.com/api/characters/1129",
          "https://www.anapioficeandfire.com/api/characters/1301",
          "https://www.anapioficeandfire.com/api/characters/1922"
      ]
  },
  {
      "url": "https://www.anapioficeandfire.com/api/houses/3",
      "name": "House Amber",
      "region": "The North",
      "coatOfArms": "",
      "words": "",
      "id" : "3",
      "shield": "https://vignette.wikia.nocookie.net/gameofthrones/images/2/2f/House-Umber-Main-Shield.PNG/revision/latest?cb=20161231125826",
      "titles": [
          ""
      ],
      "seats": [
          ""
      ],
      "currentLord": "",
      "heir": "",
      "overlord": "",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
          ""
      ],
      "cadetBranches": [],
      "swornMembers": []
  },
  {
      "url": "https://www.anapioficeandfire.com/api/houses/4",
      "name": "House Ambrose",
      "region": "The Reach",
      "coatOfArms": "Or, semy of ants gules",
      "words": "Never Resting",
      "shield": "https://awoiaf.westeros.org/images/thumb/6/69/House_Ambrose.svg/1200px-House_Ambrose.svg.png",
      "id" : "4",
      "titles": [
          ""
      ],
      "seats": [
          ""
      ],
      "currentLord": "https://www.anapioficeandfire.com/api/characters/141",
      "heir": "",
      "overlord": "https://www.anapioficeandfire.com/api/houses/398",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
          ""
      ],
      "cadetBranches": [],
      "swornMembers": [
          "https://www.anapioficeandfire.com/api/characters/82",
          "https://www.anapioficeandfire.com/api/characters/102",
          "https://www.anapioficeandfire.com/api/characters/141",
          "https://www.anapioficeandfire.com/api/characters/152",
          "https://www.anapioficeandfire.com/api/characters/344"
      ]
  },
  {
      "url": "https://www.anapioficeandfire.com/api/houses/5",
      "name": "House Appleton of Appleton",
      "region": "The Reach",
      "shield": "https://awoiaf.westeros.org/images/thumb/9/95/House_Appleton.svg/545px-House_Appleton.svg.png",
      "coatOfArms": "Or, an apple tree eradicated proper fructed gules, quartered with argent, a gatehouse cendrée",
      "words": "",
      "id" : "5",
      "titles": [
          ""
      ],
      "seats": [
          "Appleton"
      ],
      "currentLord": "",
      "heir": "",
      "overlord": "https://www.anapioficeandfire.com/api/houses/398",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
          ""
      ],
      "cadetBranches": [],
      "swornMembers": []
  },
  {
      "url": "https://www.anapioficeandfire.com/api/houses/6",
      "name": "House Arryn of Gulltown",
      "region": "The Vale",
      "coatOfArms": "",
      "words": "",
      "shield": "https://awoiaf.westeros.org/images/thumb/b/b4/House_Arryn.svg/1200px-House_Arryn.svg.png",
      "id" : "6",
      "titles": [
          ""
      ],
      "seats": [
          "Gulltown"
      ],
      "currentLord": "",
      "heir": "",
      "overlord": "https://www.anapioficeandfire.com/api/houses/7",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
          ""
      ],
      "cadetBranches": [],
      "swornMembers": []
  },
  {
      "url": "https://www.anapioficeandfire.com/api/houses/7",
      "name": "House Arryn of the Eyrie",
      "region": "The Vale",
      "coatOfArms": "A sky-blue falcon soaring against a white moon, on a sky-blue field(Bleu celeste, upon a plate a falcon volant of the field)",
      "words": "As High as Honor",
      "shield": "https://vignette.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest?cb=20170101094153",
      "id" : "7",
      "titles": [
          "King of Mountain and Vale (formerly)",
          "Lord of the Eyrie",
          "Defender of the Vale",
          "Warden of the East"
      ],
      "seats": [
          "The Eyrie (summer)",
          "Gates of the Moon (winter)"
      ],
      "currentLord": "https://www.anapioficeandfire.com/api/characters/894",
      "heir": "https://www.anapioficeandfire.com/api/characters/477",
      "overlord": "https://www.anapioficeandfire.com/api/houses/16",
      "founded": "Coming of the Andals",
      "founder": "https://www.anapioficeandfire.com/api/characters/144",
      "diedOut": "",
      "ancestralWeapons": [
          ""
      ],
      "cadetBranches": [
          "https://www.anapioficeandfire.com/api/houses/6"
      ],
      "swornMembers": [
          "https://www.anapioficeandfire.com/api/characters/49",
          "https://www.anapioficeandfire.com/api/characters/92",
          "https://www.anapioficeandfire.com/api/characters/93",
          "https://www.anapioficeandfire.com/api/characters/107",
          "https://www.anapioficeandfire.com/api/characters/223",
          "https://www.anapioficeandfire.com/api/characters/265",
          "https://www.anapioficeandfire.com/api/characters/300",
          "https://www.anapioficeandfire.com/api/characters/356",
          "https://www.anapioficeandfire.com/api/characters/477",
          "https://www.anapioficeandfire.com/api/characters/508",
          "https://www.anapioficeandfire.com/api/characters/540",
          "https://www.anapioficeandfire.com/api/characters/548",
          "https://www.anapioficeandfire.com/api/characters/558",
          "https://www.anapioficeandfire.com/api/characters/572",
          "https://www.anapioficeandfire.com/api/characters/688",
          "https://www.anapioficeandfire.com/api/characters/894",
          "https://www.anapioficeandfire.com/api/characters/1068",
          "https://www.anapioficeandfire.com/api/characters/1193",
          "https://www.anapioficeandfire.com/api/characters/1280",
          "https://www.anapioficeandfire.com/api/characters/1443",
          "https://www.anapioficeandfire.com/api/characters/1655",
          "https://www.anapioficeandfire.com/api/characters/1693",
          "https://www.anapioficeandfire.com/api/characters/1715",
          "https://www.anapioficeandfire.com/api/characters/1884"
      ]
  },
  {
      "url": "https://www.anapioficeandfire.com/api/houses/8",
      "name": "House Ashford of Ashford",
      "region": "The Reach",
      "coatOfArms": "Tenny, a sun in splendour beneath a chevron inverted argent",
      "words": "Our Sun Shines Bright",
      "shield": "https://vignette.wikia.nocookie.net/gameofthrones/images/6/62/House-Ashford-Shield.PNG/revision/latest?cb=20170519012643",
      "id" : "8",
      "titles": [
          "Lord of Ashford"
      ],
      "seats": [
          "Ashford"
      ],
      "currentLord": "",
      "heir": "",
      "overlord": "https://www.anapioficeandfire.com/api/houses/398",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
          ""
      ],
      "cadetBranches": [],
      "swornMembers": [
          "https://www.anapioficeandfire.com/api/characters/121",
          "https://www.anapioficeandfire.com/api/characters/641",
          "https://www.anapioficeandfire.com/api/characters/895",
          "https://www.anapioficeandfire.com/api/characters/1812"
      ]
  },
  {
      "url": "https://www.anapioficeandfire.com/api/houses/9",
      "name": "House Ashwood",
      "region": "The North",
      "coatOfArms": "",
      "words": "",
      "shield": "https://vignette.wikia.nocookie.net/ttgot-s2-au/images/b/be/Ashwood.png/revision/latest?cb=20161213021139",
      "id" : "9",
      "titles": [
          ""
      ],
      "seats": [
          ""
      ],
      "currentLord": "",
      "heir": "",
      "overlord": "https://www.anapioficeandfire.com/api/houses/34",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
          ""
      ],
      "cadetBranches": [],
      "swornMembers": []
  },
  {
      "url": "https://www.anapioficeandfire.com/api/houses/10",
      "name": "House Baelish of Harrenhal",
      "region": "The Riverlands",
      "coatOfArms": "A field of silver mockingbirds, on a green field(Vert, semé of mockingbirds argent)",
      "words": "",
      "shield": "https://awoiaf.westeros.org/images/thumb/2/2a/House_Baelish_%28Harrenhal%29.svg/1200px-House_Baelish_%28Harrenhal%29.svg.png",
      "id" : "10",
      "titles": [
          "Lord Paramount of the Trident",
          "Lord of Harrenhal"
      ],
      "seats": [
          "Harrenhal"
      ],
      "currentLord": "https://www.anapioficeandfire.com/api/characters/823",
      "heir": "",
      "overlord": "https://www.anapioficeandfire.com/api/houses/16",
      "founded": "299 AC",
      "founder": "https://www.anapioficeandfire.com/api/characters/823",
      "diedOut": "",
      "ancestralWeapons": [
          ""
      ],
      "cadetBranches": [],
      "swornMembers": [
          "https://www.anapioficeandfire.com/api/characters/651",
          "https://www.anapioficeandfire.com/api/characters/804",
          "https://www.anapioficeandfire.com/api/characters/823",
          "https://www.anapioficeandfire.com/api/characters/957",
          "https://www.anapioficeandfire.com/api/characters/970"
      ]
  }
];

class App extends React.Component{
  render(){
    return(
      <div className="page">
        <h1 className="title">Houses of Game of Thrones</h1>
        <ul className="pannel">
          {houses.map(item =>{
          return(
          <li className="houses" key={item.id}>
            <Houses 
            item={item}
            />
          </li>
          )}
          )}
        </ul>
      </div>
    );
  }
}

export default App;
