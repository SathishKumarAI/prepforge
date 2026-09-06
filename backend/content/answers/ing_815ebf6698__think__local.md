---
qid: ing_815ebf6698__think__local
question: Product wants the assistant to answer from data no older than 15 minutes.
  How do you design and monitor that freshness SLA?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 533
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:32:35-05:00'
sources: []
---

**1️⃣ Clarify the problem & state assumptions**  
- *What is “freshness” exactly?* Assume it means: every answer must be based on data whose timestamp ≤ 15 min old (no older than 15 min).  
- *Scope of data*: assume a stream of events (logs, sensor readings) with reliable timestamps.  
- *Latency budget*: we can afford up to, say, 2–3 s for processing and response.  

**2️⃣ Mental model / framework**  
Use the **“time‑window consistency”** pattern: maintain an in‑memory sliding window of events covering the last 15 min; any query reads only from that window. Combine it with a *freshness monitor* that checks the head of the stream against the current time.

**3️⃣ Step‑by‑step reasoning**  
1. **Ingest layer**: as data arrives, push it into a time‑ordered buffer (e.g., a deque or a time‑series DB).  
2. **Window maintenance**: periodically purge entries older than 15 min (based on event timestamp).  
3. **Query handling**: when the assistant receives a request, read from the current window; no look‑ahead beyond it.  
4. **Freshness check**: before answering, compare the most recent event’s timestamp to `now()`. If gap > 15 min, flag as stale and either refuse or fetch newer data (if available).  
5. **Monitoring**: expose metrics – `max_timestamp_gap`, `window_size`, `query_latency` – feed into alerting.  

**4️⃣ Common traps to avoid**  
- *Clock skew*: rely on event timestamps, not system clock; sync clocks via NTP/Pulse.  
- *Late arrivals*: if an older event arrives late, it shouldn’t be used for fresh answers unless the policy allows “late‑arriving data”.  
- *Buffer overflow*: ensure the buffer can hold 15 min of data at peak rate (use backpressure).  

**5️⃣ Sanity‑check & communicate**  
- Verify with a small test: feed events, query immediately → answer uses newest data; wait >15 min → monitor flags staleness.  
- Explain to stakeholders: “We keep a 15‑min sliding window in memory and enforce freshness by rejecting queries that would need older data.”  

This design gives you an SLA‑driven pipeline with clear metrics to prove compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
