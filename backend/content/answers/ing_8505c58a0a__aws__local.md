---
qid: ing_8505c58a0a__aws__local
question: 'Explain: ago we''re familiar from doing that from — The Many Meanings of
  Event-Driven Architecture \u2022 Martin Fowler \u2022 GOTO 2017'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 455
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:25:44-05:00'
sources: []
---

**Situation / Task**  
In my last role I was tasked with modernising a legacy batch‑processing pipeline that produced nightly reports for our sales team. The business demanded near‑real‑time insights and tighter SLAs, so I had to pivot from monolithic cron jobs to an event‑driven solution.

**Action**  
I designed a **pub/sub** architecture using **Amazon EventBridge** as the central bus, with microservices (Python Lambdas) subscribing to domain events (`OrderPlaced`, `PaymentCompleted`). Each Lambda processed its slice of data and pushed results into **DynamoDB** for low‑latency reads. For heavy transformations I added an **SQS** queue feeding a managed **AWS Glue** job. To guard against failures I implemented dead‑letter queues and CloudWatch alarms, and used **Step Functions** to orchestrate multi‑service workflows when necessary.

Key decisions:  
- **Scalability:** EventBridge handles millions of events per second; Lambdas auto‑scale without provisioning.  
- **Availability:** All services are regionally redundant; no single point of failure.  
- **Cost:** Pay only for events and compute time—$0.20 / million events, $0.00001667 / ms Lambda.  

**Result**  
Latency dropped from 8 hours to under 5 minutes (95% of reports in <30 s). The new pipeline reduced operational overhead by 60%, freeing the ops team to focus on feature work. Quarterly revenue grew 12% as sales used real‑time data to upsell.

**Leadership Principles Reflected**  
- **Customer Obsession:** Delivered instant insights that directly increased revenue.  
- **Dive Deep & Ownership:** I led end‑to‑end design, debugging, and cost optimisation, learning from a failed Lambda retry loop that taught me to fine‑tune DLQ retention.

Bar‑raisers listen for ownership, deep technical justification, quantified impact, and evidence of learning—exactly what this story demonstrates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
