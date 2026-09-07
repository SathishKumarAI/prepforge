---
qid: ing_3de3f5b695__aws__local
question: How is data architecture implemented? — What Is a Data Architecture? | IBM
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 522
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:49-05:00'
sources: []
---

**Answer (Amazon Way)**  

During my last role at a fintech startup I was tasked with designing the end‑to‑end data architecture that would support real‑time fraud detection models.  
- **Situation:** The company had 3 TB of raw logs in on‑prem Hadoop, but models were training only on a 10 GB subset, leading to stale predictions and a 12 % lift in false positives.  
- **Task:** Build an end‑to‑end pipeline that ingests all telemetry, stores it cost‑effectively, and feeds fresh data into ML pipelines with <5 min latency.  
- **Action:** I leveraged the **Customer Obsession** principle by mapping every log to a customer‑centric view. Using **AWS Glue** for ETL, **Amazon Kinesis Data Streams** for real‑time ingestion, **Amazon S3 (Glacier + Intelligent Tiering)** for cold storage, and **Amazon Athena** for ad‑hoc analytics. For training I moved data into an **EMR cluster** on spot instances, then exported models to **SageMaker endpoints** behind a **Lambda edge cache** for low‑latency inference.  
  *Scalability:* Kinesis auto‑scales with throughput; EMR scales out by adding core nodes.  
  *Availability:* All services are in multi‑AZ deployments; S3 offers 99.999999999 % durability.  
  *Cost:* Spot instances cut EMR cost by 70 %; Glacier storage reduced $/GB to <$0.001.  
- **Result:** Training data volume increased from 10 GB to 2.5 TB (250×), prediction accuracy improved by 18 %, and inference latency dropped from 15 s to <500 ms, saving the company ~$1.2M annually in fraud losses.

**Bar‑raiser cues I hit:**  
- **Ownership & Bias for Action:** Took full responsibility and delivered within 4 weeks.  
- **Dive Deep:** Quantified every cost/latency metric; iterated on Glue schema until ETL errors <0.01 %.  
- **Learned from Failure:** Early trials with Redshift caused query timeouts; switched to Athena, improving query speed by 3× and reducing costs by 40 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
