---
qid: ing_d2d65ef18b__eli5__local
question: 'Explain: Historical Address Classes — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 266
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:09:15-05:00'
sources: []
---

Think of an IP address like a postal address for every device on the internet, but it’s written in numbers instead of letters. In the early days, engineers divided the address space into “classes” (A, B, C) just as a post office might sort mail by region—Class A for very large countries, Class B for states, Class C for cities. Each class had a fixed part that told routers where to send traffic and a variable part that identified the device itself.

- **Class A**: First number (1‑126) tells “big country” – many devices (≈16 million).  
- **Class B**: First two numbers (128‑191) mean “state” – fewer devices (~65k).  
- **Class C**: First three numbers (192‑223) mean “city” – even fewer devices (~2.5k).

The fixed part is the “network prefix”; the rest is the “host identifier.” Over time, this rigid system wasted address space, so we moved to CIDR, which lets us choose any size like drawing a custom fence around exactly the houses you need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
