---
qid: ing_8ae20071e9__fp__local
question: 'Explain: That Is Embarrassing: Why Frontier AI Still Makes Things Up, and
  What to Do About It'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 523
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:59:57-05:00'
sources: []
---

**Why frontier AI “makes things up”**

At its core a large language model is an **approximate density estimator**  
\(p_{\theta}(x)\) over token sequences \(x\). Training maximises the likelihood of
observed text, which is equivalent to minimising cross‑entropy. The objective
does *not* penalise hallucinations as long as they look plausible in the local
context; the model only cares about matching the next word distribution in its
training corpus.

Because the training data are ungrounded—purely textual and noisy—the learned
distribution contains **spurious correlations** that correlate with factual
claims but do not imply causation. When prompted to generate a fact, the model
acts like a Bayesian sampler: it samples from \(p_{\theta}\) conditioned on the
prompt, often landing in a mode of high‑probability tokens that *look* coherent
but are disconnected from reality. The self‑consistency property of large
models (they tend to repeat what they just said) further reinforces these
hallucinations.

**What to do**

1. **Grounding** – augment generation with retrieved evidence or a knowledge
   base, turning the problem into conditioned inference \(p(x|q,E)\).  
2. **Uncertainty estimation** – calibrate the model’s confidence (e.g., via
   temperature scaling or Bayesian approximations) so that low‑confidence
   statements can be flagged for review.  
3. **Post‑hoc verification** – apply a lightweight verifier that checks
   factuality against an external source before presenting the answer.

**Non‑obvious insight**

The hallucination problem is not merely a lack of training data; it’s a
misalignment between the *optimization objective* (next‑token likelihood) and
the *task objective* (truthful knowledge retrieval). By re‑formulating the loss
to penalise factual inconsistency—e.g., adding a term that rewards agreement
with external evidence—we can steer the model toward genuine grounding rather
than mere linguistic fluency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
