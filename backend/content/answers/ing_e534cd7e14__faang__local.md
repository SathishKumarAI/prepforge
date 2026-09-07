---
qid: ing_e534cd7e14__faang__local
question: 'Explain: You are embedded with an enterprise customer whose stated goal
  is "we want AI in our workflows", with no spec. Walk me through your first month.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 457
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:31:09-05:00'
sources: []
---

**Clarify**  
> • What business unit? (sales, ops, support?)  
> • Which workflows are priority? (data entry, decision‑making, creative tasks?)  
> • Success metrics: speedup %, cost savings, error rate?  
> • Data availability & quality, security/compliance constraints.  
> • Stakeholder appetite for experimentation vs. production.

**Approach**  
1. **Discovery** – interview 3–5 domain experts; map current end‑to‑end processes and pain points.  
2. **Data audit** – inventory source systems, data volume, lineage, labeling gaps.  
3. **Pilot scope** – pick a high‑impact, low‑risk use case (e.g., auto‑classification of support tickets).  
4. **MVP build** – data prep → model training (transfer learning if possible) → deployment on internal infra or cloud.  
5. **Evaluation & iteration** – A/B test vs. baseline; collect latency, accuracy, user feedback.

**Depth**  
- Use an MLOps pipeline (Git‑Ops for code, DVC for datasets).  
- Containerize model with Docker + Kubernetes for scalability.  
- Leverage ONNX or TensorRT for inference acceleration.  
- Log predictions and outcomes to a data lake; enable drift monitoring via Evidently/Weights & Biases.  
- Security: encrypt at rest, enforce RBAC on endpoints, audit logs.

**Edge Cases**  
- *Data bias*: test demographic slices.  
- *Model failure*: fallback rule‑based system.  
- *Regulatory*: ensure GDPR/CCPA compliance for personal data.  
- *User resistance*: provide explainability (SHAP) and a feedback channel.

**Optimize & Communicate**  
- Show ROI: compute cost per prediction vs. manual effort; present in executive deck.  
- Iterate to broader workflows once pilot proves value.  
- Set up a “AI Center of Excellence” with quarterly reviews, knowledge sharing, and governance policies.  

This roadmap balances rapid delivery with sustainable, governed AI adoption—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
