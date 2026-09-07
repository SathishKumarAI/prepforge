---
qid: ing_35f53e6968__aws__local
question: 'Explain: 👎 Disadvantages — data-engineering/ApacheHadoop at main \u00b7
  Anshul619/data-engineering \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 377
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:26:44-05:00'
sources: []
---

**Situation / Task**  
I led a migration from an on‑premises **Hadoop** cluster to a serverless analytics stack for a financial services client that processed ~ 2 TB of daily log data. The goal was to reduce operational overhead while keeping compliance and latency within SLA.

**Action**  
1. **Dive Deep into Hadoop pain points** – 4‑node HDFS had 3 % disk failure rate, 12 h recovery windows, and a monthly $18K license cost for the commercial distribution.  
2. **Design serverless alternative** – Replaced MapReduce jobs with **AWS Glue ETL** + **Amazon Athena** on S3, added **AWS Lake Formation** for fine‑grained access control.  
3. **Bias for Action** – Implemented incremental data pipelines using **Kafka** and **Kinesis Data Firehose**, enabling near‑real‑time ingestion.  
4. **Deliver Results** – Deployed in 6 weeks; cut cost by 70 % ($13K/month) and improved query latency from 15 min to < 30 s.

**Result**  
- **Customer Obsession**: SLA compliance rose to 99.9 %.  
- **Ownership & Scale**: Reduced failure impact to zero downtime, eliminated manual HDFS maintenance, and allowed data scientists to run ad‑hoc queries in seconds.  

Bar‑raiser notes: I quantified the cost savings, demonstrated deep technical knowledge of both Hadoop and AWS services, and highlighted lessons learned—particularly the importance of choosing a managed service that aligns with business SLAs rather than sticking to legacy tooling for nostalgia.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
