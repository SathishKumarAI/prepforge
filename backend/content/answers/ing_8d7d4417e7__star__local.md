---
qid: ing_8d7d4417e7__star__local
question: 'Explain: Clarifying Requirements — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 350
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:15:42-05:00'
sources: []
---

**Situation**  
In a recent project at my previous company, the product team wanted to roll out a new global e‑commerce platform. The traffic forecasted a peak of 2 million requests per second during holiday sales, but the existing load balancer was causing bottlenecks and unpredictable latency.

**Task**  
I was tasked with designing a scalable, fault‑tolerant load balancer that could handle the spike while meeting SLAs: <200 ms average latency, 99.9% uptime, and zero single point of failure. Before jumping into architecture, I needed to pin down the exact business constraints.

**Action**  
I led a series of workshops with product managers, ops, and security leads to clarify requirements. We documented key metrics (traffic patterns, session stickiness needs, compliance rules), identified critical trade‑offs (latency vs. throughput, cost vs. redundancy), and defined success criteria. With that baseline, I chose a Layer 4+7 hybrid model using Envoy as the edge proxy, a distributed hash ring for sticky sessions, and an auto‑scaling pool of Kubernetes pods backed by AWS ALB. We also added health‑check probes and a circuit breaker to guard against cascading failures.

**Result**  
The new load balancer handled 2.5 M RPS during Black Friday with <180 ms average latency and maintained 99.95% uptime, exceeding the SLA by 0.05%. The clarification process cut design iterations by 40%, and I learned that early requirement alignment saves both time and engineering resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
