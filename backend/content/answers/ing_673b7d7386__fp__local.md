---
qid: ing_673b7d7386__fp__local
question: 'Explain: Evaluation — Tutorials | Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 470
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:44:31-05:00'
sources: []
---

### Why “Evaluation” is the *heart* of a Haystack pipeline

When a retrieval‑or‑generation model turns raw text into answers, the **fundamental problem** it solves is: *“How do we know that the answer is useful?”*  
In information‑retrieval terms this translates to measuring two opposing forces:

1. **Relevance** – does the returned document contain the needed facts?  
2. **Redundancy / precision** – are we over‑generating noise?

Haystack turns these forces into a *loss function* that can be optimized, but before any training takes place you must quantify them on held‑out data. That is why every tutorial starts with an evaluation section.

#### Derivation from first principles

1. **Define the task** (e.g., question answering).  
2. **Choose a metric** that maps *relevance* to a scalar:  
   - **Recall@k**: probability the true answer appears in the top‑k results – a pure information‑theoretic quantity (entropy of the “answer set”).  
   - **Mean Reciprocal Rank (MRR)** or **Exact Match (EM)** for generation tasks – these are expectations over a ranking distribution.  
3. **Formulate an estimator**: compute the metric on a test split, then apply *bootstrapping* to get confidence intervals.  

The deeper principle is that evaluation metrics are *statistics of a random variable* derived from your model’s output distribution; they are not arbitrary but must reflect the downstream utility (e.g., user satisfaction).

#### One non‑obvious insight

Most tutorials treat **Recall@k** as a static number, yet in practice you should vary *k* to find the *sweet spot* where increasing k yields diminishing returns. Plotting Recall versus k reveals the *information density* of your corpus: a steep curve means each document is highly informative; a shallow curve indicates redundancy or noise. This “density plot” often guides whether you need more training data, better embeddings, or smarter re‑ranking—an insight that standard tutorials rarely surface.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
