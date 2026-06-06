---
name: add-component
description: Scaffold a new React component for this portfolio following the existing project conventions. Pass the component name as an argument (e.g. /add-component gallery).
disable-model-invocation: false
---

When the user runs `/add-component <name>`, create a new React component for this Next.js portfolio project.

## Rules

- Component file goes in `/components/<name>.js`
- CSS module goes in `/styles/<Name>.module.css` (capitalize the CSS file name)
- Use plain JavaScript (no TypeScript)
- Import the CSS module at the top of the component: `import styles from '../styles/<Name>.module.css'`
- Match the existing component style — functional components, no default export wrappers, props destructured inline
- Use 4-space indentation, single quotes, semicolons (Prettier config)
- The CSS module should be empty but scaffolded, ready for the user to add styles
- After creating the files, print the import line the user can paste into a page

## Component template

```js
import styles from '../styles/<Name>.module.css';

export default function <Name>({ }) {
    return (
        <div className={styles.container}>
            {/* content */}
        </div>
    );
}
```

Look at an existing component (e.g. `components/card.js`) to match the exact coding style before generating.
