---
qid: ing_c1a8665f56__eli5__local
question: 'Explain: What CDNs Cache — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 207
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:43:08-05:00'
sources: []
---

Think of a CDN like a chain of tiny libraries that live all over the world instead of one big, distant library.  
When you ask for a website page or video, the CDN’s nearest “library” (a server) gives you the file straight away—so it feels instant. The files it keeps are called *cached content*: the exact copies of web pages, images, videos, CSS files, JavaScript, and even whole sites that many people want to see.

When a user first visits a site, the CDN pulls those files from the original server (the “source”) and stores them locally for a set time. After that, any new visitor in the same region gets the copy from the local cache instead of waiting for the far‑away source.  
So CDNs cache static web content to reduce travel distance, speed up delivery, and lower the load on the original server.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
