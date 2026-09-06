---
qid: ing_93e73e9c62__fp__local
question: 'Explain: What Information to Capture — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 407
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:19:44-05:00'
sources: []
---

**Why you must record *what* the model says and *why***  
When an LLM is evaluated, we are really testing a stochastic mapping  
\(f: \text{prompt}\rightarrow\text{response}\).  
To judge \(f\) we need two kinds of evidence:

| Evidence | Purpose |
|----------|---------|
| **The raw output** (tokens, probability distribution) | The *observable* that the user sees. It is the function’s direct product. |
| **Metadata about the generation** (temperature, top‑k, beam width, seed, time) | Conditions that shape the stochasticity of \(f\). They are the “hyper‑parameters” of the probability distribution and must be logged to replicate or explain a result. |

These two together let you reconstruct the experiment, compute metrics like BLEU or ROUGE, and perform *counterfactual* analyses (e.g., “What if temperature were 0.7?”).

---

### Deeper principle: **Information‑theoretic sufficiency**

The joint distribution \(P(\text{prompt},\text{response})\) is what we care about.  
Capturing only the response discards the *channel capacity* that depends on hyper‑parameters; capturing only the prompt misses the conditional entropy of the output. By logging both, you obtain a sufficient statistic for any downstream inference (e.g., estimating expected reward or variance).  

---

#### Non‑obvious insight  
Most people think “log everything,” but *over‑logging* hurts: storing full token probabilities inflates storage and masks systematic biases. Instead, record **summaries**—entropy, top‑k counts, and a hash of the prompt—to keep fidelity while remaining tractable. This balances auditability with scalability and is essential for reproducible AI research.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
