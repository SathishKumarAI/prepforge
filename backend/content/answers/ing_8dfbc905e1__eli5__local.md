---
qid: ing_8dfbc905e1__eli5__local
question: 'Explain: CDN Cache — What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 249
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:21:48-05:00'
sources: []
---

Imagine you’re at a popular bakery that makes fresh bread every morning. If everyone had to walk all the way to the bakery each time they wanted a loaf, traffic would clog the streets and customers would wait forever. Instead, the bakery sets up small “bread‑tarts” in neighboring cafés—tiny, local shelves stocked with pre‑made loaves. When someone walks into a café and orders bread, it’s already there; only if a special request comes that isn’t on the shelf does the baker have to fetch a fresh loaf from the main bakery.

In computer terms, a **CDN (Content Delivery Network) cache** works like those local cafés. Content—images, videos, web pages—is stored (“cached”) in servers close to users. When you request something, the CDN checks its nearby cache first; if it’s there, it delivers instantly. If not, it pulls the fresh copy from the origin server and stores it for future requests. This reduces latency (faster load times) and eases traffic on the original site, just as the bakery keeps customers happy without overcrowding its main shop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
