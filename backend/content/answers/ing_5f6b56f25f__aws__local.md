---
qid: ing_5f6b56f25f__aws__local
question: 'Explain: Case Study 06 - Document Intelligence Pipeline (Invoices & Contracts
  at Scale)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 597
total_tokens: 833
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:01:53-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a document‑intelligence pipeline that could ingest **200k+ invoices and 50k contracts per month**, classify them, extract key fields, and feed the data into our analytics layer—all while staying within a $2M annual budget.

**Task** – Deliver a scalable, highly available solution that reduced manual review time by >90% and improved extraction accuracy to ≥97%, meeting regulatory compliance for contract retention.

**Action**  
1. **Data ingestion & storage** – Used **Amazon S3 Glacier Deep Archive** for cold‑storage of PDFs (cost $0.004/GB/month) and **S3 Intelligent‑Tiering** for active data.  
2. **Document parsing** – Deployed **AWS Textract** in a *serverless* Lambda workflow, with custom OCR models trained via **Amazon SageMaker Ground Truth** to handle varied layouts.  
3. **Classification & NLP** – Built a lightweight transformer (DistilBERT) on SageMaker, deployed as an **Endpoint** behind **API Gateway**; latency <200 ms per document.  
4. **Metadata enrichment** – Employed **Amazon Comprehend Custom Entities** to tag contract clauses and extracted dates.  
5. **Observability & governance** – Integrated **AWS CloudWatch** metrics (throughput, error rates) with **AWS Step Functions** for retry logic; set up **AWS Lake Formation** catalog for secure query access via Athena.  

**Result** – The pipeline processed 250k documents in <30 minutes, cutting manual effort from 8 hrs/day to 45 min/day—an **87% reduction**. Accuracy rose from 85% to 97%, reducing downstream audit costs by $150K annually. Total operational cost was $1.6M, 20% under budget.

---

### Leadership Principles

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Customer Obsession** | Built a user‑friendly portal for finance teams to track extraction status and flag errors in real time. |
| **Ownership & Dive Deep** | Tracked every failure, performed root‑cause analysis, and iteratively improved OCR models—resulting in the 12% accuracy lift. |

### Bar‑raiser Expectations

* **Ownership:** Took full responsibility for SLA, cost, and compliance.  
* **Dive Deep:** Detailed model metrics, error rates, and cost breakdowns were shared with stakeholders.  
* **Quantified Impact:** Showed clear ROI (time saved + audit cost reduction).  
* **Learning from Failure:** After a spike in OCR errors due to new vendor PDFs, I quickly retrained the model and updated the pipeline—avoiding 3 days of downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
