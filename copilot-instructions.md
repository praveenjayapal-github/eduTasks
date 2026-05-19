# eduTasks Project Style Guide and Conventions

## General
- All HTML files must use `<!DOCTYPE html>` and specify `lang="en"` in the `<html>` tag.
- Each HTML file should include a banner and navigation menu for a consistent user experience.
- Use semantic HTML5 elements where possible.
- Keep inline styles to a minimum; prefer external CSS in `css/style.css`.

## JavaScript
- Use clear, descriptive function and variable names (camelCase).
- All functions must include a JSDoc-style comment describing their purpose, parameters, and return value.
- Place reusable logic in separate JS modules (e.g., `generator.js`, `data.js`).
- Use `const` and `let` appropriately; avoid `var`.
- Use strict equality (`===` and `!==`).
- Keep DOM manipulation and logic separated for maintainability.

## CSS
- Use external CSS for all shared styles (`css/style.css`).
- Use BEM or clear class naming for custom components.
- Ensure all pages are print-friendly (hide controls, use white background for print).
- Use responsive units and media queries for better device compatibility.

## Documentation
- Each file should start with a comment header including file name, author, and a brief description.
- All public functions and modules should be documented.
- Update the README.md with any new worksheet types or major changes.

## Extending the Project
- To add a new worksheet type:
	1. Create a new HTML file and corresponding JS logic in the `js/` folder.
	2. Add a link to the new worksheet in the navigation menu of all pages.
	3. Follow the style and documentation conventions above.

## Project-Specific Rules
- All worksheet pages must include the banner and navigation menu for consistency.
- All worksheet generators must be print-friendly.
- Use only open-source or CDN-hosted libraries (e.g., jQuery).

## Exceptions
- If a worksheet requires unique styling or scripts, document the reason in a comment at the top of the file.