---
qid: ing_7a9c8e7a28__eli5__local
question: 'Explain: How CDN Works — How Does CDN Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 231
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:51:14-05:00'
sources: []
---

A Content Delivery Network (CDN) is like a network of friendly libraries spread across the world.  
Imagine you want to read a book that lives in New York. Instead of waiting for it to travel all the way to your hometown, the CDN keeps copies of the book in many local libraries (servers). When you request the book, the CDN automatically chooses the library nearest to you and sends the copy from there.  

**How it works:**  
1. **Edge servers** (the local libraries) store copies of popular web files—images, videos, HTML pages.  
2. **DNS lookup** directs your browser to the nearest edge server instead of the origin server in New York.  
3. The file is delivered quickly, and if that copy becomes stale, a small “refresh” request updates it from the original source.

The result? Faster loading times, less strain on the main server, and smoother experience for users everywhere.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
