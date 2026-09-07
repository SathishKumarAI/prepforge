---
qid: ing_7c6c3b6555__aws__local
question: 'Explain: Cost and Latency Tradeoffs — Ocr And Layout'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 436
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:06:34-05:00'
sources: []
---

**Situation / Task**  
I led a team that had to ingest ~10 TB of scanned invoices per month and deliver an OCR‑based data extraction API with <200 ms latency for downstream analytics. The challenge was balancing **cost** (AWS inference costs) against **latency** (real‑time processing).

**Action**  
1. *Architecture*:  
   - **S3 + Lambda@Edge** to trigger on upload, converting PDFs to image tiles.  
   - **Amazon Textract** for OCR (batch mode) and **Amazon Rekognition Custom Labels** for layout detection.  
   - Results stored in **DynamoDB** with GSI on invoice date for fast query.  
2. *Cost‑latency tradeoff*:  
   - For high‑priority invoices, we used **SageMaker Real‑Time Endpoint** (1 ms inference) at $0.10 per 1000 invocations.  
   - Bulk jobs used **Batch** and **EC2 Spot Instances** (cost 70% lower).  
3. *Optimization*: Tuned Textract’s `maxResultsPerPage` and Rekognition’s image resolution to reduce GPU hours by 35 %. Implemented a cache layer in **Elasticache Redis** to avoid duplicate OCR on identical pages.

**Result**  
- Reduced average latency from 1.2 s to 180 ms for priority invoices (30% of total).  
- Cut monthly inference spend from $12k to $7.5k (38% savings) while maintaining >99.9 % accuracy.  

**Reflection**  
Ownership drove me to iterate on the hybrid pipeline, diving deep into AWS billing APIs and model profiling. The bar‑raiser would note my quantitative impact, use of multiple AWS services for scalability, and learning from early false positives that led to a second‑stage confidence filter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
