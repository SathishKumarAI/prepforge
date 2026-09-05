---
qid: ing_0ab5c01771__star__local
question: 'Explain: Your model meets quality but runs at 4s p95 and you need 400ms
  with 10x the throughput. Design the compression plan.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 382
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:50:11-05:00'
sources: []
---

**Situation**  
In my last role I was responsible for a recommendation model that served 1.2 M requests per day on an edge‑device fleet. The baseline inference time hit the 95th percentile at 4 s and throughput capped at ~200 req/s, far above our SLA of 400 ms p95 and 10× throughput.

**Task**  
I had to design a compression strategy that slashed latency by 10× while keeping accuracy within 1.5% of the original model, all without pulling traffic off‑site or adding costly hardware.

**Action**  
I first benchmarked the model on CPU vs GPU and identified that the Transformer layers were the bottleneck (≈80 % of time). I applied a two‑stage plan:  
1. **Quantization‑aware training (QAT)** to 8‑bit weights/activations, reducing memory bandwidth by ~4×.  
2. **Structured pruning** targeting attention heads that contributed <0.5 % weight magnitude, then fine‑tuned with knowledge distillation from the full model.  
I wrapped the pruned network in TensorRT and used dynamic shape inference to keep batch size 1 latency low. Finally, I introduced a caching layer for the top‑k item embeddings, cutting repetitive compute by ~30 %.

**Result**  
Post‑deployment, p95 latency dropped to 350 ms and throughput rose to 2,400 req/s (12×). Accuracy loss was only 0.9% in AUC. I learned that combining QAT with structured pruning and smart caching yields a compact model that still meets real‑world performance constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
