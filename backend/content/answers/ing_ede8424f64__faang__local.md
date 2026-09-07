---
qid: ing_ede8424f64__faang__local
question: 'Explain: the speed at which the cab is — UBER System design | OLA system
  design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 471
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:53:36-05:00'
sources: []
---

**Clarify**  
The interviewer asks how we would *measure* a taxi’s speed in an Uber‑style ride‑hailing system and use that metric for dispatch, surge pricing or driver incentives. I’ll assume: (1) the vehicle has GPS, (2) we need near‑real‑time updates for many drivers, and (3) the solution must scale to millions of concurrent users.

**Approach**  
1. Collect timestamped latitude/longitude pairs from the driver’s mobile app every few seconds.  
2. Compute instantaneous speed using haversine distance / time delta.  
3. Aggregate over a sliding window (e.g., 30 s) to smooth GPS noise and detect stops or slow‑downs.  
4. Push the processed speed to a low‑latency stream (Kafka/Redis Streams).  
5. Subscribe dispatch services to consume the latest speed per driver.

**Depth**  
- **Accuracy:** Use map‑matching to correct GPS jitter; apply Kalman filtering for noise reduction.  
- **Latency:** Aim < 1 s end‑to‑end by using edge‑computing on the mobile device for raw calculation, sending only deltas.  
- **Scalability:** Store per‑driver state in Redis (≈ 100 MB for 10M drivers). Kafka topics partitioned by region keep throughput > 10k events/s.  
- **Fault tolerance:** Duplicate stream and replay logs to recover from outages.

**Edge Cases**  
- GPS loss or spoofing → fallback to cellular triangulation; flag anomalies.  
- High‑speed highways vs city traffic → adjust window size for smoothing.  
- Battery drain → adaptive reporting frequency based on driver activity.

**Optimize & Communicate**  
I’d propose a two‑tier system: edge‑computation for instant speed, cloud aggregation for analytics and policy decisions. During the interview I would sketch this architecture on paper, explain trade‑offs (latency vs. battery life), and show how it integrates with surge pricing or driver incentives. This demonstrates clear problem framing, technical depth, and an end‑to‑end solution that a FAANG team could prototype quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
