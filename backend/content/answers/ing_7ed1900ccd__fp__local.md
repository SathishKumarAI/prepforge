---
qid: ing_7ed1900ccd__fp__local
question: 'Explain: Contains Keywords — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 465
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:35:07-05:00'
sources: []
---

### “Contains‑Keywords” as an **LLM Evaluation Metric**

**Fundamental problem**  
When a large language model (LLM) answers a prompt, we need a quick sanity check that the response is *on topic*. Human raters are expensive and slow; automated signals must capture whether the generated text actually mentions the key concepts the user asked for. The “contains‑keywords” test provides this signal.

**Why it works**  
1. **Information retrieval analogy** – In IR, a document is relevant if it contains query terms. Here the prompt’s salient nouns or phrases act as *query terms*. If the model repeats them, it indicates that its internal attention mechanism has focused on the same semantic units.
2. **Optimization bias** – During fine‑tuning, LLMs learn to predict tokens conditioned on preceding context. When a prompt explicitly names entities (e.g., “Explain *quantum entanglement*”), the most probable continuation will often start with or embed those terms because they maximize likelihood under the trained distribution.
3. **Geometric intuition** – In embedding space, prompt‑keywords occupy a subspace. A model that generates text whose token embeddings have high cosine similarity to this keyword subspace is effectively projecting onto the same direction; “contains‑keywords” checks for non‑zero overlap.

**Non‑obvious insight**  
The metric is *not* just a surface check: it implicitly tests the **semantic grounding** of the model. If a model consistently repeats keywords without integrating them meaningfully (e.g., “Quantum entanglement is quantum entanglement.”), the presence alone does not guarantee quality, but its failure to do so often signals hallucination or off‑topic drift. Thus, “contains‑keywords” serves as a *gatekeeper* for deeper evaluation steps—only when this gate passes do we proceed to coherence, factuality, and style checks.

**Bottom line**  
The contains‑keywords test is a lightweight, first‑principles proxy that leverages retrieval theory, probability maximization, and embedding geometry to confirm that an LLM’s output stays anchored to the user’s intent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
