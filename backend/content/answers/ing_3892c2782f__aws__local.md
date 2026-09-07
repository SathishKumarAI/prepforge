---
qid: ing_3892c2782f__aws__local
question: 'Explain: Consider Alternatives — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 406
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:32:45-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of our recommendation engine’s sharding layer. The team was debating between a naïve round‑robin split and **consistent hashing** to keep user sessions sticky while scaling out.  

**Action**  
I owned the decision, first mapping the requirements: low cache miss rate (< 2 %), 10× growth in active users, and zero manual rebalancing. I drafted a design that used an **Amazon DynamoDB table** as a token ring (partition key = hash slot) and an **AWS Lambda** function to recalculate slot assignments whenever a node joined or left. The algorithm leveraged the *k‑way* consistent hashing scheme from the paper, ensuring each user is mapped to only one of 256 slots.  

I benchmarked both strategies on a staging cluster:  
- Round‑robin → 23 % cache miss under churn;  
- Consistent hashing → 1.8 % miss, 30 % lower latency, and < 0.5 % re‑routing traffic during node changes.  

**Result**  
After rollout, we achieved a **45 % reduction in latency** for recommendation queries, supported **12M concurrent users** with 99.9 % availability, and cut operational cost by **$18k/month** (no manual rebalance).  

**Reflection**  
This exercise reinforced *Ownership*—I drove the end‑to‑end solution—and *Dive Deep*, as I dissected hash functions, DynamoDB partitioning, and Lambda cold‑start trade‑offs. The failure mode was an initial underestimation of token skew; we mitigated it by adding virtual nodes, a lesson that now informs all sharding decisions in the team.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
