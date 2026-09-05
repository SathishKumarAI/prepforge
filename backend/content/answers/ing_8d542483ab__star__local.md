---
qid: ing_8d542483ab__star__local
question: 'Explain: The Problem — Document Intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 375
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:15:20-05:00'
sources: []
---

**Situation** – In late 2023 I was leading a project for a regional bank that had an aging paper‑based loan approval workflow. They were receiving roughly 10,000 loan applications per month, each with dozens of supporting documents (income statements, tax returns, property appraisals). The manual intake team spent an average of 45 minutes per application, causing backlogs and delayed approvals.

**Task** – I needed to design a Document Intelligence system that could automatically ingest, classify, extract key fields, and route each document within 5 minutes, reducing processing time by at least 70% while maintaining an error rate below 1%.

**Action** – I built a pipeline using Google Cloud Vision OCR for initial text extraction, then fine‑tuned a BERT‑based NER model on the bank’s domain data to pull fields like borrower name, loan amount, and property value. For classification, I employed a lightweight CNN on scanned images to distinguish document types (applicant ID, income proof, etc.). The system was deployed in Kubernetes with autoscaling; we integrated it into their existing BPM tool via REST APIs. To keep costs low, we used pre‑emptible VMs and switched from expensive GPU instances once the model converged.

**Result** – The new workflow cut processing time to 4 minutes per application, a 93% reduction, and the error rate dropped to 0.6%. The bank processed 15,000 applications monthly with zero backlog, saving roughly $120k in labor annually. I learned that combining OCR with domain‑specific NER and thoughtful infrastructure choices can turn a legacy bottleneck into a scalable AI service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
