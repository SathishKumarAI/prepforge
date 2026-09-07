---
qid: ing_66ee32760e__faang__local
question: 'Explain: Self-RAG: Critic Tokens — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 570
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:43:43-05:00'
sources: []
---

**Self‑RAG with Critic Tokens – Production‑Ready Retrieval‑Augmented Generation**

| Section | Content |
|---------|---------|
| **Clarify** | *Problem*: We need a generation model that can fetch up‑to‑date facts from large document stores, yet avoid hallucinations and stay within latency limits. *Assumptions to confirm*: (1) Document corpus is immutable per request; (2) Query latency < 200 ms; (3) Model must be deployable on GPU clusters with limited memory. |
| **Approach** | 1️⃣ **Dual‑Stage Retrieval** – first a lightweight embedding index (FAISS) gives top‑k passages. 2️⃣ **Self‑RAG** – the generator ingests these passages and produces a draft response *and* a set of **critic tokens** that flag uncertainty or potential errors. 3️⃣ **Critic‑Driven Re‑rank** – a lightweight classifier (e.g., BERT‑tiny) scores each token; if any critic token exceeds a threshold, we trigger a second retrieval pass or fallback to a conservative answer. 4️⃣ **Caching & Sharding** – pre‑compute passage embeddings per shard and keep them in GPU RAM for sub‑10 ms lookup. |
| **Depth** | *Model*: Transformer encoder‑decoder with cross‑attention over retrieved passages; critic tokens are special vocabulary items appended after each sentence. The loss is a weighted sum of generation loss + critic classification loss (cross‑entropy). Complexity: Retrieval O(log N) per query, decoding O(L·d²) where L = answer length and d = hidden size. Memory: ~8 GB GPU for 1B‑parameter model + index shards. |
| **Edge Cases** | • Empty or ambiguous queries → critic tokens flag “unknown” leading to a fallback FAQ. <br>• Highly dynamic content (news) → re‑index periodically; use incremental updates. <br>• Tokenization mismatch → ensure consistent BPE between retrieval and generation stages. |
| **Optimize & Communicate** | • Replace the full decoder with a prefix‑generation model for sub‑50 ms latency. <br>• Use mixed‑precision (FP16) to cut memory by 2×. <br>Explain decisions clearly: “We use critic tokens because they give the model explicit feedback on uncertainty, allowing us to avoid costly re‑retrievals unless necessary.” |

*Result*: A scalable RAG pipeline that guarantees factuality through self‑generated critics while maintaining production latency budgets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
