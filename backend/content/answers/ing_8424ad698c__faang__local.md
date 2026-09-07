---
qid: ing_8424ad698c__faang__local
question: 'Explain: Model Cascading (Efficiency Tiers) — Cost Optimization Playbook'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 483
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:52:04-05:00'
sources: []
---

**Model Cascading (Efficiency Tiers)**  
*Cost‑optimization playbook for AI workloads*

| Tier | Model | Trigger | Savings |
|------|-------|---------|---------|
| **Tier 1 – Fast & Cheap** | Lightweight transformer (≤ 5 M params) or distilled BERT | Low‑confidence requests, latency‑sensitive traffic | 80–90 % compute saved vs. baseline |
| **Tier 2 – Balanced** | Medium‑size model (≈ 30 M params) | Moderate confidence or business‑critical queries | 50–60 % reduction in GPU hours |
| **Tier 3 – Full Power** | Large LLM (≥ 175 M params) | High‑confidence, long‑form or domain‑specific tasks | Baseline cost; used sparingly |

### Clarify
- Objective: *reduce inference cost while maintaining acceptable accuracy*.  
- Assumptions to confirm: latency SLA, user‑perceived quality threshold, and available GPU/CPU pool.

### Approach
1. **Confidence estimation** – use a small calibration head or temperature scaling.  
2. **Dynamic routing** – if confidence < θ₁ → Tier 1; else if θ₁≤confidence<θ₂ → Tier 2; otherwise Tier 3.  
3. **Fallback & re‑ranking** – Tier 3 can correct Tier 1/2 mistakes on a subset of traffic.

### Depth
- Implement as a microservice gateway; cache Tier 1 outputs for repeated queries.  
- Complexity: O(1) routing + inference cost ≈ *E[Tier]*.  
- Trade‑offs: More tiers → more model maintenance, but lower average compute.

### Edge Cases
- Cold start on Tier 3 causing latency spikes → pre‑warm pool.  
- Confidence mis‑calibration → drift detection and periodic re‑training.  

### Optimize & Communicate
- Start with two tiers; add a third only after measuring error inflation.  
- Present dashboards: *percentage of traffic per tier, cost savings, SLA compliance*.  
- Iterate θ thresholds via A/B testing to balance ROI vs. user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
