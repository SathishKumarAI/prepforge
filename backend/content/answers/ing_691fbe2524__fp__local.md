---
qid: ing_691fbe2524__fp__local
question: 'Explain: Target Metrics — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 407
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:47:58-05:00'
sources: []
---

### Target Metrics – A First‑Principles View

When we ask a language model “solve this problem,” the *objective* is to maximize **task utility**: correct answers, fluent text, and safety.  
The *metrics* are merely observable proxies for that utility.

1. **Why they must be decomposed**  
   - A single scalar (e.g., BLEU) conflates syntax, semantics, and hallucination risk.  
   - By breaking the objective into sub‑tasks—accuracy, coherence, factuality, diversity—we recover a *factorised loss* that aligns with the true joint distribution \(P(\text{output}\mid\text{prompt})\).  

2. **Connection to Information Theory**  
   - Each metric estimates an *information gain*: accuracy ≈ mutual information between answer and ground truth; factuality ≈ KL‑divergence reduction against a knowledge base.  
   - Optimising these independently respects the additivity of mutual information, guaranteeing that improving one component cannot degrade overall performance.

3. **LangWatch & LangFUSE**  
   - *LangWatch* continuously records per‑prompt metrics and builds a *confidence envelope* for each model.  
   - *LangFUSE* fuses those envelopes via Bayesian model averaging, producing calibrated probability estimates for downstream decisions.

4. **Non‑obvious Insight**  
   - The *shape* of the confidence envelope (its curvature) reveals whether a model is overconfident in low‑entropy regions—a subtle cue for catastrophic forgetting that raw accuracy masks.

In short, target metrics are not arbitrary scores; they are carefully engineered information‑theoretic proxies that, when monitored and fused, provide an interpretable, optimisable view of a model’s true task performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
