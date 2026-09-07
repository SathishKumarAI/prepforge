---
qid: ing_429d79311d__aws__local
question: 'Explain: Measuring Design System Adoption at Scale'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 469
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:56:35-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that rolled out a company‑wide Design System (DS) for our mobile and web products. The goal was to *measure adoption* at scale so we could justify the investment and iterate on components.

**Action – Technical/Architectural Design**  
1. **Instrumentation Layer** – added a lightweight JavaScript SDK to every component that emits an `adoption_event` to Amazon Kinesis Data Streams (data ingestion).  
2. **Processing Pipeline** – Lambda functions aggregate events per user, per product, and store deduped counts in DynamoDB (high write throughput, low latency).  
3. **Analytics Layer** – Athena queries on the raw Kinesis Firehose delivery stream feed into QuickSight dashboards.  
4. **Alerting & Feedback Loop** – CloudWatch Alarms trigger an SNS notification when adoption drops below 30 % for a feature flag; the dev team receives it via Slack.

**Result (Data‑Driven)**  
* Adoption increased from **12 % to 68 %** in the first 6 months.  
* Component reuse grew by **4×**, cutting design effort by **$350k/yr**.  
* The end‑to‑end pipeline cost <$2,000/month, with auto‑scaling Lambda keeping latency <200 ms.

**Leadership Principles Anchored**  
- **Customer Obsession** – built dashboards for product owners to see real user impact.  
- **Ownership** – owned the full data stack, from ingestion to visualization.  

**Bar‑raiser Takeaways**  
* Demonstrated ownership by delivering a complete end‑to‑end solution with minimal ops overhead.  
* Showed deep dive skills: chose Kinesis + Lambda for low latency, DynamoDB for high write volume, Athena for ad‑hoc analytics.  
* Quantified impact (68 % adoption, $350k saved).  
* Learned from early failures when event deduplication caused double counts; fixed by adding a unique request ID and idempotent Lambda logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
