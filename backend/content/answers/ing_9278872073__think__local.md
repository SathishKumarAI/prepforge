---
qid: ing_9278872073__think__local
question: 'Q: How do you detect quality degradation in production?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 368
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:46:42-05:00'
sources: []
---

**1️⃣ Clarify the goal & context**  
   - *What* is “quality” (latency, accuracy, availability)?  
   - *When* should we trigger an alert?  
   - Assume a model‑driven service with monitoring in place.

**2️⃣ Adopt a monitoring framework**  
   - **Metric layers**: raw data → KPI → business impact.  
   - Use A/B or online‑learning pipelines to compare current vs baseline.

**3️⃣ Reason step‑by‑step**  

1. *Baseline* – collect steady‑state metrics over a representative period.  
2. *Anomaly detection* – apply statistical tests (Z‑score, EWMA) or ML‑based detectors on key KPIs.  
3. *Root‑cause filtering* – cross‑check with downstream signals (DB latency, traffic spikes).  
4. *Decision logic* – if deviation > threshold AND persists > N minutes → flag degradation.  

**4️⃣ Avoid common traps**  

- **Over‑reacting to noise**: use smoothing or require persistence before alerting.  
- **Single‑metric focus**: combine multiple signals (error rate + latency).  
- **Ignoring context**: consider scheduled deployments, traffic changes.

**5️⃣ Sanity‑check & communicate**  

- Verify with a quick sanity plot of the metric over time.  
- Explain in plain terms: “We saw a 15 % rise in error rate lasting 10 min; the model’s precision dropped from 0.92 to 0.85.”  
- Provide actionable next steps (re‑train, rollback).  

This structured reasoning keeps detection both systematic and adaptable across different AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
