---
qid: ing_287d1a7c8d__aws__local
question: 'Explain: With LangWatch results — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 474
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:57:04-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the launch of a new **AI‑evaluation platform** that needed to surface real‑time model performance for over 200 customers, each running multiple LLM pipelines. The goal was to replace manual scorecards with an automated, scalable solution while keeping latency under 500 ms.

**Action**  
I built a two‑tier architecture:  

1. **Data Ingestion** – API Gateway + Lambda streams evaluation metadata (prompt, response, confidence) into Kinesis Data Streams.  
2. **Real‑time Analytics** – Kinesis Firehose pushes to S3; Athena queries the raw data; a scheduled Glue job aggregates metrics and writes JSON snapshots to DynamoDB for quick lookups.  

For visualization I used **LangWatch** (to surface latency & error rates) and **Langfuse** (to capture trace‑level logs). Both services were integrated via Lambda event bridges that write evaluation events into their respective queues, ensuring *eventual consistency* across dashboards.

I also added a **step function** that triggers an SNS alert if any model’s F1‑score drops below 0.82 for more than three consecutive runs—this satisfies the “Bias for Action” principle by automating remediation.

**Result**  
- Reduced evaluation turnaround from 5 minutes to <30 seconds (92% faster).  
- Increased customer satisfaction scores by 18 points (NPS +12).  
- Cut operational costs by $25k/month through serverless scaling and spot‑instance usage for Glue jobs.  

**Reflection**  
Ownership: I owned the end‑to‑end pipeline, from ingestion to alerting. Dive Deep: I profiled Lambda cold starts and tuned provisioned concurrency. Learned that early integration with LangWatch/​Langfuse reduces debugging time—future iterations will add predictive anomaly detection.

*Leadership Principles:* **Customer Obsession** (fast, reliable insights), **Ownership**, **Dive Deep**, **Bias for Action**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
