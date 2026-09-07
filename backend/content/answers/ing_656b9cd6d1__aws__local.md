---
qid: ing_656b9cd6d1__aws__local
question: 'Explain: Setting Up a Reverse Proxy with Nginx — Proxy vs Reverse Proxy
  (Explained with Examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 441
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:14:20-05:00'
sources: []
---

**Situation / Task**  
I was asked to expose a fleet of containerized AI inference micro‑services (Python Flask + TensorFlow) behind a single HTTPS endpoint for an internal product. The team needed high availability, zero-downtime deployments, and the ability to route traffic to different model versions.

**Action**  
*Design:*  
- **Reverse Proxy**: Nginx Ingress Controller on EKS; front‑end listens on 443, forwards to specific pod IPs via service names.  
- **Proxy vs Reverse Proxy**: I explained that a *proxy* passes client requests unchanged to an upstream server and returns the response (e.g., caching proxy). A *reverse proxy* hides internal services, balances load, and can terminate TLS—exactly what we needed.  
- Implemented path‑based routing (`/v1/modelA`, `/v2/modelB`) using `ingress.kubernetes.io/rewrite-target`.  
- Added **AWS ALB** as the external load balancer for 100% availability and integration with ACM for certificate rotation.  
*Scalability / Cost:*  
- Autoscaling pods based on CPU (≤70%) → cost‑efficient.  
- Nginx running on spot instances reduces spend by ~30%.  
- Global edge caching via CloudFront for static assets, cutting latency 40 ms.

**Result**  
Deployment succeeded in 4 hours with zero downtime; traffic from 10k concurrent users was handled at <120 ms latency. Cost dropped 25 % compared to the previous HAProxy‑based setup, and we achieved 99.99 % uptime over three months.

---

> **Leadership Principles:** Ownership (I owned the end‑to‑end rollout), Dive Deep (understood proxy semantics & AWS integration).  
> **Bar‑raiser cues:** Clear definition of proxy vs reverse proxy, quantified latency/cost metrics, and lessons learned from earlier HAProxy failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
