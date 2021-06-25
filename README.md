# Quickstart

1. Navigate to the repository

- `cd last-fm-favourite-artist`

2. Create an environment variable file in the cli or otherwise.

- `touch .env`

3. Add the following line and add your Last FM API key:

- `REACT_APP_API_KEY=YOUR_LAST_FM_API_KEY`

4. Install the required packages.

- `npm install`

5. Run `npm start`

- Runs the app in the development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# Description of the project

- An overview of albums of one of my favourite artists.

- A detail page for each album displaying:
    - Album image
    - Album information
    - Track list

- Each track displays:
    - Ranking inside album
    - Duration
    - Track title
    - Add-to-favourites button

- A favourites page displaying:
    - All tracks added with the add-to-favourites button
    - Remove-from-favourites button for each track

# Technical

- React with ES6+
- Typescript
- Styled-components
- Redux
- Responsive

# Future features

- Favourites page
    - Search function
    - Favourite albums