---
qid: ing_03d935416f__faang__local
question: 'Explain: Design an on-prem deployment of an open-weight model for a European
  bank that cannot send data to any external API.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 495
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:53:16-05:00'
sources: []
---

**Clarify**  
We need an **on‑premise** deployment of an *open‑weight* (e.g., GPT‑4‑like) model for a European bank that is bound by GDPR and cannot expose any data to external APIs.  
Assumptions:  
- The bank has sufficient GPU/CPU clusters and storage.  
- Legal compliance requires all training/fine‑tuning data, inference traffic, and logs stay on‑prem.  
- The model must support the bank’s internal NLP workloads (chatbot, risk analysis, etc.).

**Approach**  
1. **Model selection & licensing** – choose a publicly released weight set (e.g., LLaMA 2) that allows local hosting.  
2. **Hardware provisioning** – cluster of NVIDIA A100 GPUs or equivalent; NVMe SSDs for fast checkpoint loading.  
3. **Inference pipeline** – use an open‑source inference server (🤗 Transformers + ONNX Runtime or FasterTransformer).  
4. **Security & compliance** – encrypt data at rest, isolate the model server in a VPC, enforce IAM policies, and audit all access logs.  
5. **Fine‑tuning locally** – if customization is needed, run fine‑tuning on the same cluster using HuggingFace Trainer with differential privacy safeguards.

**Depth**  
- Load weights into memory (~30 GB for LLaMA 2‑7B).  
- Serve via gRPC/REST; batch requests to reduce GPU idle time.  
- Latency <200 ms per token on A100.  
- Cost: ~$10k/month for hardware, $5k maintenance.

**Edge Cases**  
- Out‑of‑memory failures → fallback to smaller model or split inference across GPUs.  
- Data leakage via logs → enforce strict log sanitization.  
- Model drift → schedule periodic re‑evaluation with internal datasets.

**Optimize & Communicate**  
Explain trade‑offs: larger models give better accuracy but higher GPU memory and cost; smaller models are cheaper but may underperform on specialized financial language. Highlight that by keeping everything on‑prem, the bank satisfies GDPR “data residency” mandates while still leveraging state‑of‑the‑art LLMs. This plan balances compliance, performance, and operational feasibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
