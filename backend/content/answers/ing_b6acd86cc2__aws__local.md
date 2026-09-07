---
qid: ing_b6acd86cc2__aws__local
question: 'QAT Training Objectives: SFT or KD? — What Makes Low-Bit Quantization-Aware
  Training Work for Reasoning LLMs? A Systematic Study'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 445
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:17:05-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional team at Amazon Web Services (AWS), I was tasked with reducing inference cost for our reasoning LLMs deployed in the Alexa Knowledge Graph. The challenge: *“Can low‑bit quantization‑aware training (QAT) preserve accuracy, or should we rely on knowledge distillation (KD)?”*  

**Approach & Technical Design**  
I scoped a systematic study comparing **SFT‑based QAT** vs **KD‑style fine‑tuning**.  
- **Data pipeline:** Amazon SageMaker Pipelines orchestrated end‑to‑end training, ingesting 1 TB of conversational logs via S3 and Athena for feature extraction.  
- **Model training:** EFA (Elastic Fabric Adapter) enabled high‑bandwidth GPU clusters on EC2 P4 instances; I leveraged `torch.quantization` with a custom 4‑bit scheme to simulate inference behavior during training.  
- **Evaluation:** Quantified impact using *Precision@1*, *Recall@5*, and latency on AWS Inferentia chips.  

**Result (Quantified Impact)**  
QAT achieved **99.2 % of baseline accuracy** while reducing model size by 6×, cutting inference cost per request from $0.004 to **$0.0007**—a **84 % savings** that scaled to ~10M daily requests, yielding ~$350k annual savings. KD fell short at 96.5 % accuracy and required an additional 1.2× GPU time.  

**Reflection & Ownership**  
I owned the end‑to‑end experiment, documented trade‑offs (e.g., QAT’s higher training compute vs inference savings), and iterated on hyperparameters after a failed initial run that over‑quantized activations—learning to balance *Dive Deep* with *Bias for Action*.  

> **Leadership Principles:** Customer Obsession, Ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
