---
qid: ing_b367129760__star__local
question: 'Explain: Inference Optimization — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 395
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:30:40-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup we built a conversational AI to answer compliance questions in real time. The model was an Llama‑2 7B fine‑tuned on our domain data, but latency on the cloud GPU cluster averaged 1.8 s per query—too slow for our live chat service.

**Task**  
I had to cut inference latency by at least 60 % while keeping accuracy (F1) above 0.88, so customers could get instant answers without compromising compliance.

**Action**  
First I benchmarked the baseline with PyTorch and identified a 70 % GPU idle period due to kernel launch overheads. I then applied dynamic quantization (int8) using Hugging Face’s `quantized` pipeline, which reduced model size by 4× and lowered memory traffic. Next, I converted the quantized model to ONNX and optimized it with TensorRT for our NVIDIA A10 GPUs, enabling tensor‑core acceleration and kernel fusion. To mitigate any loss in precision, I performed a small post‑training calibration step on a held‑out compliance dataset. Finally, I wrapped the inference pipeline in a FastAPI service with async workers to parallelize requests.

**Result**  
Latency dropped from 1.8 s to 0.6 s per query—a 66 % reduction—while F1 stayed at 0.89. The deployment cut GPU hours by 45 %, saving ~$2k/month. I learned that a combination of quantization, ONNX/TensorRT conversion, and careful calibration can deliver production‑ready speedups without sacrificing domain accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
