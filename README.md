# tracks
![Home](https://res.cloudinary.com/dql5gkbx4/image/upload/v1623109392/WechatIMG131_kdm8yp.jpg)
![Detail](https://res.cloudinary.com/dql5gkbx4/image/upload/v1623109392/WechatIMG129_cijxbf.jpg)

RestaurantSearching is an app where users can search restaurant by categories. This project was part of Stephen Grider's React Native course on Udemy.

### Features
* Users can sign up, log in and log out
* Users can track their own routes and save them
* Users are able to look up their tracks' details 

### Run Locally
1. Install Expo Go from App Store
2. Create MongoDB account
3. Put MongoDB connetion string on track-server/scr/index.js
```
const mongoUri = "Your MongoDB String";
```
4. Install all dependencies
```
npm install
```
5. Run MongoDB(track-server) in one terminal
```
npm run dev
```
6. Run ngrok in one another terminal
```
ngrok http 3000
```
7. Paste the first Forwarding URL to scr/api/tracker.js
```
const instance = axios.create({
  baseURL: "Forwarding URL",
});
```
8.Run program in another terminal, scan the QR Code and open it by Expo Go
```
npm start
```
