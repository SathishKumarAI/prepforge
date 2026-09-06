---
qid: ing_9801830dd8__fp__local
question: How do you measure inter-annotator agreement on a human labelling effort,
  and what do you do when your annotators disagree a lot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 600
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:29:24-05:00'
sources: []
---

### Why we need a *metric* at all

When humans label data for an AI model, the labels become the ground truth that the algorithm learns from. If annotators disagree, the training signal is noisy; the learner may converge to a distribution that reflects the *average* opinion rather than any real phenomenon. Therefore, before any modeling we must quantify how much of this noise comes from human variation and not from the data itself.

### The first‑principles metric: weighted Cohen’s κ (or Fleiss’ κ for >2 annotators)

1. **Observed agreement** \(P_o\) is simply the proportion of tokens that all annotators assign the same class.
2. **Chance agreement** \(P_e\) reflects how much overlap we would expect if each annotator were drawing labels at random from their own marginal distribution.
3. The *κ* statistic  
   \[
   κ = \frac{P_o-P_e}{1-P_e}
   \]
   rescales the raw agreement to the range \([-1,1]\), penalising high \(P_o\) that could arise by chance.  
4. When more than two annotators are involved, **Fleiss’ κ** generalises this idea: it computes a weighted average of pairwise *κ* values, automatically accounting for class imbalance.

### What to do when κ is low

| Step | Rationale |
|------|-----------|
| **Audit the guidelines** | If κ ≈ 0.3–0.5, often the task definition is ambiguous. Revising instructions or adding clarifying examples can raise κ by aligning annotators’ mental models. |
| **Introduce adjudication** | A senior reviewer resolves disagreements on a random sample; this produces *gold* labels that can be used to calibrate model loss functions (e.g., weighted cross‑entropy). |
| **Model the annotator as an expert** | Treat each annotator’s label as a noisy observation of a latent true class. Use a Bayesian hierarchical model (e.g., Dawid–Skene) to infer both the true labels and per‑annotator error rates, then train on the inferred truth. |
| **Re‑label only hard cases** | Allocate more effort to items with high disagreement; this concentrates resources where uncertainty is greatest and reduces overall noise. |

### Non‑obvious insight

A low κ often signals *systematic bias* rather than random error: one annotator consistently favors a particular class (e.g., “neutral” over “positive”). By modeling each annotator’s confusion matrix, we can correct for these biases during training—effectively turning the disagreement into informative signal instead of treating it as noise. This turns an apparently problematic situation into an advantage for robust model learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
