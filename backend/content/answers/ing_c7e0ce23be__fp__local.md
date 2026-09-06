---
qid: ing_c7e0ce23be__fp__local
question: Evals are nondeterministic - temperature, sampling, flaky agents. How do
  you get trustworthy numbers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 485
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:06:20-05:00'
sources: []
---

**Why the score is a *random variable***  
When an LLM generates text with temperature > 0, each token is drawn from a probability distribution that changes every step. The final evaluation (e.g., BLEU, human rating) therefore depends on the stochastic path taken by the model. If we treat the score as deterministic, we ignore this source of variance and risk over‑optimistic conclusions.

**Deriving a trustworthy estimate**  
1. **Model the score distribution**: Let \(S\) be the random variable representing the evaluation metric for one prompt.  
2. **Sample repeatedly**: For each prompt generate \(n\) completions (e.g., 50–200). Compute \(\hat{\mu} = \frac{1}{n}\sum S_i\) and \(\hat{\sigma}^2 = \frac{1}{n-1}\sum (S_i-\hat{\mu})^2\).  
3. **Apply concentration bounds**: By Hoeffding or Bernstein inequalities, construct a confidence interval \([\hat{\mu}-z_{\alpha/2}\hat{\sigma}/\sqrt{n},\,\hat{\mu}+z_{\alpha/2}\hat{\sigma}/\sqrt{n}]\) that holds with probability \(1-\alpha\).  
4. **Aggregate across prompts**: If you have multiple prompts, treat each prompt’s mean as an independent sample and repeat the same procedure to get a global interval.

**Non‑obvious insight**  
The *effective* variance is often dominated by the *entropy of the policy*, not just the model size. By calibrating temperature so that the entropy matches a target value (e.g., 1 bit), you can reduce \(\hat{\sigma}\) without changing the mean, tightening confidence intervals with fewer samples.

**Bottom line**  
Trustworthy numbers come from treating the evaluation as a statistical experiment: sample enough times to estimate the mean and variance, then use rigorous bounds to report confidence. This turns nondeterminism into a quantified uncertainty rather than a flaw.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
