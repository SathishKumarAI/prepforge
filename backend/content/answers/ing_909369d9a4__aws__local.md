---
qid: ing_909369d9a4__aws__local
question: What is domain name resolution? — What Happens When You Type a URL Into
  Your Browser? - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 397
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:52:47-05:00'
sources: []
---

**Answer – Domain Name Resolution (URL → IP)**  
*Leadership Principles:* **Customer Obsession** & **Dive Deep**  

**S:** I was tasked to redesign the internal URL‑routing service for a global e‑commerce platform that suffered 12 % slower page loads during peak traffic.  
**T:** The goal was to reduce DNS lookup latency and improve cache hit rates while keeping cost under $200k/year.  
**A:**  
1. **Requirements & Design** – Each incoming HTTP request first hits an edge‑location (CloudFront). I introduced a *regional Route 53 resolver* that forwards queries to a dedicated *private hosted zone*.  
2. **Caching Layer** – Deployed Amazon CloudFront + Lambda@Edge to cache A/AAAA records for 5 min, backed by Elasticache Redis for TTL‑aware lookup.  
3. **Scalability & Availability** – Route 53’s global anycast automatically balances load; the resolver is a stateless microservice behind an Application Load Balancer (ALB) with auto‑scaling to 0–200 RPS per AZ.  
4. **Cost** – Savings of ~35 % by moving from 3 million public queries/month to ~800k private queries, plus $50k/yr in CloudFront cache hit savings.  

**R:** After deployment, average DNS resolution time dropped from 120 ms to 32 ms (73 % reduction), translating to a 4 % lift in overall conversion rate and an estimated $1.2M incremental revenue annually.  

*Bar‑raiser notes:* Clear ownership of the end‑to‑end flow, deep dive into TTL logic, quantified performance uplift, and learning loop—monitored cache hit ratios post‑release to iterate further.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
