---
qid: ing_98e991e306__faang__local
question: What is RAG (Retrieval-Augmented Generation)?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 403
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:40:13-05:00'
sources: []
---

**Clarify**  
RAG (Retrieval‑Augmented Generation) blends a large language model with an external knowledge source—typically a vector store or search index—to answer queries that require up‑to‑date or domain‑specific facts. I’d confirm the scope: is it for static documents, real‑time web data, or internal company docs? What latency budget and privacy constraints apply?

**Approach**  
1. **Query → Retrieval** – embed the user prompt, query a vector index (FAISS/Elastic), fetch top‑k passages.  
2. **Augment Prompt** – concatenate retrieved snippets with the original prompt.  
3. **Generation** – feed this augmented prompt to an LLM (e.g., GPT‑4) and produce the final answer.

**Depth**  
- *Retrieval*: uses cosine similarity on dense embeddings; can add sparse BM25 re‑ranking for precision.  
- *Prompt design*: control hallucination by instructing the model to cite sources or “only use the provided context.”  
- *Inference cost*: retrieval is cheap (≈ $0.01 per query); generation dominates but stays within token limits.  
- *Evaluation*: ROUGE/F1 against ground truth, plus human judgment on factual accuracy.

**Edge Cases**  
- Empty/irrelevant hits → fallback to pure LLM or “I don’t know.”  
- Out‑of‑domain queries where embeddings misfire.  
- Privacy leaks if the index contains sensitive data—enforce encryption and differential privacy.

**Optimize & Communicate**  
To speed up, cache frequent queries; use approximate nearest neighbor (ANN) for sub‑millisecond retrieval. I’d explain the trade‑off: richer context improves factuality but increases token usage and latency. Conclude with a quick demo pipeline diagram to show end‑to‑end flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
