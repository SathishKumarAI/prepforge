---
qid: ing_3a6dc8b9fa__aws__local
question: 'Explain: Latency numbers — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 535
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:38:40-05:00'
sources: []
---

**Context – The problem:**  
When building a high‑traffic service like Twitter, we need to guarantee that a user’s “tweet” or “timeline fetch” returns within **< 100 ms** for the majority of requests, even during peak hours (≈ 3 billion tweets/day).  

---

### STAR – Customer Obsession & Deliver Results  
**Situation:** Our internal audit showed 28 % of timeline responses exceeded 200 ms during “peak hour.”  
**Task:** Reduce tail latency to < 90 % within the next sprint.  
**Action:**  
1. Deployed a **latency‑aware load balancer (AWS ALB + CloudWatch metrics)** to steer traffic away from overloaded nodes.  
2. Introduced **Redis cache tiers** for hot tweets, sharding by user hash; added **Amazon DynamoDB Accelerator (DAX)** for follower lists.  
3. Implemented **request coalescing**: identical timeline requests within 10 ms hit a single DB call.  
4. Added **real‑time monitoring with X-Ray**, auto‑scaling based on percentile metrics, and tuned JVM GC settings.  

**Result:** Tail latency dropped from 200 ms to **68 ms (90th percentile)**; overall response time improved by **45 %**, yielding a 12 % lift in user engagement during peak periods.  

---

### Technical Design – Dive Deep & Ownership  
- **Micro‑service architecture**: `TweetService`, `TimelineService`, each behind an Application Load Balancer.  
- **AWS Services:** ALB, CloudWatch, DynamoDB (partitioned by user), DAX, ElastiCache Redis, Lambda for cache invalidation.  
- **Scalability:** Auto‑scaling groups with target tracking on 99th percentile latency; read replicas in multiple AZs.  
- **Availability:** Multi‑AZ deployment; health checks route traffic away from failed nodes.  
- **Cost trade‑off:** Added DAX ($0.06/hr per node) vs. reduced EC2 instances by 30 %, net savings $1k/month.

---

**Bar‑raiser takeaways:** I owned the end‑to‑end latency loop, dove into metrics to surface root causes, quantified impact (45 % faster), and iterated quickly—demonstrating ownership, depth, and data‑driven decision making.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
