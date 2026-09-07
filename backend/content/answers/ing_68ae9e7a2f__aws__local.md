---
qid: ing_68ae9e7a2f__aws__local
question: 'Explain: Key Takeaways for Interviews — Document Intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 443
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:20:57-05:00'
sources: []
---

**Key Takeaways – Interviewing on Document Intelligence**

> *“Customer Obsession + Invent & Simplify”*  

During a recent project I led an end‑to‑end document‑intelligence pipeline for a banking client that needed to extract structured data from 200k loan applications per month.  
**Situation:** Legacy OCR was 70 % error‑rate and processing time > 2 min per doc, causing SLA breaches.  
**Task:** Build a scalable, cost‑effective system with < 1 % error and < 30 s latency.  
**Action:**  
1. **AWS Services** – S3 for raw PDFs, Textract (Document Text + Forms) for OCR, Comprehend Custom Labels for entity extraction, Lambda for orchestration, Step Functions to manage retries, DynamoDB for metadata, Athena for ad‑hoc analytics.  
2. **Design Choices** – Parallelize with SQS queues; use “Batch” API in Textract for 25 docs/req to reduce per‑doc cost ($0.0001 vs $0.001).  
3. **Quality Loop** – Built a feedback loop: mis‑parsed docs auto‑sent to human review, results stored back to DynamoDB and used to retrain Comprehend models (continuous improvement).  
4. **Cost & Availability** – Leveraged Spot Instances for Lambda concurrency; used Multi‑AZ S3 with cross‑region replication to meet 99.999% uptime SLA.  

**Result:** Reduced error rate from 70 % → 0.8 %, latency from 120 s → 22 s, and cut processing cost by **45 %** ($150k/yr). Learned that *ownership* means iterating on data quality just as much as architecture.

> **Bar‑raiser cues:** ownership of metrics, deep dive into service trade‑offs, quantifiable impact, and transparent learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
