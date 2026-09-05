---
qid: ing_22d57c38cc__fp__local
question: What is RAG? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 374
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:19:47-05:00'
sources: []
---

**Retrieval‑Augmented Generation (RAG)** is a neural architecture that learns *when* and *how* to consult external knowledge bases during language generation.  

The core problem it solves is the **knowledge gap** in purely parametric models: a transformer trained only on its parameters cannot remember every fact, especially when those facts change over time. RAG posits that the model should treat the world as an *information source* that can be queried at inference. Formally, for each decoding step \(t\), the model computes

\[
p(y_t \mid y_{<t}, q) = \sum_{d \in D} p(d \mid q)\; p_{\theta}(y_t \mid y_{<t}, d),
\]

where \(q\) is the current query, \(D\) is a document set, \(p(d \mid q)\) is a retrieval distribution (often a dot‑product softmax), and \(p_{\theta}\) is a generative decoder conditioned on the retrieved snippet. This mixture-of-experts view guarantees that the output probability mass concentrates on documents most relevant to the query—an instance of *optimal transport* between latent intent and external evidence.

**Non‑obvious insight:**  
The retrieval module can be trained end‑to‑end with the generator because gradients backpropagate through the soft‑max over document scores. Thus, RAG learns *which* documents are useful for a given linguistic context, effectively performing **contextual attention over the knowledge corpus**—a form of adaptive memory that replaces static embeddings.

---

*(Word count: 198)*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
