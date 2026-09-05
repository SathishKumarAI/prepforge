---
qid: ing_b6acd86cc2__star__local
question: 'QAT Training Objectives: SFT or KD? — What Makes Low-Bit Quantization-Aware
  Training Work for Reasoning LLMs? A Systematic Study'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 343
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:36:40-05:00'
sources: []
---

**Situation:**  
When I joined the research team at NovaTech, we were tasked with deploying a 7B GPT‑style model on edge devices for a mobile AI assistant. The baseline inference latency was 350 ms and memory footprint exceeded our 2 GB limit.

**Task:**  
My goal was to reduce the model size by 75% while keeping top‑k reasoning accuracy above 90%. I had to decide whether to use supervised fine‑tuning (SFT) or knowledge distillation (KD) as the training objective for low‑bit quantization‑aware training (QAT).

**Action:**  
I ran a systematic study: first, I implemented QAT with 4‑bit weights and activations. For SFT, I fine‑tuned on a curated reasoning dataset, observing that the model lost nuance in chain‑of‑thought prompts. Switching to KD, I distilled knowledge from a 13B teacher into our student, preserving reasoning patterns. I also introduced mixed‑precision scaling for attention heads (8‑bit) and added gradient clipping to stabilize training.

**Result:**  
The KD‑based QAT yielded a 2.3 × speedup (latency 150 ms) and only a 4% drop in accuracy, compared to an 18% loss with SFT. I learned that preserving teacher reasoning through distillation is crucial when aggressive quantization targets reasoning tasks, and that a hybrid precision scheme can mitigate the sharp degradation seen with uniform low‑bit weights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
