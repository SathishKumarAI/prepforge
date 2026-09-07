---
qid: ing_ce173bfb08__aws__local
question: 'Explain: Understanding Consensus and Paxos in Distributed Systems'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 426
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:07:08-05:00'
sources: []
---

**Situation / Task**  
At my previous firm I led the redesign of a global e‑commerce order‑processing service that required **strong consistency** across 12 regions. The existing leader election was flaky; we lost up to 5 % of orders during failovers, hurting our *Customer Obsession* score.

**Action**  
I introduced a **Paxos‑based consensus layer** on top of Amazon DynamoDB Streams and AWS Lambda.  
1. **Leader Election** – Each region ran a lightweight Paxos proposer that sent proposals via SQS FIFO queues to the other regions.  
2. **Commit & Replication** – Once a majority accepted, the leader wrote the decision to a global DynamoDB table (partition key = order‑id). Lambda triggers replicated the commit to all replicas.  
3. **Failure Handling** – If a region dropped below quorum, the proposer automatically stepped down; another node elected itself, ensuring *Ownership* of the fault.

**Result**  
- 99.999% availability during regional outages (down from 95%).  
- Order‑processing latency dropped by 37 ms on average (from 112 ms to 75 ms).  
- Incident response time reduced from 8 h to under 30 min, improving *Customer Obsession* KPI by 12 points.

**Reflection**  
The key learning was that Paxos’ “weakest‑link” nature demands careful trade‑offs: we chose SQS FIFO for reliable ordering (cost ~$0.003 per 1k messages) over cheaper SNS to keep latency low. Future iterations will explore *Kinesis* for higher throughput and evaluate *AWS AppConfig* for dynamic quorum changes, staying true to Amazon’s **Bias for Action** and **Invent & Simplify** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
