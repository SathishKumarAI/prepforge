---
qid: ing_23d2a10e73__eli5__local
question: 'Explain: Maybe you note down 50 devices or — System Design: Content Delivery
  Networks (Simplified)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 199
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:32:56-05:00'
sources: []
---

Imagine a big library that has thousands of books (the internet’s data). If every reader had to walk all the way to the main building to borrow a book, traffic would jam and waiting times would skyrocket. A **Content Delivery Network (CDN)** solves this by placing small copies of those books in many branch libraries around the city.

When someone requests a file—like a video or webpage—the CDN automatically finds the nearest branch library that holds that copy. The user gets the content quickly, with minimal delay and lower load on the main building. In tech terms, each branch is called a **cache server**; the system routes traffic through the closest cache using simple rules (latency, bandwidth). Thus, CDNs keep data close to users, speeding up access and easing strain on central servers—just like branches of a library make books more accessible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
