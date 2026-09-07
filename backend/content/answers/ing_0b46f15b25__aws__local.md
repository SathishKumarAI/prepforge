---
qid: ing_0b46f15b25__aws__local
question: 'Explain: Compute Requirements — Transformer Architecture'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 448
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:51:31-05:00'
sources: []
---

**Situation (S)**  
While leading a research‑to‑production team for an on‑prem LLM at a mid‑size fintech, we needed to run GPT‑2–style transformers in real time for fraud‑alert generation. The compute budget was limited to 4 × A100 GPUs and a 48 h training window.

**Task (T)**  
Design a scalable, cost‑effective compute pipeline that satisfies latency < 200 ms per inference while staying within the GPU budget.

**Action (A)**  
1. **Model pruning & quantization** – applied structured sparsity (20 % weight removal) and 8‑bit INT8 calibration to shrink memory footprint by 35 %.  
2. **Pipeline orchestration** – used **AWS Batch** + **ECS Fargate** for dynamic job scaling, coupled with **SageMaker Neo** to compile the model for GPU inference.  
3. **Distributed inference** – leveraged **NVIDIA Triton Inference Server** behind an ALB, enabling horizontal scaling across 4 GPUs and automatic request routing.  
4. **Monitoring & auto‑tuning** – instrumented with CloudWatch metrics; set up a Lambda that triggers spot‑GPU replacement if latency > 180 ms.

**Result (R)**  
Achieved < 150 ms average latency, reduced GPU hours by 28 % versus baseline, and cut inference cost to $0.003 per request—down 40 % from the original estimate. The model maintained 92 % F1 on fraud detection, meeting regulatory SLAs.

---

**Leadership Principles Highlighted**

- **Customer Obsession** – focused on end‑user latency & compliance.  
- **Ownership** – drove the entire compute stack redesign and cost optimisation.  

**Bar‑raiser cues**

- Quantified impact (latency, cost savings).  
- Deep dive into pruning/quantization trade‑offs.  
- Learning: early spot‑GPU failures taught us to add a fallback CPU worker for graceful degradation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
