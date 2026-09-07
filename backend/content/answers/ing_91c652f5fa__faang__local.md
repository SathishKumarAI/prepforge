---
qid: ing_91c652f5fa__faang__local
question: 'Explain: Your new agent version scores higher on every benchmark, but internal
  users say it got worse. Find the problem.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 380
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:23:15-05:00'
sources: []
---

**Clarify**  
We’re told a new AI agent *outperforms* all public benchmarks yet *internal users* report degraded performance.  
Assumptions to confirm:  

1. Benchmarks use the same task distribution as production?  
2. Internal users evaluate on real‑world, possibly noisy inputs.  
3. The “score” refers to objective metrics (accuracy, latency) vs subjective usability.

**Approach**  
1. **Replicate internal feedback** – gather a representative sample of user queries and outcomes.  
2. **Compare distributions** – plot the feature space of benchmark data vs internal traffic.  
3. **Analyze failure modes** – identify where the new model diverges from the old one on real inputs.  
4. **Check deployment pipeline** – ensure the same weights, configs, and inference engine are used.

**Depth**  
- If the benchmark dataset is *clean* (e.g., well‑formed prompts), the new model may have over‑fit to that distribution, sacrificing robustness to noisy or ambiguous user inputs.  
- A shift in tokenization, beam width, or temperature during deployment can alter behavior.  
- Over‑regularization on benchmarks might reduce adaptability to domain‑specific jargon used internally.

**Edge Cases**  
- Rare entities or slang absent from benchmarks.  
- Longer context windows causing memory overflow.  
- Model drift due to differential caching strategies.

**Optimize & Communicate**  
Re‑train with a *mixed* dataset that blends benchmark and internal logs, apply domain‑adaptive fine‑tuning, and enforce consistent inference hyperparameters. Present findings as: “We discovered a distribution mismatch; after augmenting training data and aligning deployment settings, we restored internal user satisfaction while maintaining benchmark gains.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
