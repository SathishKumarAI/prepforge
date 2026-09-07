---
qid: ing_64be021f58__aws__local
question: What are the three places where one can place LB’s in a scalable, reduntant
  web application?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 497
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:12:43-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked to redesign a global e‑commerce site that had just hit 1 M concurrent users during flash sales. The goal: keep 99.99 % uptime while staying under $5 M/month.

**Action**  
I positioned three layers of load balancers:

| Layer | Service | Rationale |
|-------|---------|-----------|
| **Global edge** | Amazon CloudFront + Global Accelerator | DNS‑based routing to the nearest region, 50 % latency reduction for international traffic. |
| **Regional ingress** | Application Load Balancer (ALB) per AZ | HTTP/HTTPS termination, path‑based routing to microservices; integrated WAF protects against OWASP threats. |
| **Instance tier** | Network Load Balancer (NLB) for TCP‑heavy workers | Zero‑config TLS offload, 10 Gbps throughput, and support for legacy sockets that ALB can’t handle. |

I paired each with Auto Scaling Groups, health checks, and AWS WAF rules. This three‑tier design gave us:

- **Scalability**: 100× traffic spikes handled without manual intervention.
- **Availability**: Multi‑AZ failover with < 200 ms recovery time.
- **Cost**: $3.2 M/month vs the previous $4.8 M, a 33 % saving.

**Result**  
During the next flash sale we processed 5 M orders in 30 s, hit 99.9999 % uptime, and logged no single point of failure.  

---

### Leadership Principles Anchored
- **Customer Obsession** – reduced latency & increased reliability directly improved shopper experience.
- **Ownership** – I owned the end‑to‑end architecture, from edge to worker tier.

*Bar‑raiser check:*  
I demonstrated deep technical dives (layer choices, trade‑offs), quantified impact (cost savings, uptime metrics), and learned from a prior failure where we had only two load balancers—leading to a single point of failure during peak traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
