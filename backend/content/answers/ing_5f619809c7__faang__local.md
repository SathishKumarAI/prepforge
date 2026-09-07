---
qid: ing_5f619809c7__faang__local
question: 'Explain: A team wants to ship a prompt change to a Claude-powered support
  agent. Design the eval gate that decides if it ships.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 433
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:26:08-05:00'
sources: []
---

**Clarify**  
We need an “eval gate” that approves or rejects a new prompt for a Claude‑powered support agent before production rollout.  
Assumptions to confirm:  

* The prompt change is isolated (no model retraining).  
* We have user traffic and performance metrics from the current baseline.  
* Legal/ethical constraints (e.g., no disallowed content) are enforced elsewhere.

**Approach**  

1. **Define success criteria** – e.g., ≥5 % reduction in average resolution time, ≤2 % drop in customer satisfaction score, no increase in flagged toxic replies.  
2. **Data collection** – run a 48‑hour A/B test with equal traffic to old vs new prompt.  
3. **Metrics & statistical testing** – use two‑tailed t‑test (or Bayesian bandit) on key KPIs; apply Bonferroni correction for multiple metrics.  
4. **Safety audit** – run the new prompt through an internal toxicity checker and a compliance validator.  
5. **Decision rule** – pass if all metrics meet thresholds *and* safety scores stay within bounds.

**Depth**  

The gate is a pipeline:  
`Prompt → Safety Check (≤ 2 % flagged) → A/B Test (≥ 5 % improvement, p<0.01) → Decision`.  
Complexity is O(n) per traffic sample; memory negligible. Trade‑offs: longer test gives tighter confidence but delays release.

**Edge Cases**  

* Sudden spike in negative sentiment during test → abort.  
* Low traffic volume → use Bayesian inference to stop early.  
* Prompt causes system errors (timeouts) → fail fast.

**Optimize & Communicate**  

Add a continuous monitoring layer post‑ship: if metrics drift, trigger rollback. In meetings, present the gate as a safety net that balances speed and quality—“We’re not just measuring numbers; we’re ensuring every customer interaction stays trustworthy.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
