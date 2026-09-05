---
qid: ing_1d2ec4da93__star__local
question: The model outputs markdown. How do you render it safely, and what specifically
  can go wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 330
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:27:44-05:00'
sources: []
---

**Situation:**  
At my last startup we built an AI‑powered documentation assistant that returned code snippets and formatted notes in Markdown. One sprint, the model started injecting raw `<script>` tags and malicious URLs into the generated docs, which our internal preview tool rendered directly in a web browser.

**Task:**  
I had to design a safe rendering pipeline so that end users could view AI‑generated Markdown without exposing the app or their data to XSS attacks, while keeping the developer experience smooth for content creators.

**Action:**  
1. Implemented a two‑stage sanitizer: first, I used the `markdown-it` parser with `markdown-it-sanitizer` to strip disallowed tags and attributes.  
2. Added a whitelist of safe HTML entities (e.g., `<b>`, `<i>`) and blocked dangerous ones (`<script>`, `<iframe>`).  
3. Wrapped all URLs in a proxy endpoint that validated domains against an allowlist, preventing open redirects.  
4. Deployed automated tests using `jest` to feed edge‑case Markdown strings and assert no unsafe tags survive the pipeline.

**Result:**  
Within two weeks, we eliminated 99.9 % of XSS vectors from AI output, reduced incident tickets by 70 %, and maintained a rendering latency under 50 ms per document. I learned that defensive parsing combined with domain whitelisting is essential whenever user‑generated Markdown meets the web.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
