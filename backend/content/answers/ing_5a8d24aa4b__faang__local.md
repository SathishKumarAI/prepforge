---
qid: ing_5a8d24aa4b__faang__local
question: Tell me about a time you significantly cut inference costs. What was the
  approach and the tradeoff?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 406
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:14:05-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concrete instance where I reduced run‑time costs (CPU/GPU cycles, memory, latency) for an AI service while keeping acceptable accuracy. Assume the product was a real‑time recommendation engine that served millions of requests per day.

**Approach**  
1. Profile the inference pipeline to locate hotspots.  
2. Apply *structured pruning* on the transformer layers: remove entire attention heads and feed‑forward channels that contributed < 0.5 % to loss.  
3. Retrain with fine‑tuning to recover accuracy.  
4. Convert weights to 8‑bit integers (*post‑training quantization*) for inference on edge GPUs.

**Depth**  
- Pruned model: ~30 % fewer FLOPs, memory footprint ↓ 40 %.  
- Quantized inference: latency dropped from 120 ms → 45 ms per request.  
- Accuracy loss < 0.3 % top‑k accuracy, well within SLA.  
- Complexity: profiling O(N), pruning algorithm O(N·logN), quantization linear in parameters.

**Edge Cases**  
- Extremely low‑resource devices may still struggle; we tested on Jetson Nano and observed > 2× slowdown if not quantized.  
- Rare edge inputs could trigger higher variance; mitigated by fallback to full model for 1% of traffic.

**Optimize & Communicate**  
I presented the tradeoff: ~35 % cost savings vs < 0.5 % accuracy drop, translating to ~$200k/month saved on cloud GPU usage. I also highlighted that the pipeline is fully automated—profile → prune → quantize → deploy—so future model updates inherit these gains without manual re‑tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
