---
qid: ing_a40b44b5b7__faang__local
question: 'Explain: METR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 527
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:06:47-05:00'
sources: []
---

**Clarify**  
The interviewer asked you to explain **METR**, which in the ML community usually refers to the *METR‑LA* traffic‑flow dataset released by Caltech. It contains high‑frequency speed readings from 207 loop detectors on Los Angeles freeways, sampled every 5 minutes for 4 years.  
Assumptions I’d confirm: (1) you’re after the data’s structure and why it matters; (2) you need to highlight its role in graph‑based spatio–temporal forecasting.

**Approach**  
I’ll first describe the raw format, then explain how the traffic network is naturally a graph, and finally show how METR is used as a benchmark for GNN‑based predictors.

**Depth**  
- **Data layout:** 207 nodes × 4 × 365 days × 288 samples/day → ~84 M rows. Each row: `[timestamp, node_id, speed]`.  
- **Graph construction:** Nodes are loop detectors; edges connect adjacent detectors (road segments). Edge weights can be physical distance or time lag.  
- **Benchmark task:** Given the last *H* timesteps of speeds at all nodes, predict the next *F* timesteps for each node. This tests spatial dependencies (through the graph) and temporal dynamics (via RNN/Temporal Convolution).  
- **Typical models:** DCRNN, Graph WaveNet, STGCN—all achieve ≈ 10–12% MAE on METR‑LA, demonstrating its difficulty.

**Edge cases**  
- Missing sensor data: impute via nearest neighbor or mask‑aware loss.  
- Variable sampling rates: resample to fixed 5‑min grid.  
- Outliers (e.g., zero speed due to malfunction): filter with median absolute deviation.

**Optimize & communicate**  
I’d highlight that METR’s high dimensionality and long temporal horizon make it a strict test of scalability; optimizing batch size, using sparse adjacency matrices, and early stopping are key. When explaining, I’d narrate: “METR gives us a real‑world graph with noisy, irregular traffic data—perfect for evaluating how well a model captures both space and time.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
