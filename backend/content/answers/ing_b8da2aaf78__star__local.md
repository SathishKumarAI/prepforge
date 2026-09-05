---
qid: ing_b8da2aaf78__star__local
question: 'Explain: Distillation: The Cheaper Path — Rlvr And Reasoning Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 355
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:40:58-05:00'
sources: []
---

**Situation**  
At my previous company we were building a real‑time visual reasoning assistant that combined a large language model (LLM) with a vision‑language transformer for medical image interpretation. The baseline model cost $12 per inference due to the 2B parameter LLM, which was unsustainable for our $50k/month compute budget.

**Task**  
Reduce inference cost by at least 70 % while keeping diagnostic accuracy within 1 % of the original model and maintaining sub‑second latency on a single GPU.

**Action**  
I led a distillation pipeline: first we froze the vision encoder and fine‑tuned an LLM teacher on annotated image–caption pairs. Then we trained a lightweight student (0.3B parameters) to mimic both the teacher’s logits and intermediate hidden states using knowledge‑distillation loss plus an auxiliary reasoning loss that enforced consistency across multi‑step question answering. We used mixed‑precision training, gradient checkpointing, and quantized 8‑bit weights during inference. Continuous evaluation on a held‑out test set ensured we hit our accuracy target.

**Result**  
The student model ran at 0.45 s per query on a single RTX 3090, cutting compute cost to $3.5 per inference—an 70 % reduction. Accuracy dropped only 0.8 %, and the system stayed within budget. I learned that carefully aligning teacher–student objectives across perception and reasoning modules is key to preserving performance while achieving massive cost savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
