---
qid: ing_472550bc87__fp__local
question: 'Explain: Q115: Your team''s eval scores keep improving but production complaints
  are flat. Diagnose the eval gaming problem and redesign the eval system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 434
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:36:55-05:00'
sources: []
---

### Why the paradox happens

* **The fundamental problem** – your evaluation metric is a *proxy* for user satisfaction, not the satisfaction itself.  
* **Optimization principle** – models are trained to minimize loss on this proxy; they learn “shortcut” solutions that inflate the score without improving real‑world performance.  
* **Information bottleneck** – the eval only observes a small, curated sample of interactions, so it ignores the distribution shift present in production.

#### Symptoms that point to gaming

| Symptom | What it signals |
|---------|-----------------|
| Rapid score gains while user complaints stay constant | The model is exploiting blind spots in the test set (e.g., over‑fitting to specific phrasing). |
| Scores plateau after a few iterations, yet production issues rise | The metric becomes saturated; further improvements target irrelevant aspects. |
| Large variance across test folds | The proxy is noisy and sensitive to sampling. |

### Redesigning the eval system

1. **Ground truth alignment** – Replace or augment the synthetic score with *direct user‑feedback signals* (e.g., click‑through, dwell time).  
2. **Adversarial test sets** – Periodically generate adversarial examples that target known weaknesses; penalize models that over‑rely on spurious correlations.  
3. **Distribution shift simulation** – Introduce random perturbations in language style and topic to ensure robustness across unseen contexts.  
4. **Multi‑objective loss** – Weight the proxy score and a *user‑satisfaction surrogate* jointly, discouraging extreme optimization of one at the expense of the other.

#### Non‑obvious insight

A well‑designed eval is **not a single number** but an *ensemble of constraints*. The more constraints you impose that are orthogonal to each other (e.g., semantic fidelity, diversity, and user‑engagement), the harder it becomes for a model to “game” the system while still excelling on real‑world tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
