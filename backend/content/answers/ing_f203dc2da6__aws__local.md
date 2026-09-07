---
qid: ing_f203dc2da6__aws__local
question: 'Explain: HTTP vs HTTPS — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 542
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:08-05:00'
sources: []
---

**Situation (S)**  
While redesigning our customer‑feedback microservice for a global marketplace, I was asked to justify the move from **HTTP** to **HTTPS** and how it impacts system design.

**Task (T)**  
Deliver a secure, high‑throughput API that supports 5 M requests/day with <50 ms latency while keeping operational cost ≤15% of current spend.

**Action (A)**  

| Design choice | AWS services | Rationale |
|---------------|--------------|-----------|
| **TLS termination at CloudFront** | Amazon CloudFront, AWS Certificate Manager | Offloads cryptographic work from origin, enables edge caching and reduces egress. |
| **Origin: ALB → ECS Fargate** | Application Load Balancer, Amazon ECS (Fargate) | Maintains zero‑configuration scaling; ALB natively supports HTTPS listeners. |
| **Observability** | CloudWatch Logs + X-Ray | Enables end‑to‑end latency tracing and anomaly detection. |
| **Cost control** | Reserved Instances for Fargate + S3 for logs | Predictable pricing, 30% savings over on‑demand. |

*Dive Deep*: I benchmarked TLS handshake overhead with Nginx vs Envoy; found a 12 ms reduction when using CloudFront edge caching. The 5 M requests/day translate to ~58 req/s; the architecture comfortably supports >200 req/s peak, giving us headroom for seasonal spikes.

**Result (R)**  
- **Security**: Zero CVEs since migration; PCI‑DSS compliant.  
- **Performance**: Latency dropped from 76 ms → 45 ms (40% improvement).  
- **Cost**: $12k/month vs $14.5k pre‑migration (≈17% savings).  
- **Reliability**: 99.99% SLA achieved, no downtime during transition.

---

### Leadership Principles Highlighted
1. **Customer Obsession** – Ensured customers’ data is encrypted end‑to‑end, improving trust.  
2. **Ownership & Deliver Results** – Took full responsibility for migration, measured impact, and delivered tangible business value.  

*Bar‑raiser takeaway*: I demonstrated ownership (full lifecycle), deep technical dive (TLS benchmarks), quantified impact (latency & cost), and learned from earlier failures by automating TLS renewal with ACM to avoid manual lapses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
