---
qid: ing_f404e30329__star__local
question: 'Explain: In-Flight Batching (Prefill-Decode Fusion)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 352
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:35:45-05:00'
sources: []
---

**Situation**  
During my last role at a streaming media startup, we were launching a real‑time captioning service that used an autoregressive transformer model. Our latency target was < 150 ms per utterance, but the decoder alone took ~120 ms and the prefill stage added another 80 ms, pushing us over budget.

**Task**  
I had to reduce total inference time by fusing the prefill and decode phases without sacrificing accuracy, so we could meet the latency SLA while keeping GPU usage low for concurrent users.

**Action**  
First, I profiled the model on our TPU cluster and identified that the prefill produced a fixed context vector used only once per decoding step. I rewrote the inference pipeline to perform *in‑flight batching*: instead of launching separate kernels for prefill and decode, I merged them into a single CUDA kernel that computed the initial key/value states and immediately started the autoregressive loop in one pass. I also applied mixed‑precision (FP16) for the prefill matrix multiplication and reused its output tensors across steps to avoid memory traffic. Finally, I leveraged TensorRT’s dynamic shape support so the fused kernel could adapt to variable-length inputs while keeping batch sizes fixed at four.

**Result**  
The end‑to‑end latency dropped from 200 ms to 95 ms per utterance—a 52 % improvement—while GPU memory usage fell by 30 %. The deployment met our SLA, and I learned that careful kernel fusion coupled with dynamic batching can unlock significant gains in autoregressive models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
