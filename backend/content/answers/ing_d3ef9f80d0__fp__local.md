---
qid: ing_d3ef9f80d0__fp__local
question: 'Explain: A/B Testing — Langsmith Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 466
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:31:46-05:00'
sources: []
---

**A/B testing for Langsmith observability**

*Fundamental problem.*  
When a language‑model (LM) pipeline is deployed, we cannot observe the true semantic quality of its outputs directly; we only see noisy signals such as latency, error rates, or user‑reported relevance. The question is: *does a new LM configuration actually improve the underlying task?*

*Why A/B must work this way.*  
A/B testing treats each request as an i.i.d. draw from one of two probability distributions: the control distribution \(P_0\) (current pipeline) and the treatment distribution \(P_1\) (new changes). We estimate a performance metric \(\theta = \mathbb{E}_{P}[f(y)]\), where \(f\) is an observable proxy for quality. By randomising requests, we eliminate confounding variables—traffic spikes, user demographics, or seasonal effects—so that any difference in the estimated \(\hat{\theta}\) can be attributed to the pipeline change. Statistical hypothesis testing (e.g., two‑sample t‑test or Bayesian A/B) quantifies whether the observed difference exceeds random variation.

*Connection to deeper principles.*  
This is an instance of **online stochastic optimisation**: we iteratively sample from the environment, evaluate a loss, and adjust parameters. The observability layer in Langsmith acts as a *feedback channel*, providing the empirical estimates \(\hat{\theta}\). By coupling this with bandit algorithms, one can turn A/B into an adaptive experiment that automatically allocates more traffic to promising configurations.

*Non‑obvious insight.*  
Most practitioners treat A/B metrics as black‑box numbers. The key insight is that *the shape of the metric’s sampling distribution matters*. For example, latency follows a log‑normal tail; treating it with a Gaussian assumption biases the significance test. By modelling the true distribution (e.g., using quantile regression or survival analysis), Langsmith can deliver more reliable confidence intervals and prevent false positives—especially critical when deploying safety‑critical LLMs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
