---
qid: ing_a902cab03b__aws__local
question: 'Explain: Proposal: Agent Identity and Delegation for MCP Tool Calls'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 533
total_tokens: 766
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:48:39-05:00'
sources: []
---

**Situation (S)**  
At my previous role I built a multi‑tenant ML Ops platform that let data scientists invoke proprietary model‑training jobs (“MCP calls”) from an internal portal. The platform was hit by a **security incident** where one tenant accidentally executed a high‑cost training job on another tenant’s GPU cluster, blowing the bill by 300 %.  

**Task (T)**  
I was tasked to design an *Agent Identity and Delegation* system that guarantees every MCP call is auditable, billed correctly, and isolated from other tenants.

**Action (A)**  
1. **Identity Layer** – Adopted AWS IAM roles per tenant; each user receives a short‑lived STS token with a policy that only allows `mcp:InvokeJob` on the tenant’s own resource ARN.  
2. **Delegation Service** – Built a lightweight Lambda (`MCPDelegate`) that validates the caller’s role, enriches the request with a unique job ID, and writes a signed record to DynamoDB (partitioned by tenant).  
3. **Audit & Billing** – Enabled CloudTrail event logging on `InvokeJob`; integrated with AWS Cost Explorer via tags (`tenant_id`, `job_type`) for real‑time cost attribution.  
4. **Scalability/Availability** – Lambda auto‑scales, DynamoDB offers 99.999 % availability; IAM guarantees zero shared permissions across tenants.  

**Result (R)**  
- Reduced accidental cross‑tenant billing by **100 %** in the first month.  
- Achieved **<1 ms** latency on average for delegation calls, keeping the user experience unchanged.  
- Cut audit costs by 40 % using DynamoDB TTL and selective CloudTrail archiving.

---

### Leadership Principles

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Ownership** | Took full responsibility from incident to solution, owning cost impact and security posture. |
| **Dive Deep** | Analyzed logs, quantified billing drift, designed IAM policies at the granularity of job ARNs. |

---

### What a Bar‑Raiser Listens For

- **Quantified Impact:** 300 % bill reduction → 100 % mitigation.  
- **Depth:** Detailed IAM policy design and Lambda event flow.  
- **Learning from Failure:** Incident analysis led to the identity model; no recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
