---
qid: ing_8751979028__faang__local
question: 'Explain: High Level Architecture — Eureka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 531
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:58:38-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview asks for a *high‑level architecture* of **Eureka**, Netflix’s service registry used in micro‑service environments.  
Assumptions:  
- We’re designing the core components (registry, client, proxy).  
- Focus on fault tolerance, scalability, and eventual consistency rather than low‑level implementation details.

**2️⃣ Approach**  
1. Identify actors: **Service Instances**, **Eureka Server(s)**, **Clients** (applications).  
2. Define data flow: registration → heartbeat → discovery.  
3. Map to components: *Registry Store*, *Heartbeat Service*, *Discovery API*, *Replication & Failover*.

**3️⃣ Depth**  
```
+-----------------+      +-----------------+
|  Service Instance |<--->|   Eureka Server   |
+--------+--------+      +--------+--------+
         |                         ^
         | Register / Heartbeat     |
         v                         |
+-----------------+      +--------+--------+
|    Client (App) |----> | Discovery API   |
+-----------------+      +-----------------+

```
* **Registry Store** – in‑memory hash map (serviceID → instance metadata).  
* **Heartbeat Service** – clients ping every 30 s; if missed > 5×interval, entry expires.  
* **Replication** – multiple Eureka nodes run in an *Eureka cluster*; they sync via the `/eureka/apps` endpoint using a gossip‑style protocol (JGroups‑like).  
* **Discovery API** – clients query `/eureka/apps/{app}`; returns list of healthy instances.  
* **Caching & Load Balancing** – clients cache responses for 30 s and use round‑robin or client‑side LB.

**4️⃣ Edge Cases**  
- Network partitions: stale data → eventual consistency after heartbeat loss.  
- Rapid scale‑up/down: high registration churn → backpressure on server.  
- Clock skew: use UTC timestamps; clients send `lastUpdatedTimestamp`.  

**5️⃣ Optimize & Communicate**  
*Add a **TTL cache** in the client to reduce traffic, and expose a **health‑check endpoint** for internal monitoring.*  
Explain trade‑offs: in‑memory store gives low latency but loses data on crash; replication solves durability at cost of higher network overhead.  

> *Result:* A concise, interview‑ready description that balances architectural clarity with technical depth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
