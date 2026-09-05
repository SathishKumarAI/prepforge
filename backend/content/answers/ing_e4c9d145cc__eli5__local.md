---
qid: ing_e4c9d145cc__eli5__local
question: 'Explain: How CDN Routing Works — Content Delivery Network (CDN) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 261
total_tokens: 426
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:37:08-05:00'
sources: []
---

Imagine you’re ordering a pizza from a chain that has dozens of kitchens all over the city. The order doesn’t go straight to the main kitchen; instead, it’s sent to the nearest local kitchen so the pizza arrives hot and fast. A CDN (Content Delivery Network) works the same way for web content.

**What is a CDN?**  
A network of servers (“edge servers”) placed in many geographic locations that store copies of your website’s files (images, videos, HTML).

**How does routing work?**  
When someone clicks a link, their request first goes to a DNS (Domain Name System) server. The DNS answers with the IP address of the edge server closest to the user—like telling them which local pizza kitchen is nearest. That server then delivers the requested files directly. If the file isn’t on that edge server, it fetches it from another CDN node or the origin server and caches it for future visitors.

So, a CDN routes traffic by picking the nearest server, just as a pizza chain sends your order to the closest kitchen, ensuring speed, reliability, and reduced load on any single site.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
