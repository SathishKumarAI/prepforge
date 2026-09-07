---
qid: ing_386b31104b__faang__local
question: 'Explain: Do the simple thing that works — Careers \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 400
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:55:20-05:00'
sources: []
---

**Clarify**

The interviewer wants a concise explanation of the “simple‑thing‑that‑works” mantra in ML, often cited by Anthropic.  
Assumptions:  
1. We’re talking about *model design* (not data curation).  
2. The audience knows basic ML concepts but may not know the philosophy behind it.

**Approach**

1. Define “simple thing that works.”  
2. Show why complexity can hurt.  
3. Illustrate with a concrete example.  
4. Summarize trade‑offs and when to deviate.

**Depth**

The mantra means *start with the minimal viable model*—a straightforward architecture, a small set of features, or a single loss term—and iterate only if necessary. Simplicity reduces overfitting, eases debugging, speeds training, and improves interpretability. Anthropic’s safety‑first approach uses this by first building a baseline policy network, then adding complexity (e.g., auxiliary losses) only after the base fails to meet safety metrics.

*Example*: In text generation, begin with a transformer decoder trained on next‑token prediction. If hallucinations rise, add a constraint loss that penalizes deviation from factual embeddings—only then.

**Edge Cases**

- **Under‑fit**: A too-simple model may never reach desired accuracy; monitor validation curves.  
- **Data scarcity**: Simplicity may over‑regularize; consider transfer learning.  
- **Safety‑critical domains**: Even simple models need rigorous testing before deployment.

**Optimize & Communicate**

Explain that the strategy is a *principle of incremental complexity*. It keeps experiments reproducible, budgets in check, and results interpretable—qualities highly prized at FAANG. Conclude by noting you’d iterate only after empirical evidence shows the base model cannot satisfy business or safety constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
