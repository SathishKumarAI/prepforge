---
qid: ing_4a39e3f08c__faang__local
question: 'Explain: Present the architecture for a workflow that reviews 5,000 contracts
  in a Vault against an 18-question diligence checklist and returns a review grid.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 461
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:37:11-05:00'
sources: []
---

**Clarify**  
You need an end‑to‑end system that pulls ~5 k PDF/Word contracts from a secure vault, runs each through an 18‑question compliance check (e.g., “Has clause X been added?”), and outputs a tabular review grid. Assumptions: contracts are stored in S3‑compatible Vault; the checklist is rule‑based (keywords/regex); results must be auditable and exportable to Excel/CSV.

**Approach**  
1. **Ingestion layer** – Lambda or ECS task pulls metadata from Vault, streams files to a processing queue (SQS).  
2. **Processing layer** – Fargate containers run a Python pipeline: OCR (Tesseract/PaddleOCR) → NLP transformer (e.g., HuggingFace BERT fine‑tuned for legal clauses) → rule engine that maps 18 questions to extracted text.  
3. **Storage & aggregation** – DynamoDB table stores per‑contract results; a Glue job compiles all entries into a single review grid in S3 as CSV/Parquet.  
4. **UI / API** – API Gateway exposes `/review-grid` endpoint that streams the file, with Cognito for auth.

**Depth**  
- OCR accuracy >95% on scanned docs; transformer F1‑score ~0.87 on clause detection.  
- Parallelism: 10 Fargate tasks → ~50 contracts/min.  
- Complexity: O(n) where n=5k contracts; memory per task ≈ 4 GB.

**Edge Cases**  
- Corrupt PDFs → skip, flag in grid.  
- Non‑English contracts → route to language‑specific model.  
- Vault API throttling → exponential backoff.

**Optimize & Communicate**  
Use spot instances for cost savings; cache OCR results in EFS to avoid re‑processing. Explain trade‑offs: heavier models give better clause detection but increase latency and GPU costs. Present the architecture diagram (Vault → Queue → Fargate → DynamoDB → Glue → S3 → API) and emphasize auditability, scalability, and security throughout.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
