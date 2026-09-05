---
qid: ing_547d1a0c7d__star__local
question: 'Explain: Deploy an EC2 instance to act as the NGINX proxy to the OpenSearch
  Service domain and OpenSearch Dashboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 373
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:16:56-05:00'
sources: []
---

**Situation:**  
At my last role, we were migrating our search stack from a legacy Elastic cluster to Amazon OpenSearch Service. The internal team needed a single entry point for all dashboards and API calls while keeping the OpenSearch domain isolated behind VPC endpoints.  

**Task:**  
I had to launch an EC2 instance that would run NGINX as a reverse proxy, securely forward requests to both the OpenSearch domain and OpenSearch Dashboards, enforce TLS termination, and rotate certificates automatically.

**Action:**  
- I chose an m5.large instance in the same VPC, attached it to a dedicated security group allowing inbound HTTPS on port 443.  
- Installed NGINX from Amazon Linux 2 AMI, then configured two server blocks: one proxying `/search` to `https://opensearch-domain.region.es.amazonaws.com`, and another for `/dashboards` to the Dashboards endpoint.  
- Used AWS Certificate Manager (ACM) with a Route 53 DNS record (`search.example.com`) to provision an SSL cert, then set up a cron job that fetched the latest certs from ACM via the AWS CLI and reloaded NGINX automatically.  
- Added basic auth and rate‑limiting rules in NGINX to mitigate brute‑force attempts, and logged all upstream responses for troubleshooting.

**Result:**  
The deployment cut external exposure risk by 100 % and reduced latency to dashboards by ~30 ms due to the EC2’s proximity to the OpenSearch domain. We also saved ~$200/month by using a single small instance instead of multiple load balancers. I learned how to blend AWS networking, NGINX configuration, and automation scripts for secure, cost‑effective service exposure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
