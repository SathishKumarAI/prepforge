---
qid: ing_a72bb3004c__faang__local
question: The VP saw a flawless demo and now expects 100% accuracy in production.
  How do you manage that expectation without killing the deal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 412
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:13:13-05:00'
sources: []
---

**Clarify**  
The VP sees an end‑to‑end demo that looks perfect—no misclassifications on a small test set. In production we’ll face noisy data, concept drift, and user‑generated inputs. Ask: *What level of error is tolerable for the business?* *Which metrics (precision, recall, latency) drive value?* *Is there a rollback or staged rollout plan?*  

**Approach**  
1. **Quantify risk** – run the demo model on a held‑out validation set that mimics production distribution; report confidence intervals and worst‑case error rates.  
2. **Define success criteria** – translate business goals into measurable thresholds (e.g., 95 % precision on high‑impact predictions).  
3. **Communicate trade‑offs** – explain that perfect accuracy is unattainable; more data, retraining cycles, or hybrid human‑in‑the‑loop can close gaps over time.  

**Depth**  
- Use bootstrapping to estimate 95 % CI on error rates.  
- Build a monitoring dashboard (latency, drift metrics) with alerts for deviations > 2σ from baseline.  
- Plan A/B testing: roll out to a small cohort first; if KPI ≥ target, expand gradually.  

**Edge Cases**  
- Data distribution shift (e.g., new user demographics).  
- Adversarial inputs or spoofing attempts.  
- Regulatory constraints on false negatives in safety‑critical domains.  

**Optimize & Communicate**  
Present the plan as a *minimum viable production* with iterative improvement cycles—first stage: 90 % accuracy, second: 95 %, final: target. Emphasize that early deployment unlocks real‑world feedback, faster feature validation, and a stronger case for continued investment. This keeps the deal alive while setting realistic, measurable expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
