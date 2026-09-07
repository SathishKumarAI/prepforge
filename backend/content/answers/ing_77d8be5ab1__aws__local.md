---
qid: ing_77d8be5ab1__aws__local
question: Which modules do you target with LoRA, how do you pick the rank, and what
  are the actual memory savings?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 470
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:56:16-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a project to reduce GPU memory usage for a 1.2 B‑parameter transformer used in an internal recommendation engine. The model ran out of VRAM on our 8×A100 fleet, limiting batch size and SLA.

**Action**  
I applied *Low‑Rank Adaptation (LoRA)* only to the **query/key/value projection matrices** of every multi‑head attention layer—because these are the largest tensors and most frequently updated during fine‑tuning. I avoided LoRA on feed‑forward layers, which have smaller parameter counts and less impact on memory.

For rank selection I used a *grid search* over {4, 8, 16}. Using 8 as the default gave an **80 % reduction** in train‑time GPU memory (from ~32 GB to ~6 GB) while preserving <1.5 % drop in top‑k recommendation accuracy (P@10 from .42 to .416). I validated this on a held‑out 100K user slice.

I deployed the fine‑tuned LoRA checkpoints on **Amazon SageMaker Neo** for inference, which auto‑optimizes the model to our GPU fleet. The overall cost dropped by **$1.2 k/month**, and we achieved a 30 % faster inference latency due to smaller batch size constraints being lifted.

**Result**  
The team gained the ability to train larger models on existing hardware, improved SLA from 12 h to 4 h, and freed up GPU capacity for other experiments—demonstrating *Customer Obsession* (faster recommendations) and *Ownership* (end‑to‑end cost savings).

**Bar‑raiser cues I’d hear**  
- Depth: why only attention matrices?  
- Quantified impact: exact memory & latency numbers.  
- Learning from failure: we initially tried LoRA on all layers, saw negligible gains but higher training time—pivoted accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
