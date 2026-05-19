

# eduTasks

## Overview

eduTasks is a web application for generating educational and game-based worksheets for students. Initially targeted at year 1 students, it is designed to be extensible for all grade levels. All tasks are generative and printable, making it suitable for both classroom and home use.

## Features

- **Arithmetic Worksheets:** Customizable arithmetic problems (addition, subtraction, multiplication, division) with adjustable number ranges and printable layout.
- **Number Path Game:** Visual math path using SVG, where students follow a path of numbers and operations.
- **Before & After Number Worksheet:** Practice for number sequencing, with colorful and engaging layout.
- **Missing Letters Worksheet:** Generates words with missing letters for spelling practice.
- **Print-Friendly:** All worksheets are styled for easy printing, hiding controls and backgrounds.

## File Structure

```
eduTasks/
├── arithmetic.html         # Arithmetic worksheet generator
├── index.html             # Main entry, missing letters worksheet & landing page
├── pathGame.html          # Number path worksheet generator
├── sequence.html          # Before & after number worksheet
├── css/
│   └── style.css          # Styles for worksheet generator
├── js/
│   ├── app.js             # Main worksheet logic (missing letters)
│   ├── data.js            # Data for tasks (e.g., word lists)
│   └── generator.js       # Task generation logic
├── templates/
│   └── worksheet.html     # (Reserved for future use)
├── copilot-instructions.md # Project coding conventions
└── README.md              # Project documentation
```

## Usage

1. **Open any HTML file in a browser:**
   - `index.html` for the landing page and missing letters worksheet
   - `arithmetic.html` for arithmetic worksheets
   - `pathGame.html` for number path games
   - `sequence.html` for before & after number practice

2. **Customize worksheet parameters:**
   - Use the controls at the top of each page to set operators, number ranges, or worksheet type.
   - Click "Generate" to create a new worksheet.
   - Click "Print" to print the worksheet (controls are hidden in print view).

## Conventions & Guidelines

- All pages must include the project banner and navigation menu for a consistent user experience.
- Use external CSS for all shared styles (`css/style.css`).
- All JavaScript functions should be documented with JSDoc-style comments.
- Each file should start with a comment header including file name, author, and a brief description.
- All worksheet generators must be print-friendly.
- Use only open-source or CDN-hosted libraries (e.g., jQuery).

## Extending the Project

To add a new worksheet type:
1. Create a new HTML file and corresponding JS logic in the `js/` folder.
2. Add a link to the new worksheet in the navigation menu of all pages.
3. Follow the style and documentation conventions above.
4. Update this README and `copilot-instructions.md` as needed.

## License

MIT License (see LICENSE file)

## Authors

Created by the eduTasks team.
- **Extensible:** New worksheet types can be added by creating new HTML/JS modules and updating the main menu.

## Extending the Project

To add new worksheet types:
1. Create a new HTML file and corresponding JS logic in the `js/` folder.
2. Add UI controls as needed for customization.
3. Follow the print-friendly CSS conventions.
4. Update `index.html` or the main menu to link to your new worksheet.

## Example: Missing Letters Worksheet

The missing letters worksheet randomly selects words and hides a letter in each. Students fill in the blanks. The logic is in `js/app.js`, using a word list from `js/data.js` and a generator function from `js/generator.js`.

## Example: Arithmetic Worksheet

Arithmetic worksheets are generated with random problems based on user-selected operator and number range. The worksheet is displayed in a table for easy printing and student use.

## License

MIT License (see LICENSE file)

## Authors

Created by the eduTasks team.
