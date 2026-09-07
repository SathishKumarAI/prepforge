---
qid: ing_dfd017bcb7__faang__local
question: 'Explain: Self-host an open-weights model or call a provider API - walk
  me through the decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 490
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:19:40-05:00'
sources: []
---

**Clarify**  
You’re deciding between hosting a large‑scale open‑weight model on your own infrastructure versus paying a third‑party API (e.g., OpenAI, Anthropic). Key assumptions:  
1) latency requirement (real‑time vs batch).  
2) volume of requests per second.  
3) data privacy / compliance constraints.  
4) budget for compute, storage, networking, and engineering effort.  

**Approach**  
1. Quantify expected traffic & compute needs.  
2. Estimate cost of GPU/TPU clusters, maintenance, and ops.  
3. Compare with API pricing (per token or per request).  
4. Factor in security controls and compliance certifications needed.  

**Depth**  
- *Self‑host*: Requires a cluster of GPUs (e.g., A100s), NVLink networking, persistent storage for 10–20 GB model weights, autoscaling scripts, CI/CD for model updates, monitoring/alerting, and patch management. Operational cost ≈ $3–$5 per GPU hour + network egress; total yearly cost can reach \$200k+ for moderate traffic. Benefits: zero vendor lock‑in, full control over data, ability to fine‑tune on proprietary corpora.  
- *API*: Pay-as-you-go; pricing often starts at ~$0.02/1K tokens. No infrastructure overhead, instant scaling, and the provider handles updates. Downsides include higher long‑term cost for high volume, limited customisation, and potential data residency issues.

**Edge Cases**  
- Extremely low latency (<10 ms) → self‑host with edge GPUs.  
- Regulatory constraints (HIPAA, GDPR) → prefer on‑prem if data cannot leave jurisdiction.  
- Rapid spike in traffic → API offers elasticity without provisioning effort.

**Optimize & Communicate**  
Present a cost‑benefit matrix and a risk register. Suggest a hybrid: start with the provider for MVP, then migrate critical workloads to self‑host once usage stabilises. Emphasise that decision hinges on quantifiable metrics—traffic, cost per token, compliance, and time‑to‑value. This structured narrative demonstrates clear problem framing, analytical depth, and practical trade‑off communication—all key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
