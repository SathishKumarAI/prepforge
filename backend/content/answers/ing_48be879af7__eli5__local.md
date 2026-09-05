---
qid: ing_48be879af7__eli5__local
question: 'Explain: DNS resolution — Why DNS Based Global Server Load Balancing (GSLB)
  Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 212
total_tokens: 384
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:32:15-05:00'
sources: []
---

Imagine you’re sending a postcard to a friend who lives in many houses across the city. You write the street name (the domain) and ask the post office (DNS) to pick one house for you. The post office can only hand you a single address each time, and it keeps that same address in its “postcard box” for weeks or months. If your friend moves to another house, the postcard still goes to the old one until the box expires.  

In GSLB, DNS gives users one server’s IP. Because DNS answers are cached by browsers, routers, and ISPs for long periods (TTL), traffic can stay stuck on a single server even if that server is overloaded or down. The post office can’t instant‑re‑route the postcards while you’re waiting. That’s why relying solely on DNS for global load balancing fails to adapt quickly to real‑time changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
