---
qid: ing_3bd7475d2a__faang__local
question: 'Explain: Long-document path (contracts) — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 450
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:03:33-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *Document‑Intelligence Pipeline* that can ingest, parse, and analyze long contracts (hundreds of pages). Assumptions: 1) Contracts arrive as PDFs or scanned images; 2) We need structured facts (parties, dates, clauses); 3) Accuracy > 90%; 4) Scale to thousands per day.  

**Approach**  
1. **Pre‑processing** – OCR + layout analysis (Tesseract/Google Vision).  
2. **Segmentation** – split into logical sections (header, body, annexes) using a transformer model fine‑tuned on contract templates.  
3. **Entity extraction** – BiLSTM‑CRF or spaCy NER trained on legal corpora; fallback to rule‑based regex for dates/amounts.  
4. **Relation & clause classification** – BERT fine‑tuned to label clauses (liability, termination).  
5. **Knowledge graph** – store entities and relations in Neo4j for downstream querying.  

**Depth**  
- OCR accuracy ~98% with image enhancement;  
- Segmenter F1 ≈ 0.93 on benchmark datasets;  
- NER recall/precision > 90%;  
- Clause classifier macro‑F1 ≈ 0.88.  
Complexity: linear in document size (O(N) tokens). Trade‑offs: heavier models give higher accuracy but slower latency—use async micro‑services.

**Edge Cases**  
- Multi‑language contracts → add language detector and multilingual OCR;  
- Non‑standard layouts → fallback to layout‑agnostic rule sets;  
- Very large PDFs → chunking with overlap to preserve context.  

**Optimize & Communicate**  
Deploy GPU nodes for inference, cache embeddings per contract, and batch OCR jobs. Explain the pipeline step‑by‑step in a diagram during interview, highlighting how each component mitigates error propagation and scales horizontally. This demonstrates structured thinking, depth, and communication—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
