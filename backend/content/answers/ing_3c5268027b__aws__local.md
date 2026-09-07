---
qid: ing_3c5268027b__aws__local
question: 'Explain: Proxy Server — Top 6 Most Commonly Used Server Types'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 542
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:42:23-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led a project to expose 4 internal ML models as REST endpoints for a global mobile app. The traffic pattern was unpredictable – spikes during marketing pushes and steady baseline usage from millions of users.

**Task (T)**  
I had to design a proxy layer that would handle request routing, caching, throttling, and secure authentication while keeping latency < 50 ms and cost <$10k/month.

**Action (A)**  

| Proxy type | AWS service | Why it fits |
|------------|-------------|--------------|
| **Application Load Balancer (ALB)** | ALB | HTTP/HTTPS routing + path‑based rules, built‑in WAF for bot protection. |
| **Network Load Balancer (NLB)** | NLB | Ultra‑low latency for TCP traffic to the ML inference cluster. |
| **API Gateway** | API Gateway | Managed auth, request throttling, and per‑endpoint quota enforcement. |
| **Lambda@Edge / CloudFront** | CloudFront + Lambda@Edge | Edge caching of static model metadata; reduces round‑trip to origin by 30 %. |
| **Elastic Load Balancing (Classic)** | Classic ELB | Legacy integration with on‑prem data center for fallback inference. |
| **Custom Reverse Proxy (Envoy/NGINX)** | ECS/EKS | Fine‑grained observability, dynamic routing via Service Mesh. |

I orchestrated the stack using Terraform and integrated CloudWatch metrics to auto‑scale ALB target groups based on 95th percentile latency.

**Result (R)**  
- Reduced average request latency from **120 ms to 48 ms** (≈ 60 % improvement).  
- Cut operational cost by **$4.8k/month** versus a monolithic proxy design.  
- Achieved 99.9 % availability during a 3‑hour traffic surge, meeting SLAs.

---

### Leadership Principles Highlighted
- **Customer Obsession** – ensured end‑user latency stayed below user‑expected thresholds.  
- **Ownership & Dive Deep** – architected and tuned each proxy component; iterated based on real telemetry.  

**Bar‑raiser notes:** Look for ownership of the entire flow, depth in understanding AWS primitives, quantifiable impact, and learning from initial over‑engineering (we trimmed Classic ELB after observing minimal benefit).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
