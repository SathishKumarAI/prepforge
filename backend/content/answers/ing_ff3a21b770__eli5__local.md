---
qid: ing_ff3a21b770__eli5__local
question: 'Explain: Training Efficiency: KD vs. SFT. — What Makes Low-Bit Quantization-Aware
  Training Work for Reasoning LLMs? A Systematic Study'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 300
total_tokens: 481
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:19:19-05:00'
sources: []
---

Imagine you’re learning to play a piano with two different tutors.  
One tutor (SFT – Supervised Fine‑Tuning) sits beside you and plays the exact piece again and again, letting you copy every note until your fingers match.  
The other tutor (KD – Knowledge Distillation) listens to an expert pianist, then gives you a simplified version of the music that still sounds right—just fewer notes, but enough to capture the melody.

Now think about training a big language model (LLM). A “low‑bit quantization‑aware training” is like teaching the student with a special piano that only has 8 or 4 keys instead of 88. The tutor knows how to use those limited keys so the music still sounds coherent, especially for complex reasoning tasks where you need to follow long chains of logic.

So:  
- **SFT** trains from scratch on full‑precision data, like copying a full score.  
- **KD** transfers knowledge from a large, high‑accuracy teacher into a smaller model, akin to simplifying the piece.  
- **Low‑bit quantization‑aware training** adds a “compressed piano” that teaches the student to play well even with fewer keys—making reasoning efficient without losing much quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
