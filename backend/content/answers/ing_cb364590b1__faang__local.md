---
qid: ing_cb364590b1__faang__local
question: 'Explain: 2.1 Traffic Estimates — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 650
total_tokens: 892
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:31:58-05:00'
sources: []
---

**Clarify**

We’re asked to design a *Traffic‑Estimates* component for Spotify that predicts the number of users listening at any given time.  
Assumptions to confirm:  

- What granularity is required? (e.g., per minute, per hour)  
- Which metrics matter? (active listeners, concurrent streams, bandwidth usage).  
- How far into the future do we need predictions? (next 24 h, week?)  
- Data sources: past play logs, calendar events, promotion schedules.  
- SLA: latency of < 200 ms for a query; accuracy ± 5 %.  

**Approach**

1. **Data ingestion** – stream raw play logs into a time‑series store (Kafka → InfluxDB).  
2. **Feature engineering** – aggregate counts per minute, extract seasonality (day‑of‑week, hour), trend, and external signals (holidays, new releases).  
3. **Modeling** – use an incremental ARIMA/Prophet model for baseline; augment with a lightweight LSTM or Gradient‑Boosted Trees that take engineered features as input. Train weekly on the last 6 months of data.  
4. **Serving** – expose a REST endpoint that returns the next *n* intervals. Cache predictions in Redis to meet latency.  
5. **Monitoring & Retraining** – compare forecast vs actual, trigger retrain when MAE > threshold or concept drift detected.

**Depth**

- **Time‑series model**: ARIMA captures trend + seasonality; Prophet adds holiday effects and handles missing data.  
- **Neural net**: LSTM layers (1–2) with 64 units, dropout 0.2, trained on sliding windows of size 60 (minutes). Loss = MAE.  
- **Complexity**: Inference O(1) per interval; training O(T·log T) where *T* is number of historical points.  
- **Trade‑offs**: Simpler models are easier to explain and retrain, but may miss nonlinear patterns; neural nets give higher accuracy at the cost of interpretability.

**Edge Cases**

- Sudden spikes (e.g., viral release): model lag → fallback to rule‑based surge multiplier.  
- Data gaps: Prophet handles missing dates gracefully.  
- Cold start for new artists: use demographic averages or similar artist profiles.  

**Optimize & Communicate**

1. **Explainability** – keep a “rule‑book” of seasonal adjustments; log feature importances.  
2. **Scalability** – partition data by region to parallelize training; use GPU instances if latency tight.  
3. **Feedback loop** – automatically feed actual traffic back into the model for online learning (e.g., using TensorFlow Serving).  

By structuring the solution—clarifying needs, outlining a robust data‑pipeline + hybrid modeling approach, detailing complexity, anticipating edge cases, and iterating on explainability—we demonstrate the problem‑solving rigor that FAANG interviewers value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
