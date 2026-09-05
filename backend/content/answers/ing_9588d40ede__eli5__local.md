---
qid: ing_9588d40ede__eli5__local
question: 'Explain: Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 250
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:34:43-05:00'
sources: []
---

Imagine you’re hosting a popular recipe blog that millions of people visit every day. If every visitor had to download the entire website from your single kitchen (server) in New York, traffic would pile up and pages would load slowly—especially for folks on the other side of the world.

A **Content Delivery Network (CDN)** is like a network of tiny kitchens spread across the globe. Each kitchen stores copies of your blog’s pages, images, and videos (the *content*). When someone clicks to read a recipe, their request goes to the nearest kitchen instead of the original New York server. That kitchen quickly hands them the content, reducing travel time and easing pressure on the main kitchen.

Key points:
- **Edge servers** are the local kitchens that cache your content.
- **Caching** means storing copies so repeated requests don’t hit the origin every time.
- The CDN automatically routes users to the best edge server based on location and network conditions.

So, a CDN is simply a distributed system of mirrors that delivers web content faster and more reliably by keeping it close to where people are.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
