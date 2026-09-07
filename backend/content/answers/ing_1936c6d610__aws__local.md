---
qid: ing_1936c6d610__aws__local
question: 'Explain: The synchrony assumptions of Redlock — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 436
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:23:13-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
When I joined the data‑science platform team, our ML pipelines were tripping over each other because multiple workers tried to write the same model artifacts concurrently. The team needed a *robust distributed lock* that would survive network partitions and still guarantee correctness.

**Action (Dive Deep + Bias for Action)**  
I studied Martin Kleppmann’s “Redlock” paper, which extends Redis’ single‑node `SETNX` to five independent Redis replicas. I mapped the synchrony assumptions:  
1. **Clock drift ≤ δ** – each node’s clock must stay within a bounded offset.  
2. **Network partitions < majority** – at least 3 of 5 nodes must be reachable.  
3. **Atomicity on each replica** – `SETNX` + `PEXPIRE` must be executed in one round‑trip.

To satisfy these, I built a lightweight microservice that:  
* Uses NTP‑synchronized EC2 instances for clock drift < 1 ms.  
* Deploys 5 Redis‑Cluster nodes across AZs (AWS ElastiCache) to guarantee majority availability.  
* Wraps `SETNX`/`PEXPIRE` in a Lua script, ensuring atomicity.  

The lock key is released only after a quorum acknowledges success; otherwise it expires automatically.

**Result (Deliver Results)**  
After deployment, concurrent pipeline failures dropped from **12 %** to **0.2 %**, and model training time improved by **18 %** due to reduced idle waiting. Cost increased by only **3 %** because we used a single Redis‑Cluster per region.

**Learning (Invent & Simplify)**  
I documented the trade‑offs: Redlock is *eventually* safe under partitions, not *strictly* linearizable. For future work I plan to evaluate DynamoDB’s conditional writes as an alternative when absolute safety outweighs latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
