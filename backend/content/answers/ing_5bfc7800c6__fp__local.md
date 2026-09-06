---
qid: ing_5bfc7800c6__fp__local
question: What are the known biases of LLM judges, and how do you mitigate each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 671
total_tokens: 847
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:19:45-05:00'
sources: []
---

**Why LLM judges can be biased**

A language‑model judge is trained by maximizing the likelihood of text in a corpus that was written by humans who themselves are products of social structures.  
The learning objective therefore *forces* the model to reproduce the statistical regularities of that data, including spurious correlations (e.g., gender → occupation) and systematic under‑representation of minority viewpoints.  In mathematical terms, the model learns an approximation \( \hat{P}(y|x) \) that minimises cross‑entropy, which is equivalent to learning a *maximum‑entropy* distribution conditioned on observed co‑occurrences.  When the training set is imbalanced, the entropy minimum lies far from a fair decision boundary.

**Mitigation strategies**

| Bias | Root cause | Countermeasure |
|------|------------|----------------|
| **Demographic bias** | Imbalanced class priors | Re‑weight or re‑sample to equalize \(P(x)\); use *counterfactual data augmentation* to generate synthetic minority cases. |
| **Confirmation bias** | Over‑confidence in frequent patterns | Apply *temperature scaling* and *ensemble calibration*; introduce a “fact‑checking” sub‑module that cross‑refs external knowledge bases. |
| **Amplification of training noise** | Model memorization due to large capacity | Use *weight decay*, *dropout*, or *parameter tying* to limit overfitting; periodically fine‑tune on a clean, curated adjudication set. |
| **Causal misattribution** | Reliance on correlational cues | Incorporate *causal inference modules* (e.g., do‑calculus) to test whether a feature is a legitimate predictor or merely a proxy for protected attributes. |

**Non‑obvious insight**

Bias mitigation is not only about adjusting sample weights; it’s about **constraining the information flow** from input to output.  By treating the LLM as an *information bottleneck*—forcing it to compress \(x\) into a latent representation that discards protected‑attribute signal while preserving adjudicative relevance—we can achieve fairness without sacrificing predictive power. This perspective turns bias control into an optimization problem over mutual information, offering a principled path to robust, equitable LLM judges.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
