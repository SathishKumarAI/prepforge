---
qid: ing_547d1a0c7d__think__local
question: 'Explain: Deploy an EC2 instance to act as the NGINX proxy to the OpenSearch
  Service domain and OpenSearch Dashboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 543
total_tokens: 748
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:34:03-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- Confirm that the user wants a *single* EC2 instance running NGINX as a reverse proxy for both an OpenSearch Service domain and its Dashboards UI.  
- Assume they have VPC, subnet, security groups ready; no need to spin up the OpenSearch cluster itself.  

**2️⃣ Mental model / framework**  
- Think of the architecture in layers: **Client → NGINX (proxy) → OpenSearch domain/Dashboards**.  
- Map each layer to AWS constructs: EC2 instance + IAM role, security groups, DNS (Route 53 or Elastic IP), and TLS termination.  

**3️⃣ Step‑by‑step reasoning**  
1. Pick an AMI (Amazon Linux 2) and launch an EC2 instance in the same VPC as OpenSearch to avoid public exposure.  
2. Attach an IAM role with `opensearch:ESHttp*` permissions if you need API calls from NGINX.  
3. Configure inbound/outbound rules: allow HTTPS (443) from the client CIDR, allow traffic from EC2 to the OpenSearch domain’s endpoint on 9200/5601.  
4. Install NGINX (`yum install nginx`) and write a server block that proxies `/` → `https://<dashboards-endpoint>` and `/es/` → `https://<opensearch-domain>`. Use `proxy_set_header Host $host;` and proper TLS certs (self‑signed or ACM via ELB).  
5. Enable NGINX, test with `curl -I https://<nginx-host>/` and `/es/_cluster/health`.  

**4️⃣ Common traps to avoid**  
- Forgetting the *same* VPC/subnet; public endpoints will be blocked by default.  
- Mis‑configuring security groups: open 9200/5601 only to the EC2 instance, not the internet.  
- Skipping `proxy_ssl_verify` or using wrong TLS certs, leading to handshake failures.  

**5️⃣ Sanity‑check & communicate**  
- Verify DNS resolution inside the VPC (`dig <opensearch-domain>`).  
- Use `openssl s_client -connect <nginx-host>:443` to confirm TLS termination.  
- Share a concise diagram and checklist with the team, highlighting that all traffic is now routed through the EC2 proxy, improving security posture and simplifying firewall rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
