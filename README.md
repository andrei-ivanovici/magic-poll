## Introduction 

This is a sample Angular 2 application that uses Webpack, Firebase and Angular Material 2

## About

The application allows one to create simple polls and share them (similar to [strawpoll](http://www.strawpoll.me/) ).
It is currently hosted [here](https://magic-poll.firebaseapp.com/#/) 

## Notes


In this repo, the app is configured to use an in-memory database.  To enable firebase support  you'll need to make the following changes

* Configure your firebase credentials in : /src/infrastructure/firebase-config.ts
    ```js
   const firebaseConfig ={
        apiKey: '<your-key>',
        authDomain: '<your-project-authdomain>',
        databaseURL: '<your-database-URL>',
        storageBucket: '<your-storage-bucket>',
        messagingSenderId: '<your-messaging-sender-id>'
    }
    ```

    For more details about how to configure firebase please  the AngularFire2 docs [here](https://github.com/angular/angularfire2)

* Update the AppModule to use firebase as the app's db  in  /src/app-module.ts. 
  This can be done by commenting the in-memory priovider and comment out the firebase-provider
  
  This

    ```js
    ...
     providers: [
            {
                provide: LocationStrategy,
                useClass: HashLocationStrategy
            },

            //InMemory DB
            {
                provide: PollProvider,
                useClass: InMemoryPollProvider
            },

            //Firebase DB
            // {
            //     provide: PollProvider,
            //     useClass: InMemoryPollProvider
            // }
        ],        

    ```

    Becomes 

    ```js
    ...    
    providers: [
            {
                provide: LocationStrategy,
                useClass: HashLocationStrategy
            },

            //InMemory DB
            //{
            //    provide: PollProvider,
            //    useClass: InMemoryPollProvider
            //},

            //Firebase DB
             {
                 provide: PollProvider,
                 useClass: FirebasePollProvider
             }
        ],
    ```



## Build and run

* Install dependencies
    ```
    npm install
    ```
* run 
    ```
    npm run serve:dev
    ```