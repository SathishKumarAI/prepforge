---
qid: ing_a2b0590250__fp__local
question: How do you put eval gates into CI/CD for prompts and model versions?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 481
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:51:47-05:00'
sources: []
---

### Why an “eval gate” is *necessary*  
When a model or prompt changes, the **objective function** you actually care about (e.g., user satisfaction, safety, revenue) shifts from *parameter space* to *output distribution*. A CI/CD pipeline that only checks syntactic correctness is blind to this shift; it cannot guarantee that new weights or prompts preserve the target metrics.  
Hence an eval gate must **measure expected utility**—the expected value of the output under a realistic user‑interaction model—and compare it against a statistically sound baseline.

### How to build one  
1. **Define the metric** as a *probabilistic expectation* over user queries \(q\) and responses \(r\):  
   \[
   U(\theta)=\mathbb{E}_{q}\big[\,\text{utility}(f_\theta(q),q)\,\big].
   \]
2. **Sample a validation set** that reflects production distribution (query‑type, length, context).  
3. **Run the candidate model** on this set and compute *confidence intervals* for \(U(\theta)\) using bootstrapping or Bayesian posterior sampling.  
4. **Set a threshold** as a lower bound on the interval: if the entire interval lies above the baseline’s interval, the gate passes.

### Integration into CI/CD  
- Embed the evaluation script in a container that pulls the latest model artifact and prompt file.  
- Treat the script’s exit code as the gate signal; CI aborts merge or deployment if it fails.  
- Store the confidence intervals in a time‑series database so trends can be plotted (detecting drift early).

### Non‑obvious insight  
Most teams treat eval gates as *unit tests* that simply “should work.” In reality, they are **hypothesis tests** about *expected utility*. Because the metric is stochastic, a single run can mislead; only by conditioning on statistical confidence do you avoid false positives and negatives. This transforms the gate from a brittle rule into a principled *risk‑control* mechanism that scales with model complexity and data volume.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
