---
qid: ing_76e70fc7fc__fp__local
question: 'Explain: judgy — GitHub - ai-evals-course/judgy: Python package for estimating
  a CIs for metrics evaluated by LLM-as-Judges. \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 521
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:17:25-05:00'
sources: []
---

**Judgy: Confidence Intervals for LLM‑as‑Judge Metrics**

When a large language model (LLM) acts as an evaluator (“judge”) of task outputs—say grading student essays or ranking translations—it produces a *score* \(s_i\) for each item \(i\). The usual practice is to aggregate these scores into a metric \( \hat{M} = f(s_1,\dots,s_n)\), e.g., average precision. However, because the LLM’s judgments are stochastic (different prompts or sampling can change \(s_i\)), \(\hat{M}\) is an *estimator* of the true human‑derived metric \(M^*\).  

Judgy formalises this by treating each item as a Bernoulli experiment: for a binary decision (“good” vs. “bad”), the LLM’s vote is a sample from a distribution with unknown probability \(\theta_i\). The overall metric is then a function of these \(\theta_i\)’s. By applying the delta method or bootstrapping over repeated judge runs, Judgy derives an analytical variance for \(\hat{M}\) and constructs a confidence interval (CI) that quantifies uncertainty due to both sampling noise and the LLM’s calibration error.

**Why this works**

1. **Statistical consistency**: As \(n\to\infty\), \(\hat{M}\) converges to \(M^*\); the CI shrinks accordingly.
2. **Calibration correction**: If the LLM is systematically biased (e.g., always scores 3/5), the variance estimate captures this, preventing overconfident conclusions.
3. **Model‑agnostic**: Any metric that can be expressed as a smooth function of individual scores fits the framework.

**Non‑obvious insight**

Most people treat an LLM’s score as if it were deterministic; Judgy shows that *the shape of the CI is dominated by the judge’s inter‑run variance, not just the number of items*. Thus, improving calibration (e.g., via prompt tuning) can be more effective than simply adding more data. This shifts the engineering focus from dataset size to model reliability.

In short, Judgy turns an LLM‑based evaluator into a statistically principled metric estimator, enabling rigorous comparison and error quantification in AI research.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
