---
qid: ing_d4cf272a29__star__local
question: 'Explain: Index and store documents and images automatically'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 376
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:34:40-05:00'
sources: []
---

**Situation** – At my previous role as a data engineer for an e‑commerce platform, we had a daily influx of over 15 000 product images and accompanying PDFs from suppliers. The legacy system stored them in a flat S3 bucket with no metadata, so search times were slow (≈2 s per query) and the compliance team flagged missing audit trails.

**Task** – Build an automated pipeline that ingests, indexes, and stores each document and image with rich metadata (supplier ID, SKU, creation date, OCR text) while ensuring 99.9% availability and sub‑500 ms search latency.

**Action** – I designed a serverless workflow in AWS Step Functions:  
1. **Trigger** on S3 upload; Lambda parses the file name to extract SKU.  
2. **OCR & image analysis** using Amazon Textract and Rekognition, storing extracted text and tags into DynamoDB.  
3. **Indexing** – each record is written to OpenSearch with a composite key (SKU + timestamp) and stored as an Elastic document; images are persisted in S3 with a versioned key and linked via the document ID.  
4. Added a CloudWatch alarm for any Lambda failure, and set up CI/CD with Terraform.

**Result** – Search latency dropped from 2 s to 0.35 s, and we achieved 100% compliance audit readiness. The automated pipeline processed 15 000 items per day with <1 % error rate, freeing the product team to focus on new features. I learned how to balance real‑time ingestion with cost‑effective storage while maintaining strict data governance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
