---
qid: ing_0b3156a4e0__aws__local
question: What is Distributed Caching? — What is Distributed Caching? - by Ashish
  Pratap Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 497
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:51:14-05:00'
sources: []
---

**What is distributed caching?**  
*Leadership Principles:* **Ownership** & **Dive Deep**

---

### Situation
At my previous startup we had a monolithic web app that served 2 M active users daily. The backend repeatedly queried a relational DB for user profile data, causing a 30 % spike in latency during traffic bursts.

### Task
I was tasked with reducing read latency and off‑loading the database without breaking the existing API contracts.

### Action
1. **Requirement dive** – We needed sub‑10 ms reads, 99.9 % availability, and minimal operational overhead.  
2. **Design** – I chose a *distributed in‑memory cache* with eventual consistency:  
   - **AWS ElastiCache for Redis** (cluster mode enabled) as the primary store;  
   - **DynamoDB Streams + Lambda** to propagate write updates to cache nodes;  
   - **Application‑side fallback** to RDS if a key miss occurs.  
3. **Scalability & cost** – Using Auto Scaling groups for Redis shards kept cost ~15 % of the current DB tier while providing linear read scaling.  
4. **Availability** – Multi‑AZ replication and Redis Sentinel ensured failover within <200 ms.  
5. **Monitoring** – CloudWatch metrics (Cache Hit Ratio, Eviction Count) drove automatic rebalancing.

### Result
- Cache hit ratio rose from 12 % to 92 %.  
- Page load latency dropped 3× (from 350 ms to 110 ms).  
- Database read traffic fell by 70 %, saving ~$1.2k/month in RDS I/O costs.  

---

**What a bar‑raiser looks for:**  
*Ownership* – I owned the end‑to‑end solution, from requirement gathering to post‑deployment monitoring.  
*Dive Deep* – I quantified cache hit ratios, latency buckets, and cost savings; I also documented failure scenarios (e.g., Redis node loss) and mitigations.  
*Learning from Failure* – The first deployment had a 5 % cache miss spike due to misconfigured eviction policies; I iterated quickly, updated the policy, and added alerts—demonstrating bias for action and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
