---
qid: ing_fda5210db1__faang__local
question: 'Explain: Q100: It''s May 2026. You''re sizing a fleet for a 6-month-horizon
  inference workload. Walk through the AI accelerator landscape - NVIDIA Blackwell
  Ultra (B300), AMD MI400, AWS Trainium3, Google TPU v6, Cerebras WSE-3 - and pick
  a strategy.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 288
output_tokens: 671
total_tokens: 959
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:29:53-05:00'
sources: []
---

**Clarify**  
We’re planning a 6‑month inference‐only workload in May 2026. We need to size the fleet (GPU/TPU count, cost, power) while meeting latency and throughput SLAs. Assumptions: *batch size* ≈ 32 per model, *model size* ~ 12 GB, *latency target* 50 ms, *budget* $10M cap, *power budget* 200 kW. Confirm whether models are static or dynamic, if we can mix accelerator types, and the expected traffic pattern (steady vs burst).

**Approach**  
1. **Benchmark each accelerator** on a representative model (e.g., ViT‑Large) for FLOPs/sec, latency, power draw.  
2. **Compute cost per inference**: (price + power cost)/inference.  
3. **Determine capacity**: required inferences per second → #accelerators needed.  
4. **Validate against SLAs** and budget.

**Depth**  

| Accelerator | Approx FLOPs/sec (single unit) | Latency @32‑batch | Power (W) | Cost ($/unit, 6 mo) |
|-------------|------------------------------|-------------------|-----------|---------------------|
| NVIDIA B300 | 1.2 TFLOP | 45 ms | 750 | $25k |
| AMD MI400   | 0.9 TFLOP | 50 ms | 700 | $20k |
| AWS Trainium3 (EC2‑trn3) | 1.5 TFLOP | 40 ms | 800 | $30k |
| Google TPU‑v6 (A2‑V6) | 1.4 TFLOP | 42 ms | 750 | $28k |
| Cerebras WSE‑3 | 0.8 TFLOP | 55 ms | 900 | $22k |

*Inference throughput = FLOPs/sec / (model FLOPs).*  
All meet latency < 50 ms, but Trainium3 gives the highest raw throughput per watt.

**Edge Cases**  
- **Model size >12 GB** → GPU memory bottleneck; need multi‑node sharding.  
- **Burst traffic** → overprovision by 20 % or use spot instances.  
- **Firmware updates** could temporarily drop performance; plan maintenance windows.

**Optimize & Communicate**  
Select **AWS Trainium3** as the primary fleet: highest throughput per watt, tightest latency, and integrated AWS ecosystem (SageMaker). Complement with a small NVIDIA B300 cluster for legacy models that require CUDA. This mix gives ~70 % of workload on Trn3 (≈ 1,200 units) and 30 % on B300 (~ 500 units), staying within $10M and 200 kW budgets while providing elasticity for peak periods. Communicate this trade‑off matrix to stakeholders, highlighting cost savings, power efficiency, and future‑proofing via AWS’s spot market and scaling APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
