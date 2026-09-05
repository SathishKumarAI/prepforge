---
qid: ing_4d570c8868__star__local
question: 'Explain: The Health Checker Component — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 362
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:02:57-05:00'
sources: []
---

**Situation:**  
At my previous startup we built a real‑time recommendation engine that served millions of requests per day from a cluster of inference nodes. The traffic spikes during holiday sales, so the load balancer had to keep track of each node’s health without adding latency.

**Task:**  
Design a Health Checker component that can detect failed or slow inference nodes in under 200 ms, report their status back to the LB, and trigger graceful failover—all while keeping the overall system cost below $0.02 per check.

**Action:**  
I implemented a lightweight gRPC probe that runs every 5 s on each node. The probe sends a small “predict” request with a pre‑cached dummy payload and measures latency, error rate, and CPU utilisation. Results are pushed to a central Kafka topic; the LB consumes this stream in real time, updating its routing table using a weighted round‑robin algorithm that gradually decreases weight for nodes whose latency exceeds 300 ms or error >2%. To reduce cost I batch metrics per node into 64‑bit bitfields and use an LRU cache to avoid probing idle workers. We also added exponential back‑off for repeated failures.

**Result:**  
After deployment, mean response time dropped from 350 ms to 220 ms during peak load, and the failure recovery time fell from 12 s to <1 s. The health checker consumed only 0.015 USD per hour. I learned that combining lightweight probes with streaming metrics gives a near‑real‑time view of node health without sacrificing throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
