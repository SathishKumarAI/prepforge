---
qid: ing_d5f1cc62eb__fp__local
question: 'Q: Why use Continued Pretraining instead of just putting domain data in
  the SFT set?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 344
total_tokens: 522
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:35:02-05:00'
sources: []
---

**Why Continue Pre‑Training (CP) rather than just sprinkling domain data into the Supervised Fine‑Tuning (SFT) set?**

The core problem is *distribution shift*: a model trained on generic corpora learns a broad language manifold, but its internal representations are tuned to maximize likelihood over that manifold. When we later inject scarce domain examples into SFT, the optimizer has to simultaneously preserve the wide prior and adapt to the narrow niche—an inherently conflicting objective.  

CP addresses this by **sequentially reshaping the model’s latent space**: first, a self‑supervised objective (e.g., masked language modeling) is applied to abundant domain data. This step nudges the representation manifold toward the target distribution without any supervision signal that could overfit scarce labels. The model then retains its generality while becoming *probabilistically compatible* with the domain’s syntax and semantics.

From an information‑theoretic view, CP maximizes mutual information between hidden states and domain tokens **before** the supervised loss is introduced, thereby reducing the KL divergence required during SFT. This yields a smoother optimization landscape and lower risk of catastrophic forgetting.

**Non‑obvious insight:** CP leverages *latent alignment* rather than surface fine‑tuning. By first aligning the model’s internal geometry with the domain, subsequent supervised updates act as small perturbations that are far less likely to destabilize learned knowledge—a subtle but crucial advantage over naïvely augmenting SFT data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
