---
qid: ing_05f753e1b1__fp__local
question: 'Explain: You''re using LLM-as-judge. Why should I trust the judge? Walk
  me through calibrating it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 608
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:18:10-05:00'
sources: []
---

**Why a large language model (LLM) can serve as a reliable “judge”**

The core problem is *decision‑making under uncertainty*: we want a system that assigns scores to text snippets and ranks them consistently. An LLM already models the joint distribution \(P(\text{text}\mid \text{context})\); its logits approximate the log‑probability of each token given all previous ones. When prompted with a rubric (e.g., “Rate 1–5 on relevance”), the model’s internal probability mass over the answer space becomes a *posterior* over quality classes. By Bayes’ rule, this posterior is optimal if the training data were drawn from the same distribution as our test set and the loss function matches the evaluation metric.

**Calibration pipeline**

| Step | Rationale | Implementation |
|------|-----------|----------------|
| 1️⃣ Prompt engineering | Shape the model’s prior over answer classes. Use few‑shot examples that illustrate the rubric, ensuring symmetry between positive/negative cases. | Add “Example: … → Score 5” pairs before the query. |
| 2️⃣ Temperature tuning | Controls entropy of logits; lower temperature sharpens decisions, higher temperature smooths. Find the sweet spot where logit gaps match human confidence intervals. | Sweep \(T\in[0.1,1.0]\) on a validation set and pick \(T^\*\) minimizing calibration error (ECE). |
| 3️⃣ Temperature‑scaled Platt scaling | Convert logits to calibrated probabilities via a sigmoid fit: \(p=\sigma(a\,z+b)\), where \(z\) is the raw logit. | Train \(a,b\) on held‑out judgments, then apply to new scores. |
| 4️⃣ Ensemble over prompts | Reduce variance due to prompt wording; average logits across 3–5 distinct but equivalent prompts. | Store each prompt’s logits and compute mean score. |
| 5️⃣ Human‑in‑the‑loop sanity check | Verify that the model’s top‑\(k\) predictions align with domain experts on edge cases. | Sample 1% of outputs for expert review; if drift >2%, re‑prompt. |

**Non‑obvious insight**

LLMs *implicitly* learn a *latent similarity space*: two texts get similar embeddings only if they share syntactic, semantic, and pragmatic cues that the rubric rewards. By querying the model with the rubric as an additional “token”, we force it to align its internal geometry with the evaluation objective—a form of *semantic projection*. Thus, calibration is not just about temperature; it’s about aligning the model’s learned manifold with the task manifold. This geometric alignment explains why a well‑prompted LLM often outperforms handcrafted heuristics on nuanced judgments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
