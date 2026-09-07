---
qid: ing_2b9784110c__aws__local
question: 'Explain: Run on each trace and log scores — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 458
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:03:32-05:00'
sources: []
---

**Situation / Task**  
In my last role I led the rollout of an AI‑evaluation pipeline for a generative‑model platform that served ~120 k daily users. The goal was to capture every request trace, score it with our custom evaluation suite (LangWatch + Langfuse), and surface actionable metrics in real time.

**Action**  
I architected a serverless stack:  
* **API Gateway → Lambda** – receives the model output and forwards the raw payload to an SQS queue.  
* **SQS → Step Functions** orchestrates a two‑step workflow: (1) *LangWatch* scoring, (2) *Langfuse* logging. Each step runs in its own Lambda to keep execution time < 5 s.  
* Results are written to **DynamoDB** for low‑latency queries and archived in **S3** (gzip + Parquet).  
* **CloudWatch Alarms** trigger on score thresholds; a CloudWatch Dashboard visualizes per‑model, per‑endpoint KPI’s.  
I added automated retries, dead‑letter queues, and a rollback path that restores the last good model checkpoint if average scores drop below 0.85.

**Result**  
Within two weeks we saw a **30 % reduction in manual QA cycles** (from 12h to 3.5h per batch). The system processed ~2 M traces/day with < 200 ms latency, keeping the overall cost under $1.2k/month—down 18 % from the previous on‑prem solution.  

**Reflection**  
I took full ownership of the end‑to‑end pipeline (Ownership), delved into Lambda timeout logs to fine‑tune memory allocation (Dive Deep), and iterated quickly after a false‑positive spike by adding a secondary filter (Bias for Action). The experience reinforced that scalable observability is as critical as model accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
