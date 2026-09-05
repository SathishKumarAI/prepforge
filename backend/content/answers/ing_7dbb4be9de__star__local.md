---
qid: ing_7dbb4be9de__star__local
question: 'Explain: Scenario 2: Design a document processing pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 343
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:45:21-05:00'
sources: []
---

**Situation:**  
At my last company we had a legal tech startup that needed to ingest thousands of PDF contracts daily and expose key clauses in a searchable database for compliance reviews. The existing manual process took days per batch, and the quality was inconsistent.

**Task:**  
I was tasked with building an automated document‑processing pipeline that could handle high volume, maintain >95 % extraction accuracy, and run within our $50k/month infrastructure budget.

**Action:**  
I chose a modular stack: Tesseract OCR for low‑resolution scans, followed by a fine‑tuned BERT model to classify clause types. For structured output I used spaCy’s dependency parser to pull dates and parties into a PostgreSQL schema. To keep costs down I deployed the pipeline on AWS Lambda with a container image, using S3 event triggers and DynamoDB for state. I added a retry queue in SQS to handle OCR failures and built an audit log that stored raw PDFs alongside extracted JSON for traceability. Continuous integration with unit tests on sample contracts ensured regression safety.

**Result:**  
The pipeline processed 10k documents per day, reducing turnaround from 48 hours to under 3 hours, and achieved 97 % clause‑level accuracy. Infrastructure cost stayed at $38k/month. I learned that investing in a clear data schema early pays off in downstream analytics, and that serverless scaling can be surprisingly efficient for bursty workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
