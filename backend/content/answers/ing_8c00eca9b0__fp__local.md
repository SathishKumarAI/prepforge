---
qid: ing_8c00eca9b0__fp__local
question: How do you evaluate a reward model? Why is held-out pairwise accuracy not
  enough?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 562
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:02:39-05:00'
sources: []
---

### Evaluating a Reward Model: From First Principles

A reward model (RM) assigns scalar scores to generated text so that higher scores imply better quality. The **fundamental objective** is *generalization*: the RM must rank unseen outputs correctly across diverse prompts and models. Thus, evaluation should quantify how well the RM preserves the true preference order on a representative set of candidate responses.

#### Why held‑out pairwise accuracy falls short

Pairwise accuracy measures the fraction of test pairs where the RM’s ordering matches the human label. It conflates two distinct phenomena:

1. **Calibration vs. ranking** – A model can achieve high pairwise accuracy by learning a *threshold* that separates “good” from “bad” responses, yet it may still mis‑rank nuanced differences (e.g., preferring 90 % to 80 % correct answers).
2. **Class imbalance and sampling bias** – If the held‑out set contains many trivial pairs (both good or both bad), accuracy inflates while the model remains blind to fine distinctions.

Consequently, a high pairwise accuracy can mask *distribution shift*: the RM may rank correctly on similar prompts but fail catastrophically on unseen contexts.

#### A principled evaluation metric

Treat each held‑out prompt as a **ranking problem**. For every prompt \(p\) with candidate set \(\{x_i\}\), compute the RM scores \(s_i = f_{\text{RM}}(x_i)\). Define the *expected concordance*:

\[
C = \frac{1}{N} \sum_{p} \frac{2}{k(k-1)} \sum_{i<j}
\mathbb{I}\big[(y_i > y_j) \iff (s_i > s_j)\big]
\]

where \(y_i\) are ground‑truth preference labels and \(k\) is the number of candidates. This is essentially a *rank‑based correlation* (e.g., Spearman’s ρ), penalizing mis‑orderings proportionally to their severity.

#### Non‑obvious insight

A reward model that **minimizes mean squared error** between predicted scores and human ratings often performs worse than one trained with a pairwise ranking loss. The RM’s goal is ordinal, not absolute; thus *ranking losses* align the training objective with evaluation, yielding better generalization.

In short: evaluate RMs by measuring how faithfully they preserve human‑derived orderings across prompts—using rank‑based metrics—not by blunt accuracy on held‑out pairs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
