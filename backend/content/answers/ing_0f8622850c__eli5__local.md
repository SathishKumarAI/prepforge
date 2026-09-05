---
qid: ing_0f8622850c__eli5__local
question: 'Explain: What a CDN Does — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 257
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:59:59-05:00'
sources: []
---

Imagine you’re at a large library that holds every book you might ever want. If only one shelf held all the books, anyone who asked for a book would have to wait while the librarian fetched it from that far‑away shelf. A CDN is like a network of tiny “mini‑libraries” spread across the world. When someone requests a piece of data—say a video frame or an image used in a machine‑learning model—the CDN quickly finds the nearest mini‑library (server) and hands the data over, cutting travel time to almost nothing.

A CDN’s job is threefold:  
1️⃣ **Caching** – it stores copies of popular files so they don’t have to be rebuilt each time.  
2️⃣ **Routing** – it directs users to the closest copy based on geography or network conditions.  
3️⃣ **Load balancing** – it spreads traffic across many servers, preventing any single one from getting overloaded.

So, just as a global library makes books instantly available wherever you are, a CDN delivers data—especially large ML datasets and model artifacts—fast and reliably to users everywhere.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
