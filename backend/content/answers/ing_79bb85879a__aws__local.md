---
qid: ing_79bb85879a__aws__local
question: 'Explain: How to prepare — Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 385
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:00:14-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* A client wanted a production‑grade NLP model that could classify support tickets in real time.  
*Task:* Lead the end‑to‑end pipeline from data ingestion to deployment, ensuring < 50 ms latency and 99.9 % uptime.  
*Action:*  
- **Data‑driven prep:** Scraped 2M labeled tickets → built a balanced TF‑IDF + BERT fine‑tuning set.  
- **Architecture:** Used **Amazon SageMaker** for training (spot instances, multi‑GPU), **AWS Glue** for ETL, and **Amazon Kinesis Data Streams** to ingest live tickets.  
- **Serving:** Deployed the model as a **SageMaker Endpoint** behind an **Elastic Load Balancer**, auto‑scaling on CloudWatch metrics. Added **Lambda@Edge** caching to shave 30 ms per request.  
- **Observability:** Integrated **Amazon CloudWatch Metrics & Logs** + **X-Ray** for latency tracing; set up alerts (95th percentile > 70 ms).  
*Result:* Reduced average response time from 200 ms to **38 ms**, improved SLA compliance by **12%**, and cut inference cost by **$1,200/month** through spot usage.  

**Bar‑raiser notes:**  
- Demonstrated true ownership (from data prep to ops).  
- Dive deep into latency trade‑offs (cache vs compute).  
- Quantified impact with clear metrics.  
- Learned from a failed first deployment—shifted to blue/green SageMaker rollout, preventing downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
