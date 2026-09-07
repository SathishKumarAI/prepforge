---
qid: ing_d9399b362c__aws__local
question: 'Explain: 4.1. Client-Side Discovery — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 487
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:30:16-05:00'
sources: []
---

**Question:** *Explain: 4.1. Client‑Side Discovery – What is Service Discovery?*  

---

### 📌 Situation  
While building a micro‑service platform for a global e‑commerce site, I noticed that the API gateway was making **100 k upstream calls per minute** to locate services behind an autoscaling group. Latency spiked and costs ballooned.

### 🎯 Task  
Implement a *client‑side discovery* mechanism so each service instance can resolve its peers locally without hitting the gateway for every request, while keeping high availability and low cost.

### 💡 Action  
1. **Requirement Clarification** – Need sub‑second resolution, support rolling deployments, and zero single point of failure.  
2. **Design** –  
   * Each service registers its own IP/port in **AWS Cloud Map** (or Route 53 private hosted zone).  
   * Clients fetch a small JSON registry via **S3 signed URL** or **EFS** on launch; refresh every 5 min using an EC2 instance metadata‑driven cron.  
   * Fallback to **Eureka**‑style DNS TTL for safety.  
3. **AWS Services & Trade‑offs** –  
   * Cloud Map (low cost, built‑in health checks) → *Availability* ✔️  
   * S3/EFS (immutable cache) → *Scalability* ✔️ but *Latency* slightly higher than in‑memory; mitigated by local caching.  
4. **Metrics & Results** – Reduced gateway calls from 100 k/min to <1 k/min, cutting egress costs by **$12 K/month** and decreasing average latency by **18 %**.

### 📈 Result  
- **Customer Obsession:** Faster API responses improved checkout success rate by **3.5 %**.  
- **Ownership & Dive Deep:** I owned the full stack, from Cloud Map health checks to cache eviction policies, and iterated after a 2‑hour outage that revealed stale entries.

---

*Bar‑raiser focus:* clear ownership, deep technical dive, quantifiable impact, and lessons learned from failure (stale cache).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
