---
qid: ing_b9021d8bf2__aws__local
question: 'Explain: Summary — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 455
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:22:18-05:00'
sources: []
---

**Situation (S)**  
At my last role I led the redesign of a global content‑delivery platform that stored user profiles in a sharded key‑value store. When we hit 50 M users, hot keys caused node overload and latency spikes.

**Task (T)**  
Implement a scalable, fault‑tolerant partitioning scheme that guarantees even distribution while minimizing data movement during scale‑ups.

**Action (A)**  
I chose **Consistent Hashing** with virtual nodes.  
* **Design:** Each physical server owns 100 virtual tokens on the hash ring; keys are mapped to the first token clockwise.  
* **AWS services:**  
  * **Amazon DynamoDB** for the backend store (provides built‑in consistent hashing via partition keys).  
  * **Elastic Load Balancer + Auto Scaling Groups** to manage node count dynamically.  
  * **AWS Lambda** orchestrates rebalancing when nodes join/leave, moving only ~1 % of keys.  
* **Scalability:** Adding a node adds 100 tokens, instantly redistributing ~1 % of traffic; removing a node triggers minimal data movement.  
* **Availability & Cost:** DynamoDB’s multi‑AZ replication ensures 99.999% uptime; the virtual‑node approach keeps S3/EC2 costs low (≈$0.02 per 1k tokens).  
* **Trade‑offs:** Slightly higher lookup latency (~5 µs) for token resolution, acceptable for our read‑heavy workload.

**Result (R)**  
Post‑deployment, we reduced hot‑spot CPU usage by **68%**, cut request latency from 350 ms to 120 ms, and eliminated the need for manual rebalancing—freeing ops time.  

*Bar‑raiser focus:* I owned the problem end‑to‑end, dived deep into token distribution analytics, quantified performance gains, and learned that a small number of virtual nodes yields large stability benefits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
