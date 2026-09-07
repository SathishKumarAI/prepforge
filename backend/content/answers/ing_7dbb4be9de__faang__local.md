---
qid: ing_7dbb4be9de__faang__local
question: 'Explain: Scenario 2: Design a document processing pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 478
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:37:43-05:00'
sources: []
---

**Scenario 2 – Build a Document‑Processing Pipeline**

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Goal:* ingest PDFs/Images → OCR → NLP → structured JSON for downstream analytics. <br>*Assumptions to confirm:* throughput (docs/min), accuracy target, latency limits, storage budget, compliance (GDPR). |
| **Approach** | 1️⃣ **Ingest Layer:** Kafka topic per tenant; S3 bucket as durable store.<br>2️⃣ **Pre‑Processing:** Resize/denoise images, split multi‑page PDFs. <br>3️⃣ **OCR Service:** Tesseract + fine‑tuned LSTM model on GPU instances (or AWS Textract for speed). <br>4️⃣ **Post‑Processing:** Named‑entity extraction (spaCy) → rule‑based mapping to schema. <br>5️⃣ **Schema Validation & Storage:** Validate JSON against Avro/JSON‑Schema, write to DynamoDB / Parquet in S3. |
| **Depth** | *Complexity:* OCR O(N pages), NLP O(N tokens). <br>*Trade‑offs:* GPU vs serverless (cost vs latency); batch vs streaming (throughput). <br>*Fault tolerance:* Kafka replay, DLQ for failed docs; idempotent writes. |
| **Edge Cases** | Corrupt PDFs → retry logic.<br>Low‑contrast scans → adaptive thresholding.<br>Unstructured tables → table‑OCR module. |
| **Optimize & Communicate** | • Auto‑scale OCR workers based on Kafka lag. <br>• Cache OCR models in EFS for cold start reduction. <br>• Use CI/CD with unit tests + end‑to‑end pipeline smoke tests.<br>Explain decisions to stakeholders: “We chose Textract for 95 % accuracy at $0.10/scan; switching to Tesseract cuts cost by 30 % but adds ~200 ms latency.” |

**Result:** A horizontally scalable, fault‑tolerant pipeline delivering high‑accuracy structured data within SLA, ready for downstream analytics or ML training.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
