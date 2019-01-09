# Firebase push notifications ON RAILS

This is a port of [quickstart-js](https://github.com/firebase/quickstart-js/tree/master/messaging) but using Ruby on Rails and its assets pipelines.

What's in this solution:

* A complete working example of how to send push notifications to a rails application using Firebase

## Getting Started

Clone the project

## Prerequisites

```
Rails 5.2.2
Ruby 2.5.1
```

## Installing

* ServiceWorker::Rails

This project uses ServiceWorker in order to provide the firebase-messaging-sw service worker. The reason being pretty sinple, Rails' assets pipeline wasn't built with service workers in mind.

Luckily, it's pretty straightforward to get this gem up and running. As I have already done everything that's needed to install it, all you have to do is the following: 

```
bundle
```

However, if you're curious as to how this gem works you can find more details on their page [ServiceWorker::Rails](https://github.com/rossta/serviceworker-rails)

* Getting the project ready

Before running your server, there are two files you'll have to edit to make this work with your Firebase application.

```
app/assets/javascripts/firebase/init.js
```

Just fill out your config var. You can copy it from Firebase's website.

```
app/assets/javascripts/firebase/firebase-start.js
```

You'll need your Vapid Key (Also known as Web Push Certificate) that you can generate under 
the Cloud Messaging tab of your App Settings on Firebase. After generating it, paste it 

```
messaging.usePublicVapidKey('here');
```

Now you can run the server

```
rails s
```

Visit localhost:3000 and you should see a token. Copy that token.

Open up Postman and prepare a post request using the following instructions:

Headers
```
key=KEY_INHERITED_FROM_THE_SERVER
application/json
```
PS: Remember to get your KEY_INHERITED_FROM_THE_SERVER in your App's settings.

URL
https://fcm.googleapis.com/fcm/send

JSON for you to test the notifications

```
 {
    "to" : "KEY_GENERATED_WHEN_YOU_VISITED_LOCALHOST:3000",
    "collapse_key" : "type_a",
    "notification" : {
        "body" : "Body of Your Notification",
        "title": "Title of Your Notification"
    },
    "data" : {
        "body" : "Body of Your Notification in Data",
        "title": "Title of Your Notification in Title",
        "key_1" : "Value for key_1",
        "key_2" : "Value for key_2"
    }
  }
```

Go back to your internet browser and there should be a field called 'Received message' containing
the JSON you just posted.

## Built With

* [Firebase](https://github.com/firebase/) - Firebase
* [Rails](https://github.com/rails/rails)
* [ServiceWorker::Rails](https://github.com/rossta/serviceworker-rails)

## Author

* **Charles Washington de Aquino dos Santos** - [Caws](https://github.com/caws)

## Acknowledgments

* StackOverflow
* Google (lots of)
