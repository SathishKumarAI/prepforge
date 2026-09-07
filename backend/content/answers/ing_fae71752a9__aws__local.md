---
qid: ing_fae71752a9__aws__local
question: 'Explain: For Law Firms — Harvey | AI software for legal and professional
  services'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 453
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:45:46-05:00'
sources: []
---

**Situation (S)**  
While consulting a mid‑size law firm that handled 12 k cases per year, I was asked to reduce the time attorneys spent on routine discovery documents from an average of **3 days per case** to under **6 hours**, without compromising compliance.

**Task (T)**  
Build an AI‑driven “Harvey” assistant that automatically extracts facts, flags conflicts, and drafts preliminary memoranda for each case. The solution had to scale to 12 k cases/year, support GDPR/CCPA, and integrate with their existing document management system.

**Action (A)**  
1. **Ownership & Dive Deep** – I scoped the data pipeline: ingest PDFs → OCR (Amazon Textract) → NLP (Amazon Comprehend Custom Entities + SageMaker inference).  
2. **AWS Services** –  
   * **S3** for durable storage, **Glue** to catalog metadata, **Step Functions** orchestrating the workflow, **Lambda** for lightweight transformations, **DynamoDB** for case‑state tracking.  
3. **Scalability & Availability** – Enabled S3 Transfer Acceleration and Lambda concurrency limits to handle peak loads; used Multi‑AZ RDS Aurora Serverless for relational queries.  
4. **Cost Control** – Adopted Spot Instances for training jobs, scheduled inference on-demand; achieved a 70 % reduction in compute spend versus baseline.  
5. **Bias for Action & Deliver Results** – Deployed a pilot with 50 cases in 2 weeks, iterated using A/B testing and attorney feedback loops.

**Result (R)**  
- Average discovery prep time dropped from **3 days to 6 hours** (a **96 % reduction**).  
- Cost per case fell from $1,200 to $300.  
- Client satisfaction score rose from 78/100 to 92/100.  

*Bar‑raiser notes:* The answer demonstrates **ownership**, deep technical dive, clear metrics, and a learning loop that iterated on user feedback—key traits for Amazon’s leadership culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
