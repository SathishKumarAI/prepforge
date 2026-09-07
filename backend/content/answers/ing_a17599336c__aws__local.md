---
qid: ing_a17599336c__aws__local
question: 'Explain: Transit Gateway — Typical AWS Network Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 410
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:30:19-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role I led the redesign of our global data‑science platform. **Customer Obsession** drove me to reduce latency for analysts in 12 regions, while **Ownership** kept the project on schedule and within budget.

*Situation:* Our ML workloads were spread across three VPCs (data lake, compute, and model deployment). Each had its own peering link; cross‑region traffic hit 4 Gbps of inter‑VPC hops, costing ~$12k/month and causing unpredictable spikes.

*Task:* Build a single, scalable network that unifies all VPCs, supports east‑west data flow, and simplifies cost tracking.

*Action:* I proposed an **AWS Transit Gateway (TGW)** architecture:
- One TGW per region with inter‑region attachments via AWS Direct Connect.
- Each VPC attached through a TGW attachment; security groups & NACLs enforce isolation.
- Used *Route Propagation* to automatically distribute routes, eliminating manual updates.
- Leveraged *TGW Managed Prefix Lists* for fine‑grained access control.

I modeled traffic patterns in CloudWatch and projected a 30 % reduction in data transfer costs. I also added **AWS PrivateLink** endpoints for S3/Redshift to keep ML pipelines fully private.

*Result:* Deployment completed two weeks early (vs the original 6‑week plan), cut inter‑region egress by 32 %, and lowered monthly network spend from $12k to $8k. Analysts reported a 15 % faster model training time. The solution is now replicated across all new VPCs, proving its scalability.

**Bar‑raiser takeaway:** Demonstrated deep technical knowledge of TGW, quantified cost savings, and owned the end‑to‑end rollout—exactly what Amazon looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
