---
qid: ing_1d2ec4da93__aws__local
question: The model outputs markdown. How do you render it safely, and what specifically
  can go wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 394
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:32:11-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was responsible for exposing an LLM‑powered chat UI to end users on a public web app. The model returned raw Markdown that could contain embedded HTML, JavaScript, or malicious links. My goal was to render the content safely while keeping the user experience fluid.

**Action (Design)**  
1. **Sanitization Layer** – Use *OWASP Sanitizer* to strip `<script>`, `on*` attributes, and disallow external resources except images from a whitelist CDN.  
2. **Markdown Parser** – Convert Markdown to an abstract syntax tree with *CommonMark*; traverse the AST and only allow safe node types (`paragraph`, `heading`, `link`, `image`).  
3. **Content‑Security Policy (CSP)** – Set `default-src 'self'; img-src cdn.example.com data:` and block inline scripts.  
4. **Rate Limiting & Auditing** – 5 requests/sec per user; log raw outputs for manual review.

**Result**  
After deployment, zero XSS incidents were logged in 12 months while maintaining a rendering latency of <30 ms per message (≤0.2 % CPU usage on spot instances). The sanitization cost was <$0.01/1k messages, keeping the service within budget.

**Reflection & Bar‑raiser Insight**  
I demonstrated *Ownership* by anticipating edge cases and *Dive Deep* through AST inspection. Quantified impact (zero incidents, performance metrics) satisfies bar‑raisers; I also documented a failure case where an image URL was hijacked, learned to add a stricter CSP, and iterated the policy accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
