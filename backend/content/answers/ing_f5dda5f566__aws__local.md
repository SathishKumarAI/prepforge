---
qid: ing_f5dda5f566__aws__local
question: 'Explain: Orchestration Strategies — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 427
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:46-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was tasked with migrating a legacy batch‑processing pipeline (≈ 5 TB/day) to a fully event‑driven architecture on AWS so that we could reduce lag from 48 h to < 10 min and enable real‑time analytics.  

**Action**  
I chose an **Orchestration Pattern** built around **AWS Step Functions + EventBridge** (customer‑obsession, ownership). The state machine defined three core sub‑flows:  
1. *Ingest* – Lambda triggers on S3 upload → transforms data via Glue ETL and writes to DynamoDB Streams.  
2. *Process* – Parallel Batch Jobs in Fargate Spot clusters, each tagged with a unique job ID; they poll the stream, compute AI inference using SageMaker endpoints, and write results back to Redshift.  
3. *Publish* – EventBridge rules route success/failure events to SNS topics for monitoring and to an API Gateway endpoint that feeds downstream dashboards.  

**Result**  
The new pipeline cut data latency from 48 h to **8 min** (× 720x faster). With Spot pricing we reduced compute spend by **38%**, while Step Functions’ retry logic lowered failure rates to < 0.1%. Monitoring showed a 99.95% SLA across all stages, and the modular design allows us to swap AI models with zero downtime.  

**Reflection**  
I learned that *dive deep* into each service’s cost model (e.g., Fargate vs EC2 Spot) is essential; overlooking Lambda cold‑start latencies would have hidden a 15 % performance hit. The architecture now serves 10 k concurrent users and can scale to 100 k with minor parameter tuning—proof that **bias for action** + **invent & simplify** deliver measurable business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
