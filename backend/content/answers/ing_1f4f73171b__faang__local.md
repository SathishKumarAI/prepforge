---
qid: ing_1f4f73171b__faang__local
question: 'Explain: Tell me about a time you argued to kill an AI feature that was
  already live.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 408
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:57:31-05:00'
sources: []
---

**Clarify**  
The interview asks for a concrete example where I opposed a deployed AI feature, convinced the team it should be removed, and how I navigated that. I’ll assume the feature was a recommendation engine on an e‑commerce site that started showing irrelevant or biased results.

**Approach**  
1. Identify the problem: user complaints + analytics drop.  
2. Gather evidence: A/B test data, error rates, bias audit.  
3. Build a business case: impact on conversion vs cost of fixing.  
4. Propose alternatives: retrain with balanced data or temporary rollback.

**Depth**  
I presented a 3‑slide deck to product and engineering:  
- *Slide 1*: KPI chart showing a 12% lift in click‑through but a 7% drop in checkout after the rollout.  
- *Slide 2*: Confusion matrix highlighting a 30% false‑positive rate for high‑value items.  
- *Slide 3*: Cost–benefit of stopping vs. refitting, showing that a rollback would recover $250k/month in lost revenue within two weeks.

I led the discussion, answered questions about data drift, and secured an executive sign‑off to suspend the feature while we redesigned the model. The new model, trained on a diversified dataset, lifted conversion back to baseline within a month.

**Edge Cases**  
- *What if the rollback hurt brand trust?* We ran parallel A/B tests with a “no recommendation” control to confirm user satisfaction remained stable.  
- *Could the feature be kept in a limited scope?* I evaluated a phased rollout for low‑risk categories, which we eventually adopted.

**Optimize & Communicate**  
I learned that framing the argument around clear metrics and business impact, not just technical flaws, convinces stakeholders faster. In future, I’ll embed continuous bias monitoring into the pipeline so such conflicts surface earlier.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
