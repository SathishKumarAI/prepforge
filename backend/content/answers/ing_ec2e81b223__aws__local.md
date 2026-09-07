---
qid: ing_ec2e81b223__aws__local
question: 'Explain: How do you deploy a capable assistant on cost-sensitive or on-device
  hardware (think Sarvam-Edge) without a datacentre GPU? Walk through the efficiency
  toolkit.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 418
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:12:46-05:00'
sources: []
---

**Situation – Task**  
While leading the “Sarvam‑Edge” project I was asked to ship a conversational AI that could run on ARM‑based IoT devices with < 2 W power and no datacenter GPU, yet still deliver 90 % of the accuracy of our cloud model.  

**Action – Technical Design**  
1. **Model compression** – I applied *knowledge distillation* to transfer a 12‑layer BERT teacher into a 4‑layer MobileBERT student, reducing FLOPs by 7× while keeping perplexity < 1.3× the baseline (≈ 0.9).  
2. **Quantization & pruning** – Post‑training 8‑bit static quantization and structured pruning cut model size to 12 MB, enabling in‑memory inference on a Raspberry Pi 4.  
3. **Edge‑specific runtime** – I wrapped the model with *ONNX Runtime* + *TensorRT*-lite, leveraging NVIDIA Jetson’s NPU for further acceleration (≈ 2× speedup).  
4. **Inference pipeline** – Implemented a lightweight *async token buffer* that batches 8 requests, reducing latency from 350 ms to 120 ms while keeping CPU < 30 %.  

**Result – Impact**  
Deployment on 1,000 units achieved an end‑to‑end accuracy of 88 % with < 1.5 W power; we saved $0.04 per inference compared to cloud GPU (≈ $2M/yr). The solution was shipped two weeks ahead of schedule—demonstrating *Bias for Action* and *Ownership*.  

**Learning** – A failed first pruning run taught me to monitor layer‑wise sensitivity early, preventing catastrophic accuracy loss—a key takeaway I share with new hires.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
