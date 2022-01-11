## Application Description
My application is called Dungeons and Dragons 5e Quick Guide(Although it's not really quick).  I just like Dungeons and Dragons and I didn't have a good idea of what I wanted this project to be around so I chose one of my hobbies.  This application is meant to be an easy access information guide to things you might need for playing D&D5e.  Instead of going through a 300+ page book, this application has easy navigation to subjects related to the game that you can use.  I hope you enjoy looking at it even if you don't know much about Dungeons and Dragons.

### Technologies Used
This application is built using React, React Bootstrap, React Router, Javascript, CSS, and deployed on Netlify.

### Getting Started/Installation Instructions
If you would like a personal copy of this application the go to this GitHub repository:

https://github.com/leejoonli/dungeons-and-dragons-5e-guide

Then click on the "Code" dropdown menu and either click on "HTTPS" or "SSH" depending on what you're using.

Then click either the link which will highlight the github/https link and copy it or click on the icon next to the link which will copy it into your clipboard.

Then run these commands on your terminal window in whatever directory you wish to store this application in:

```
git clone YOUR LINK HERE
cd dungeons-and-dragons-5e-guide
npm start
```

If you're having difficulty cloning down this repository then visit this link for more information:

https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository

If you would like to just visite the application then go to this link:

https://dungeons-and-dragons-5e-guide-6b812b.netlify.app/

### Current Application State
Home State
![image](https://media.git.generalassemb.ly/user/40293/files/6c71bd00-7231-11ec-962d-ab43e044ec86)

Example Accordion Navigation
![image](https://media.git.generalassemb.ly/user/40293/files/8a3f2200-7231-11ec-8f91-cd7534073712)

Updated Window State
![image](https://media.git.generalassemb.ly/user/40293/files/ad69d180-7231-11ec-9a3c-6e1737021e8d)

NOTE: Your view might differ since my application has a third party dark reader extention.

### Contribution Guidelines
Any feedback on design and implementation would be very much appreciated.  This application, as I hate to admit, isn't at the state as I would like it to be.  There are some api data parsing that I would like to improve and add images to make the site livelier.

### Future Improvements
I would like to revisit some of the api parsing code that I wrote down and see if I can make it cleaner, easier to read, and maybe not as computationally intensive.  The information in the "Game Rules and Mechanics" section is presented with null terminating characters and hashes to indicate headers from the api but it is stored all in one string.  So I would like to improve the method of which I break up the string so I can see a more cohesive page but also so that I can individually style and change elements as necessary.  Also, I would like to add a search functionality so if there's someone who knows what they want to see, it would be simpler to use a searchbar rather than going through the accordion navbar.

As another future improvement, this application does not contain all the information from the D&D5e PHB (Player's Handbook).  The api used is missing some information so until it updates or a new api database is created, the user will have to settle for what's presented.  Also, the information presented is only from the PHB and not add on books like Xanathar's Guide to Everything.  As a future goal, I would like to add in information from other books as well.

For the design, I'm not very intuitive on what makes things look good.  This application pretty much as the minimal amount of CSS styling to make it look presentable.  However, I would like to change some styling to make it more professional, mainly segmenting sections so it's easier to differentiate sections.

## Project Description 
My application is called Dungeons and Dragons 5e Quick Guide(Although it's not really quick).  This react built application is for introducing one of the greatest table top role playing games ever created.  It will serve as an easy to find and read information pipeline about Dungeons and Dragons 5th edition.  Users will be able to browse through game mechanics and rules as well as character breakdowns so they can learn about the wondrous game of Dungeons and Dragons and become a nerd like the rest of us.

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