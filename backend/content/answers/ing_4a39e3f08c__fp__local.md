---
qid: ing_4a39e3f08c__fp__local
question: 'Explain: Present the architecture for a workflow that reviews 5,000 contracts
  in a Vault against an 18-question diligence checklist and returns a review grid.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 451
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:43:04-05:00'
sources: []
---

**Why this works**

We must transform 5 k unstructured PDFs into a structured “review grid” that satisfies an 18‑question checklist. The core problem is *semantic extraction* under scale: each contract can be 10–200 pages, and the same legal clause may appear in dozens of forms. The solution therefore relies on **probabilistic information retrieval** (to locate candidate clauses) followed by **contextual language modeling** (to decide relevance).  

**Architecture**

| Layer | Function | Rationale |
|-------|----------|-----------|
| **Ingestion & OCR** | PDF → token stream, layout‑aware segmentation | Guarantees high‑fidelity text; layout signals clause boundaries. |
| **Vector Indexing** | Encode each paragraph with a fine‑tuned transformer (e.g., Longformer) into 768‑dim vectors; store in FAISS. | Enables sub‑second nearest‑neighbour search across 5 k contracts—essential for real‑time workflow. |
| **Checklist Mapping** | Each of the 18 questions is represented by a *semantic query vector* (prompt‑tuned). Search the index to retrieve top‑N paragraphs per question. | Directly ties user intent to document content; avoids rule‑based brittle parsing. |
| **Decision Engine** | For each retrieved paragraph, apply a lightweight classifier (BERT fine‑tuned on legal decisions) to output *Pass/Fail/Uncertain* and confidence score. | Separates extraction from judgment, allowing auditability. |
| **Grid Assembly & UI** | Aggregate per‑question results into a spreadsheet view; highlight low‑confidence cells for manual review. | Meets business requirement of a “review grid” while preserving transparency. |

**Non‑obvious insight**

The index need not store full documents; storing only *semantic vectors* allows us to add or retire contracts without reprocessing the entire corpus—leveraging the **locality‑sensitive hashing** property of transformer embeddings. This makes the workflow elastic and cost‑effective at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
