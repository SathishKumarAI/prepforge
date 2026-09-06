---
qid: ing_1d2ec4da93__think__local
question: The model outputs markdown. How do you render it safely, and what specifically
  can go wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 461
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:38:17-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal:* Safely display user‑generated Markdown from an AI model.  
- *Assumptions:* The content may contain malicious scripts, CSS overrides, or embedded resources; we’re rendering in a web context where XSS is a risk; we can preprocess with trusted libraries.

**2️⃣ Mental model / framework**  
Treat the problem as an **input‑validation + sanitization pipeline**:  
1. Parse Markdown → AST (Abstract Syntax Tree).  
2. Walk the tree, allowing only safe nodes.  
3. Convert to sanitized HTML.  
4. Serve via CSP and content‑type headers.

**3️⃣ Step‑by‑step reasoning**  
- Use a proven parser (`marked`, `markdown-it`) with an option to disable raw HTML.  
- Strip or escape `<script>`, `<iframe>`, event handlers, CSS that can affect layout (e.g., `position: fixed;`).  
- Whitelist only safe tags (`<a>`, `<img src="...">` with vetted URLs).  
- Replace dangerous attributes (`onclick`) and enforce HTTPS for resources.  
- Add a nonce or hash‑based CSP header to block inline scripts.  
- Render in an iframe sandboxed from the main page if needed.

**4️⃣ Common traps & wrong turns**  
- Assuming “no raw HTML” equals safe: Markdown may still inject CSS via `<style>` blocks.  
- Over‑aggressive stripping removes legitimate formatting (e.g., tables).  
- Forgetting to escape URLs can lead to `javascript:` links.  
- Neglecting CSP means browsers might execute inline handlers that survived sanitization.

**5️⃣ Sanity‑check & communicate**  
- Test with a suite of known XSS payloads (OWASP XSS Cheat Sheet).  
- Verify that the resulting HTML renders correctly in a controlled sandbox.  
- Explain to stakeholders: “We parse, whitelist, CSP‑guarded, and test; this mitigates XSS, CSS injection, and resource abuse.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
