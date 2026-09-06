---
qid: ing_9a876f490a__think__local
question: 'Explain: A team wants to self-host a 13B model for ~1M requests/day. Size
  the GPU fleet.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 530
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:17:51-05:00'
sources: []
---

**Metacognition Checklist – Estimating GPU Fleet for Self‑Hosting a 13 B Model**

| # | Thought Process |
|---|-----------------|
| **1. Clarify the problem & assumptions** | • What is “self‑host” (on‑prem vs. cloud)?<br>• Do we need real‑time inference or can we batch?<br>• Latency budget per request? <br>• Model architecture (transformer, tokenizer overhead).<br>• GPU memory requirement for 13 B (≈ 48–56 GB w/ FP16 + activations).<br>• Are you using quantization or mixed‑precision? |
| **2. Choose a mental model / framework** | • Use *throughput per GPU* as the core metric.<br>• Throughput = (#requests per second) × (latency per request).<br>• Convert 1 M requests/day → ~11.6 req/s (assuming uniform traffic). |
| **3. Reason step‑by‑step** | a. Estimate latency: typical 13 B on A100 FP16 ≈ 300–500 ms for single‑token generation.<br>b. Throughput per GPU = 1 / latency → ~2–3 req/s.<br>c. Total GPUs needed = required throughput ÷ throughput per GPU ≈ 11.6 / 2.5 ≈ **4–5 GPUs** (round up for redundancy).<br>d. Add buffer: 20‑30 % extra for spikes → ~6 GPUs. |
| **4. Avoid common traps** | • Don’t ignore batch size; larger batches reduce per‑request latency.<br>• Don’t forget GPU memory for activations—may need > 48 GB.<br>• Ignore I/O overhead (tokenization, network).<br>• Don’t assume identical performance across GPUs. |
| **5. Sanity‑check & communicate** | • Cross‑check with vendor benchmarks (e.g., NVIDIA A100 inference score for 13 B).<br>• Verify that 6 GPUs still meet latency SLA.<br>• Explain assumptions, show calculations, and note potential variance due to traffic patterns or model tweaks. |

Use this flow whenever sizing GPU fleets: start with clear constraints → pick a throughput‑per‑GPU baseline → scale by demand, add safety margin, then validate against real benchmarks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
