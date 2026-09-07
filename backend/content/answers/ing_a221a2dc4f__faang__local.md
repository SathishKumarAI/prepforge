---
qid: ing_a221a2dc4f__faang__local
question: 'Explain: The Interview Question — Multi Tenant Saas'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 445
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:01:23-05:00'
sources: []
---

**Clarify**  
You’re asked how you’d design a *multi‑tenant SaaS* system that serves many customers (tenants) on the same code base while keeping data isolated and scaling efficiently.  
Assumptions:  
1. Tenants share the same application logic but require strict data isolation.  
2. The platform must support elastic scaling, high availability, and a pay‑per‑usage billing model.

**Approach**  
1. **Tenant isolation strategy** – choose between *shared database with tenant ID*, *schema‑per‑tenant*, or *database‑per‑tenant* based on size/traffic.  
2. **Service layer abstraction** – inject a tenant context into every request (via JWT, header).  
3. **Infrastructure** – use container orchestration (K8s) + serverless functions for bursty workloads; autoscale per tenant if needed.  
4. **Observability & metering** – instrument to collect usage metrics per tenant for billing.

**Depth**  
- *Shared DB with tenant ID*: simplest, lower cost, but risk of accidental data leaks; mitigate via row‑level security and strong IAM policies.  
- *Schema/DB per tenant*: stronger isolation, easier backups, but higher operational overhead and larger storage footprint.  
- Use a **data access layer** that automatically prefixes table names or applies the tenant ID filter.  
- For billing, store a “usage” table with timestamps; batch jobs compute charges per tenant.

**Edge Cases**  
- *Tenant churn*: handle deletions/archiving without affecting others.  
- *Cross‑tenant analytics*: provide aggregate reports while hiding raw data.  
- *Performance degradation*: monitor slow queries that could impact all tenants.

**Optimize & Communicate**  
Start with a shared DB for speed, migrate heavy tenants to isolated schemas if they hit quota limits. Explain trade‑offs: cost vs isolation, complexity vs scaling. Highlight that a clear tenant context and rigorous IAM rules are the linchpin of a secure multi‑tenant SaaS architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
