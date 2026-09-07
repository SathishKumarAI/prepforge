---
qid: ing_205b327920__aws__local
question: 'Explain: On-call playbook — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 480
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:40:25-05:00'
sources: []
---

**Customer Obsession + Ownership**

> **Situation:** Our AI‑driven recommendation engine was hit by a sudden spike in traffic during a holiday sale. The “Customer Distillation Pipeline” (CDP) – which cleans raw clickstreams into feature vectors for the model – began to lag, causing 15 % of requests to time‑out.

> **Task:** I had to design an on‑call playbook that would keep the CDP running smoothly under load and alert the team before customers felt latency.

> **Action:**  
> * **Instrumentation & Alerting** – Added CloudWatch metrics for queue depth, batch duration, and error rate. Set thresholds (e.g., 90 % of batches > 2 s) to trigger an SNS notification to the on‑call engineer.  
> * **Auto‑Scaling & Failover** – Deployed the CDP as a Lambda function behind API Gateway, backed by an SQS FIFO queue. Enabled Reserved Concurrency and set up an Application Load Balancer (ALB) with weighted routing to a secondary “cold” cluster for burst traffic.  
> * **Recovery Steps** – Scripted automatic SQS DLQ inspection, batch replay via Step Functions, and temporary throttling of downstream model calls.  
> * **Post‑mortem & Continuous Improvement** – Captured latency histograms in DynamoDB; used Athena queries to correlate spikes with feature‑store schema changes.

> **Result:** Within 30 min of the first alert, on‑call engineers restored throughput, bringing request latency back below 200 ms. Over the next month, we reduced CDP failure incidents by **72 %** and cut cost by 18 % through optimized Lambda concurrency and SQS batching.

> **Learnings:** The playbook taught me to anticipate edge cases (e.g., sudden traffic bursts) and to keep metrics granular enough for root‑cause analysis. It also highlighted the importance of a clear escalation path—ensuring that *every* on‑call engineer knows exactly what to do, when to call it in, and how to measure success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
