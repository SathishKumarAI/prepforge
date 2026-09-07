---
qid: ing_6487e38ca9__faang__local
question: The customer's CISO says no data can leave their network. How does that
  constrain your architecture, and what are the options?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 421
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:38:08-05:00'
sources: []
---

**Clarify**  
The customer’s policy is *no outbound data flow*. We must keep all training/ inference data, logs, and model artifacts inside their perimeter. Key assumptions:  
* They have a secure internal network (VPC/VPN).  
* External connectivity is only for software updates or license verification.  
* The CISO will audit any outbound traffic.

**Approach**  
1. **On‑premises deployment** – run the entire AI stack inside their data center.  
2. **Hybrid edge + secure gateway** – keep heavy compute locally, but push minimal encrypted summaries to a trusted cloud for updates or compliance reporting.  
3. **Zero‑trust API layer** – expose only vetted endpoints that never send raw data outside.

**Depth**  
*Deploy on‑prem:* Use Docker/Kubernetes in their network; store models in an internal registry; use local GPUs/TPUs. All training and inference happen locally, so no egress.  
*Hybrid edge:* Offload heavy preprocessing to a secure edge device that aggregates anonymized metrics; send only those metrics over HTTPS with mutual TLS to the cloud for analytics or model updates—no raw data leaves.  
*Zero‑trust API:* Implement an internal service mesh (e.g., Istio) to enforce mTLS, rate limits, and logging. All traffic stays within the VPC.

**Edge Cases**  
- Model updates: must be signed and verified before deployment.  
- Logging: ensure logs are retained locally; no transmission of raw logs.  
- Third‑party libraries: audit for hidden telemetry.

**Optimize & Communicate**  
Present a diagram showing the isolated network, internal registry, and optional secure gateway. Highlight that this architecture satisfies the “no data leaving” rule while still allowing model evolution. Explain trade‑offs: higher on‑prem cost vs compliance guarantee. This structured explanation demonstrates problem understanding, solution depth, and communication—key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
