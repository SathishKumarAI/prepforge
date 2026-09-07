---
qid: ing_1109778d65__faang__local
question: 'Explain: RAG & Retrieval - Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 474
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:23:22-05:00'
sources: []
---

**RAG (Retrieval‑Augmented Generation) & Retrieval – interview‑style explanation**

| Section | Content |
|---------|---------|
| **Clarify** | RAG is a framework that combines a *retriever* (fetches relevant documents from a large corpus) with a *generator* (a language model that produces the final answer). The key assumption: the generator alone lacks enough factual grounding, so we supply context via retrieval. |
| **Approach** | 1️⃣ Design a retriever (BM25, dense vector search, or hybrid). <br>2️⃣ Index documents with embeddings or inverted indices. <br>3️⃣ Query the index → get top‑k passages. <br>4️⃣ Concatenate/format these as prompt for a generative LM (e.g., GPT‑4). <br>5️⃣ Post‑process output, optionally re‑rank or verify facts. |
| **Depth** | • **Retriever choices:** Sparse (BM25) vs dense (FAISS/HNSW) → trade‑off between speed and semantic recall. <br>• **Generator control:** Prompt engineering, chain‑of‑thought prompts for reasoning. <br>• **Complexity:** Retrieval O(log N) per query; generation O(L²) with transformer self‑attention. <br>• **Evaluation metrics:** Exact match, F1 on factual tokens, and hallucination rate. |
| **Edge Cases** | • Empty or noisy index → fallback to zero‑shot generation.<br>• Ambiguous queries → use query expansion or user clarification prompts.<br>• Retrieval bias → ensure diverse top‑k or apply re‑ranking with calibrated scores. |
| **Optimize & Communicate** | • Cache frequent queries; pre‑compute embeddings. <br>• Use beam search with length penalty to reduce hallucinations. <br>Explain design choices in a whiteboard: show data flow diagram, highlight where latency comes from, and justify retriever type based on domain (e.g., legal docs → dense). Conclude with measurable KPIs (latency <200 ms, factual accuracy >90%). |

*Word count:* 215.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
