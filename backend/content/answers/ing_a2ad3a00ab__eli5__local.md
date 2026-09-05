---
qid: ing_a2ad3a00ab__eli5__local
question: 'Explain: Explain distillation for LLMs - black-box vs logit distillation
  - and the licensing caveats.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 232
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:55:40-05:00'
sources: []
---

**Distillation is like teaching a kid how to answer questions by watching a master do it.**  
*Black‑box distillation* gives the student only the master’s final answers (the *logits*, or raw confidence scores). The student learns to mimic those numbers without knowing why the master chose them. It’s quick but can copy quirks, and you must have permission to use the master’s outputs because they’re protected by a license.

*Logit distillation* is deeper: the student also looks at how the master weighs different ideas (the logits for every possible answer). This lets the student learn the master’s reasoning style, often producing better performance. But the same licensing rules apply—if the master model’s weights or training data are copyrighted, you can’t freely use its logits without a license.

In short: black‑box is “copy the final score,” logit distillation is “copy the whole scoring sheet.” Both need proper legal clearance to avoid copyright pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
