---
qid: ing_fa505e3837__eli5__local
question: Compare GPTQ, AWQ, GGUF, INT8, and FP8. How do you actually choose a quantization
  approach for a deployment?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 307
total_tokens: 484
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:11:18-05:00'
sources: []
---

Think of a huge library (the AI model) that you want to carry in a backpack.  
*Quantization* is like choosing how many pages you keep: fewer pages mean a lighter bag but some detail is lost.

**INT8** keeps every page as an 8‑bit “whole number” – simple, fast, but the book can still be heavy.  
**FP8** uses 8‑bit *floating point* numbers (like a ruler that can stretch and shrink), giving more flexibility for very small values, useful when the model has lots of tiny weights.

**GPTQ**, **AWQ**, and **GGUF** are different “packing strategies.”  
- **GPTQ** first learns which pages can be safely trimmed (prunes) while preserving meaning.  
- **AWQ** groups similar pages together and scales them uniformly, so the backpack stays balanced.  
- **GGUF** stores the whole book in a compressed format that still lets you read it quickly.

Choosing a strategy is like deciding:  
1. How much weight can your bag handle? (Hardware limits)  
2. Do you need speed or perfect accuracy? (Inference latency vs. quality)  
3. Does your device support special formats? (FP8, GGUF compatibility)

Pick the method that gives the best trade‑off between size, speed, and the precision your application needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
