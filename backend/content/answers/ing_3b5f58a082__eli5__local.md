---
qid: ing_3b5f58a082__eli5__local
question: 'Explain: 2.3 Health Check Overhead — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 218
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:10:15-05:00'
sources: []
---

Imagine a busy airport with many gates (your servers). The air‑traffic controller (the load balancer) must keep passengers on time, but first it has to make sure each gate is open and ready before sending planes there. That’s the **health check**: the controller pings each gate to see if it can handle traffic.

The “overhead” comes from two things:

1. **Frequency** – Checking too often wastes the controller’s time (and network bandwidth) like a pilot circling unnecessarily around an airport.
2. **Number of gates** – The more gates you have, the more checks the controller must perform; it can’t keep all of them alive forever.

So designers pick a reasonable interval (e.g., every 30 seconds) and sometimes let only a subset of gates be checked at once, balancing safety (knowing which gate is healthy) with efficiency (not over‑loading the controller).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
