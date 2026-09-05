---
qid: ing_4287922b72__fp__local
question: 'Explain: The types of disaster recovery you’ll need will depend on your
  IT infrastructure, the type of backup and recovery you use, and the assets you need
  to protect.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 380
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:26:13-05:00'
sources: []
---

In any system the *goal* of disaster recovery (DR) is to minimise the expected loss \(L\) caused by an outage while respecting resource constraints.  
Let  

\[
L = \sum_{i} p_i\,C_i
\]

where \(p_i\) is the probability that asset \(i\) becomes unavailable and \(C_i\) its cost (downtime, data loss, reputational hit).  

The **IT infrastructure** dictates how quickly an asset can be restored: a highly virtualised cloud platform can spin up replicas in minutes, whereas legacy on‑prem hardware may take hours. This determines the feasible *Recovery Time Objective* (RTO).  

The **backup/recovery method** sets the granularity of data that can be retrieved. Full snapshots give perfect fidelity but are costly; incremental or continuous data protection offers near‑zero recovery point loss at lower overhead, influencing the *Recovery Point Objective* (RPO).  

Finally, the **assets to protect**—critical databases, user‑facing services, compliance‑required logs—define the weight \(C_i\) in the loss function. Protecting a non‑critical log with 24 h RTO may be wasteful if its cost is negligible compared to a payment gateway that must stay online.

Thus, DR design is an optimisation problem: choose RTO/RPO pairs for each asset that minimise \(L\) under budget and infrastructure constraints.  
**Non‑obvious insight:** Often the bottleneck is *data availability*, not compute power. Investing in faster network links or more efficient compression can reduce RPO without adding new servers, yielding a higher return on DR spend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
