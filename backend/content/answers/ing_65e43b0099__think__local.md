---
qid: ing_65e43b0099__think__local
question: An agent you shipped for a customer four months ago runs on a base model
  the provider is deprecating in 60 days. How do you swap the model without regressing
  quality, and what had to be in place beforehand for that to be possible?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 448
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:47:28-05:00'
sources: []
---

**1. Clarify & set assumptions**  
- The “base model” is a black‑box ML service; we have no access to its internals.  
- Quality is measured by the same metrics (latency, accuracy, A/B test results) that were used at launch.  
- We already have an alternative model (or plan to train one) that is ready to be deployed in production.  

**2. Mental framework – “Model‑swap readiness”**  
Think of the system as a *pipeline*: data → inference engine → post‑processing → metrics.  
To swap models safely, each component must already support **versioning**, **canary deployment**, and **rollback**.  

**3. Step‑by‑step reasoning**  
a. Verify that both old and new models expose identical APIs (input schema, output format).  
b. Ensure the inference service can route traffic to multiple model versions concurrently (e.g., via a load balancer or feature flag).  
c. Deploy the new model behind the same infrastructure but with a small percentage of real traffic (canary).  
d. Run live monitoring: compare latency, error rates, and key business metrics against the baseline.  
e. If all checks pass, gradually increase its share until it fully replaces the old one.  
f. Keep the deprecated model running in the same environment so that a quick rollback is possible if needed.  

**4. Common traps to avoid**  
- Assuming identical input handling; hidden data‑preprocessing differences can cause silent failures.  
- Skipping canary testing; immediate full switchover often reveals unseen regressions.  
- Ignoring rollback readiness; if the new model misbehaves, you need a fast path back to the old one.  

**5. Sanity‑check & communicate**  
Re‑explain the plan to stakeholders: “We’ll run both models in parallel for X days, monitor Y metrics, and only switch when we’re 95 % confident.”  
Double‑check that all monitoring dashboards are tuned to detect subtle drifts before the final cutover.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
