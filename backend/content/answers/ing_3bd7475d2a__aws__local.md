---
qid: ing_3bd7475d2a__aws__local
question: 'Explain: Long-document path (contracts) — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 449
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:41:33-05:00'
sources: []
---

**Customer Obsession | Ownership**

*Situation*: Our e‑commerce marketplace was receiving > 50 k contract PDFs per month from sellers, each 10–30 pages long. Manual review cost $1.2M/yr and had a 3‑day turnaround—unacceptable for high‑volume merchants.

*Task*: Build an end‑to‑end “Long‑Document Path” pipeline that extracts key clauses (payment terms, liability limits, expiry dates) in < 30 s per document while keeping costs under $0.02/contract.

*Action*:
1. **Data ingestion** – S3 bucket + EventBridge trigger → Lambda for PDF to text (Tesseract + OCR).  
2. **Chunking & Embedding** – Split 10‑page PDFs into 5 kB chunks, embed with Amazon Bedrock (Claude 3) to capture semantic context; store embeddings in DynamoDB (partition key: `contractId`).  
3. **Question‑Answer Engine** – API Gateway + Lambda orchestrates a prompt to Bedrock: “Find the payment terms and expiry date.” Bedrock returns structured JSON.  
4. **Post‑processing & Validation** – Python script normalizes dates, checks for overlaps using Amazon Comprehend’s entity recognizer; anomalies trigger SNS alerts to compliance team.  
5. **Observability** – CloudWatch metrics (latency, error rate) + X-Ray traces; automated scaling via Lambda concurrency.

*Result*: Reduced processing time from 3 days → < 30 s per contract; cost dropped from $1.2M/yr to $0.45M/yr (~62% savings). SLA achieved: 99.9% documents processed within the target window, and compliance incidents fell by 70%.

*Learnings*: Early integration of embeddings cut inference time dramatically—an insight I shared in a cross‑team workshop, leading to adoption in other document workflows.

**Bar‑raiser cues**: clear ownership, deep dive into AWS services, quantified impact, cost trade‑offs, and evidence of learning from iterative failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
