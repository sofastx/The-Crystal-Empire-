<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Crystal Empire 🏰</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #333;
            color: white;
            padding: 20px 0;
            text-align: center;
            border-bottom: 3px solid #007BFF; /* Blue border for decoration */
        }
        nav {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #444;
            padding: 10px;
            transition: max-height 0.3s ease-in-out;
            overflow: hidden;
            max-height: 0; /* Hide initially */
            border: 1px solid #007BFF; /* Blue border for decoration */
            border-radius: 5px; /* Rounded corners */
            margin: 20px; /* Margin around menu */
        }
        nav.active {
            max-height: 300px; /* Max height to show menu */
        }
        nav a {
            color: white;
            text-decoration: none;
            padding: 10px 20px;
            display: block;
            width: 100%;
            text-align: center;
            transition: background-color 0.3s;
            margin: 5px 0; /* Space between menu items */
            border-radius: 5px; /* Rounded corners */
        }
        nav a:hover {
            background-color: #555;
        }
        .container {
            padding: 20px;
            display: none; /* Hide all sections initially */
            opacity: 0; /* Set initial opacity for animation */
            transition: opacity 0.5s ease; /* Smooth transition for opacity */
            background-color: white; /* Background for content */
            border-radius: 8px; /* Rounded corners */
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Shadow effect */
            margin: 20px; /* Margin around sections */
        }
        .container.active {
            display: block; /* Show the section when active */
            opacity: 1; /* Make visible */
        }
        .verification-form {
            background-color: #f9f9f9; /* Light grey background */
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            transition: opacity 0.5s ease;
            opacity: 0; /* Hide initially */
            transform: translateY(20px); /* Shift down */
        }
        .verification-form.visible {
            opacity: 1; /* Make visible */
            transform: translateY(0); /* Return to original position */
        }
        .verification-form input {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        .verification-form button {
            width: 100%;
            padding: 10px;
            background-color: #333;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        .verification-form button:hover {
            background-color: #555;
        }
        footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 20px 0;
            position: relative; /* Changed from fixed to relative */
            bottom: 0;
            margin-top: 20px; /* Space above footer */
            border-top: 3px solid #007BFF; /* Blue border for decoration */
        }
        .toggle-button {
            background-color: #333;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s;
        }
        .toggle-button:hover {
            background-color: #555;
        }
    </style>
</head>
<body>

    <header>
        <h1>The Crystal Empire 🏰</h1>
        <p>The best game ever🙈</p>
        <button class="toggle-button" id="toggle-nav">Show Menu</button>
    </header>

    <nav id="nav-menu">
        <a href="#home" class="nav-link">Home</a>
        <a href="#about" class="nav-link">About the Game</a>
        <a href="#discord" class="nav-link">Join the Discord</a>
        <a href="#verify" class="nav-link">Verification</a>
        <a href="#group" class="nav-link">Join the Group</a>
        <a href="#play" class="nav-link">Play</a>
    </nav>

    <div class="container" id="home">
        <h2>Welcome to The Crystal Empire!</h2>
        <p>Explore the castle, embark on adventures, and immerse yourself in get a job just by joining our group 🫶🏻</p>
    </div>

    <div class="container" id="about">
        <h2>About the Game</h2>
        <p>The Crystal Empire is a Roblox game based on epic adventures and role-play scenarios within a majestic castle. Join us and discover the secrets of the crystal empire.</p>
    </div>

    <div class="container" id="discord">
        <h2>Join our Discord</h2>
        <p>Connect with other players and stay updated on the latest news.</p>
        <a href="https://discord.gg/gRK4aFtF" target="_blank">
            <button class="toggle-button">Join the Discord</button>
        </a>
    </div>

    <div class="container" id="verify">
        <h2>Verification</h2>
        <p>Enter your Roblox User ID to verify and join the game:</p>
        <form class="verification-form" action="#" method="post">
            <label for="roblox-id">Roblox User ID:</label>
            <input type="text" id="roblox-id" name="roblox-id" placeholder="Enter your ID">
            <button type="submit">Verify</button>
        </form>
    </div>

    <div class="container" id="group">
        <h2>Join our Roblox Group</h2>
        <p>Be part of our group to receive exclusive benefits in-game.</p>
        <a href="https://www.roblox.com/groups/16041577" target="_blank">
            <button class="toggle-button">Join the Group</button>
        </a>
    </div>

    <div class="container" id="play">
        <h2>Play</h2>
        <p>Click the button to join The Crystal Empire and start your adventure! (is under maintenance😭)</p>
        <a href="https://www.roblox.com/share?code=1def0b455416a84e9a6100d1d8939f85&type=ExperienceDetails&stamp=1728889097624" target="_blank">
            <button class="toggle-button">Play Now</button>
        </a>
    </div>

    <footer>
        <p>&copy; 2024 The Crystal Empire - All rights reserved by Juan_DiegoA ^^</p>
    </footer>

    <script>
        // Show/hide the navigation menu
        const toggleButton = document.getElementById('toggle-nav');
        const navMenu = document.getElementById('nav-menu');
        const containers = document.querySelectorAll('.container');
        const navLinks = document.querySelectorAll('.nav-link');

        toggleButton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            if (navMenu.classList.contains('active')) {
                toggleButton.textContent = 'Hide Menu';
            } else {
                toggleButton.textContent = 'Show Menu';
                containers.forEach(container => {
                    container.classList.remove('active'); // Hide all sections when menu is hidden
                });
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent default anchor behavior
                const targetId = link.getAttribute('href').substring(1); // Get target ID
                containers.forEach(container => {
                    container.classList.remove('active'); // Hide all sections
                });
                const targetContainer = document.getElementById(targetId);
                targetContainer.classList.add('active'); // Show target section
                window.scrollTo({ top: targetContainer.offsetTop, behavior: 'smooth' }); // Scroll to target section
                navMenu.classList.remove('active'); // Hide menu after selection
                toggleButton.textContent = 'Show Menu'; // Reset button text
            });
        });

        // Show the verification form on page load
        window.addEventListener('load', () => {
            const verificationForm = document.querySelector('.verification-form');
            verificationForm.classList.add('visible');
        });
    </script>

</body>
</html>
