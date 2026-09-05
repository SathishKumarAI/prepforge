---
qid: ing_e0fdad30a6__eli5__local
question: 'Explain: Browser Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 295
total_tokens: 456
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:31:53-05:00'
sources: []
---

**Caching = A Quick‑Reference Shelf**

Imagine you’re at a library that also has a small, personal desk where you keep the books you read most often. When you need a page again, you pull it from your shelf instead of walking all the way to the main stacks. That’s exactly what a browser cache does: it stores copies of web pages, images, or scripts right on your computer.

**How it works**

When you visit a site for the first time, the browser downloads everything and keeps a copy in its “shelf” (the cache). The next time you come back, the browser checks if what’s on the shelf is still fresh. If it is, it serves that copy instantly—no need to ask the server again. If the online version has changed, the browser fetches the new one and updates the shelf.

**Why it matters**

- **Speed:** Pulling from local storage takes milliseconds versus seconds over the internet.
- **Bandwidth savings:** Fewer requests mean less data traffic for both you and the website.
- **Reliability:** Even if the server is down, cached pages can still display (though they may be slightly out‑of‑date).

In short, caching is your browser’s personal quick‑reference shelf that keeps web content close at hand, making browsing faster and more efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
