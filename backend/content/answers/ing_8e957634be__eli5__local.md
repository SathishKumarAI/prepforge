---
qid: ing_8e957634be__eli5__local
question: 'Explain: 4.1 Redundancy — Single Point of Failure (SPOF) | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 213
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:22:43-05:00'
sources: []
---

Imagine a busy train station where all trains must pass through one single tunnel. If that tunnel collapses, every train is stuck—there’s no alternative route. In computer systems the same thing can happen with a **Single Point of Failure (SPOF)**: a critical component or piece of software that, if it breaks, brings down the whole service.

A **redundancy** strategy is like building extra tunnels so trains can choose another path when one is blocked. By duplicating servers, power supplies, network links, or even data storage, you give the system spare parts to fall back on. If one element fails, traffic automatically switches to a backup that’s already ready and working.

So, in practice, designers add duplicate hardware, use load balancers, replicate databases, and spread services across different locations. The goal is simple: keep the “tunnel” open no matter what happens, ensuring continuous operation even when something goes wrong.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
