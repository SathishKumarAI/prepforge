---
qid: ing_481da88594__faang__local
question: 'Explain: Key Metrics and Alerts — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 562
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:31:34-05:00'
sources: []
---

**Key Metrics & Alerts – Production RAG at Scale**

| **Metric** | **Why It Matters** | **Typical Thresholds** |
|------------|--------------------|------------------------|
| **Latency (99th %ile)** | User experience & SLAs | < 200 ms |
| **Error Rate (4xx/5xx)** | System health & data quality | < 1 % |
| **Throughput / TPS** | Capacity planning | ≥ 95 % of peak load |
| **Queue Depth / Lag** | Back‑pressure & pipeline health | < 10 min lag |
| **CPU / GPU Utilization** | Cost & resource contention | < 70 % (GPU) |
| **Model Drift (RMSE/Accuracy)** | Prediction quality over time | Δ > 5 % from baseline |

### 1. Clarify
- Are we monitoring *batch* vs *real‑time* pipelines?  
- What SLA targets do stakeholders expect?  
- Do we need anomaly detection or threshold‑based alerts?

### 2. Approach
1. **Instrument every stage** (ingest → preprocess → model inference → post‑process).  
2. Push metrics to a time‑series DB (Prometheus, OpenTSDB).  
3. Use Grafana dashboards for RAG visualization; set alert rules in Alertmanager/CloudWatch.

### 3. Depth
- **Latency & Throughput**: Capture per‑request timestamps; compute percentiles with sliding windows. Complexity O(n) per window.  
- **Error Rate**: Count HTTP status codes; aggregate per endpoint.  
- **Queue Lag**: Compare message timestamp to processing time; alert if > threshold.  
- **Model Drift**: Periodically re‑evaluate on a validation set; compute RMSE change.  

### 4. Edge Cases
- **Cold starts** inflate latency → flag separately.  
- **Batch spikes** may temporarily breach throughput but are acceptable if below capacity.  
- **Data outages** cause drift metrics to spike; differentiate between data quality vs model degradation.

### 5. Optimize & Communicate
- **Sampling** for high‑volume streams reduces overhead.  
- **Multi‑tenant isolation**: namespace metrics per customer to avoid cross‑contamination.  
- **Explainability alerts**: trigger when predictions fall outside expected confidence intervals.  

Narrate progress by starting with the *why* (business impact), then showing the *how* (instrumentation & thresholds), and finishing with the *what next* (continuous improvement loop).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
