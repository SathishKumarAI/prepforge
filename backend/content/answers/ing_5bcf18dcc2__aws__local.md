---
qid: ing_5bcf18dcc2__aws__local
question: 'Explain: Using HTTPS — A Cheatsheet to Build Secure APIs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 383
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:52:49-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I was tasked to expose our fraud‑detection model as a REST API that could handle 50 k requests per second while guaranteeing confidentiality and compliance with PCI‑DSS.

**Action (Design)**  
I architected the solution on **Amazon API Gateway + Lambda**.  
* **HTTPS only** – enforced via *TLS 1.2+* certificates from AWS Certificate Manager, eliminating downgrade attacks.  
* **Authorization** – integrated **Cognito User Pools** for OAuth 2.0 and fine‑grained IAM roles to enforce least privilege.  
* **WAF & Shield** – added rate‑limiting (5 k req/min per IP) and DDoS protection, preventing 99.9% of malicious traffic.  
* **Caching** – enabled API Gateway caching with a TTL of 10 s; reduced Lambda invocations by 60 %.  
* **Observability** – CloudWatch metrics + X‑ray traces fed into Grafana dashboards; automated alerts for latency >200 ms.

**Result**  
The launch met SLA: <120 ms latency (95th percentile) under peak load, zero data exfiltration incidents. Cost dropped from $12k/month to $4.8k due to caching and Lambda concurrency control.  

**Reflection**  
I learned that *HTTPS* is not just a checkbox; it’s the first line of defense. By owning the end‑to‑end flow (Customer Obsession, Ownership) and diving deep into AWS primitives, I delivered a secure, scalable API that exceeded performance goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
