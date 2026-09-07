---
qid: ing_65e43b0099__faang__local
question: An agent you shipped for a customer four months ago runs on a base model
  the provider is deprecating in 60 days. How do you swap the model without regressing
  quality, and what had to be in place beforehand for that to be possible?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 404
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:41:21-05:00'
sources: []
---

**Clarify**  
We need a seamless transition from the current base model (now deprecated) to a new one within 60 days without losing accuracy or user experience. Assume we already have monitoring, logging, and a well‑defined CI/CD pipeline for models.

**Approach**  
1. **Versioned Model Registry** – keep all candidate models tagged with metrics.  
2. **Feature‑store consistency** – ensure input features are identical across models.  
3. **Canary deployment** – roll out the new model to a small percentage of traffic, compare real‑time metrics vs baseline.  
4. **Automated rollback** – if error rates or latency spike beyond thresholds, revert instantly.

**Depth**  
- Deploy the new model behind a routing layer (e.g., Envoy) that can switch traffic weights.  
- Use A/B testing to gather confidence intervals on key KPIs (precision@k, F1).  
- If the new model passes statistical tests, shift weight to 100 %.  
- Maintain parallel inference pipelines during the transition for safety.

**Edge Cases**  
- Feature drift: if the new model requires a different feature representation, the swap fails.  
- Latency spikes: new model slower → user complaints.  
- Data privacy mismatches (e.g., GDPR) between old and new models.

**Optimize & Communicate**  
Pre‑deployment we should have had:
- A **continuous integration pipeline** that trains, tests, and pushes models to a registry.  
- **Automated monitoring dashboards** for latency, accuracy, and drift.  
- An **incident playbook** covering rollback steps.  

During the swap, I’d narrate: “We’re moving 5 % traffic to the new model today; we’ll monitor key metrics and roll back if any exceed our thresholds.” This keeps stakeholders informed while ensuring technical rigor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
