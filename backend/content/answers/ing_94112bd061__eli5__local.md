---
qid: ing_94112bd061__eli5__local
question: 'Explain: How Health Checking Works — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 216
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:32:29-05:00'
sources: []
---

Imagine a busy highway with several toll booths (the servers). A traffic‑control center (the load balancer) decides which booth each driver should use. But if a booth stops working, drivers would get stuck and the whole system jams.

The traffic‑control center solves this by running quick “ping” tests on every booth—sending a short message and waiting for an answer. If the booth replies quickly and correctly, it’s marked *healthy* and gets more traffic. If it fails to reply or answers incorrectly, it’s marked *unhealthy* and the control center stops sending cars there until it recovers.

**Health check** = routine ping test.  
**Healthy** = server responds properly.  
**Unhealthy** = server does not respond or misbehaves.

By continuously running these checks, the load balancer keeps traffic flowing smoothly, avoiding stalled servers and ensuring users get a reliable experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
