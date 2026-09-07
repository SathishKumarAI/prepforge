---
qid: vq_7ce355edca__aws__local
question: Which of the following is not an advantage of a client/server model ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 380
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:59:48-05:00'
sources: []
---

**Answer (Amazon‑style STAR)**  

> **Situation:** While designing a new micro‑service for our e‑commerce platform, I was asked to evaluate whether the classic client/server model would still provide benefits over a peer‑to‑peer or serverless approach.  
> 
> **Task:** Identify which statement *is not* an advantage of the client/server model.  
> 
> **Action:** I compared each option against our architectural goals: *customer‑centric latency, operational ownership, and cost predictability*. The four statements were:  
> 1. Centralized control over data consistency.  
> 2. Easier scaling by adding more servers.  
> 3. **No single point of failure** (the one that is actually a disadvantage).  
> 4. Simplified security enforcement on the server side.  
> I mapped each to our AWS stack: RDS for consistency, Auto Scaling Groups for #2, ELB+Route 53 for high availability, and IAM roles for #4. The third statement contradicted the core principle of *Availability*—client/server introduces a single failure point unless mitigated with load balancers and fail‑over clusters.  
> 
> **Result:** I documented that “**No single point of failure**” is *not* an advantage; in fact, it’s a risk if not engineered correctly. This clarification helped the team adopt AWS Global Accelerator + multi‑AZ deployments, reducing our outage window from 45 min to < 5 min (a 90% improvement).  

> **Leadership Principles:** *Ownership* – I took charge of the architecture review; *Dive Deep* – I dissected each claim against real metrics and AWS services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
