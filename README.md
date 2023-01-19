# CreatorSpot

![GitHub forks](https://img.shields.io/github/forks/AussieDev81/creator-spot?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/AussieDev81/creator-spot?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/AussieDev81/creator-spot?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/AussieDev81/creator-spot?style=for-the-badge)


![React](https://img.shields.io/badge/React-000000?style=for-the-badge&logo=react&logoColor=61DAFB)
![Supabase](https://img.shields.io/badge/Supabase-black?style=for-the-badge&logo=supabase&logoColor=3ECF8E)

This current project name is just one that I chose at random from the following list, name suggestions are welcome:
- CreatorConnect
- CreatorSpace
- CreatorSpot ⬅
- CreatorHub
- CreatorLink
- CreatorExchange
- CreatorFinder
- CreatorNation
- InfluencerIndex
- TalentSpot
- SocialStars

## Getting Started
1.  Fork your own copy of this repo and navigate into the __creator-spot__ application's root directory wherever you saved it.
1.  Create a file called `.env.local` in the root directory, and add the following to it:  
    ```properties 
    REACT_APP_SUPABASE_URL=https://roduuhtdbulrrzcgzmnc.supabase.co
    REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJvZHV1aHRkYnVscnJ6Y2d6bW5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQxMTg4MjIsImV4cCI6MTk4OTY5NDgyMn0.bk6Hx92ef8QT1_cuQNppFPOJwiEZDj_PS3qz2lRIvaw
    ```
    _Note:_ Later we will add sensitive data to this file (this api key is fine thanks to [RLS](https://supabase.com/docs/guides/auth/row-level-security)), but as good practice we never want to share `.env` files so it has been added to the [gitignore](./.gitignore) file.

1.  Open a terminal window (or the integrated one in your IDE), and making sure to be in the project root directory, run `npm start` to spin up the project which should open in your default browser.  
The page should look like the following:
    ![](./screenshots/home_20-01-2023.png)

___

The app so far is completely based on [this YouTube playlist](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hUb6sHthUEwG7r9VDPBMKO) by [The Net Ninja](https://www.youtube.com/@NetNinja) (just uses different data including an array of categories) and includes content up to the 4th video in the series.  
I encourage you to watch the series from the start and familiarize yourself as React requires a bit of a learning curve if you're not already familiar with it, and then continue on and see how awesome you can make this app.

Also, you should definitely create yourself an account with [supabase](https://supabase.com/) and try creating and connecting to your own database to get comfortable with that too.

When you are happy with what you've done, create a pull request to merge your changes into this repo.  
If you're unfamiliar with GitHub, this will give you crucial experience as _forking_, _committing your changes_, and _creating pull requests_ are key parts of the git version control system.

<br>


__Happy coding!__

<a href="mailto:aussiedev81@gmail.com" target="_blank" title="Send me an email">
<img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white">
</a>
<a href="https://twitter.com/AussieDev81" target="_blank" title="Follow me">
<img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white">
</a>
<a href="https://discord.com/users/821987974690373662" target="_blank" title="Chat with me">
<img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
</a>

___