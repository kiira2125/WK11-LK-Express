# WK11-LK-Express -  11 Express.js: Note Taker

## Your Task

## Content List

 * [Description](#description)
 * [Application  ](#application)
 * [Installs](#installs)
 * [Usage](#usage)
 * [Links](#links)
 * [Criteria](#criteria)
 * [Questions](#questions)
 * [License](#license)

```


## Description

## Application

## Installs
 
```


## Mock-Up

The following images show the web application's appearance and functionality:

![Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.](./Assets/11-express-homework-demo-01.png)

![Note titled “Balance accounts” reads, “Balance account books by end of day Monday,” with other notes listed on the left.](./Assets/11-express-homework-demo-02.png)


## Getting Started

On the back end, the application should include a `db.json` file that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).


## Bonus

You haven’t learned how to handle DELETE requests, but this application offers that functionality on the front end. As a bonus, try to add the DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * Application front end must connect to an Express.js back end.

  * Application back end must store notes that have a unique id in a JSON file.

  * Application must be deployed to Heroku.


### Deployment: 


### 

* 


### Repository Quality: 13%

* 

  
### Application

    * Application allows users to delete notes.


## Links

* The URL of the functional, deployed application in Heroku:
    [Deployed-Link](https://)

* 
- - -
## Question:

* Email: luankiira0911@gmail.com
* The URL of the GitHub repository [LunaKiira](https://github.com/kiira2125)
* GitHub Hyperlink View: https://github.com/kiira2125 

   

    
## License
* Licensed under the: [MIT License](https://opensource.org/licenses/MIT) 

