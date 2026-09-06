---
qid: ing_53b39a38b6__fp__local
question: 'Explain: Design the harmful-content detection system for Facebook and Instagram
  uploads.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 451
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:02:53-05:00'
sources: []
---

**Why a harmful‑content detector must be *probabilistic, hierarchical, and context‑aware***  
At its core, the problem is: given an image or video \(x\), estimate the posterior probability that it violates policy \(p(y=1|x)\). The policy space (hate, sexual, violence) is high‑dimensional; a single linear classifier can never capture all semantic nuances. Hence we treat detection as *Bayesian inference* over latent concepts \(z\):  
\(p(y|x)=\sum_z p(y|z)p(z|x)\).  
The *latent space* \(z\) corresponds to interpretable visual primitives (e.g., “human face”, “weapon”, “text”). By factorizing, we decouple complex reasoning into sub‑tasks that can be optimized independently—mirroring how humans parse scenes.

**Design pipeline**

1. **Feature extraction** – a multi‑branch CNN+Transformer extracts *visual*, *audio* (if present), and *transcript* embeddings.  
2. **Concept classifiers** \(p(z|x)\) are lightweight, calibrated networks trained on curated datasets for each primitive.  
3. **Policy heads** \(p(y|z)\) aggregate concepts using attention over the concept vector; this allows a single policy head to generalize across many content types (e.g., “weapon” + “blood” → violence).  
4. **Uncertainty quantification** – Monte‑Carlo dropout or ensembles provide confidence intervals; low‑confidence samples are routed to human review, ensuring *human‑in‑the‑loop* safety.  
5. **Feedback loop** – user reports and moderator actions update the posterior via Bayesian updating, continuously refining priors on \(z\).

**Non‑obvious insight:**  
The *latent concept hierarchy* reduces catastrophic forgetting: when new policy rules emerge (e.g., a novel meme), only the policy head needs retraining; concept detectors stay unchanged. This modularity keeps the system scalable and interpretable, a necessity for billions of daily uploads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
