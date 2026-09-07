---
qid: ing_5f7b1a46db__aws__local
question: What is Data Consistency in Distributed System?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 472
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:02:00-05:00'
sources: []
---

**Answer – “What is data consistency in a distributed system?”**

> *In a distributed environment, data consistency means every node sees the same value for a given key at any point in time—no stale reads or conflicting writes.*  

**Behavioral (STAR)**  
*Situation*: At my last role I built a real‑time inventory service for an e‑commerce platform.  
*Task*: Ensure that stock counts were accurate across 12 AZs while handling > 10k write ops/sec.  
*Action*: Adopted **AWS DynamoDB with Strongly Consistent Reads** and implemented **optimistic locking** via conditional writes (`Expected` attribute). Added a Lambda audit trail to detect out‑of‑sync events.  
*Result*: Reduced “out‑of‑stock” errors from 3.7 % to < 0.1 % (≈ 95 % improvement), cutting refund costs by $120K/month and boosting CSAT by 12 points.

**Technical / System Design**  
| Requirement | AWS Service | Rationale |
|-------------|-------------|-----------|
| Low latency reads | DynamoDB (global tables) | Provides < 10 ms read, auto‑replicated across regions |
| Atomic updates | Conditional writes + DynamoDB Streams | Guarantees no lost updates; streams feed a Kinesis buffer for analytics |
| Cost & scalability | On-demand capacity + Auto Scaling | Handles peak 50k ops/sec without overprovisioning |
| Trade‑off | Strong consistency → higher latency vs. eventual | Chose strong to meet business SLA of < 1 % inventory drift |

**Bar‑raiser cues**  
- **Ownership**: I chose DynamoDB after profiling latency and cost, owning the trade‑offs.  
- **Dive Deep**: Implemented conditional writes and monitored CloudWatch metrics for consistency gaps.  
- **Quantified Impact**: Showed concrete drop in errors and cost savings.  
- **Learning from Failure**: After an initial eventual‑consistency trial that caused 2 % stock errors, I pivoted to strong reads—documenting the lesson for future teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
