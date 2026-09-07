---
qid: ing_d912769d02__aws__local
question: 'Explain: Approach 2: Global Counter (Non-Deterministic)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 528
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:29:59-05:00'
sources: []
---

**Situation & Task**  
I was leading a team that needed to aggregate feature counts across a streaming dataset for an online recommendation model. The data arrived in bursts (≈10 M records/day) and we required real‑time updates with minimal latency.

**Approach**  
We chose the *Global Counter* pattern—maintaining a single, non‑deterministic counter per key in DynamoDB. Every record triggers a Lambda that atomically increments the counter using `ADD`. Because the counter is not strictly ordered, we accept eventual consistency and tolerate occasional double counts, which our downstream model can absorb.

**Result**  
- **Latency:** < 30 ms per event (Lambda + DynamoDB write).  
- **Throughput:** Sustained 50 k writes/sec with 99.9 % success rate.  
- **Cost:** $0.25/mo for the provisioned throughput tier, 70 % cheaper than a sharded approach that required 10 Dynamo tables and a Kinesis aggregation layer.

**Technical Details & Trade‑offs**  
| Concern | Decision | Rationale |
|---------|----------|-----------|
| **Scalability** | Single table with on‑demand mode | Avoids provisioning headaches; Dynamo scales horizontally. |
| **Availability** | Multi‑AZ, automatic replication | 99.999 % uptime, no manual failover needed. |
| **Cost** | Use `ADD` atomic operation + reserved capacity | Lower write cost vs. full record storage. |
| **Accuracy** | Accept eventual consistency | Model tolerates ±1% noise; reduces complexity. |

**Reflection & Learning**  
We initially underestimated the impact of double counts, which caused a 3 % bias in feature importance. After adding a lightweight de‑duplication layer (hashing record IDs into an SQS queue), we reduced bias to < 0.2 %. This reinforced *Bias for Action*—quickly iterating on design—and *Dive Deep*, as we quantified the error propagation.

**Leadership Principles Highlighted**  
- **Ownership:** Took full responsibility for counter reliability and cost control.  
- **Dive Deep & Deliver Results:** Measured, analyzed, and corrected the bias while keeping latency low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
