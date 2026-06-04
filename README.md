# YouTube Video Gallery

## Overview

A simple YouTube-style video gallery built using HTML, CSS, and Vanilla JavaScript.

The application fetches video data from the FreeAPI YouTube endpoint and dynamically displays video cards on the webpage. Each card contains video information such as thumbnail, title, channel name, description, and tags.

---

## Features

### Dynamic Data Fetching
- Fetches video data from a public API.
- Uses asynchronous JavaScript with `async/await`.

### Dynamic UI Rendering
- Creates video cards dynamically from API data.
- Updates the DOM without manually writing HTML for each video.

### Responsive Layout
- Uses CSS Grid for displaying multiple video cards.
- Adapts to different screen sizes.

### Video Information Display
- Thumbnail
- Video Title
- Channel Name
- Description
- Tags

---

## API

### Endpoint

FreeAPI Public YouTube Videos API

### Data Retrieved

- Video ID
- Title
- Description
- Thumbnail URLs
- Channel Information
- Tags
- Statistics (Views, Likes, Comments)

---

## Application Flow

### Step 1
User clicks the **Load Videos** button.

### Step 2
A GET request is sent to the API.

### Step 3
The API returns a JSON response containing video data.

### Step 4
The application extracts the list of videos from the response.

### Step 5
JavaScript iterates through the video objects.

### Step 6
Video cards are generated dynamically.

### Step 7
The generated cards are displayed in a grid layout.

---

## Concepts Practiced

### JavaScript
- Fetch API
- Async/Await
- JSON Parsing
- Array Iteration
- Template Literals
- DOM Manipulation

### CSS
- Grid Layout
- Responsive Design
- Card-Based UI
- Image Styling

---

## Learning Outcomes

By building this project, I learned:

- How to consume REST APIs.
- How to work with JSON data.
- How to dynamically generate UI elements.
- How to render API data on the frontend.
- How to create responsive layouts using CSS Grid.

---

## Future Improvements

- Search Functionality
- Pagination
- Infinite Scrolling
- Video Details Page
- Loading Skeletons
- Better Error Handling
- Dark/Light Theme Toggle
- YouTube-like Navbar

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6+)
- FreeAPI