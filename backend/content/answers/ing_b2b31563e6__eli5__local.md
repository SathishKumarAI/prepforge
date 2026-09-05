---
qid: ing_b2b31563e6__eli5__local
question: Compare FP8, INT8, and INT4 quantization for LLM inference. How do you decide,
  and how do you validate?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 326
total_tokens: 501
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:20:10-05:00'
sources: []
---

Imagine a library that can only hold books of three different sizes: **FP8** (tiny, but still colorful), **INT8** (medium, all black‑and‑white), and **INT4** (very small, just a few letters).  
When you ask the library for an answer, it reads each book at its own size. FP8 keeps more detail, so the answers are closer to the original text, but it needs a bit more space and time. INT8 cuts the detail in half; the library can read faster and use less memory, still giving reasonable answers. INT4 shrinks books even further—great for speed and tiny devices—but the loss of detail can make some answers blurry or wrong.

**How to choose?**  
1. Start with FP8 if you want the best quality and have enough resources.  
2. Switch to INT8 when you need a balance between speed, memory, and accuracy.  
3. Use INT4 only on very limited hardware where every byte counts, accepting some loss in precision.

**How to validate?**  
Run the same set of test prompts through each version and compare the outputs with the original (full‑precision) model using simple metrics: how many words match, or a quick human check for correctness. If the differences stay within an acceptable range, the chosen quantization is good; otherwise step up one level of precision.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
