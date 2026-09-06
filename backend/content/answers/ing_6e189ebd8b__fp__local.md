---
qid: ing_6e189ebd8b__fp__local
question: 'Explain: Benchmarking Beyond Models — Introducing BigLaw Bench: Research'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 402
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:58:38-05:00'
sources: []
---

**Benchmarking Beyond Models – the BigLaw Bench**

When we ask an LLM “what is the law of negligence?”, we implicitly solve a *semantic inference* problem: map an informal query \(q\) to a legal concept \(c\). Traditional benchmarks only score the *output accuracy* \(\mathbb{P}(\hat c=c|q)\), treating the model as a black box.  
But in law, correctness is multidimensional: **relevance, completeness, precision, and jurisdictional consistency**. If we formalise these dimensions as a vector \(v=(r,\ell,p,j)\), the benchmark must evaluate the joint distribution \(\mathbb{P}(v|\theta)\) where \(\theta\) are model parameters.  
This turns benchmarking into an **information‑theoretic optimisation**: we wish to maximise mutual information between the query space and the answer vector while penalising entropy that reflects uncertainty across dimensions. The BigLaw Bench operationalises this by constructing a *probability simplex* over legal outcomes for each query, then measuring divergence from a gold standard distribution with KL‑divergence.  

The non‑obvious insight: **the shape of the error manifold is geometry‑driven**. Small perturbations in phrasing can cause large shifts along the jurisdiction axis while leaving relevance unchanged; this anisotropy is invisible to scalar metrics but captured by BigLaw Bench’s vectorial loss. Consequently, model developers learn not just “does it get the answer right?” but *how* and *why* a model mis‑aligns across legal facets—guiding more principled architecture choices and data curation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
