# Good-Eats

My first attempt at a full stack application. It is a simple Yelp replica called Good Eats. The application allows the user to add data to a database and modify/delete data as well. A rating system is also included. It was built using the PERN stack in Visual Studio Code. I'm planning to deploy it on the web using either AWS or Azure in the near future. 

NOTE: This application does require the user to have a postrgres database or at least be familiar with it. You will need to setup a local postgres database prior to using this application in order to store/modify data in the backend of it.

Follow the steps below to run it successfully on your local ports.

1. Download the files from the GitHub repo (zip folder if necessary).
2. Open the files in Visual Studio Code.
3. Navigate into the server folder and use command "npm install" to install the necessary modules.
4. Then navigate into the client and use command "npm install" to install the necessary modules there too.
5. Navigate back into the server folder and create an .env file with the following inside it: 
     
    PORT = 3000

    PGUSER=postgres
    PGHOST='localhost' 
    PGPASSWORD= enter your password 
    PGDATABASE= enter your database name 
    PGPORT=5432
    
6. Now the application should be ready to start. Use command "npm start" in the sever folder FIRST, then command "npm start" in the client folder AFTER. The client will ask if you want to run it on another port since port 3000 is being used. Enter yes then continue.
7. You should be able to use the full functionality of the application now.
