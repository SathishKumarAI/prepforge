---
qid: vq_c54de38134__faang__local
question: Expected peak load?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 442
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:32:43-05:00'
sources: []
---

**Clarify**  
The interview question is *“How would you determine the expected peak load for a data‑engineering pipeline?”* I’ll assume we’re talking about batch/streaming ingestion or transformation workloads (e.g., Kafka → Spark → Data Lake). Clarifying points:  

- What metrics define “load” (CPU, memory, network IO, number of records per second)?  
- Is the system cloud‑based (AWS, GCP) or on‑prem?  
- Do we have historical telemetry or are we estimating from business growth?  

**Approach**  
1. **Collect baseline telemetry**: job run times, resource usage, input volume over time.  
2. **Model workload patterns**: use time series forecasting (ARIMA/Prophet) on historical ingestion rates.  
3. **Simulate peaks**: inject synthetic data at projected peak rates and observe resource saturation points.  
4. **Validate with stress tests**: run the pipeline at 1×, 2×, … of forecasted load until bottlenecks appear.  

**Depth**  
- Use metrics like *records per second*, *bytes per second*, *CPU‑core‑seconds* and *memory footprint*.  
- Forecasting error bounds (±10 %) inform capacity buffers.  
- In cloud, map peaks to autoscaling rules; on‑prem, add headroom (e.g., 20–30 % over forecast).  
- Complexity: forecasting O(n log n), simulation linear in number of test runs.  

**Edge Cases**  
- Sudden spikes due to external events (marketing campaigns) → use real‑time alerts.  
- Data skew or schema changes causing longer jobs.  
- Hardware failures that mask true peak load.  

**Optimize & Communicate**  
Explain the trade‑off between overprovisioning (cost) and underprovisioning (downtime). Suggest incremental rollout: start with conservative forecast, monitor, then refine. Conclude by highlighting how this proactive sizing reduces SLA violations and improves cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
