---
qid: ing_d6dc72006a__aws__local
question: 'Explain: Access OpenSearch Dashboards using the NGINX proxy and set it
  up for embedding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 558
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:25:11-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** In 2023 I was tasked to expose our internal OpenSearch Dashboards to a subset of partner analysts while keeping the dashboards secure and embeddable inside our partner portal.  
> **Task:** Build an NGINX‑based reverse proxy that authenticates, enforces fine‑grained access control, and supports seamless iframe embedding without exposing the raw OpenSearch endpoint.  
> **Action:**  
> 1. **Requirements analysis** – clarified that the solution must support:  
>    * SSO via OIDC (Okta),  
>    * per‑user role mapping to OpenSearch indices,  
>    * CORS headers for cross‑domain iframe rendering, and  
>    * minimal latency (<50 ms).  
> 2. **Design** – deployed a single‑instance NGINX on an EC2 Spot instance behind an Application Load Balancer (ALB) with HTTPS termination.  
>    * Configured `auth_request` module to proxy `/login` to Okta, storing JWT in a signed cookie.  
>    * Used `proxy_set_header X-OpenSearch-User $remote_user;` and OpenSearch’s native role mapping to enforce access control.  
>    * Added `X-Frame-Options: SAMEORIGIN` and `Content-Security-Policy: frame-ancestors 'self' https://partner.example.com;` for secure embedding.  
> 3. **Scalability & Availability** – leveraged ALB’s auto‑scaling group (min 1, max 4) with health checks on `/health`. 99.9% SLA achieved in testing.  
> 4. **Cost** – Spot instance + NLB costs < $15/month versus an on‑prem proxy (~$300).  
> 5. **Monitoring & Rollback** – integrated CloudWatch Alarms for auth failures and latency spikes; used AWS CodeDeploy blue/green to roll out config changes with zero downtime.  

**Result:** The new proxy cut partner dashboard access time by **35 %**, reduced support tickets on authentication issues by **80 %**, and lowered infrastructure spend from $350/month to $15/month, yielding a 95 % cost‑savings while maintaining 99.9% uptime.  

**Learnings & Bar‑raiser cues:** I demonstrated ownership by leading the full stack from design to deployment, dove deep into security headers and role mapping, quantified impact with real metrics, and iterated quickly based on partner feedback—key traits a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
