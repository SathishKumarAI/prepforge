---
qid: ing_92b41e6b69__faang__local
question: What is RAG, and what problem does it actually solve?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 366
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:25:40-05:00'
sources: []
---

**Clarify**  
*RAG* = *Retrieval‑Augmented Generation*.  
It blends a large language model (LLM) with an external knowledge source so the LLM can fetch up‑to‑date facts before generating text.  
Assumptions to confirm:  
- The domain contains data that changes frequently or is too large for the LLM’s static weights.  
- Latency tolerance allows an extra retrieval step.

**Approach**  
1. *Retrieve*: Query a vector store / search index with the user prompt.  
2. *Augment*: Feed retrieved snippets into the LLM as context.  
3. *Generate*: Let the model produce the final answer, grounded in those facts.

**Depth**  
- Retrieval uses similarity search (e.g., FAISS) over embeddings of documents; complexity ≈ O(log N).  
- Augmentation mitigates hallucination: the LLM’s confidence is tied to evidence.  
- Works with open‑source or proprietary LLMs; can be deployed on edge or cloud.

**Edge Cases**  
- Retrieval failure → fallback to pure generation (risk of hallucination).  
- Ambiguous queries → multiple top‑k passages may conflict; need disambiguation logic.  
- Very short prompts may not trigger effective retrieval.

**Optimize & Communicate**  
- Cache frequent queries, use approximate nearest neighbor for speed.  
- Evaluate recall@k and hallucination rate to fine‑tune the trade‑off.  
- Explain to stakeholders: “RAG lets us keep knowledge fresh without retraining the model every day, improving accuracy while keeping inference latency acceptable.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
