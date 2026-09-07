---
qid: ing_df780d6751__aws__local
question: 'Explain: Server-side failure — How to Troubleshoot if You Can\u2019t Access
  a Particular Website? - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 449
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:44:49-05:00'
sources: []
---

**Situation & Task**  
At a previous role I was the owner of a public‑facing e‑commerce site that went down during a flash sale. The error message “502 Bad Gateway” appeared for every request, and we had no logs because the application tier crashed before it could write to CloudWatch.

**Action (Design & Troubleshoot)**  
1. **Routing check** – queried Route 53 health checks; they were healthy.  
2. **Load balancer diagnostics** – used ELB access logs and X‑Ray traces to confirm that traffic reached the ALB but failed at the target group.  
3. **Instance health** – launched a Spot‑Fleet of identical AMIs, added CloudWatch metrics (CPU > 80 % for 10 min), and discovered that an unpatched kernel caused OOM kills.  
4. **Rollback & patch** – created an immutable AMI with the latest kernel, redeployed via CodeDeploy, and re‑enabled health checks.

**Result**  
Restored service in 18 minutes (down from 1 hour). Post‑mortem showed a 40 % reduction in CPU spikes after patching. Costs were limited to $12 for the Spot‑Fleet, well below our $50 SLA budget.

**Leadership Principles**  
- **Ownership** – I drove the entire incident lifecycle and updated SOPs.  
- **Dive Deep** – Leveraged ELB logs, CloudWatch, and X‑Ray to pinpoint the kernel issue.  

**Bar‑raiser cues**  
The interviewer will look for clear ownership, data‑driven impact (18 min MTTR, $12 cost), depth of investigation, and lessons learned (automated health checks).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
