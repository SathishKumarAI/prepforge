---
qid: ing_7255e7187d__faang__local
question: 'Explain: Back of the Envelope Calculation in System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 480
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:09:21-05:00'
sources: []
---

**Back‑of‑the‑Envelope (BOE) Calculations in ML System Design**

| **Step** | **What to do** | **Why it matters** |
|----------|----------------|---------------------|
| 1️⃣ Clarify | Restate the goal: “Estimate resource needs for X inference load.” Ask assumptions – request latency target, batch size, model size, traffic pattern, and deployment region. | Avoids hidden variables that skew the math. |
| 2️⃣ Approach | Sketch a rough pipeline (data → pre‑proc → GPU/CPU → post‑proc). Pick a baseline: one GPU can process *B* requests/sec at latency *L*. Compute total GPUs = traffic / B, add safety margin. | Gives a quick ballpark before digging into code or config files. |
| 3️⃣ Depth | Use the formula: **GPUs = ceil((Requests × Latency) / (GPU‑throughput × SafetyFactor))**. Plug numbers (e.g., 10k req/s, 50 ms latency, GPU throughput 200 req/s, safety 1.5). Result ≈ 3–4 GPUs. | Demonstrates you can translate business requirements into concrete infra specs. |
| 4️⃣ Edge Cases | • Sudden traffic spikes → autoscaling lag.<br>• Model size grows → GPU memory limit.<br>• Cold‑start latency on containers. Test by varying traffic and model size in a small prototype. | Shows awareness of real‑world pitfalls beyond the math. |
| 5️⃣ Optimize & Communicate | • Use multi‑GPU inference (TensorRT, model parallelism).<br>• Compress the model (quantization).<br>Explain trade‑offs: lower latency vs higher GPU cost. Summarize with a one‑line “We’ll start with 4 GPUs and autoscale if requests > 15k/s.” | Communicates confidence, keeps the interviewer engaged, and illustrates a data‑driven design mindset. |

**Takeaway:** A BOE gives you an immediate sanity check—quick numbers that guide deeper architecture decisions while keeping the interview focused on problem‑solving rather than implementation minutiae.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
