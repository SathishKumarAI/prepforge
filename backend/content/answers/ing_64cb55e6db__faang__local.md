---
qid: ing_64cb55e6db__faang__local
question: 'Explain: Your eval suite is green, ship velocity is good, and users are
  complaining that quality got worse. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 446
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:38:33-05:00'
sources: []
---

**Clarify**  
*Problem:* Test matrix passes (green), deployment cadence high, yet user‑reported degradation in model performance.  
*Assumptions to confirm:*  
1. “Quality” refers to inference metrics (accuracy, latency) or user experience (fidelity, hallucinations).  
2. Users are reporting on the *same* version seen by us (no A/B drift).  
3. Production traffic matches test distribution; no unseen edge cases.

**Approach**  
1. **Collect telemetry:** latency logs, inference errors, error‑rate per endpoint, user‑feedback timestamps.  
2. **Compare metrics over time:** baseline vs. current to spot sudden drifts.  
3. **Audit data pipeline:** training set drift, label quality, feature preprocessing differences.  
4. **Validate production model path:** ensure same preprocessing and post‑processing as eval; check for serialization or quantization bugs.  
5. **Run targeted tests on edge cases** (rare inputs users flagged).  

**Depth**  
- Use *Statistical Process Control* charts to detect mean/variance shifts in predictions.  
- Apply *concept drift detection* (e.g., ADWIN) on feature distributions.  
- If preprocessing changed, run a regression test: feed identical input through both eval and prod pipelines; compare outputs.  
- Complexity: O(N) over traffic logs; constant‑time per request for online checks.

**Edge Cases**  
- A/B testing or canary releases that mask degradation.  
- Users on different locales/OS generating unseen inputs.  
- Model quantization errors only manifest at low‑precision inference.

**Optimize & Communicate**  
1. Fix the root cause (e.g., a mis‑applied feature scaler).  
2. Add an *in‑flight anomaly detector* that flags sudden performance drops and pauses traffic.  
3. Present findings to stakeholders with visual drift plots, risk assessment, and rollback plan.  

By systematically triangulating telemetry, data quality, and production fidelity, we can pinpoint why a green test suite masks real‑world regression.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
