## Project Description 
My application is called D&D5e Rundown(name is work in progress).  This react built application is for introducing one of the greatest table top role playing games ever created.  It will serve as an easy to find and read information pipeline about Dungeons and Dragons 5th edition.  Users will be able to browse through game mechanics and rules as well as character breakdowns so they can learn about the wondrous game of Dungeons and Dragons and become a nerd like the rest of us.

## Link to the API you plan to use
This will be the link to the API documentation (It's a completely open API and requires no authentication key):

http://www.dnd5eapi.co/docs/
https://api.open5e.com/

## Example data response you plan to use
The result of using https://www.dnd5eapi.co/api:

```
{
   ability-scores: "/api/ability-scores",
   alignments: "/api/alignments",
   backgrounds: "/api/backgrounds",
   classes: "/api/classes",
   conditions: "/api/conditions",
   damage-types: "/api/damage-types",
   equipment-categories: "/api/equipment-categories",
   equipment: "/api/equipment",
   feats: "/api/feats",
   features: "/api/features",
   languages: "/api/languages",
   magic-items: "/api/magic-items",
   magic-schools: "/api/magic-schools",
   monsters: "/api/monsters",
   proficiencies: "/api/proficiencies",
   races: "/api/races",
   rules: "/api/rules",
   rule-sections: "/api/rule-sections",
   skills: "/api/skills",
   spells: "/api/spells",
   subclasses: "/api/subclasses",
   subraces: "/api/subraces",
   traits: "/api/traits",
   weapon-properties: "/api/weapon-properties"
}
```

## Visual of your component hierarchy
![image](https://media.git.generalassemb.ly/user/40293/files/51b4c980-6d95-11ec-8a95-035bd9be0c2f)

As stated in the wireframe of the component hierarchy and shown from the sample API call in the section above, there will be more components than the ones shown here.

## Wire Frames
### Home Component
![image](https://media.git.generalassemb.ly/user/40293/files/68a7eb80-6d96-11ec-8903-3a55729ead52)

### Parent Component
![image](https://media.git.generalassemb.ly/user/40293/files/80cc3a80-6d97-11ec-87e0-43056c930dcc)

### Information Component
![image](https://media.git.generalassemb.ly/user/40293/files/f258b880-6d98-11ec-8f86-581a78136ce7)

## User Stories
- As a user, I would like to be able to read about what this app is so that I can understand what the application is supposed to do.
- As a user, I would like to be able to click on elements on the page so that I can interact with the application.
- As a user, I would like to be able to clearly see and know what I'm navigating to so that I don't get lost on the website.
- As a user, I would like relevant information to be grouped together so that I can easily find information.
- As a user, I would like to be able to return to previous pages so that I can more quickly navigate to where I want to go.

### MVP Goals
- Display information about selected component without any images.
- Create paths to components using Router.
- Create necessary components and exclude elements such as the "monsters" section in the API documentation.

### Stretch Goals
- Add indexes for components with egregious amounts of information for quicker navigation.
- Add buttons or links to components to more quickly navigate to the home screen or the previous screen.
- Add related information from sources such as the Dungeon Master's Guide.
- Add other related information from other source books provided by Wizards of the Coast.
- Add a light and dark theme switcher using React Context.