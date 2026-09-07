---
qid: ing_c460893be4__aws__local
question: 'Explain: Pre-onsite screen — this may include a hiring manager screen,
  technical assessment or skill evaluation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 423
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:47:02-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
I was interviewing for a senior ML Engineer role at Amazon. The hiring manager wanted to validate my end‑to‑end pipeline skills before the onsite interview, so I had to design a “pre‑onsite screen” that would both showcase my technical depth and reflect real customer needs.

**Action (Ownership & Dive Deep)**  
1. **Requirement Clarification:** Asked the manager for the target use case – predicting next‑day sales for a seasonal product line with 10 M rows of historical data.  
2. **Design Proposal:** Built an end‑to‑end pipeline using:
   * **Amazon S3** (raw & processed data, 50 GB total)  
   * **AWS Glue** for ETL and schema cataloging  
   * **Amazon SageMaker** for training a LightGBM model (≈30 min on m5.xlarge instances)  
   * **SageMaker Hosting** with autoscaling to keep latency <200 ms  
   * **Amazon CloudWatch** + **X-Ray** for observability  
3. **Scalability & Cost:** Leveraged Spot Instances for training (+40% cost savings), used SageMaker’s “Inference Realtime” endpoint (cost ≈$0.10/1k requests). Designed a rollback strategy using blue‑green deployments in SageMaker.

4. **Result & Metrics (Deliver Results):** Presented the prototype; achieved 82 % accuracy on hold‑out data, reduced prediction latency by 70 % versus baseline. The manager approved the design and scheduled my onsite interview within 48 h.

**Learning from Failure**  
During a dry run I discovered that the Glue job failed on schema drift. I added automated schema validation with AWS Glue Schema Registry, preventing future regressions—an example of continuous improvement that bar‑raisers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
