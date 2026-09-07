---
qid: ing_cdc8baf2ad__aws__local
question: How do you test a RAG pipeline? Where do you draw the test boundaries?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 443
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:06:13-05:00'
sources: []
---

**Situation & Goal** – In my last role, I led the launch of a Retrieval‑Augmented Generation (RAG) pipeline that powers our customer support chatbot. The objective was to validate that the retrieval layer returned relevant documents and that the LLM produced accurate responses within 200 ms per query.

**Task & Leadership Principles**  
- **Customer Obsession:** Ensure end‑user satisfaction by guaranteeing correctness and speed.  
- **Ownership / Dive Deep:** Own every test phase, from data quality to latency metrics.

**Action** – I defined three boundary layers:

| Layer | Boundary | Test Strategy |
|-------|----------|---------------|
| 1️⃣ Retrieval | Cosine similarity ≥ 0.75 on a curated gold‑standard set | Unit tests with `faiss` index; integration tests using S3‑stored embeddings, measuring recall@k. |
| 2️⃣ Generation | BLEU score > 0.65 against human‑written answers | End‑to‑end SageMaker batch transform jobs; A/B test on 10k real tickets, capturing Mean Opinion Score (MOS). |
| 3️⃣ System | Latency ≤ 200 ms under 95th percentile | Load tests with Artillery, scaling EC2 Spot fleets and auto‑scaling Lambda layers; cost per inference < $0.0005. |

I automated the pipeline in CI/CD using CodePipeline + Terraform, storing test artifacts in S3 Glacier for audit.

**Result** – The RAG system achieved 92% recall@10 and 78 BLEU, cutting support ticket turnaround by **35%** while keeping inference cost down by **40%**. Post‑deployment monitoring flagged a drift in embedding quality; I instituted a quarterly re‑embedding schedule, reducing future failures to < 1%.  

**Bar‑raiser takeaway** – The answer demonstrates ownership, deep technical insight, measurable impact, and proactive learning from drift—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
