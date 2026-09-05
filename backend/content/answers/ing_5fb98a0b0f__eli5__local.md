---
qid: ing_5fb98a0b0f__eli5__local
question: What Is A CDN? How Does It Work?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 217
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:08:24-05:00'
sources: []
---

A **Content Delivery Network (CDN)** is like a smart courier system for the web.  
Think of your website as a library that wants to lend books (images, videos, code) to readers all over the world. If every reader had to travel back to the single library in New York, it would take a long time and the library would get crowded. A CDN builds many small “branch libraries” in cities around the globe. When someone asks for a book, the request is automatically routed to the nearest branch that already has a copy. That branch serves the content instantly, while the original library stays uncluttered.

In practice, when you visit a site using a CDN, your browser first finds the closest server (the “edge node”) and downloads the files from there instead of from the origin server. This reduces latency, eases load on the main server, and keeps users happy no matter where they are.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
