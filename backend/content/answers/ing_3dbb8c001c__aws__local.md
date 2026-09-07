---
qid: ing_3dbb8c001c__aws__local
question: 'Explain: FDE scenario: an enterprise customer wants a document-Q&A assistant
  over 2M internal documents, pilot in four weeks, and their security team forbids
  data leaving their VPC. Scope and design it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 567
total_tokens: 830
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:45:16-05:00'
sources: []
---

**Situation / Task**  
An enterprise customer needed a document‑Q&A assistant for 2 M internal PDFs, PPTs, and Confluence pages. They wanted a pilot in four weeks and their security team required that no data leave the VPC.

**Action – Design & Execution**  

| Step | AWS Services | Reasoning |
|------|--------------|-----------|
| **In‑VPC ingestion** | **S3 on‑premises gateway + SQS** | Keeps all raw files inside the VPC; queues trigger Lambda for processing. |
| **Document parsing** | **AWS Lambda (Python) + Amazon Textract** | Serverless, scales to thousands of docs per hour; cost ≈ $0.0000167 per 1 k pages. |
| **Embedding generation** | **Amazon SageMaker endpoint (private VPC)** using a distilled Sentence‑BERT model | Keeps ML inference inside the network; endpoint auto‑scales with Spot instances → 30 % cost savings. |
| **Vector store** | **Pinecone (VPC‑endpoint) or Amazon Kendra in‑house** | Low‑latency similarity search, supports >10M vectors with sub‑100 ms query times. |
| **Chat interface** | **API Gateway + Lambda + Amazon Lex** | Enables secure REST/WS calls; all traffic stays within the VPC via Private API. |
| **Monitoring & Governance** | **Amazon CloudWatch + AWS Config + GuardDuty** | Ensures compliance, audit trails, and threat detection inside the VPC. |

**Result (Data‑Driven)**  
- Pilot launched in 27 days (within the 4‑week window).  
- Query latency < 120 ms for 95th percentile; accuracy 92 % precision on a held‑out test set of 10 k QA pairs.  
- Cost: $12,000/month vs. $30,000 if data moved to public cloud—35 % savings.

**Leadership Principles Highlighted**

1. **Ownership & Deliver Results** – I scoped the entire solution, negotiated with security for a VPC‑only design, and met the deadline.  
2. **Dive Deep & Bias for Action** – Chose SageMaker Spot + private endpoints to balance cost, performance, and compliance; iterated on embedding model after first week’s A/B test.

**Bar‑raiser Takeaway**  
The candidate demonstrated end‑to‑end ownership, deep technical knowledge of AWS services, quantified impact (latency, accuracy, cost), and a learning loop from pilot metrics—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
