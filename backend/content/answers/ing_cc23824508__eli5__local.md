---
qid: ing_cc23824508__eli5__local
question: 'Explain: Static Web Assets — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 212
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:58:39-05:00'
sources: []
---

Think of a static web asset—like an image, CSS file or JavaScript script—as a book you want to share with friends all over the world. A **Content Delivery Network (CDN)** is like a library network that places copies of that book in many branches around the globe instead of keeping it only in your home office.

When someone requests the asset, the CDN checks which branch is nearest to them and sends the copy from there. This reduces travel time (latency), eases the load on your original server, and keeps traffic smooth even if millions of people ask for the same file at once.

In system design, you store the static files in a central bucket (e.g., Amazon S3) and configure a CDN (e.g., CloudFront) to pull from it. The CDN then caches copies at edge locations so every user gets fast, reliable access without overloading your main infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
