import React from 'react';
import './App.css';
const houses = [
  {
      "url": "https://www.anapioficeandfire.com/api/houses/1",
      "name": "House Algood",
      "region": "The Westerlands",
      "coatOfArms": "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
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
      <div className="App">
        <h1>Casas de Juego de </h1>
        <ul>
          {houses
          .map(item =>{
            return(
              <li key={item.id}>
                <div>
                  <h2>{item.name}</h2>
                  <img src={`https://placehold.it/200x200/?text=${item.name}`} alt={`Imagen de la casa ${item.name}`} />
                  <h3>From: {item.region}</h3>
                </div>
              </li>
            );
          })
          }
        </ul>
      </div>
    );
  }
}

export default App;
