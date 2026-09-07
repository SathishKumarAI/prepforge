---
qid: ing_48be879af7__aws__local
question: 'Explain: DNS resolution — Why DNS Based Global Server Load Balancing (GSLB)
  Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 470
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:51-05:00'
sources: []
---

**Situation (S)**  
While leading the migration of a global e‑commerce platform to AWS, I was asked to replace our on‑premise GSLB with a cloud solution that could handle millions of daily requests across three regions.

**Task (T)**  
I needed to explain why pure DNS‑based GSLB would fail to meet our SLAs for latency, failover speed, and traffic steering precision.

**Action (A)**  
1. **Latency & TTL:** I mapped the DNS flow: a client resolves the domain → gets an IP with a 300 s TTL → uses that IP until TTL expires. Even if one region goes down, clients keep hitting the dead endpoint for up to five minutes.  
2. **Failover Speed:** I measured our current RTO requirement (≤ 5 s). DNS propagation + cache invalidation takes > 30 s on average; customers saw 503 errors before health checks could flip the record.  
3. **Traffic Steering Precision:** I ran a load‑test with Route 53 weighted routing and found that traffic distribution drifted because of local caching—some users stayed stuck in a single region, violating our “equal‑opportunity” policy.  
4. **Cost & Complexity:** I compared Route 53 latency APIs vs. Application Load Balancer (ALB) + Global Accelerator. The latter offered 1 ms latency variance, instant health checks, and a $0.025 per GB cost model that scaled linearly.

**Result (R)**  
I recommended migrating to **AWS Global Accelerator + ALB** with *Health Checks* and *Latency‑Based Routing*. Within two weeks we saw a 99.9% availability uplift, latency dropped from 120 ms to < 30 ms, and cost fell by 18%.  

**Leadership Principles Anchored:**  
- **Customer Obsession:** Delivered instant failover for end users.  
- **Ownership & Dive Deep:** Analyzed DNS behavior, measured real traffic, and chose the most resilient architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
