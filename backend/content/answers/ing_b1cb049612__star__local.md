---
qid: ing_b1cb049612__star__local
question: 'Explain: You''re running an A/B test on a new model. Walk me through designing
  it, and tell me what you''d refuse to do once it''s live.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 362
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:27:17-05:00'
sources: []
---

**Situation:**  
At my last startup we were rolling out a next‑generation recommendation engine that used a transformer‑based model. The product team wanted to know if the new model improved click‑through rate (CTR) without hurting revenue per session.

**Task:**  
Design an A/B test that isolates the model’s impact on CTR, revenue, and latency while ensuring user experience isn’t degraded. Also decide what I would refuse to do once the experiment was live.

**Action:**  
I set up a randomized traffic split of 10% for variant B (new model) and 90% for control A. We used feature flags in our Java microservice, with each request routed through an inference container that logged latency, CPU usage, and prediction confidence to Kafka. The test ran for two weeks to capture weekly churn patterns. I defined a Bayesian stopping rule: if posterior probability of a >5 % lift in CTR dropped below 95 %, we’d stop early. Post‑hoc, I performed a causal forest analysis to confirm no covariate imbalance.

**Result:**  
Variant B delivered a 4.3 % relative increase in CTR and a 1.8 % lift in revenue per session, with latency staying within the 30 ms SLA for 98 % of requests. The Bayesian rule allowed us to stop after two weeks instead of the planned four.  

**What I’d refuse to do:**  
Once live, I would never push a model that increases latency or CPU usage beyond agreed SLAs, even if it slightly boosts CTR. Maintaining a consistent user experience is paramount; performance regressions undermine trust and can cascade into higher support costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
