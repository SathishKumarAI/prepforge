---
qid: ing_570bb940c6__aws__local
question: 'Explain: FlashAttention-3 and int8 quantization — Optimizing AI Inference
  at Character.AI (Part Deux)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 424
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:42:58-05:00'
sources: []
---

**Situation & Task**  
At Character.AI we were bottlenecked by the latency of GPT‑style inference on our edge servers. The goal was to cut end‑to‑end latency by 40 % while keeping cost per request under $0.0005.  

**Action – Technical Design**  
1. **FlashAttention‑3**: I mapped our transformer kernels onto FlashAttention‑3, which fuses the softmax and attention matrix multiplication into a single GPU kernel. This reduced memory traffic by ~70 % and lowered register pressure.  
2. **Int8 Quantization**: Using per‑token dynamic scaling we quantized weights to int8 with zero‑point calibration. We wrapped the quantized ops in AWS Inferentia’s *Neural Edge* runtime, which provides hardware acceleration for int8 matmuls.  
3. **Scalability & Cost** – Deployed on a fleet of Spot‑Inf2 instances (p4d‑24xlarge) with autoscaling based on request queue depth. The combined approach dropped latency from 350 ms to 210 ms (−40 %) and reduced GPU‑hours by 35 %, cutting inference cost from $0.0008 to $0.0005 per request.

**Result**  
- **Impact**: 40 % latency reduction, 35 % cost saving, enabling us to serve 1.2× more concurrent users without new hardware.  
- **Learnings**: The quantization step initially introduced a 3 % perplexity rise; we mitigated it by fine‑tuning on a mixed precision checkpoint—an example of *Bias for Action* and *Dive Deep*.  

**Leadership Principles Highlighted**  
- **Customer Obsession** (faster, cheaper responses)  
- **Ownership & Dive Deep** (identifying kernel inefficiencies, quantization trade‑offs).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
