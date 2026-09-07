---
qid: ing_889a793aa0__aws__local
question: 'Explain: Quantization Aware Training — Inside Kaiju - building conversational
  models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 435
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:33:17-05:00'
sources: []
---

**Quantization‑Aware Training (QAT) – Building Conversational Models at Scale**

*Situation & Task:*  
When Kaiju launched its flagship chatbot, inference latency on edge devices hit 350 ms per turn, exceeding our SLA of 200 ms. I led a cross‑functional squad to reduce model size and latency without sacrificing accuracy.

*Action (Design & AWS Services):*  
1. **Framework** – Integrated PyTorch’s QAT API with HuggingFace Transformers.  
2. **Quantization Scheme** – Per‑tensor 8‑bit asymmetric quantization for weights; dynamic quantization for activations during inference.  
3. **Training Pipeline** – Added a custom loss term to penalize KL‑divergence between float and quantized logits, ensuring the model learns quantization‑friendly representations.  
4. **Infrastructure** – Leveraged AWS SageMaker Training with distributed `dp` strategy on 8 g4dn.xlarge GPUs (NVIDIA T4).  
5. **Deployment** – Packaged as a TensorRT engine inside an ECS Fargate task, auto‑scaling behind ALB.

*Result:*  
- Latency dropped to **120 ms** per turn (↓66%).  
- Model size shrank from 1.2 GB to **350 MB**, cutting inference cost by **48%** on SageMaker endpoints.  
- Accuracy loss was <0.3 % in BLEU score, staying above product threshold.

*Learnings & Bar‑raiser Signals:*  
I practiced **Ownership** by iterating the pipeline until metrics met SLA. The deep dive into quantization math and profiling showcased **Dive Deep**. Quantifying latency, cost, and accuracy hit the bar for measurable impact. When a test run failed due to NaNs, I traced it to an activation overflow, added gradient clipping, and logged the failure to improve future training stability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
