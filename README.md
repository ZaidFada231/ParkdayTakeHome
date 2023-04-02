# PARKDAY TECHNICAL TAKE HOME

This was an incredibly fun project to take on. It has been some time since I've been able to freely work on a project and enjoy the creative process that goes behind every website, so I thank you for this opportunity.

This project was built using ReactJS and these dependencies:
- 'papaparse' to parse through and display the CSV
- 'momentjs' to create a current time var and compare the meal_opt_in_created_date and the current times
- 'react-router-dom' to create the routing between different pages of the website
- 'typewriter-effect' to create the fun typewriter style home page

My approach to this project was that I would begin by sketching what I wanted my final product to look like, setting a time estimate of about 5 days to complete due to my hefty workload this past week. It ended up taking me from Tuesday to Saturday as expected. Here is what I did each day:
- Tuesday: I did most of the research and sketching, beginning to visualize the project and how I would attack each problem.
- Wednesday: I began with the landing page, using the typewriter effect to create a fun and attractive landing page, with a button that would appear at the end of the effect to segway us into the next page.
- Thursday: I set up the routing between the pages using react-router-dom and created the csvparser page, which using papaparse, takes in a file using a file drop input and displaying, initially, an ugly table.
- Friday: As mentioned in my daily check in, I didn't have any time to work on the project.
- Saturday: Saturday morning, I implemented a bulk of the implementation. I began by removing some redundant columns and cleaning up the table. I then proceeded by using momentjs to find the current time and compare the time of the csv files we added. After this, I went through and added proper styling to this page, continuing with the orange theme I had from the landing page and continued the consistency by using the same styling for the input button that I had for the button on the home page. I then proceeded by implementing the document.getElementsByClassName to find the button id and store it into the path variable. This allows for a more "dynamic" website using the service_id.
- Sunday: Submitted final product in the morning. Sadly post submission I caught a small error that I accidently used a 12hr clock rather than a 24 hr clock for my momentjs current time, which caused the site to break after 12pm. Very small fix just from converting "hh" to "HH," just wanted to document this mistake as a reminder to always test in both sides of breakpoint, the breakpoint being before and after 12 in regards to a possible error with time. 
