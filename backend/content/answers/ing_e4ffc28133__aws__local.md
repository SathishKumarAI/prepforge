---
qid: ing_e4ffc28133__aws__local
question: 'Explain: Cost Breakdown — Document Intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 490
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:55:49-05:00'
sources: []
---

**Leadership Principles:** *Customer Obsession* & *Ownership*

---

### Situation  
Our client wanted to replace a legacy OCR pipeline that cost $2 M/year and delivered 90 % accuracy. They needed a cheaper, scalable solution with real‑time insights.

### Task  
Design a “Document Intelligence” stack that cuts costs by ≥60 %, scales to 10 k documents/sec, and retains or improves accuracy.

### Action  
1. **Data Ingestion** – S3 event triggers Lambda → *Amazon Textract* (AnalyzeDocument) for structured extraction.  
2. **Post‑Processing** – Lambda writes results to DynamoDB; a second Lambda applies a lightweight ML model in SageMaker endpoint for entity validation, saving $0.0004 per inference vs. the legacy custom model.  
3. **Cost Control** –  
   * Use Textract “Document” mode (batch) to batch 500 docs → 20 % lower per‑page price.  
   * Enable S3 Intelligent Tiering; move older PDFs to Glacier after processing.  
   * Spot instances for SageMaker inference reduce compute cost by 35 %.  
4. **Monitoring** – CloudWatch metrics + Athena queries on DynamoDB logs provide real‑time cost dashboards.

### Result  
- Annual spend dropped from $2 M to **$0.8 M** (60 % reduction).  
- Accuracy improved to **96 %** (vs. 90 %).  
- Throughput reached **12 k docs/sec** with <1 ms per‑doc latency in Lambda.

---

### Bar‑raiser takeaways  
* Ownership: I owned the entire cost model and iterated until we hit target savings.  
* Dive Deep: Detailed analysis of Textract pricing tiers, Lambda concurrency limits, and SageMaker spot economics drove decisions.  
* Quantified Impact: Precise $0.8 M/year figure demonstrates real business value.  
* Learning from Failure: Early trials with on‑prem OCR exposed hidden licensing costs; pivoting to AWS services eliminated those surprises.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
