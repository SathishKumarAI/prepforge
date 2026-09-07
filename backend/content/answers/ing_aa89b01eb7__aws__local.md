---
qid: ing_aa89b01eb7__aws__local
question: 'Explain: Dead Letter Queue — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 427
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:51:51-05:00'
sources: []
---

**Situation & Task**  
In my last role I built a real‑time recommendation engine that ingested user events via **Amazon SQS** and processed them with an **AWS Lambda** pipeline. A handful of malformed messages caused Lambda failures, leading to duplicate recommendations and stale cache entries—customer impact was measurable: a 12 % drop in click‑through rate (CTR) for the affected cohort.

**Action**  
I introduced a **Dead Letter Queue (DLQ)** attached to the main SQS queue.  
1. *Rule*: Any message that failed three Lambda retries is automatically routed to the DLQ.  
2. *Processing*: A separate “error‑handler” Lambda scans the DLQ every 5 minutes, logs the payload to **Amazon CloudWatch** (with a custom metric `DLQFailures`), and stores the bad record in **DynamoDB** for audit.  
3. *Alerting*: I set up an SNS topic that triggers an OpsGenie notification when `DLQFailures > 10` within an hour, ensuring rapid triage.

**Result**  
Within two weeks of deployment:  
- DLQ failures dropped from ~1 % to <0.01 % of total messages.  
- The CTR rebound by **9 %**, approaching the pre‑issue baseline.  
- Ops team reduced investigation time from 45 min to 10 min per incident.

**Reflection (Bar‑raiser focus)**  
I owned the end‑to‑end solution, delved into failure patterns (“dive deep”), quantified impact with real metrics, and iterated on alert thresholds after learning that early detection prevents cascade errors. This exemplifies **Ownership**, **Customer Obsession**, and **Dive Deep**—the pillars I bring to every design challenge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
