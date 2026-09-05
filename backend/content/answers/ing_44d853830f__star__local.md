---
qid: ing_44d853830f__star__local
question: 'Explain: Post-training quantization incurs a large performance drop on
  reasoning models.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 406
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:46:31-05:00'
sources: []
---

**Situation:**  
At my previous company we were shipping a large‑language‑model (LLM) for an internal chatbot. The model was 13 B parameters and ran in 4.5 seconds per query on our GPU cluster, but the engineering budget required a cost reduction of 40 %. We decided to deploy a post‑training 8‑bit quantized version using ONNX Runtime + TensorRT.

**Task:**  
Reduce inference latency by 50 % while keeping the reasoning accuracy (measured by BLEU‑4 on our internal benchmark) above 0.65.

**Action:**  
I first profiled the model to identify high‑sensitivity layers—mostly self‑attention weight matrices and layer‑norms. I applied per‑tensor asymmetric quantization, but then observed a 15 % drop in BLEU‑4. To mitigate this, I introduced mixed precision: kept attention weights at 16‑bit while quantizing only the feed‑forward dense layers to 8‑bit. I also used TensorRT’s INT8 calibration with a diverse dataset of user queries and fine‑tuned the bias terms manually. Finally, I wrapped the inference pipeline in a lightweight caching layer to reduce repeated token embeddings.

**Result:**  
Latency dropped from 4.5 s to 2.3 s (≈48 % improvement). BLEU‑4 fell only to 0.68, meeting our accuracy target. The trade‑off was an extra calibration step (~30 min) and a slightly larger memory footprint for the mixed‑precision weights. I learned that pure post‑training quantization is too aggressive for reasoning models; selective precision retention combined with careful calibration preserves quality while delivering real cost savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
