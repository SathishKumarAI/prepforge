---
qid: ing_a3b3b4bff0__faang__local
question: What is the lethal trifecta, and how would you use it in a design review?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 427
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:05:45-05:00'
sources: []
---

**Clarify**  
The “lethal trifecta” refers to **Latency + Throughput + Cost**—the three axes that most AI‑system designs must balance. I’ll assume the question targets a production ML pipeline (training + inference) and that we’re evaluating trade‑offs in a design review.

**Approach**  
1. Quantify each axis with measurable metrics (ms latency, ops/sec throughput, dollars/compute).  
2. Map candidate solutions onto a 3‑D space.  
3. Prioritize the axis most critical to business value (e.g., low latency for real‑time recommendation).  
4. Iterate on model compression, hardware selection, and scaling strategy.

**Depth**  
- *Latency*: Measure inference time per request; target sub‑200 ms for user‑facing services.  
- *Throughput*: Throughput ≈ 1 / average latency × concurrency; aim ≥10k requests/sec for high‑traffic APIs.  
- *Cost*: Compute cost = (CPU/GPU hours) × unit price + storage/traffic overhead; keep under $0.05 per inference.  
Balance by applying knowledge distillation, quantization, or edge deployment to reduce latency and cost while keeping throughput acceptable.

**Edge Cases**  
- Sudden traffic spikes → auto‑scale may increase latency before new nodes spin up.  
- Model drift → retraining may raise training cost and temporarily lower throughput.  
- Hardware failures → fallback to CPU inference to preserve availability, albeit with higher latency.

**Optimize & Communicate**  
Show a Pareto frontier plot in the review; explain that moving along any axis requires compensating on another (e.g., shaving 10 ms latency may double GPU cost). Conclude with an actionable recommendation: “Deploy a quantized version on GPUs for low‑latency inference, with autoscaling to maintain throughput while keeping per‑inference cost below target.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
