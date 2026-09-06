---
qid: ing_d61c34010b__fp__local
question: 'Explain: Multi-tenant enterprise architecture — Glean Interview Guide (2026):
  Process, Questions, Compensation \u2013 techinterview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 446
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:35:18-05:00'
sources: []
---

## Multi‑Tenant Enterprise Architecture – Interview Guide (2026)

**Why it matters**  
A multi‑tenant system serves many isolated customers on a shared infrastructure. The design must reconcile *separation* (data, config, compliance) with *efficiency* (resource sharing). This tension is a concrete instantiation of the **“law of diminishing returns” in resource allocation**: every additional tenant reduces per‑customer performance unless isolation layers are carefully engineered.

### Process
1. **Problem framing** – Ask candidates to articulate the trade‑off between *tenant isolation* and *cost amortization*.  
2. **Design sketch** – Request a high‑level diagram: service boundaries, data stores, API gateways, tenant‑specific configuration.  
3. **Deep dive** – Probe specific mechanisms (e.g., row‑level security, namespace separation, tenant‑aware caching).  
4. **Failure analysis** – Explore what happens when one tenant spikes or breaches the sandbox.  

### Key Questions
- How would you enforce *logical isolation* without duplicating infrastructure?  
- What database patterns scale to thousands of tenants?  
- Explain how you’d handle multi‑region compliance (e.g., GDPR vs. CCPA).  
- Describe a monitoring strategy that distinguishes tenant‑level anomalies from platform‑wide issues.  

### Compensation Insight
A nuanced candidate demonstrates an understanding of *cost‑per‑tenant economics*: they’ll quantify the impact of shared caches, compute “effective isolation cost” per tenant, and suggest elasticity strategies (e.g., containerized microservices vs. serverless functions). This quantitative lens is often overlooked but signals mastery of both architecture and business value.  

> **Non‑obvious takeaway**: In a multi‑tenant stack, the *most expensive* resource is usually the *isolation layer* (e.g., tenant‑specific IAM roles), not the compute itself. Designing for *policy as code* reduces this overhead dramatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
