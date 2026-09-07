---
qid: ing_6b6b325d29__faang__local
question: 'Explain: notification to the driver and if the — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 498
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:53:35-05:00'
sources: []
---

**Clarify**

We’re asked to design the *notification* subsystem that alerts a driver when a new trip request arrives (e.g., Uber/OLA).  
Assumptions:  
1. Drivers are online most of the time and can receive push, SMS or in‑app messages.  
2. Latency < 200 ms is critical for acceptance rates.  
3. The system must scale to millions of concurrent drivers and handle failures gracefully.

**Approach**

1. **Event source** – Trip request queue (Kafka).  
2. **Driver routing service** – Maintains an in‑memory map of online driver IDs → device tokens & capabilities.  
3. **Notification dispatcher** – Pulls events, looks up eligible drivers, and pushes messages via a message broker (Pub/Sub or FCM/APNs).  
4. **Retry & back‑off** – Use exponential back‑off for transient failures; dead‑letter queue for permanent ones.  
5. **Metrics & monitoring** – Track delivery latency, success rate, opt‑out counts.

**Depth**

- **Data model**: `Driver(id, status, location, deviceToken, preferredChannels)`.  
- **Routing logic**: Geo‑filter (radius), skill set (e.g., vehicle type).  
- **Scalability**: Partition the driver map by region; each dispatcher shard handles a subset.  
- **Complexity**: O(log N) for lookup if using a B‑tree or O(1) with hash map.  
- **Fault tolerance**: Stateless dispatchers, replicated broker partitions, health checks.

**Edge Cases**

- Driver offline → fallback to SMS/voice.  
- Multiple concurrent requests → rate‑limit per driver.  
- Device token rotation → keep‑alive ping to update tokens.  
- GDPR / opt‑out → respect user preferences; audit logs.

**Optimize & Communicate**

We could cache the eligibility list in Redis for sub‑ms lookups, or precompute “hot” driver clusters during peak times. For latency, push notifications are cheaper than polling; we’d explain trade‑offs to interviewers: lower cost vs. higher reliability of SMS. Conclude by highlighting how this design meets SLAs and scales horizontally with minimal state per node.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
