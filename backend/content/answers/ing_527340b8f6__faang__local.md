---
qid: ing_527340b8f6__faang__local
question: Traffic doubles overnight and you can't get more GPU capacity for a week.
  What are your graceful-degradation options?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 567
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:56:09-05:00'
sources: []
---

**Clarify**  
*Problem:* Traffic to an AI‑powered service spikes 2× overnight while GPU resources are locked for 7 days.  
*Assumptions I’d confirm:*  
1. CPU and memory are still available in the same proportion.  
2. Latency budget is tighter than throughput (typical for inference).  
3. No critical SLA violations yet; graceful degradation means “acceptable” performance, not outage.

**Approach**  
1. **Scale out non‑GPU layers** – shift more work to CPU (e.g., batch preprocessing, caching).  
2. **Model compression & quantization** – replace the heavy GPU model with a lightweight version.  
3. **Dynamic batching & request throttling** – aggregate requests to keep GPUs busy while limiting per‑request latency.  
4. **Prioritize traffic** – serve high‑value users/regions first, drop or queue low‑priority requests.

**Depth**  

| Option | How it works | Complexity | Trade‑offs |
|--------|--------------|------------|------------|
| CPU fallback (e.g., ONNX Runtime on CPU) | Run inference on CPU; latency ↑ but throughput ↑. | O(1) per request, but higher cost if many requests. | Slower responses, higher CPU load. |
| Quantization (int8/float16) | Reduce precision of weights/biases; GPU still used but with lower memory bandwidth. | Need model retraining or post‑training quantization. | Accuracy loss ≈ 0–2% depending on task. |
| Dynamic batching | Collect N requests, run one batch inference. | Adds buffering delay (≤ batch window). | Latency ↑ for individual requests; reduces GPU idle time. |
| Traffic prioritization | Use rate‑limiting per user tier or geographic region. | Simple token bucket implementation. | Lower‑tier users see higher latency or dropped requests. |

**Edge cases**  
- *CPU overload*: monitor CPU usage; if > 90%, add temporary cloud CPUs or further compress models.  
- *Model accuracy drop*: validate against a holdout set before deploying quantized model.  
- *Batching too large*: may exceed GPU memory → cap batch size dynamically.

**Optimize & communicate**  
Explain that we’ll first deploy the CPU fallback to keep service live, then roll out a quantized model for GPU‑backed requests while throttling low‑priority traffic. We’ll monitor latency and error rates; if thresholds breach, we’ll auto‑scale temporary cloud GPUs or further batch. This layered strategy balances user experience with resource constraints and keeps stakeholders informed through dashboards and SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
