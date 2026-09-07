---
qid: ing_ba5c1a277c__faang__local
question: 'Explain: Error Handling and Recovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 507
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:56:04-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how an AI system detects, manages, and recovers from errors—whether they’re data‑quality faults, inference failures, or deployment glitches. I’ll assume we’re talking about production ML pipelines (data ingestion → training → serving) in a cloud environment.

**Approach**  
1. **Detection** – monitor data quality metrics, model confidence, latency, and anomaly scores.  
2. **Isolation** – classify the error type (e.g., input drift vs. hardware fault).  
3. **Recovery** – decide between fallback models, rollbacks, or re‑training triggers.  
4. **Notification & audit** – log incidents, alert ops, and feed back into continuous improvement.

**Depth**  
- *Data errors*: use schema validation + outlier detection; if a batch fails, quarantine it and trigger an automated retraining job with the clean subset.  
- *Inference failures*: wrap model calls in try/except blocks; on exception, return a default safe‑response or route to a simpler “fallback” model that’s robust but less accurate.  
- *Deployment issues*: implement blue‑green deployments; if the new version shows higher error rates (tracked via A/B testing), automatically roll back and alert SREs.  
- *Explainability failures*: if SHAP/ICE diagnostics reveal sudden feature importance shifts, flag for data curator review.  

Complexity: monitoring is O(1) per request, retraining can be O(N log N). Trade‑offs involve latency vs. safety—fallback models add overhead but prevent cascade failures.

**Edge Cases**  
- Sudden concept drift that bypasses thresholds → trigger a manual audit.  
- Distributed system partial outages leading to duplicated inference requests.  
- Non‑deterministic model outputs causing flaky tests; use deterministic seeds for validation runs.

**Optimize & Communicate**  
I’d propose adding a “self‑healing” layer: an orchestrator that, upon detecting a persistent error pattern, auto‑spawns a new training job with updated hyperparameters. I would explain this as “error handling is proactive monitoring + automatic rollback or retraining,” and emphasize the loop of detection → isolation → recovery → learning back into the pipeline. This shows structured thinking, clear trade‑offs, and a focus on resilience—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
