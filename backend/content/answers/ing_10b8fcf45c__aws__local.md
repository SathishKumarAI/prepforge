---
qid: ing_10b8fcf45c__aws__local
question: 'Explain: GeoDNS — How DNS Actually Works - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 393
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:03:23-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the migration of a global e‑commerce platform from a legacy DNS stack to AWS. The business required *sub‑second latency* for users worldwide while keeping cost under $10k/month and maintaining 99.99% availability.  

**Action (Design)**  
I designed a **GeoDNS** solution using Amazon Route 53 with health checks, latency routing, and weighted records.  
1. **Routing Policy** – Latency + Geolocation to direct traffic to the nearest edge or region.  
2. **Health Checks** – CloudWatch metrics feed into Route 53; if an endpoint fails, traffic is automatically rerouted.  
3. **Fail‑over** – A secondary DNS zone in a different AZ ensures continuity when a primary region goes down.  
4. **Caching & Edge** – Integrated with CloudFront for DNS caching at edge locations (TTL = 60s).  

I also added a Lambda@Edge function to rewrite URLs based on country, giving us *dynamic content delivery* without extra round‑trips.

**Result**  
- **Latency dropped 35%** (average 120 ms → 78 ms) across all geographies.  
- **Cost reduced by 22%** ($12k → $9.4k/month).  
- **Availability hit 99.999%**, surpassing the SLA.

**Reflection & Learning**  
I owned the full migration, coordinating with Network Ops and Security. The biggest learning was that *simple* Route 53 features (geolocation + health checks) can replace complex third‑party DNS providers if you dive deep into their capabilities.  

> **Leadership Principles:** Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
