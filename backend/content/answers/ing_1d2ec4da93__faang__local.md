---
qid: ing_1d2ec4da93__faang__local
question: The model outputs markdown. How do you render it safely, and what specifically
  can go wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 486
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:52:46-05:00'
sources: []
---

**Clarify**  
We need to take a string of Markdown produced by an AI model and display it in a web UI without exposing users to XSS or other injection attacks. Assume the Markdown may contain raw HTML, images, links, code blocks, etc., and that we control the rendering pipeline (e.g., React app).  

**Approach**  
1. **Sanitize the raw input** – strip dangerous tags/attributes before parsing.  
2. **Parse Markdown with a safe library** – use a parser that never executes embedded scripts (e.g., `marked` with `sanitize:true`, or `remark` + `rehype-sanitize`).  
3. **Escape URLs** – validate link and image src against a whitelist of protocols (`https`, `http`, `data:` for images only if safe).  
4. **Render to React elements** – convert parsed AST into JSX, ensuring no `dangerouslySetInnerHTML` unless the content is fully sanitized.  

**Depth**  
- Use an HTML sanitizer (DOMPurify) after Markdown → HTML conversion; complexity O(n).  
- Maintain a whitelist of allowed tags (`p`, `a`, `img`, `pre`, `code`, etc.) and attributes (`href`, `src`, `alt`).  
- Reject or escape any `<script>`, `on*` handlers, `javascript:` URLs.  
- For images, enforce size limits and MIME type checks to avoid data‑URL attacks.  

**Edge Cases**  
- Markdown trickery like “![img](javascript:alert(1))”.  
- Hidden scripts in attributes (`<a href="https://example.com" onclick="evil()">`).  
- Nested tags that bypass simple regex filters.  
- Unicode tricks that produce valid URLs but point to malicious domains.  

**Optimize & Communicate**  
Explain the pipeline step‑by‑step, justify the sanitizer choice (e.g., DOMPurify is battle‑tested), and mention fallback: if parsing fails, display plain text. Highlight trade‑offs: stricter sanitization reduces usability (e.g., no embedded videos) but improves security—balance per product needs. This demonstrates clear structure, depth, and awareness of real‑world pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
