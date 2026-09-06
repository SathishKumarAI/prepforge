---
qid: ing_b28846782e__fp__local
question: 'Explain: F4: Bad training data poisons the adapter'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 379
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:23:25-05:00'
sources: []
---

**Why bad training data “poisons” an adapter**

When a large language model (LLM) is reused on a new task, we often keep the frozen backbone and train only a small *adapter*—a lightweight bottleneck that learns a task‑specific linear map.  
The fundamental problem is: **the adapter must capture the *true* conditional distribution \(p(y\mid x)\) of the target domain while being constrained by a tiny number of parameters**.  

If the training set contains *poisoned* examples—labels flipped or inputs subtly perturbed to mislead—the empirical risk minimizer will try to fit these outliers because the loss surface is locally dominated by them.  
With only a few adapter weights, the model cannot separate signal from noise; every gradient step pulls the adapter toward the poisoned pattern. This is an instance of *distribution shift* at the micro‑scale: the training distribution no longer matches the true test distribution, and the adapter learns a biased mapping that generalizes poorly.

**Non‑obvious insight:**  
Unlike full‑model fine‑tuning, adapters cannot compensate for poisoned data by redistributing capacity across layers. Their low rank means each parameter carries more “semantic weight.” Consequently, a single malicious example can create a *latent subspace* that the adapter aligns to—an invisible backdoor that activates only under specific triggers. Detecting this requires examining the adapter’s learned subspace geometry, not just performance metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
