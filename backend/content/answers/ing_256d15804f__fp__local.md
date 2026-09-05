---
qid: ing_256d15804f__fp__local
question: 'Explain: All evaluators (code + LLM) in one place'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 362
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:24:36-05:00'
sources: []
---

**Why bring every evaluator into a single hub?**

At the core, evaluation is *information‑theoretic*: we want to compress an entire program’s or model’s behaviour into a scalar that tells us whether it meets the specification.  
For code, this is a formal property (correctness, safety) expressed as a set of test cases or invariants; for an LLM, it is a statistical property (perplexity, coherence). Each evaluator can be seen as a *feature extractor* mapping raw artefacts to a feature space.  

If we keep these extractors scattered, the optimization loop (e.g., reinforcement learning) receives noisy, inconsistent signals—different units may disagree on what “good” means. By unifying them:

1. **Normalization** – all metrics are expressed on a common scale, enabling gradient‑based or bandit algorithms to converge faster.
2. **Modularity** – adding a new test or LLM metric is just plugging another component; the rest of the system remains untouched.
3. **Compositionality** – we can mathematically combine features (e.g., weighted sum) because they are guaranteed to be compatible.

A non‑obvious insight: *the evaluator space itself becomes a latent variable*. By learning a joint embedding of code and LLM metrics, the system can discover hidden correlations—e.g., a particular unit test correlates with perplexity on generated summaries—allowing cross‑modal transfer of knowledge. This turns evaluation from a passive check into an active guide for model improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
