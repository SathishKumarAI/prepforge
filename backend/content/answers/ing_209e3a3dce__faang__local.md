---
qid: ing_209e3a3dce__faang__local
question: 'Explain: Measuring Reliability — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 521
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:00:31-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question:* “How do we measure the reliability of a machine‑learning system?”  
Assumptions to confirm:  
- We’re evaluating an end‑to‑end production ML pipeline (data ingestion → model inference → post‑processing).  
- Reliability means *continuous, correct operation over time*, not just accuracy.  
- Metrics should be actionable for ops and data teams.

**2️⃣ Approach**  
1. Define key reliability dimensions: *availability*, *robustness to distribution shift*, *latency* & *throughput*.  
2. For each dimension, pick concrete metrics (e.g., uptime %, mean‑time‑to‑failure, error‑rate drift).  
3. Instrument the pipeline to capture these metrics in real time.  
4. Set thresholds and alerting rules; tie them to SLIs/SLOs.

**3️⃣ Depth**  
| Dimension | Metric | Calculation | Typical Target |
|-----------|--------|-------------|----------------|
| Availability | Uptime % | (1 – downtime / total time) × 100 | ≥ 99.9 % |
| Accuracy drift | F1‑score change | ΔF1 = F1_t – F1_{baseline} | < 5 % drop |
| Latency | 95th percentile latency | Median + 2σ | ≤ 200 ms |
| Throughput | Queries per second | Count / time | ≥ 10k QPS |
| Failure rate | Errors/total requests | E/T | < 0.1 % |

*Complexity:* O(1) per request for metrics; overall linear in traffic.  
*Trade‑offs:* Tight latency windows may require sampling instead of full logging.

**4️⃣ Edge Cases**  
- Sudden data distribution shift → accuracy metric spikes.  
- Network partitions → availability drops but latency remains low.  
- Model retraining pipeline stalls → throughput falls, affecting SLA.  
Test by simulating concept drift, injecting network delays, and pausing training jobs.

**5️⃣ Optimize & Communicate**  
*Improvements:* Use adaptive thresholds (percentile‑based) to account for seasonality; integrate A/B testing to isolate root causes.  
*Narrative:* “By treating reliability as a set of measurable SLIs—uptime, drift, latency—I can quantify operational risk and drive automated alerts, ensuring our ML system remains trustworthy at scale.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
