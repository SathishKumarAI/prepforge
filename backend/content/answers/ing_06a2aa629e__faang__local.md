---
qid: ing_06a2aa629e__faang__local
question: When does on-device or edge inference make sense, and what actually constrains
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 503
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:59:47-05:00'
sources: []
---

**Clarify**  
We’re asked when *on‑device / edge inference* is worthwhile and what limits its feasibility. I’ll assume: (1) the model runs on a mobile or IoT device, (2) latency, battery, privacy, and connectivity are concerns, and (3) we can trade off accuracy for efficiency.

**Approach**  
1. Identify business/value drivers (latency vs. throughput).  
2. Enumerate constraints: compute cycles, memory, power budget, model size, and real‑time requirements.  
3. Match those to typical edge use cases (e.g., AR filters, voice assistants, anomaly detection).

**Depth**  
Edge inference makes sense when *low latency*, *offline operation*, or *data privacy* outweigh the cost of model compression. It’s common in:  

- **Real‑time perception** (AR/VR, robotics) – needs <10 ms inference.  
- **Privacy‑sensitive data** (health, personal photos) – keeps raw data local.  
- **Intermittent connectivity** (remote sensors).  

Constraints that actually limit edge deployment:

| Constraint | Impact |
|------------|--------|
| CPU/GPU FLOPs | Determines achievable frame rate; often <10 % of server GPUs. |
| Memory & storage | Limits model size; typical mobile devices hold 50–200 MB for inference. |
| Power budget | Continuous inference drains battery quickly; requires power‑efficient ops (e.g., INT8, sparsity). |
| Thermal headroom | High utilization can throttle CPU/GPU, affecting performance. |
| Model quantization & pruning overhead | May degrade accuracy if not carefully tuned. |

**Edge Cases**  
- Ultra‑large models (>1 B params) cannot fit.  
- Models requiring high precision (e.g., medical imaging) may lose acceptable accuracy after compression.  
- Devices with no GPU or only low‑power DSPs need extreme quantization.

**Optimize & Communicate**  
I’d first profile the target device, then apply model pruning, quantization, and knowledge distillation to hit a 10–20 % accuracy drop while staying within memory and power budgets. Finally, I’d benchmark latency and battery impact under realistic workloads. This trade‑off narrative shows clear decision logic, aligning with FAANG interview expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
