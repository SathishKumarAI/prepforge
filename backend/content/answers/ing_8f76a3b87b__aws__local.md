---
qid: ing_8f76a3b87b__aws__local
question: 'Explain: Precision: FP8 vs BF16 — Pretraining Basics'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 518
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:50:36-05:00'
sources: []
---

**Precision: FP8 vs BF16 – Pre‑training Basics**

**Situation (S)**  
I led a team at AWS to reduce GPU memory for our GPT‑4 pre‑training pipeline. The model required 1 TB of activations per step; we were bottlenecked by VRAM and cost.

**Task (T)**  
Explore lower‑precision formats that preserve accuracy while cutting memory by ≥ 50 %.  

**Action (A)**  
I evaluated **FP8** (8‑bit floating point with custom exponent) vs. **BF16** (bfloat16).  
* *Precision analysis*: FP8 offers a 256‑fold dynamic range but only 3‑bit mantissa, risking loss of subtle gradients; BF16 keeps the full IEEE‑754 mantissa and a 7‑bit exponent, matching float32’s dynamic range.  
* *Implementation*: I added an **FP8 quantizer** in PyTorch’s `torch.cuda.amp`, compared against native `bfloat16`.  
* *AWS services*: The training ran on **Amazon EC2 G5 instances** (NVIDIA A10G) with **S3 for checkpointing**, and we used **AWS ParallelCluster** to orchestrate multi‑node scaling.  
* *Metrics*: FP8 reduced memory by 55 % but increased validation loss by 0.8 %; BF16 cut memory by 45 % with < 0.1 % loss in perplexity, maintaining the same training time (≈ 12 h per epoch).  

**Result (R)**  
We chose BF16, cutting GPU usage from 4 × G5 to 3 × G5, saving ~$30k/month while keeping accuracy intact. The pipeline now scales linearly up to 64 nodes with > 90 % SLO compliance.

---

### Leadership Principles

* **Customer Obsession** – Ensured the model’s predictive quality stayed above threshold for downstream services.  
* **Ownership & Dive Deep** – Took full responsibility for precision trade‑offs, dissected math of each format, and quantified impact on cost/accuracy.  

Bar‑raisers listen for: concrete ownership, deep technical dive, measurable ROI, and lessons learned (FP8’s loss led us to adopt BF16).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
