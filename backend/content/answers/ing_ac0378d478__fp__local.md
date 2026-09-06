---
qid: ing_ac0378d478__fp__local
question: 'Explain: LLM Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 475
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:10:46-05:00'
sources: []
---

### Why we evaluate large language models

At its core, an LLM is a probabilistic function \(p_\theta(\mathbf{y}\mid\mathbf{x})\) that maps an input \(\mathbf{x}\) to a distribution over outputs \(\mathbf{y}\).  The *goal* of training is to approximate the true data‑generating distribution so that the model’s predictions are useful for downstream tasks.  Evaluation, therefore, must answer two questions:

1. **Does the model produce *plausible* text?**  
   This is a statistical test of how close \(p_\theta\) is to the target distribution.  Traditional metrics (perplexity, BLEU, ROUGE) estimate this distance under specific assumptions (e.g., token independence).  

2. **Does the model behave *as intended* in real‑world scenarios?**  
   This translates to *utility*: does a higher likelihood correlate with better task performance?  If not, the evaluation metric is misaligned.

### The deeper principle: **Optimality under constraints**

Evaluation can be framed as an optimization problem: maximize expected reward \(E_{p_\theta}[\mathcal{R}(\mathbf{x},\mathbf{y})]\) subject to a budget of compute or annotation.  Any metric that correlates with \(\mathcal{R}\) is *optimal* in the sense that it guides learning toward higher‑reward behavior.  Thus, metrics should be **task‑aligned** and **cheap to compute**.

### Non‑obvious insight

Most people equate *perplexity* with “model quality,” but perplexity only measures fit to a held‑out corpus—it ignores *contextual appropriateness*.  A model can have low perplexity yet generate toxic or nonsensical responses because it overfits common patterns.  The key is **calibration**: a well‑calibrated LLM assigns higher probabilities to truly likely continuations, which is directly testable by *temperature scaling* and *confidence calibration curves*.  Calibration metrics expose deficiencies that perplexity hides, making them essential for robust evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
