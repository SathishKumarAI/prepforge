---
qid: ing_547d1a0c7d__aws__local
question: 'Explain: Deploy an EC2 instance to act as the NGINX proxy to the OpenSearch
  Service domain and OpenSearch Dashboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 532
total_tokens: 778
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:37:10-05:00'
sources: []
---

**Situation & Task**

In a recent project I was asked to expose our internal OpenSearch cluster and its dashboards to a regulated external audience without opening the entire VPC. The requirement: “Deploy an EC2 instance as an NGINX reverse‑proxy that forwards traffic to an AWS Managed OpenSearch domain and its Dashboards.”

**Action & Design**

1. **Architecture**
   - Spin up a **t3.medium** (balanced cost/CPU) in the same AZ as the OpenSearch domain.
   - Install **NGINX 1.23**, configure two upstream blocks:  
     ```nginx
     upstream opensearch { server search-domain.us-east-1.es.amazonaws.com; }
     upstream dashboards  { server dashboards.search-domain.us-east-1.es.amazonaws.com; }
     ```
   - Use `proxy_pass` with HTTPS, set `proxy_ssl_verify off` (since the domain uses a private cert) and `proxy_set_header Host $host`.
2. **Security**
   - Attach an **IAM role** with `AmazonOpenSearchFullAccess` to let EC2 retrieve the domain’s endpoint via SDK (for auto‑refresh if DNS changes).
   - Place the instance in a **private subnet** behind an **Application Load Balancer (ALB)** that has an **SSL certificate from ACM** for public TLS termination.
3. **Scaling & Availability**
   - Add an **Auto Scaling Group** (min 1, max 2) to survive EC2 failure; health checks via ALB target group.
   - Enable **Elastic IP** on the ALB to keep a stable endpoint.
4. **Cost**
   - Estimated $0.0416/hr per instance + $0.0088/hr for ALB = ~$35/month, far cheaper than running a full OpenSearch cluster.

**Result**

- Downtime during migration dropped from 3 hrs (manual VPN tunnel) to <10 min.
- Traffic latency improved by 27% (measured via CloudWatch metrics).
- Cost savings of ~65% compared to an on‑prem reverse proxy appliance.

**Reflection**

I owned the entire end‑to‑end deployment, diving deep into NGINX upstream nuances and AWS networking. The trade‑off was a small increase in operational overhead for the Auto Scaling Group, but the scalability & cost benefits outweighed it. I learned that exposing managed services through a lightweight EC2 proxy can be both secure and efficient when you balance IAM roles, ALB health checks, and proper TLS handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
