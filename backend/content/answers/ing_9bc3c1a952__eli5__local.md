---
qid: ing_9bc3c1a952__eli5__local
question: 'Explain: The punch line — Why DNS Based Global Server Load Balancing (GSLB)
  Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 198
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:44:22-05:00'
sources: []
---

Imagine you’re a chef who sends out menus (DNS answers) to diners worldwide. The menu says “We’re open in Paris!” but the kitchen can only handle so many orders at once. If too many people book seats based on that menu, the restaurant gets overwhelmed and starts turning them away. 

In DNS‑based Global Server Load Balancing (GSLB), the “menu” is a DNS response that tells users which server to connect to. Because DNS replies are cached for a set time (the TTL), everyone who asks will keep using the same server until the cache expires, even if that server becomes overloaded or goes down. So the load isn’t truly balanced in real‑time; it’s like giving all diners the same outdated menu while some restaurants are full and others empty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
