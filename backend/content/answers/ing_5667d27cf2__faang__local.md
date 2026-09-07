---
qid: ing_5667d27cf2__faang__local
question: 'Explain: Clarifying questions & assumptions — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 554
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:04:55-05:00'
sources: []
---

## 1️⃣ Clarify  
**Question restated:** “What are the key clarifying questions and underlying assumptions when designing a Document Intelligence (DI) pipeline?”  
**Assumptions to confirm:**  
- **Data scope:** Types of documents (PDF, scanned images, structured forms).  
- **Volume & velocity:** Batch vs. real‑time ingestion rate.  
- **Accuracy targets:** Required F1 / OCR confidence thresholds for downstream use.  
- **Security & compliance:** GDPR/CCPA, encryption at rest and in transit.  
- **Integration points:** APIs, message queues, downstream analytics or workflow engines.

## 2️⃣ Approach  
1. List domain‑specific constraints (format variability, language support).  
2. Map data flow: ingestion → preprocessing → OCR/NLP → extraction → validation → storage/dispatch.  
3. For each stage ask “What do we need to know?” and “What could break it?”

## 3️⃣ Depth  
- **Ingestion:** Assume a Kafka topic for raw blobs; confirm retention policy.  
- **Preprocessing:** Need image enhancement heuristics—assume all images are at least 300 dpi, otherwise flag for manual review.  
- **OCR/NLP:** Assume Tesseract + spaCy; ask if custom models or fine‑tuning will be required for domain vocabularies.  
- **Extraction rules:** Assume a rule engine (e.g., RegEx + ML) that outputs JSON; confirm schema versioning strategy.  
- **Validation:** Need ground truth dataset to compute precision/recall; assume we can access a small labeled set.  
- **Storage:** Decide between S3 for raw, DynamoDB for extracted data—confirm latency requirements.

## 4️⃣ Edge Cases  
- Corrupted PDFs → fallback to manual audit queue.  
- Mixed language documents → auto‑detect and route to appropriate model.  
- Extremely long documents exceeding memory limits → chunking strategy.  
- Regulatory change requiring new fields → pipeline should be schema‑agnostic.

## 5️⃣ Optimize & Communicate  
- **Parallelism:** Use containerized workers per document type; explain trade‑off between resource cost and latency.  
- **Caching:** Store intermediate OCR results to avoid re‑processing on retraining.  
- **Observability:** Instrument metrics (OCR confidence, extraction error rate) for proactive alerts.  
- Narrate reasoning by iteratively linking each clarifying question to a design decision, showing that every assumption is validated or mitigated before implementation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
