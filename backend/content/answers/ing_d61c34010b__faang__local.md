---
qid: ing_d61c34010b__faang__local
question: 'Explain: Multi-tenant enterprise architecture — Glean Interview Guide (2026):
  Process, Questions, Compensation \u2013 techinterview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 496
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:57:10-05:00'
sources: []
---

**Clarify**

> *Problem:* Explain how a multi‑tenant enterprise architecture works in the context of an ML platform (e.g., Glean).  
> *Assumptions to confirm:*  
> – “Multi‑tenant” means isolated workloads on shared infra.  
> – The focus is on data, compute, and security boundaries, not just software‑level isolation.

**Approach**

1. **Define the tenant model** (logical vs. physical).  
2. **Layered architecture:** data ingestion → feature store → training → inference.  
3. **Isolation primitives:** namespaces, RBAC, encryption keys, network policies.  
4. **Resource allocation & billing:** quotas, autoscaling, per‑tenant metering.  
5. **Observability & compliance** (audit logs, GDPR/CCPA).

**Depth**

- *Data layer:* each tenant’s raw data lives in a separate bucket/table; a shared feature store materializes derived features with tenant tags to prevent leakage.  
- *Compute layer:* containers/pods per job, scheduled on shared clusters with cgroups limiting CPU/memory; GPU sharing via NVIDIA‑V4 scheduling.  
- *Model registry:* versioned artifacts tagged by tenant ID; CI/CD pipelines enforce isolation gates before promotion.  
- *Security:* TLS for all traffic, key‑per‑tenant KMS keys, IAM roles scoped to tenant namespaces.  
- *Billing:* per‑tenant counters (bytes processed, GPU hours) fed into a metering service that feeds the billing engine.

**Edge Cases**

- Cross‑tenant data leakage if feature store mis‑tagged.  
- Shared GPU oversubscription leading to SLA violations.  
- Tenant churn: cleanly deprovisioning all resources without orphaned secrets.

**Optimize & Communicate**

- **Performance:** use sharded feature stores and cache hot features per tenant.  
- **Cost:** implement spot‑VM pools for batch jobs, auto‑scale down idle services.  
- **Narrative:** “We start by isolating data at the bucket level, then layer compute isolation with cgroups, ensuring every tenant sees only their own data while sharing the same hardware footprint.”  

This structured view balances technical depth with clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
