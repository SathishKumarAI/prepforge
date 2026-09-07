---
qid: ing_3a517d3f10__aws__local
question: 'Explain: CName vs Alias Records — AWS-Services/16_NetworkingAndContentDelivery/1_EdgeNetworking/AmazonRoute53/Readme.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 454
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:38:14-05:00'
sources: []
---

**Situation / Task**  
At a media startup I was tasked with migrating all customer‑facing domains to Amazon CloudFront while keeping the same DNS names. The team had to decide whether to use **CNAME** records or **Alias** records in Route 53 for every subdomain, and we needed a solution that would be cost‑effective, highly available, and easy to manage.

**Action (Technical)**  
* **Requirements** – Resolve `www.example.com` → CloudFront distribution; keep latency < 50 ms; avoid extra DNS queries.  
* **Design** – Use *Alias* records for all CloudFront, ELB, S3 website endpoints. Alias records are treated as native Route 53 entries: they resolve in one query and can be set to “weighted” or “failover”.  
* **AWS Services** – Route 53 (DNS), CloudFront (CDN), ELB (load balancer).  
* **Scalability & Availability** – Alias records are served by Route 53’s global infrastructure; no extra DNS lookups, so TTLs of 60 s still give us instant failover.  
* **Cost** – CNAME incurs an additional query per lookup; for 10 M monthly queries that is ~\$0.40/yr vs $0.00 with Alias.  

**Result (Quantified)**  
Implemented the Alias strategy across 120 subdomains, reducing DNS query cost by 90% and improving page‑load time by 12 ms on average. Customer complaints dropped from 4.2 /100 to 0.3 /100 after launch.

**Reflection / Bar‑raiser notes**  
I owned the migration plan, dove deep into Route 53 metrics, and quantified impact with real traffic data. The failure mode (CNAME mis‑resolution) was mitigated by automated health checks, turning a potential outage into a learning loop for future DNS changes.  

*Leadership Principles*: **Ownership**, **Dive Deep**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
