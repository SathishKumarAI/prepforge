---
qid: ing_8d542483ab__aws__local
question: 'Explain: The Problem — Document Intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 446
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:45:20-05:00'
sources: []
---

**Problem – Document Intelligence**

During my last role at a fintech startup I noticed that our compliance team spent **30 % of their time manually tagging and validating loan‑application PDFs**. This bottleneck caused *delayed approvals* (average 2.4 days) and *increased audit risk*.  

**S – Situation:** The company processed ~10,000 documents daily; each required extraction of fields such as name, SSN, income, and supporting evidence.

**T – Task:** Build a fully automated pipeline that could ingest PDFs, extract structured data with >95 % accuracy, and surface it to the compliance portal in real time.

**A – Action:**  
1. **Own** the solution by leading a cross‑functional squad (ML ops, DevOps, UI).  
2. Deployed **Amazon Textract** for OCR & form extraction, followed by an AWS Lambda orchestration layer that applied a custom *BERT* model on extracted text to identify and validate key fields.  
3. Used **S3** for raw/processed storage, **DynamoDB** for metadata, and **API Gateway + AppSync** to expose data to the portal.  
4. Implemented CI/CD with **AWS CodePipeline**; added automated unit‑test coverage >90 % and drift detection via CloudFormation StackSets.  

**R – Result:** Accuracy rose from 78 % to **96 %**, processing time dropped from 1 hour per batch to <10 minutes, cutting compliance cycle by **60 %** (≈$45k/month saved). The system scaled to 100k docs/day with 99.9 % availability, while keeping AWS spend under $2k/month.  

*Bar‑raiser notes:* I demonstrated **Ownership**, performed a deep dive into OCR errors, quantified impact, and iterated on failure points (e.g., mis‑parsed SSNs) to continuously improve the model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
