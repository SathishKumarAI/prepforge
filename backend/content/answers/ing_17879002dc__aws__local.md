---
qid: ing_17879002dc__aws__local
question: 'Explain: Schema-constrained extraction — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 621
total_tokens: 850
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:18:56-05:00'
sources: []
---

**Situation (S)**  
At my last role I led a project to build an end‑to‑end *Document Intelligence Pipeline* for a financial client that needed to extract structured data from thousands of PDFs and scanned invoices daily. The business required 99.5 % accuracy on key fields (invoice number, date, amount) within 2 hours of upload.

**Task (T)**  
I owned the solution: design a schema‑constrained extraction system that could validate extracted values against an evolving ontology, scale to 50k docs/day, and keep costs under $3k/month.

**Action (A)**  
1. **Architecture** – Built on AWS:
   * S3 for raw & processed documents
   * Textract with custom Document AI models → OCR + table extraction  
   * Lambda + Step Functions orchestrate ETL, applying a *Schema Validator* written in Go that checks field types, ranges, and cross‑field consistency.  
   * DynamoDB stores the schema definitions; AWS AppConfig feeds live updates to the validator.
2. **Scalability** – Parallelized Lambda workers (concurrency 200) and used SQS FIFO queues to avoid duplicate processing.  
3. **Availability & Cost** – Leveraged S3’s durability, Step Functions’ retry logic, and reserved Lambda capacity to keep compute costs $2.7k/month.  
4. **Metrics** – Implemented CloudWatch dashboards: extraction accuracy (99.6 %), latency (1.8 h avg), error rate (<0.5 %).  

**Result (R)**  
Delivered the pipeline in 6 weeks, exceeding the target accuracy by 0.1 % and reducing processing time from 3 h to 1.8 h. The client reported a $120k/year savings on manual data entry.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Built a system that directly cut the client's operational cost.
- **Ownership** – Took end‑to‑end responsibility, from design through production monitoring.
- **Dive Deep** – Engineered a custom schema validator and tuned Lambda concurrency for optimal performance.  
- **Bias for Action** – Launched MVP in 4 weeks, iterated based on real‑time metrics.

### Bar‑raiser Expectations
1. **Ownership & Accountability** – Demonstrated full ownership of architecture, deployment, and post‑launch monitoring.  
2. **Quantified Impact** – Provided concrete metrics (accuracy %, latency, cost).  
3. **Depth** – Showed deep understanding of AWS services, trade‑offs between compute vs. storage costs, and the reasoning behind concurrency settings.  
4. **Learning from Failure** – Mentioned how initial 0.5 % error rate led to schema refinement and Lambda retry logic adjustments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
