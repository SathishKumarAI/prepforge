---
qid: ing_b6acd86cc2__eli5__local
question: 'QAT Training Objectives: SFT or KD? — What Makes Low-Bit Quantization-Aware
  Training Work for Reasoning LLMs? A Systematic Study'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 281
total_tokens: 461
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:26:08-05:00'
sources: []
---

Imagine teaching a student how to solve puzzles on an old calculator that can only show numbers in two colors—black and white. The student (the model) still wants to answer complex riddles (reasoning tasks), but the calculator’s limited display forces them to “quantize” their thoughts into just those two colors.

**Quantization‑Aware Training (QAT)** is like giving the student a special practice book where every step of the puzzle must be written in black and white. They learn to adjust their strategies—choosing simpler intermediate numbers, re‑ordering steps—so that even with only two colors they still reach the right answer.

**SFT (Supervised Fine‑Tuning)** is like showing the student many solved puzzles and letting them copy the final answers; it doesn’t teach how to adapt when the display changes.  
**KD (Knowledge Distillation)** passes a teacher’s full‑color solution to the student, but still relies on the original detailed view.

QAT works because it trains the model *while* the low‑bit “display” is active, forcing the reasoning process itself to be robust to coarse representations. This hands‑on adaptation lets large language models keep solving puzzles even when their internal arithmetic can only use a handful of bits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
