---
qid: ing_d4cf272a29__aws__local
question: 'Explain: Index and store documents and images automatically'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 503
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:21:05-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a project to auto‑index and store 10 M+ documents and images for a legal firm that needed instant search across PDFs, scanned contracts, and photos. The goal was to cut manual tagging time from **3 hrs → <5 min per document** while keeping cost under $0.02 per doc.

**Action – Architecture**  
1. **Ingestion**: S3 bucket with event notification → **Lambda (Python)** triggers a Step Function workflow.  
2. **Document Analysis**: Lambda calls **AWS Textract** for OCR + structured data extraction; for images it invokes **Rekognition** to detect labels and faces.  
3. **Indexing & Search**: Extracted key/value pairs are written into an **Amazon OpenSearch Service (formerly Elasticsearch)** domain, using the `document_id` as primary key.  
4. **Metadata Store**: A lightweight **DynamoDB** table holds document status, owner tags, and version history for auditability.  
5. **Cost & Scaling**: Serverless compute keeps idle cost near zero; OpenSearch autoscaling handles bursty queries (peak 200 QPS) with <99.9 % availability SLA.  

**Result**  
- Indexing latency dropped from **3 hrs → 4 min** per doc, a 95 % reduction.  
- Search hit‑rate increased to 98 %, reducing support tickets by **40 %**.  
- Total monthly spend was $1,200 vs projected $5,000 for a manual pipeline.

**Reflection (Bar‑raiser focus)**  
I took full ownership: defined SLAs, monitored with CloudWatch, and iterated on the Lambda retry logic after an initial 12 % failure rate on OCR. I dived deep into Textract’s confidence scores to filter out low‑quality scans, learning that a simple “confidence > 0.85” rule saved us 30 % of false positives. This experience reinforced *Customer Obsession* (fast, accurate search) and *Ownership* (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
