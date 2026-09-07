---
qid: ing_5efcab03ef__aws__local
question: 'Explain: Step 5: Count and Prioritize — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 404
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:00:37-05:00'
sources: []
---

**Step 5: Count and Prioritize – AI Evals Complete Guide (Langwatch/Langfuse)**  
*Leadership Principles:* **Customer Obsession** & **Dive Deep**

> **Situation:** In a global product launch, the ML team needed to surface the most critical evaluation metrics from thousands of Langwatch/Langfuse runs.  
> **Task:** Build an automated pipeline that counts metric occurrences and ranks them by business impact.  
> **Action:**  
> 1. **Ingest** raw eval logs into **Amazon S3** (object storage).  
> 2. Use **AWS Glue** to parse JSON, extract key fields (`metric_name`, `score`, `timestamp`), and load a **Redshift Spectrum** view for fast querying.  
> 3. Run a scheduled **Athena** job that aggregates counts per metric, joins with a *weight matrix* (customer‑impact scores stored in DynamoDB), and produces a ranked list.  
> 4. Push the result to an **Amazon QuickSight** dashboard; set alerts on top‑5 metrics via **SNS**.  
> 5. Automate regression checks: if a metric drops below its threshold, trigger a Lambda function that flags the model version in **SageMaker Model Registry** for rollback.  

> **Result:** Reduced manual triage from 3 hrs/day to <10 min; identified 12 high‑impact issues before production, cutting downstream support tickets by **37 %** and saving ~$45k/month in ops costs.  
> **Learnings:** Validated that storing weights centrally (DynamoDB) enables rapid re‑prioritization without code changes—demonstrating true ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
