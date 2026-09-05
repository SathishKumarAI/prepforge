---
qid: ing_99872fb198__eli5__local
question: 'Explain: Content Delivery Network — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 288
total_tokens: 445
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:41:14-05:00'
sources: []
---

Imagine you’re baking cookies at home and want to share them with friends all over the world. If every friend had to walk straight to your kitchen, some would arrive hot while others get cold or miss out entirely. A **Content Delivery Network (CDN)** is like a network of mini‑kitchens placed in many cities. When you ask for a cookie (a web page, video, or any file), the CDN sends it from the nearest mini‑kitchen instead of your single kitchen.  

**How it works:**  
1. **Edge servers** are the mini‑kitchens—small data centers close to users.  
2. The original file is stored in a **central origin server** (your home).  
3. When a user requests content, the CDN’s edge server checks if it already has that file; if not, it fetches it from the origin and keeps a copy for future requests.  

The result: faster load times, reduced traffic to the origin, and better handling of sudden spikes in demand—just like your friends get fresh cookies quickly without overloading one kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
