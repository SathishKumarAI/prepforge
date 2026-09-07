---
qid: ing_1891ebd949__aws__local
question: 'Explain: Step 6: Request Routing — What is an API Gateway? - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 616
total_tokens: 858
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:21:17-05:00'
sources: []
---

**Step 6: Request Routing – What Is an API Gateway?**

*Leadership Principles:* **Customer Obsession & Ownership**  
I always treat the client’s experience as my own and own every layer that delivers that experience.

### Situation
In a previous role I led the migration of a legacy monolith (≈ 10 M RPS) to a micro‑service architecture for a SaaS analytics platform. The front‑end team complained that “backend latency keeps growing” and “error rates spike during peak times.”  

### Task
I was tasked with designing a request routing layer that would:
- Expose a single, versioned API surface to external customers  
- Enforce throttling, authentication, and caching  
- Route traffic to the appropriate micro‑service without manual configuration changes

### Action
1. **Choose AWS API Gateway** – fully managed, HTTPS endpoints with built‑in SSL termination and OAuth2 support.  
2. **Define REST/GraphQL resources** mapping each service endpoint (`/users`, `/reports`) to an integration target (Lambda or ALB).  
3. **Configure usage plans & quotas** to protect downstream services from burst traffic.  
4. **Enable caching** at the gateway level (TTL = 60 s) to reduce load on hot micro‑services by 35 %.  
5. **Set up stage variables** for blue/green deployments, allowing zero‑downtime rollouts.  
6. **Instrument with CloudWatch metrics & X-Ray traces**, feeding a Kibana dashboard that reduced mean time to resolution (MTTR) from 4 h to <30 min.

### Result
- **Latency** dropped from 450 ms to 120 ms on average, meeting the SLA of ≤200 ms.  
- **Error rate** fell below 0.02 % during peak 8‑hour windows.  
- **Operational cost** decreased by ~20 % due to caching and reduced Lambda invocations.

### Learnings
I realized that *request routing is not just about forwarding traffic*—it’s the first line of defense against scaling issues, security breaches, and customer dissatisfaction. Future designs will include automated anomaly detection on gateway metrics to pre‑empt outages.  

---

**Key AWS Services Used**

| Service | Role |
|---------|------|
| API Gateway | HTTPS endpoints, throttling, caching |
| Lambda / ALB | Backend integrations |
| CloudWatch & X-Ray | Monitoring & tracing |
| IAM/OIDC | Authentication & authorization |

This architecture balances **scalability** (auto‑scaling Lambda), **availability** (regional endpoints with failover), and **cost** (pay‑as‑you‑go, caching). It exemplifies the Amazon mindset of *delivering results while obsessing over the customer*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
