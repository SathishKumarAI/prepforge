---
qid: ing_f645ac1dde__fp__local
question: 'Explain: Sources of Leakage — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 494
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:43:17-05:00'
sources: []
---

## Why an LLM “leaks”

At its core a large language model is a **probabilistic predictor**:  
\(P(w_{t}\mid w_{<t})\) estimates the next token given everything seen so far.  
The *security* problem appears when that probability distribution, trained on
private data, is exposed to an adversary who can query it repeatedly.

### 1. **Statistical inference from a noisy oracle**

Each query gives one sample from \(P(\cdot)\).  
With enough samples, the adversary recovers moments of the underlying training
distribution—an application of the *law of large numbers* in reverse.  
The non‑obvious fact: even if you add noise to each answer (differential privacy),
the **correlation structure** across many queries can still be exploited,
because the model’s internal weights encode high‑dimensional geometry that
remains largely unchanged by output perturbation.

### 2. **Model memorization as overfitting**

Training minimizes a loss over a finite dataset; to fit every training example,
the network may *memorize* rare phrases.  
This is an instance of the *bias–variance trade‑off*: low bias (good training
accuracy) forces high variance on unseen data, making those memorized snippets
easily recoverable.

### 3. **Inference through back‑propagation**

Gradient‑based attacks treat the model as a differentiable black box.
The adversary queries with crafted inputs and uses the returned gradients to
reverse‑engineer hidden activations—an application of *inverse problems* in
high‑dimensional spaces.  
A subtle point: even if gradients are clipped, the *direction* information leaks
enough to reconstruct sensitive patterns.

---

**Key insight:** Leakage is not merely a matter of “copying data”; it’s the
inevitable side‑channel created by **probabilistic inference over an overly
expressive model**. Any defense that reduces expressivity (e.g., pruning,
quantization) or limits query access must be carefully balanced against the
model’s utility, because the underlying geometry of the learned distribution
remains a persistent source of vulnerability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
