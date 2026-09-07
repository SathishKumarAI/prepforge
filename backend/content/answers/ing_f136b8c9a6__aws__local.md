---
qid: ing_f136b8c9a6__aws__local
question: 'Explain: Real-time Access — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 392
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:22:36-05:00'
sources: []
---

**Situation / Task (S)**  
At my previous role I led a fraud‑detection pipeline that needed sub‑second lookups on millions of transaction records. The team was using Hive for batch scoring, but the latency was > 5 s, breaking our SLA of 1 s per request.

**Action (A)**  
I introduced **Apache HBase** as a real‑time key/value store backed by **Amazon EMR** and **AWS Kinesis Data Streams**.  
* **Data flow:** New transactions were pushed to Kinesis → EMR Spark job writes to HBase in real time.  
* **Schema design:** RowKey = `userID|timestamp`; columns store fraud risk score, feature vector hash, and metadata.  
* **Read path:** API Gateway + Lambda queries HBase via the Java client; results returned within 800 ms.  

**Result (R)**  
- Latency dropped from 5 s to **0.8 s** (6× faster).  
- Throughput increased to **10k TPS** with < 2 % error rate.  
- Cost savings of ~30 % versus an RDS‑based solution due to HBase’s efficient storage and scaling on EMR clusters.

**Learning & Ownership**  
I documented failure modes (e.g., region split lag) and built automated alerts, ensuring resilience—demonstrating **Ownership** and **Dive Deep**.  

> *Key AWS services:* EMR, Kinesis, Lambda, API Gateway, HBase (via EMR).  
> *Trade‑offs:* Higher operational complexity vs. lower latency; mitigated with automation scripts and CloudWatch metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
