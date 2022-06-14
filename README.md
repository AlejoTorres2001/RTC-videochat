
<div align="center">
  
# Fontend Branch

  

</div>

<div align="center">

![](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)

  **this is the master branch for the client code of this implementation of the *RTC-videochat***
  

</div>

Both **Backend** and **Frontend** should be considered as separated projects each one with its dependencies. if you are about to contribute to this project or just to play around with the code I suggest cloning each master branch in different folders

<div align="center">

 <img width="1220" alt="image" src="https://user-images.githubusercontent.com/80418452/173633547-388ef594-8b65-41aa-9e56-e9f230edd1f1.png">

  
</div>


## About The Project

a react app that displays you video stram, allows yuo to copy you Socket ID, initiate and end calls between peers
I would like to point out that the session of the user is handled inside the memory of the client (state) using the ContextAPI, only storing the refreshToken in a HTTPS-only cookie.
I'm using LocalStorage just to handle the check of a trust device.


## Stack used 
- <img  alt="JavaScript"  src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
- [<img  alt="React"  src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />](https://es.reactjs.org/)

- [<img  alt="React"  src="https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white" />](https://v4.mui.com/)

**Using *Peer.js* as a wrapper for the WebRTC API.**


## Contributing

<div align="center">
  
![Alt](https://repobeats.axiom.co/api/embed/5fbc4ee686500b4b408a304bd7dae638e60c21c9.svg "Repobeats analytics image")


</div>

If you have a suggestion that would make this better, please fork the repo and create a Pull Request. You can also simply [open an issue](https://github.com/AlejoTorres2001/jwt-auth-app/issues) with the tag *enhancement*.

Don't forget to **give the project a star ⭐!** 

1. Fork the project

2. Clone the repository

```bash
git clone -b master-frontend https://github.com/AlejoTorres2001/RTC-videochat.git
```

3. Create your Feature Branch

```bash
git checkout -b feature/AmazingFeature
```

4. Push to the Branch

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request


