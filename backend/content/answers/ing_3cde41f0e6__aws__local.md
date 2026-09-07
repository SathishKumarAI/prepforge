---
qid: ing_3cde41f0e6__aws__local
question: 'Explain: 2.2 Bandwidth Estimates — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 466
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:43:21-05:00'
sources: []
---

**Situation / Task**  
When I joined the e‑commerce platform team, we were migrating our legacy monolith to a microservices architecture on AWS. The product catalog service was projected to receive 10 k requests/second during peak holiday traffic, and each request returned ~500 KB of JSON. We needed an elastic load balancer that could sustain this throughput without becoming a bottleneck.

**Action**  
I first performed a *dive deep* analysis:  
1. **Bandwidth per instance** – 10 k req/s × 0.5 MB ≈ **5 GB/s** (≈40 Gbps).  
2. **Elastic Load Balancer (ELB) capacity** – an Application Load Balancer can handle ~50 000 requests/sec with ~1 Gbps per target group, so we required **at least 4 ELBs in a cross‑region failover** to keep headroom for spikes and TLS overhead.  
3. I proposed using **AWS Global Accelerator** for global latency reduction and **Amazon CloudFront** as a caching layer (cache hit rate ~70 %, reducing origin traffic by ~35 GB/s).  
4. For cost, I calculated: 4 ALBs at $0.025/hr + accelerator $0.025/hr + CloudFront $0.085/GB ≈ **$30/day**, versus the legacy solution’s $200/day.

**Result**  
After deployment, peak bandwidth stayed below 35 Gbps with a 99.999% SLA and a 40 % cost reduction. The team celebrated a 15‑minute latency drop for end users. I documented the design in Confluence, enabling other squads to reuse it.

> **Leadership Principles:** *Customer Obsession* (reducing user latency), *Ownership* (owning the migration), *Dive Deep* (precise bandwidth calculations).  
> **Bar‑raiser notes:** clear ownership, quantified impact, depth of analysis, and learning loop (post‑mortem on cold starts).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
