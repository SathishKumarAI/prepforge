---
qid: ing_0cc6363eac__faang__local
question: Why does the AI team keep asking you for lineage, and what does lineage
  mean for RAG data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 387
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:13:32-05:00'
sources: []
---

**Clarify**  
The interviewer asks why the AI team keeps requesting “lineage” and what it means in a Retrieval‑Augmented Generation (RAG) context. I’ll assume they’re talking about data provenance for the documents fed into a RAG model, not just version control of code.

**Approach**  
1. Define lineage as a traceable record from raw source to final embedding.  
2. Explain why the team needs it: auditability, bias mitigation, reproducibility, and regulatory compliance.  
3. Map the concepts to RAG data pipelines (ingestion → preprocessing → indexing).  

**Depth**  
Lineage in RAG is the metadata chain that shows where each token or chunk originated, how it was transformed, and when. It includes: source URL, timestamp, extraction method, cleaning steps, embedding model version, index shard, and any downstream usage flags. This enables “why a particular answer surfaced” explanations and lets us roll back if a harmful document sneaks in. For regulatory regimes (GDPR, CCPA), lineage allows us to prove data minimization and consent compliance.

**Edge Cases**  
- *Duplicate sources*: deduplication metadata must be captured.  
- *Streaming updates*: version tags should handle incremental changes.  
- *Encrypted or proprietary content*: secure handling logs.  
Testing involves simulating a pipeline with mock documents, verifying that every transformation step is logged and retrievable.

**Optimize & Communicate**  
Implement a lightweight lineage store (e.g., a key‑value DB keyed by document hash) to avoid performance hits during inference. Use immutable logs for audit trails. I’d explain this trade‑off: extra storage vs. compliance guarantees, and emphasize that clear lineage reduces model drift and speeds debugging.

*Word count: ~190*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
