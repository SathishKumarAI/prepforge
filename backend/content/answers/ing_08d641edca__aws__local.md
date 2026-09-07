---
qid: ing_08d641edca__aws__local
question: 'Explain: Human-in-the-Loop Without Killing Throughput'
topic: Data Science
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 421
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:45:59-05:00'
sources: []
---

**Situation & Task**  
At my previous company we built a recommendation engine that processed ~4 M user events per day. Our data‑science team discovered that a small subset of “high‑value” users required human review to avoid erroneous churn predictions, but the existing pipeline stalled when reviewers were offline, dropping 30 % of throughput.

**Action (Dive Deep + Ownership)**  
I redesigned the workflow as a *human‑in‑the‑loop (HITL) microservice* using **Amazon SageMaker Pipelines** for model inference and **Amazon EventBridge** to queue review tasks. Instead of blocking, I introduced a *retry window* and a *fallback rule* that automatically flags 95 % of cases as “low confidence” and forwards them to the next day’s batch run. Reviewers receive only the top‑10 % high‑confidence alerts via **Amazon Connect** (IVR) or a lightweight **AWS Amplify** web UI.

I added an **SQS FIFO queue** with visibility timeouts tuned to reviewer response times, ensuring that the main inference stream never stalls. For scalability I leveraged **Kinesis Data Streams** for real‑time ingestion and **Auto Scaling** on the Lambda functions handling review callbacks.

**Result (Deliver Results)**  
Throughput recovered to 99 % of peak; daily latency dropped from 45 s to 12 s, and reviewer satisfaction rose by 40 % (measured via NPS). Cost increased only 7 % due to additional EventBridge rules, but we avoided the $2.4M annual loss that would have resulted from missed churn signals.

**Learning & Bar‑raiser Insight**  
I took full ownership of the end‑to‑end flow, performed a root‑cause analysis (Dive Deep), and quantified impact with clear metrics—key traits a bar‑raiser looks for in an Amazon engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
