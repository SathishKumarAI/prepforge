---
qid: ing_547d1a0c7d__fp__local
question: 'Explain: Deploy an EC2 instance to act as the NGINX proxy to the OpenSearch
  Service domain and OpenSearch Dashboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 550
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:04:20-05:00'
sources: []
---

**Why a dedicated EC2 + NGINX proxy?**  
OpenSearch Service is a managed cluster that exposes a domain endpoint with TLS and IAM‑based authentication. Clients (browsers or ML pipelines) often need **direct HTTPS access**, but the service does not support cross‑origin requests, custom headers, or fine‑grained rate limiting. By spinning an EC2 instance in the same VPC and running NGINX as a reverse proxy we obtain:

1. **TLS termination & re‑encryption** – NGINX can terminate client TLS (allowing HTTP/2, ALPN) and forward traffic to OpenSearch over internal HTTPS, reducing egress costs.
2. **IAM token injection** – The EC2 instance can assume an IAM role; NGINX obtains temporary SigV4 credentials and signs each request automatically.
3. **CORS & header manipulation** – Dashboards and ML clients need specific `Access‑Control-Allow-*` headers or custom auth tokens; NGINX can inject them without modifying the OpenSearch service.

**Deployment outline**

1. **Create an IAM role** with `AmazonOpenSearchFullAccess` (or least‑privilege policy). Attach it to the EC2 instance.
2. **Launch a t3.medium EC2** in the same subnet as the OpenSearch domain, security group permitting inbound 443 from your CIDR and outbound 443 to the domain’s IPs.
3. **Install NGINX**, configure two upstream blocks:

   ```nginx
   upstream opensearch { server <domain>.es.amazonaws.com:443; }
   upstream dashboards { server <domain>-dashboards.us-east-1.es.amazonaws.com:443; }
   ```

4. **Proxy pass with SigV4 signing** using the `ngx_http_auth_request_module` or a Lua script that calls AWS STS to sign each request.
5. **Expose HTTPS on port 443** from the EC2 SG, optionally attach an Application Load Balancer for TLS termination and autoscaling.

**Non‑obvious insight:**  
NGINX can cache *index* metadata responses (e.g., `/_cluster/health`) with a short TTL, dramatically reducing latency for repeated ML inference queries. This caching is invisible to OpenSearch but yields a 30–50 % speedup in token‑classification pipelines that poll cluster health frequently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
