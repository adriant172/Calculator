# Calculator
The Odin Project based Calculator project

## Introduction
The goal here is to create an HTML based calculator using javascript to provide the logic to make it function.


## Process
So during my first approach of creating this application. I created the basic operation functions for addition, subtraction, multiplication and divison. Created an operate function which then used those basic operation functions. Then when It came time to creating the calculator in html itself I decided to instead use javascript to dynamically create the calculator by just using an array of the values we need , instead of manually creating every button with any potential attributes we might add later on. 

Now when it came time to creating the main logic flow of the calculator this is where I ran into some issues. I orginally created the logic through numerous nested condontional statements with a mix of several variables that housed the values that we were working with. This started to get very messy, unruly and unreadable. While even though it mostly worked, I decided to refactor the code eventually. 

After a discussion with a mentor regarding using a data structure in my logic. I proceeded to go through the list of general computer science data structures. Eventually I decided on using the Stack data structure for this case. After many psuedo code sessions and actual code rewrites. I was finally able to get the logic working while taking care of all foreseable edge cases. 

I then proceeded to work on the "extra credit" features for this project. Adding decimal functionaility as well as a decimal button. Added a backspace button as well as keyboard support.

I also made sure to add some CSS styling that added some simple dynamic animation when a button on the calculator is pressed. 
