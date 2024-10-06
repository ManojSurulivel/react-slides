Explanation of Fixes:

Restart Button Disabled Condition:

The Restart button is only disabled when position is 0, i.e., the first slide. When the user clicks it, it sets the position to 0, restarting the slides.

1. Prev Button:

The Prev button decreases the position by 1 if it's not already on the first slide (controlled by the isPrevDisabled variable).

2. Next Button:

The Next button increases the position by 1 unless it’s on the last slide (controlled by the isNextDisabled variable).

3. Slide Display:

The title and text of the current slide are displayed using slides[position].
