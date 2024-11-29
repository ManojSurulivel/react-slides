### React-Slides (restart,prev,next)

###Explanation of Fixes:

Restart Button Disabled Condition:

The Restart button is only disabled when position is 0, i.e., the first slide. When the user clicks it, it sets the position to 0, restarting the slides.

1. Prev Button:

The Prev button decreases the position by 1 if it's not already on the first slide (controlled by the isPrevDisabled variable).

2. Next Button:
The line:

```javascript
const isNextDisabled = position === slides.length - 1;
```

### Explanation:
This line checks whether the current position in a slideshow has reached the last slide and sets the value of `isNextDisabled` accordingly.

### Breakdown:
1. **`position`**:
   - Represents the current slide index.
   - Typically, slide indices start at `0` for the first slide.

2. **`slides.length - 1`**:
   - `slides.length` gives the total number of slides.
   - Subtracting `1` gives the index of the last slide, because arrays are zero-indexed.

3. **Comparison (`position === slides.length - 1`)**:
   - This checks if the current slide index (`position`) is equal to the index of the last slide.

4. **Result**:
   - If the current position is the last slide, `isNextDisabled` is set to `true`.
   - Otherwise, it is set to `false`.

### Purpose:
- **Disable the "Next" Button**: 
  - This value (`isNextDisabled`) can be used to disable the "Next" button in a carousel or slideshow when the user is already on the last slide, preventing unnecessary clicks.

### Usage Example in Code:
```javascript
<button
  disabled={isNextDisabled}
  onClick={() => setPosition(position + 1)}
>
  Next
</button>
```

In this example:
- The "Next" button becomes **disabled** when `isNextDisabled` is `true`.
- This prevents the user from going beyond the last slide.
The Next button increases the position by 1 unless it’s on the last slide (controlled by the isNextDisabled variable).

3. Slide Display:

The title and text of the current slide are displayed using slides[position].
