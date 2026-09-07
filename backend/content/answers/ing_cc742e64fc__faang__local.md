---
qid: ing_cc742e64fc__faang__local
question: 'Explain: Two days before a release decision, simulation shows a 15% increase
  in hard-braking events in one scenario cluster. Walk me through what you do.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 430
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:34:47-05:00'
sources: []
---

**Clarify**  
We’re two days from a product release and our simulation flags a *15 % spike* in hard‑brake events for a specific scenario cluster (e.g., urban canyon). I’d confirm:  

1. Which sensor data, model version, and scenario definition triggered the alert?  
2. Is this an isolated spike or part of a trend across recent runs?  
3. Does the simulation reflect real‑world driving conditions (traffic density, weather)?

**Approach**  
1. **Re‑run the simulation** with the exact seed & config to reproduce the anomaly.  
2. **Instrument logs**: capture braking thresholds, deceleration profiles, and trigger contexts.  
3. **Cross‑validate** against a holdout dataset or real‑world telemetry if available.  
4. If confirmed, **isolate the feature** (e.g., sensor fusion weight) causing the change.

**Depth**  
- Re‑run: O(n) in scenario count; negligible given 2 days left.  
- Log analysis: parse ~10 MB of JSON → linear scan.  
- Feature ablation: retrain a small subset of the model (e.g., adjust LIDAR weight) and re‑evaluate—O(1) relative to full training.  

If the spike is real, we’ll **rollback** the recent parameter tweak or clamp braking thresholds in that cluster. If simulation noise, we flag for next sprint.

**Edge Cases**  
- Simulation drift (different random seed).  
- Data poisoning (corrupted sensor data).  
- Over‑fitting to a single scenario cluster; test on adjacent clusters.

**Optimize & Communicate**  
I’d document findings in a 2‑page runbook, update the release checklist, and brief the product owner: “We’ve isolated a hard‑brake spike tied to X; mitigation plan is Y, with rollback path.” This keeps stakeholders informed while ensuring safety without delaying the release.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
