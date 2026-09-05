---
qid: ing_3cde41f0e6__star__local
question: 'Explain: 2.2 Bandwidth Estimates — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 373
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:29:49-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with scaling a real‑time ad serving platform that was hitting 80 % CPU on the edge servers during peak hours. The traffic pattern was bursty—ads were requested in microseconds, and our current round‑robin balancer caused some nodes to overload while others sat idle.

**Task:**  
Design a load balancing solution that distributes incoming requests based on real‑time bandwidth estimates so each server stays below 70 % utilization, keeping latency under 10 ms and avoiding packet loss.

**Action:**  
I built a lightweight telemetry agent on each node that reported current outbound throughput (Mbps) and queue depth to a central Redis cache every 200 ms. The balancer was rewritten in Go using the `net/http` package; it queried Redis, computed a weighted score = 1 / (current_bandwidth + ε), and used consistent hashing with dynamic weights. I also added a back‑pressure signal: if any node exceeded 75 % capacity, its weight dropped to zero until recovery. For fault tolerance, the agent ran as a sidecar container in Kubernetes so it could survive pod restarts.

**Result:**  
After deployment, peak CPU fell from 80 % to 55 %, average latency dropped by 35 % (from 15 ms to 9 ms), and packet loss under load went from 4 % to <0.1 %. I learned that lightweight, near‑real‑time bandwidth metrics can replace static round‑robin and that coupling the balancer with consistent hashing reduces churn during scaling events.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
