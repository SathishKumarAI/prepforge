---
qid: ing_006ca7b30b__aws__local
question: 'Explain: 2.2 Availability — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 426
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:25:29-05:00'
sources: []
---

**Situation (S)** – I was tasked to redesign our recommendation engine’s inference layer so it could stay online 99.9 % of the time while handling a sudden 4× traffic spike during a holiday sale.

**Task (T)** – Apply the CAP theorem to pick an architecture that balances **Consistency, Availability, and Partition tolerance** for low‑latency predictions at scale.

**Action (A)** –  
1. *Choice of consistency*: We opted for **Eventual Consistency** on model metadata because read latency trumps strict ordering; a slightly stale model is acceptable.  
2. *Availability*: Deployed the inference service behind an **AWS Elastic Load Balancer** feeding multiple **Amazon ECS Fargate** tasks in a **Cluster Autoscaler** policy, ensuring zero single‑point failure.  
3. *Partition tolerance*: All data (feature store, model artifacts) live in **Amazon DynamoDB Global Tables** with multi‑region replication; this guarantees service continuity even if an AZ fails.  
4. *Fallback*: Added a lightweight **Lambda@Edge** cache that serves the last known good predictions when the primary cluster is unreachable.

**Result (R)** – Post‑deployment, we achieved 99.95 % uptime during the sale, reduced average inference latency from 350 ms to 120 ms, and cut operational cost by 18 % versus a monolithic EC2 approach.  

---

### Leadership Principles  
- **Ownership**: I drove the end‑to‑end redesign, owning both design decisions and monitoring.  
- **Dive Deep**: Conducted A/B tests on consistency levels, measured latency distributions, and tuned DynamoDB read capacity units.

**Bar‑raiser cues** – clear ownership, quantified impact (uptime %, cost savings), deep technical justification of CAP trade‑offs, and evidence of learning from earlier monolith failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
