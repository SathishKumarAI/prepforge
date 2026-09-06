---
qid: vq_2dc0a0fca1__faang__local
question: I must put a repeating frame around these fields. How do I do this easily?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 461
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:04:13-05:00'
sources: []
---

**Clarify**

You want to add a visual “frame” that repeats (e.g., a border, padding or shadow) around several form fields in the UI.  
Assumptions:  
1. All fields share the same styling requirement.  
2. You’re working with CSS/HTML (React/Vue/etc.) and not generating them dynamically on the server.

**Approach**

1. Create a reusable CSS class for the frame (e.g., `.field-frame`).  
2. Apply that class to each input or wrap the inputs in a container that uses the same class.  
3. If you’re using a component library, extend its style via `styled-components`/CSS Modules or use a theme variable.

**Depth**

```css
/* reusable frame */
.field-frame {
  border: 1px solid #ccc;
  padding: 8px;
  border-radius: 4px;
  box-shadow: inset 0 0 3px rgba(0,0,0,.1);
}
```

In React:

```jsx
<input type="text" className="field-frame" />
```

Or wrap multiple fields:

```html
<div class="field-frame">
  <input …/>
  <input …/>
</div>
```

Complexity is O(1) for rendering; memory overhead negligible.  
Trade‑off: A single CSS file keeps maintenance low, but if you need per-field variations, consider BEM or CSS variables.

**Edge Cases**

- Disabled fields: add a modifier class (`.field-frame--disabled`) to adjust opacity.  
- Responsive design: ensure padding and border scale on mobile (use rem units).  
- Accessibility: maintain focus styles; override `outline` only when needed.

**Optimize & Communicate**

Explain that using a single reusable CSS rule reduces duplication, speeds up rendering, and eases future theme changes. Highlight that if the project uses CSS-in-JS, you can extract the style into a shared component to guarantee consistency across all forms. This demonstrates clean design, scalability, and thoughtful problem‑solving—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
