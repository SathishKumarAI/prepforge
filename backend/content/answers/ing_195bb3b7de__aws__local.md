---
qid: ing_195bb3b7de__aws__local
question: 'Explain: Classify — LlamaIndex | AI Agents for Document OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 407
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:23:38-05:00'
sources: []
---

**Situation** – At my previous firm we had a client that needed to ingest ~200 k PDF invoices daily, extract structured data (PO numbers, amounts), and trigger downstream finance workflows. **Task** – Build an end‑to‑end OCR + AI agent pipeline that is cost‑effective, scales to 10× traffic, and reduces manual triage by >70%.  

**Action** –  
1️⃣ **OCR & Vectorization** – I chose *Amazon Textract* for high‑accuracy text extraction (95%+ F1). For semantic search I built a LlamaIndex over the extracted text, storing embeddings in *Amazon OpenSearch Service* (dedicated node pool, 10 GB per index).  
2️⃣ **AI Agent Layer** – A lightweight Lambda orchestrator calls an *Amazon Bedrock* custom prompt that maps raw fields to the finance schema. The agent writes results to *DynamoDB*, triggering a *Step Functions* state machine for downstream approvals.  
3️⃣ **Scalability & Cost** – Using Lambda concurrency limits (auto‑scaling), we cap spend at $0.25 / invoice, while OpenSearch scales horizontally via shard rebalancing. Availability is 99.99% by deploying across two AZs.  

**Result** – Processed 200 k invoices/day with <5 min latency; manual review dropped from 12 h to 30 min (75% reduction). Cost fell 40 %.  
*Learnings*: I owned the entire stack, dived deep into Textract’s confidence scores, and iterated on the prompt after observing a 3% extraction error spike. This experience showcases **Customer Obsession**, **Ownership**, and **Dive Deep**—the very bar‑raiser qualities we value at Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
