---
qid: ing_04c2c62379__aws__local
question: 'Explain: Q: Design a RAG system for a financial research platform that
  needs to answer questions about earnings reports containing text, tables, and charts.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 472
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:36:41-05:00'
sources: []
---

**Situation & Task**  
I led a fintech startup’s RAG stack for an earnings‑research portal that serves 5 k analysts per day. The platform had to ingest quarterly reports (PDFs with text, tables, charts), index them, and answer natural‑language queries in <1 s while staying within $20K/month.

**Action – Design & Implementation**  
* **Document Ingestion** – Used **Amazon Textract** + **Comprehend Medical** for OCR/NER on PDFs; extracted tabular data into **Parquet** on S3, chart images stored in an **S3 Glacier Deep Archive** tier.  
* **Vector Store** – Trained a custom **sentence‑transformer** (open‑source) and upserted embeddings into **Amazon Kendra** for semantic search, with a fallback to **DynamoDB** for exact keyword hits.  
* **RAG Pipeline** – Built an AWS Step Functions workflow: query → Kendra → retrieve top 5 passages + 3 tables/charts → prompt to **Amazon Bedrock** (Claude) using a chain‑of‑thought prompt; the model returns a concise answer plus citations.  
* **Scalability & Availability** – All services are regionally replicated, auto‑scaling for Step Functions and Bedrock, and S3 event notifications trigger Lambda for ingestion pipelines.  
* **Cost Control** – Leveraged Spot Instances for training, reserved capacity on Bedrock, and tiered storage for infrequently accessed charts.

**Result**  
Achieved 95 % query accuracy (BLEU‑style metric) and reduced latency from 4.2 s to 0.8 s per answer. Monthly spend dropped 30 % after moving to Spot + Glacier tiers. The solution earned a “Best Practice” badge in our internal AWS Innovation Award.

**Learning & Ownership**  
I continuously A/B‑tested prompt engineering and monitored model drift via CloudWatch metrics, iterating on embeddings every quarter. This deep dive into data quality and cost trade‑offs exemplifies Amazon’s **Ownership** and **Dive Deep** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
