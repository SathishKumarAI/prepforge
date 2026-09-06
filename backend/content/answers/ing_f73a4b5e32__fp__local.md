---
qid: ing_f73a4b5e32__fp__local
question: 'Explain: Um and so when you have parameters — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 532
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:45:30-05:00'
sources: []
---

## Building ML Systems at Google – “Um and So” When You Have Parameters  

At Google the *parameter* that most teams wrestle with is **the hyper‑space**: every model has dozens of knobs (learning rates, regularisation strengths, architecture widths) that are not learned by back‑propagation but chosen by humans.  
The fundamental problem is that each choice defines a **different function class**; we must pick the one that generalises best on real data while staying deployable at scale.  

Why it must work this way:  
* **Optimization over functions, not weights** – we are searching in a *space of optimisers*. Treating hyper‑parameters as part of the optimisation problem turns the system into a *meta‑learner*: the optimiser learns which knobs to try next.  
* **Information‑theoretic budget** – each evaluation (a full training run) costs hours on GPUs; we must maximise information per unit cost, i.e., use Bayesian or bandit‑style acquisition functions rather than grid search.  

Lessons learned:  

1. **Treat hyper‑parameter tuning as a first‑class service** – expose it through the same pipelines that train models so that experimentation is reproducible and auditable.  
2. **Decouple “so” from “um”** – separate *must‑do* constraints (latency, memory) from *nice‑to‑have* knobs; this keeps optimisation tractable.  
3. **Leverage prior knowledge as a prior over the hyper‑space** – transfer learning of good defaults across projects dramatically reduces search effort.  

**Non‑obvious insight:** When you model the *search process itself* as a probabilistic inference problem, the optimiser learns to allocate computational budget where it is most likely to yield a margin on accuracy—effectively turning parameter tuning into an *active learning* task inside the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
