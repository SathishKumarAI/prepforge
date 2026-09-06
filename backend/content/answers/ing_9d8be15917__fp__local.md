---
qid: ing_9d8be15917__fp__local
question: An enterprise customer on Azure wants the model to "know our business."
  Prompting, RAG, or fine-tuning - how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 477
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:40:20-05:00'
sources: []
---

**Choosing the right “knowledge” strategy is a trade‑off between *precision*, *cost*, and *flexibility*.**

1. **Fine‑tuning**  
   *Problem solved*: embed domain facts into every inference step, so the model behaves as if it were trained on your data.  
   *Why it works*: gradient descent forces the network to adjust weights that encode business logic; every token generation reflects that knowledge.  
   *When to use*: high‑volume, highly regulated scenarios where you can afford the compute (≈ $0.05–$0.20 per 1 k tokens) and you need consistent, auditable responses.

2. **Retrieval‑Augmented Generation (RAG)**  
   *Problem solved*: pull up‑to‑date facts at runtime without permanently changing model weights.  
   *Why it works*: a dense/sparse index encodes your documents; the LM treats retrieved passages as additional context, so inference time is cheap and you can update the corpus instantly.  
   *When to use*: when knowledge changes often (new regulations, product updates) or when cost per request must stay low (< $0.01).

3. **Prompting / Chain‑of‑Thought**  
   *Problem solved*: steer a generic model with carefully crafted instructions.  
   *Why it works*: the prompt acts as a soft constraint; the LM still relies on its pre‑trained knowledge, but the context biases generation toward business language.  
   *When to use*: rapid prototyping or low‑stakes interactions where you cannot afford fine‑tuning overhead.

**Non‑obvious insight:** *The bottleneck is not the model’s size but the **indexing latency**.* Even a perfectly tuned RAG system will feel slow if your vector store is poorly partitioned. Use approximate nearest neighbor (ANN) with HNSW or IVF+PQ and shard by business unit; this keeps retrieval < 5 ms, preserving user experience while still delivering fresh knowledge.

In practice:  
- Start with RAG for agility.  
- If you hit latency or compliance limits, move to fine‑tuning on a subset of critical documents.  
- Use prompting only for exploratory pilots.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
