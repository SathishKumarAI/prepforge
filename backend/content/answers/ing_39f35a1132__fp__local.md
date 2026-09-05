---
qid: ing_39f35a1132__fp__local
question: 'Explain: Evaluating RAG — Your AI Product Needs Evals \u2013 Hamel\u2019s
  Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 365
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:07:57-05:00'
sources: []
---

### Why RAG must be evaluated the way it is

A Retrieval‑Augmented Generation system couples two engines: a **retriever** that fetches relevant documents and a **generator** that rewrites them into an answer.  
The fundamental problem is *information fidelity*: we want the final response to preserve factual correctness while remaining fluent.  

1. **Retrieval quality ⇨ data diversity** – The retriever’s precision‑recall trade‑off governs how many useful facts are present in the context.  
2. **Generator fidelity ⇨ hallucination risk** – The transformer can invent plausible but false details; its loss is not a direct measure of factuality.  

Thus, evaluation must jointly optimize two objectives:  
- **Relevance** (how well retrieved passages match the query) → measured by IR metrics (Recall@k, MRR).  
- **Factuality & coherence** → assessed through *semantic similarity* to reference answers and *hallucination detection* (e.g., entailment classifiers).

The deeper principle is **information bottleneck**: the retriever compresses world knowledge into a small context; the generator must expand it without leaking noise.  
A non‑obvious insight: *context length alone does not guarantee accuracy*. Adding more documents can increase recall but also injects contradictory facts, which the generator may inadvertently blend—hence the need for **contrastive retrieval loss** during training.

In practice, a rigorous RAG evaluation pipeline alternates IR metrics with factuality tests, ensuring that improvements in one dimension do not degrade the other.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
