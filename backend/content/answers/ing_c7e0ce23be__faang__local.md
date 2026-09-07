---
qid: ing_c7e0ce23be__faang__local
question: Evals are nondeterministic - temperature, sampling, flaky agents. How do
  you get trustworthy numbers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 512
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:25:15-05:00'
sources: []
---

**Clarify**  
The question asks how to obtain reliable performance metrics for language‑model evaluations when the generation process is stochastic (temperature, top‑k/n sampling, etc.) and agents may behave differently on each run.  
Assumptions I’d confirm:  
- We have a fixed evaluation set (questions/benchmarks).  
- The model can be queried multiple times with identical prompts.  
- We care about *expected* scores rather than single‑shot outputs.

**Approach**  
1. **Statistical averaging** – run each prompt many times and average the metric.  
2. **Variance estimation** – compute confidence intervals to quantify uncertainty.  
3. **Controlled randomness** – either fix seeds for reproducibility or use deterministic decoding (greedy) when appropriate.  
4. **Batching & caching** – cache identical prompt–output pairs to avoid redundant calls.

**Depth**  
- For each example, execute *N* independent generations (e.g., N = 100).  
- Compute the metric \( \hat{\mu} = \frac{1}{N}\sum_{i=1}^{N} m_i \).  
- Estimate variance \( s^2 = \frac{1}{N-1}\sum (m_i-\hat{\mu})^2 \) and a 95 % CI:  
  \(\hat{\mu} \pm 1.96\sqrt{s^2/N}\).  
- Complexity: O(N·M) where M is the number of examples; linear in both.  
- Trade‑off: higher N → tighter CIs but more compute.

**Edge Cases**  
- **Zero variance** (deterministic decoding): CI collapses to 0, but still report mean for consistency.  
- **Outliers** from rare sampling events: consider robust estimators (median) if skewed.  
- **Time‑budget constraints**: adapt N per example based on preliminary variance.

**Optimize & Communicate**  
- Use *stratified* sampling if the dataset has subgroups; allocate more runs to high‑variance strata.  
- Parallelize generations across GPUs/TPUs to keep wall‑time reasonable.  
- Present results as mean ± CI tables and plot error bars in dashboards.  

By quantifying uncertainty explicitly, we transform flaky agent outputs into trustworthy performance estimates that stakeholders can act on confidently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
