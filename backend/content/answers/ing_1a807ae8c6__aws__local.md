---
qid: ing_1a807ae8c6__aws__local
question: 'Explain: Push CDN Use-Case: — tech-prep-jeremy.io/systems-design/topics/cdns.md
  at master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 388
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:26:17-05:00'
sources: []
---

**Situation & Task**  
At a previous role I led the migration of our global e‑commerce storefront to a low‑latency CDN strategy. The goal was to reduce page load time from 2 s (origin‑only) to <600 ms while keeping cost below $200k/yr.

**Action – Design & AWS Services**  
I chose **Amazon CloudFront** as the edge layer, backed by an **Origin Group** of *AWS Global Accelerator* + **ALB**.  
- **Cache Behavior:** Long‑lived static assets (images, JS/CSS) with 1 yr TTL; dynamic API calls set to “No Cache” and forwarded headers for auth.  
- **Invalidation Strategy:** Incremental invalidations via CloudFront’s *Batch Invalidation* API (≤5 k objects/day).  
- **Security:** Signed URLs + WAF rules to block bots, plus TLS 1.3 only.  
- **Cost Controls:** Used *CloudFront Reserved Capacity* and *Savings Plans* on Lambda@Edge for custom header injection, cutting $30k/yr.

**Result**  
Page load time dropped from 2 s to **580 ms** (≈70% improvement). Traffic spiked 3× during a flash sale with no origin overload; CloudFront handled 1.2M requests/sec without any latency spikes. Cost stayed within budget, and I documented the failure‑mode of “cache stampede” mitigation, which became part of our SRE playbook.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivering faster UX for millions of shoppers.  
- **Ownership & Dive Deep:** Architected end‑to‑end CDN pipeline, tuned cache policies, and quantified every trade‑off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
