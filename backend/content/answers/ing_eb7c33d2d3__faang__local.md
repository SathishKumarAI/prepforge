---
qid: ing_eb7c33d2d3__faang__local
question: Your agent passes 92% of eval tasks. Why might that number be misleading,
  and what would you measure instead?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 508
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:47:39-05:00'
sources: []
---

**Clarify**  
You’re being asked why a single metric—*“the agent passes 92 % of evaluation tasks”*—can be deceptive and what alternative KPIs would paint a more accurate picture of its AI‑capability.  
Assumptions: the evaluator uses a fixed test suite, success is binary (pass/fail), and all tasks are equally weighted.

**Approach**  
1. Identify sources of bias in the 92 % figure.  
2. Propose complementary metrics that expose hidden weaknesses.  
3. Discuss how to aggregate these into a holistic score.

**Depth**  

| Why 92 % is misleading | What to measure instead |
|------------------------|-------------------------|
| **Task distribution bias** – If most tasks are trivial or from one domain, the agent looks strong while being weak elsewhere. | *Domain‑coverage* – percentage of distinct problem categories solved. |
| **Binary outcome hides nuance** – A 0.51 % success rate on a hard task counts as a pass. | *Confidence‑weighted accuracy* – average probability assigned to correct answer, or *expected reward*. |
| **No measure of efficiency** – An agent that takes hours vs. seconds is indistinguishable. | *Time‑to‑completion* and *resource usage* per task. |
| **Robustness not captured** – The agent might fail catastrophically on a single adversarial input. | *Adversarial robustness score* (e.g., success rate under perturbed inputs). |
| **Generalization unknown** – It may overfit the eval set. | *Zero‑shot / few‑shot generalization benchmark* and *cross‑dataset transfer performance*. |

**Edge cases**  
- An evaluator that inadvertently includes duplicate or near‑duplicate tasks inflates the score.  
- If task difficulty isn’t graded, a hard problem solved once can skew the overall percentage.

**Optimize & communicate**  
Combine these metrics into a weighted dashboard: 40 % coverage, 25 % confidence, 15 % efficiency, 10 % robustness, 10 % generalization. Explain that this multi‑faceted view aligns with FAANG’s emphasis on *impact*, *scalability*, and *user safety*. It turns a misleading single number into actionable insights for product teams and research labs alike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
