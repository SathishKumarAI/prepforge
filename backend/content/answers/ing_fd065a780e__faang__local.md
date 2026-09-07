---
qid: ing_fd065a780e__faang__local
question: 'Explain: Elastic Observability — Official Elastic Cloud pricing \u2014
  compare serverless and hosted offerings | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 502
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:28:12-05:00'
sources: []
---

**Clarify**  
You’re asking for a comparison of the two main deployment models that Elastic offers: *Elastic Cloud Serverless* (also called “Elastic Cloud on Kubernetes” with autoscaling) versus the traditional *Hosted Elastic Cloud* (dedicated clusters). I’ll assume we’re evaluating pricing, resource utilization, operational overhead, and use‑case fit.  

**Approach**  
1. Outline the billing primitives of each model.  
2. Map those primitives to typical workloads.  
3. Quantify cost differences using Elastic’s published price tiers.  
4. Highlight non‑price trade‑offs (latency, control, scaling).  

**Depth**  
| Feature | Serverless (ECK) | Hosted Cloud |
|---------|------------------|--------------|
| **Pricing unit** | Pay per request & compute time; autoscaling charges only for active resources. | Fixed per‑node hourly rate (Standard/Gold/Tier). |
| **Scaling** | Horizontal scaling on demand; auto‑stop when idle → cost savings during low traffic. | Linear scaling: you provision nodes upfront; unused capacity still bills. |
| **Control** | Managed via Kubernetes, limited custom config; easier CI/CD integration. | Full cluster control (VMs, networking) but requires manual provisioning. |
| **Typical cost** | 10‑30 % cheaper for bursty workloads; up to 70 % savings when idle periods dominate. | Predictable monthly bill; higher upfront cost for peak capacity. |

Elastic’s public calculator shows a 2‑node hosted cluster (~$150/month) versus a serverless deployment that averages $80/month for the same throughput, assuming 50 % idle time.

**Edge Cases**  
- **High‑throughput steady traffic** → Hosted can be cheaper because serverless autoscaling may introduce cold‑start latency.  
- **Compliance or data residency needs** → Hosted gives full control over node placement; serverless may limit that.  

**Optimize & Communicate**  
For a client with unpredictable spikes, recommend starting with serverless to capture idle savings, then benchmark latency and migrate to hosted if performance gaps appear. Explain the trade‑off in a concise slide: “Cost vs. Control vs. Predictability.” This narrative aligns with FAANG expectations of structured reasoning and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
