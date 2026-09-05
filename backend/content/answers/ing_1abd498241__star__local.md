---
qid: ing_1abd498241__star__local
question: 'Explain: Your document automation platform for unstructured data'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 361
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:22:55-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a compliance‑tracking system for insurance claims. The backlog of scanned policy documents and handwritten claim notes was growing to over 150 k files per month, and our legal team could only review them manually, taking 3–4 days per batch.

**Task:**  
I had to design an end‑to‑end document automation pipeline that would ingest any unstructured PDF or image, extract structured fields (claim ID, policy number, claim amount), and surface key risk flags for the compliance team—all within a 24‑hour turnaround.

**Action:**  
First I set up an S3 bucket with event notifications to trigger a Lambda function. The function ran a Tesseract OCR + spaCy NER model tuned on our domain data; we then used Amazon Comprehend Medical for additional entity extraction. Extracted fields were stored in DynamoDB, and a Step Functions workflow routed the records through a custom Python validator that cross‑checked amounts against policy limits. We exposed a REST API via API Gateway so analysts could query claim status in real time. To keep costs low, we scheduled the heavy OCR job on spot instances and cached common entities in ElastiCache.

**Result:**  
The pipeline cut processing time from 3–4 days to under 12 hours for 150 k documents per month, improving compliance review speed by 70%. Accuracy of key field extraction hit 95% after two rounds of model refinement. I learned how to balance cloud‑native scalability with cost control while maintaining high data quality in an unstructured environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
