---
qid: ing_5a8d24aa4b__aws__local
question: Tell me about a time you significantly cut inference costs. What was the
  approach and the tradeoff?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 378
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:50:21-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a server‑less inference pipeline for a recommendation engine that ran 24/7 on Lambda + SageMaker. Monthly inference spend was $120k and latency hit our SLA (300 ms).  

**Action**  
1. **Model pruning & quantization** – I applied 8‑bit post‑training quantization, reducing model size from 2.4 GB to 0.6 GB while keeping accuracy within 0.5 %.  
2. **Container‑based Lambda** – Switched from the default “warm” image to a lightweight Alpine container with pre‑loaded *ONNX Runtime*, cutting start‑up time by 70 % and eliminating the cold‑start penalty that was inflating CPU credits.  
3. **Dynamic batching via SageMaker Neo** – Deployed a Neo‑optimized binary that batches 32 requests per invocation, lowering GPU utilization from 18 % to 4 %.  

**Result**  
Inference cost dropped from $120k/month to **$35k/month** (71 % reduction). Latency improved to 180 ms on average, meeting SLA. The trade‑off was a slight increase in model training time (+12 h) and an extra 2 days of dev effort for the Neo deployment, but the long‑term savings far outweighed these costs.

**Reflection**  
I owned the end‑to‑end cost curve, dove deep into AWS metrics (Lambda Provisioned Concurrency, SageMaker GPU credits), and iterated quickly—key Amazon principles: *Ownership*, *Dive Deep*, and *Bias for Action*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
