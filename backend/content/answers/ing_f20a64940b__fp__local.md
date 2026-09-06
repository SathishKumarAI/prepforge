---
qid: ing_f20a64940b__fp__local
question: 'Explain: 6 Evals — AI Concepts - by Neo Kim and Logan Thorneloe'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 758
total_tokens: 935
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:33:44-05:00'
sources: []
---

**Six Evals – a principled framework for probing language models**

1. **Token‑level accuracy**  
   *Problem:* A model must choose the correct next word among many possibilities.  
   *Why it works:* The cross‑entropy loss that trains most transformers is exactly the negative log probability of the ground truth token; evaluating this expectation on a held‑out set gives an unbiased estimate of the model’s predictive distribution.  
   *Insight:* Accuracy at this granularity is a proxy for **information density**—the higher the entropy of the true distribution, the harder the task, and the more the model must capture fine‑grained syntax.

2. **Exact‑match evaluation**  
   *Problem:* Many downstream tasks (e.g., QA) demand a single correct answer.  
   *Why it works:* By requiring full string equality we force the model to resolve ambiguity in token ordering, punctuation, and formatting—capturing its ability to internalize task‑specific conventions.  
   *Insight:* Exact match is essentially a **deterministic decoding** of a stochastic process; it reveals how much *entropy* the model has collapsed into a single mode.

3. **Semantic similarity (BLEU/ROUGE)**  
   *Problem:* Natural language allows multiple paraphrases.  
   *Why it works:* These metrics compare n‑gram overlap, which is a crude but effective surrogate for shared semantic content under the assumption that surface form correlates with meaning in large corpora.  
   *Insight:* Overlap metrics implicitly measure **distributional similarity**; a model that captures higher‑order co‑occurrence statistics will score better even when exact tokens differ.

4. **Human preference (Turing test style)**  
   *Problem:* Ultimately we care about whether humans find the output convincing.  
   *Why it works:* Human judgements aggregate many latent dimensions—coherence, relevance, style—into a single ordinal label.  
   *Insight:* Preference is a noisy but *invariant* indicator of **utility*: models that optimize for human‑aligned reward functions implicitly learn to navigate high‑dimensional manifolds of acceptable language.

5. **Adversarial robustness**  
   *Problem:* Models often fail on inputs with minor perturbations.  
   *Why it works:* By systematically varying tokens (synonyms, typos) we expose the model’s reliance on brittle surface cues rather than underlying semantics.  
   *Insight:* Robustness reflects the model’s ability to learn **canonical invariants**—features that persist across perturbations—mirroring principles from statistical learning theory.

6. **Calibration & uncertainty estimation**  
   *Problem:* Knowing when a model is wrong is as important as being right.  
   *Why it works:* Calibration metrics (e.g., Expected Calibration Error) compare predicted probabilities to empirical frequencies, ensuring the output distribution reflects true confidence.  
   *Insight:* Proper calibration emerges from **entropy regularization** during training; without it, models tend to be overconfident due to the KL‑divergence term in cross‑entropy loss.

---

### Non‑obvious takeaway
Across all six evals the hidden unifying principle is **information geometry**: each metric probes a different projection of the model’s probability distribution onto a lower‑dimensional manifold (token, sentence, human judgment). By treating evaluation as a *geometry problem*—understanding how the high‑dimensional language space folds into task‑specific subspaces—we can design metrics that are both theoretically grounded and practically informative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
