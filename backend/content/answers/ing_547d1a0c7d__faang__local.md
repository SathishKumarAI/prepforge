---
qid: ing_547d1a0c7d__faang__local
question: 'Explain: Deploy an EC2 instance to act as the NGINX proxy to the OpenSearch
  Service domain and OpenSearch Dashboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 621
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:00:26-05:00'
sources: []
---

**Clarify**

We’re asked how to spin up an Amazon EC2 instance that will run **NGINX** as a reverse‑proxy in front of an **Amazon OpenSearch Service** domain and its Dashboards UI.  
Assumptions:  
* The OpenSearch domain is already created, publicly or VPC‑only accessible.  
* Security groups can be modified.  
* We want HTTPS termination at NGINX and seamless routing to both `/` (Dashboards) and the REST API (`/_search`, etc.).  

**Approach**

1. **Provision EC2** – choose an instance type (e.g., t3.medium), launch in the same VPC as the OpenSearch domain, attach an IAM role with `AmazonOpenSearchServiceFullAccess` if needed for health checks.  
2. **Security Groups** – open inbound port 80/443 from the internet; allow outbound to the OpenSearch domain’s endpoint (port 9200).  
3. **Install NGINX** – use Amazon Linux 2 or Ubuntu, install via package manager.  
4. **Configure reverse‑proxy** – create `/etc/nginx/conf.d/opensearch.conf` with upstream pointing to the domain’s DNS name, set `proxy_set_header Host $host; proxy_ssl_verify off;`.  
5. **Route Dashboards** – add a location block for `/app/dashboards/*` or simply proxy all traffic; NGINX will forward `/` to the Dashboards UI.  
6. **TLS Termination** – obtain an SSL cert (e.g., from ACM via HTTPS listener) and configure `ssl_certificate`.  
7. **Testing & Deployment** – validate connectivity (`curl -k https://<ec2>/app/dashboards/`) and monitor logs.

**Depth**

NGINX acts as a single entry point, handling TLS off‑loading, load‑balancing (if multiple EC2s), and URL rewriting. Complexity is O(1) per request; the main trade‑off is additional latency (~a few ms) and a single point of failure unless you scale horizontally.

**Edge Cases**

* OpenSearch domain in a private subnet – ensure VPC endpoint or NAT gateway for outbound traffic.  
* TLS mismatch between NGINX and OpenSearch – set `proxy_ssl_verify off` or provide the CA cert.  
* High‑traffic spikes – need to autoscale EC2 instances behind an Application Load Balancer.

**Optimize & Communicate**

To reduce latency, place EC2 in the same Availability Zone as the domain and use **ALB + NGINX** for horizontal scaling. Document configuration with Terraform for reproducibility, and expose health checks (`/_cluster/health`) through NGINX to let the ALB route traffic only when OpenSearch is healthy. This approach balances security (TLS termination), scalability, and maintainability—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
