---
qid: ing_3decd42c20__star__local
question: 'Explain: The browser DNS caching issue — Why DNS Based Global Server Load
  Balancing (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 380
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:32:07-05:00'
sources: []
---

**Situation:**  
In early 2024 I was tasked with rolling out a global load‑balancing solution for our SaaS platform that had just hit 3 M daily active users across North America, Europe, and Asia. The architecture team suggested using DNS‑based GSLB so each region’s edge node could receive traffic based on proximity.

**Task:**  
I needed to design the DNS layer so that user requests were routed efficiently without causing a surge in latency or uneven server utilization. My goal was to keep response times under 200 ms and avoid any sudden spikes when users switched regions.

**Action:**  
I implemented round‑robin A record rotation with a 60‑second TTL, but after deployment the metrics told a different story. Because browsers cache DNS responses aggressively (often for up to an hour), many clients stayed on a single IP even after we shifted traffic away from that node. I added health checks and a “failover” CNAME fallback, but still observed 15 % of sessions hitting overloaded nodes. To mitigate this, I introduced short‑lived DNS records (10 s TTL) coupled with an HTTP/2 connection pool on the edge servers, allowing clients to reconnect quickly after cache expiry.

**Result:**  
After the tweak, our load was balanced within ±5 % across regions and latency dropped from 350 ms to 180 ms. The incident taught me that DNS‑based GSLB is fragile due to caching; combining it with short TTLs and application‑level re‑routing is essential for real‑world reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
