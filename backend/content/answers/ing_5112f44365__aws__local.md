---
qid: ing_5112f44365__aws__local
question: 'Q7: How do you handle multi-tenant RAG systems?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 743
total_tokens: 976
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:28:18-05:00'
sources: []
---

**Q7 – Handling Multi‑Tenant Retrieval‑Augmented Generation (RAG) Systems**

**Situation**  
I led the migration of a legacy on‑prem RAG service for a SaaS client that had 3 000 tenants, each with its own document corpus and strict data isolation. The existing monolithic deployment suffered from latency spikes (>300 ms) during peak hours and cost overruns ($12k/month).

**Task**  
Design a scalable, secure, and cost‑effective multi‑tenant RAG architecture that guarantees ≤200 ms response time for 95 % of requests while ensuring data isolation and compliance with GDPR.

**Action**  
1. **Data Layer** – Split each tenant’s vector store into separate Amazon OpenSearch domains (one per tenant) to enforce isolation. Use *dedicated* indices with *per‑tenant encryption keys* via KMS.  
2. **Compute Layer** – Deploy a fleet of Lambda@Edge functions behind CloudFront, routing queries to the nearest OpenSearch domain. Each function runs a lightweight inference container (AWS Graviton3) hosting a distilled LLM (e.g., `gpt-4o-mini`) for on‑edge generation, reducing round‑trip latency.  
3. **Orchestration** – Use Amazon Step Functions to orchestrate retrieval + generation steps, with *parallel tasks* per tenant and *retry logic* for transient failures.  
4. **Observability & Scaling** – Instrument with CloudWatch metrics (`retrieval_latency`, `generation_latency`) and set up an Auto Scaling policy that spawns additional Lambda@Edge instances when the 95th percentile exceeds 250 ms.  
5. **Cost Control** – Implement a *usage‑based billing* model: allocate a baseline of 100 000 free queries per month; beyond that, charge $0.01/query, incentivizing tenants to stay within limits.

**Result**  
- Reduced average end‑to‑end latency from 320 ms to **185 ms** (95th percentile).  
- Cut operational cost by **38 %** ($9k/month savings).  
- Achieved zero data leakage incidents over 12 months, verified through quarterly penetration tests.  

---

### Leadership Principles Highlighted
| Principle | How it Shaped the Solution |
|-----------|----------------------------|
| **Customer Obsession** | Built a tenant‑specific SLA and usage‑based pricing to meet diverse needs. |
| **Ownership** | Took full responsibility for security, cost, and performance; continuously iterated based on metrics. |
| **Dive Deep** | Analyzed OpenSearch query plans, Lambda cold‑start logs, and Step Function state machine traces to pinpoint bottlenecks. |
| **Bias for Action** | Deployed a prototype in 3 days, validated with pilot tenants, then rolled out globally. |

### What a Bar‑Raiser Looks For
- **Ownership**: I drove the end‑to‑end redesign and managed cross‑team coordination.  
- **Dive Deep**: Detailed performance profiling led to specific architectural choices (OpenSearch per tenant, Lambda@Edge).  
- **Quantified Impact**: Measured latency reduction, cost savings, and compliance metrics.  
- **Learning from Failure**: Early pilot exposed cold‑start issues; we introduced provisioned concurrency for high‑traffic tenants.

This solution demonstrates how to engineer a robust, multi‑tenant RAG system on AWS that balances speed, security, and cost while delivering measurable value to customers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
