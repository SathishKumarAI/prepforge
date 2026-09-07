---
qid: ing_9e6b744786__faang__local
question: 'Explain: Designing a new approach to capacity management'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 489
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:52:22-05:00'
sources: []
---

**Clarify**  
We’re asked how to design a *new* capacity‑management strategy for ML workloads—i.e., predicting and provisioning compute, memory, storage, and network resources so that models run within SLAs while minimizing cost.  
Assumptions:  
- Workloads are batch/online inference or training jobs with known input sizes.  
- We have historical telemetry (CPU/mem usage, I/O, latency).  
- A cloud‑native environment (containers, autoscaling) is available.

**Approach**  
1. **Data collection & feature engineering** – gather per‑job metrics and enrich with model metadata (size, layers, ops count).  
2. **Predictive modeling** – train a regression or gradient‑boosted tree to estimate resource demand per job.  
3. **Policy layer** – map predictions to provisioning units (VM types, GPU counts) via a cost‑aware optimization (e.g., knapsack with SLA constraints).  
4. **Feedback loop** – continuously update the predictor with new telemetry and trigger re‑provisioning if error > threshold.

**Depth**  
- Use *AutoML* or *Neural Architecture Search* to learn feature importance, ensuring explainability.  
- For training jobs, include data‑skew & I/O patterns; for inference, include request rate and latency targets.  
- Complexity: prediction is O(1) per job; optimization runs in O(n log n).  
- Trade‑offs: tighter SLA → higher cost; relaxed SLA → risk of thrashing.

**Edge Cases**  
- Sudden traffic spikes (DDoS or flash crowds): fall back to over‑provisioned “burst” pool.  
- Model drift causing prediction errors: trigger retraining after a threshold number of mispredictions.  
- Hardware failures: incorporate redundancy in the policy layer.

**Optimize & Communicate**  
- **Performance**: cache predictions for repeated jobs; batch provisioning decisions during off‑peak hours.  
- **Cost**: use spot/pre‑emptible instances with checkpointing for non‑critical training.  
- **Narrative**: explain that we’re turning reactive autoscaling into a predictive, data‑driven policy that balances SLA compliance and cost, backed by continuous learning and fail‑safe mechanisms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
