<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Book My Show Test</h3>

  <p align="center">
    first i want to say i was really exaited making this project because is my first time working with nodejs all my work is PHP and Laravel Based, sorry if im to late but i really wanted to do it the better posible, so lets do it... :)
    <br />   
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>    
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

First

Problem Description <br />
You have been selected to work on ​the backend​ of a new movie ticketing website (like https://bookmyshow.com​).
At a minimum, the website is expected to have the following features -
1. Ability to view all the movies playing in your city
2. User Sign up and login
3. Ability to book a ticket. (No payment gateway integration is required. Assume tickets can be
booked for free)
Your task is to ​build the APIs​ in Nodejs which covers the above functionalities including the database. We have no requirements for which frameworks/libraries and database to use, choose whichever seems best suited for the task!
Mandatory Deliverables
1. The API to book a ticket should be protected i.e. only a logged-in user should be allowed to access that API. Rest, all other APIs are public endpoints
2. All the code should be well-styled with proper namings. We pay a lot of attention to code-styling.
3. Include unit tests
4. Use Git for version control, and host the project in a public Github repository. Share the Github
link with us.
6. Design the APIs as stateless microservices
7. Use Dependency Injection
8. Implement CICD using Jenkins/Azure DevOps/CircleCI or any other CICD service
9. Host the service in a Public Cloud (Eg AWS or Azure or similar).
10. Write the instructions on how to build and run the application in the readme file in the repository.
Earn extra brownie points by doing the following -
11. Dockerize all the micro-services and host them using Kubernetes or similar.
12. Use a logging framework
13. Articulate the architecture and the rationale behind your design choice in the readme file in the
repository.
How to submit your works?
<br /> ● Put all the code in a Github public repo and share the repo URL in reply to the assignment email
<br /> ● Commit the pipeline/build config you have used for CICD in the same repo.
<br /> ● Share a postman file in the email with links to the APIs hosted in the public cloud.

### Built With

Here is the tecnologies i was used:

* [nodejs]
* [express]
* [docker]
* [jwt]
* [Google cloud VM]
* [jenkins] is incomple the connection with github action :(
* [postgresql] not time to make a docker container correctly :(

<!-- GETTING STARTED -->
## Getting Started

You need to get installed docker-CE

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/gldeleon/bookmyshow.git
   ```
2. Initialize docker compose install
   ```sh
   docker-composer up -d
   ```
3. Open your preferer browser and tipe:

   http://localhost

4. I havent time to make a migrations but in the db folder is an database.sql file, please install postresql and then run the sql :(
<!-- USAGE EXAMPLES -->
## Usage

Now the app is running so on port 80 open postman or another one app to test rest api endpoints:

* localhost/api/v1/movies
* localhost/api/v1/movies/CDMX
* localhost/api/v1/signin
* localhost/api/v1/movies/buy


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Leonel De Leon - [@gldeleon](https://twitter.com/gldeleon) - gldeleon@live.com.mx

Project Link: [Live](http://35.192.16.71) - runnig
Jenkins Link [Live](http://35.192.16.71:8080) - user: srpago, pwd: $srpago.123