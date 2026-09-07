---
qid: ing_716bff3676__aws__local
question: How would you reliably extract tables and charts from documents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 430
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:41:55-05:00'
sources: []
---

**Situation** – I led a project for a legal‑tech startup that had to ingest > 50 k PDF contracts per month and surface embedded tables/charts for downstream analytics.

**Task** – Build a fully automated pipeline that extracts tabular data with < 2 % error while keeping cost under $0.05/contract.

**Action** –  
1. **Ownership + Dive Deep:** I scoped the problem by profiling PDFs (OCR‑only vs scanned, table density).  
2. **AWS services chosen:**  
   * **Amazon Textract** for OCR and layout analysis.  
   * **AWS Lambda** (Python) to orchestrate parsing logic and invoke **Amazon Comprehend Medical** for entity extraction.  
   * **Amazon DynamoDB** to store extracted rows, keyed by contract ID + table index.  
3. **Design:**  
   * Textract → SQS → Lambda → DynamoDB.  
   * Lambda writes a CloudWatch metric `TablesExtracted` and an error counter.  
4. **Bias for Action & Deliver Results:** I added a retry policy (exponential back‑off) and a fallback to open‑source **Camelot** when Textract fails, reducing failure rate from 12 % to < 0.5 %.  
5. **Cost control:** Spot instances for heavy OCR jobs kept spend <$10k/month vs $18k baseline.

**Result** –  
* Extraction accuracy improved to **97.8 %** (vs 85 % pre‑project).  
* Throughput hit **50,000 contracts/day** with < 1 s latency per contract.  
* Cost reduced by **65 %**, saving ~$12k/month.  

**Bar‑raiser takeaway:** Demonstrated end‑to‑end ownership, deep technical dive into AWS services, quantified ROI, and learned from early OCR failures to iteratively improve reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
