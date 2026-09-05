---
qid: ing_b9d07e0444__star__local
question: A customer asks you to prove which of these documents your model wrote.
  What can you actually deliver?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 307
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:42:49-05:00'
sources: []
---

**Situation**  
At a fintech startup we launched an AI‑driven content generator for regulatory compliance briefs. A major client requested proof that the drafts produced by our model were indeed machine‑written and not edited manually, to satisfy their audit requirements.

**Task**  
I had to provide concrete evidence of authorship while respecting data privacy and ensuring the client could verify authenticity independently.

**Action**  
First, I enabled a logging middleware in the inference pipeline that attached a unique deterministic hash (SHA‑256) to every token generated. The hash was derived from the model’s internal state vector at each step, guaranteeing it matched only a machine output. Next, I built a lightweight audit trail service that stored these hashes along with timestamps and the exact prompt used, encrypted in a tamper‑evident log. Finally, I supplied the client with an open‑source verification script that re‑computes the hash from the model checkpoint and input prompt, comparing it to the stored hash; any discrepancy flagged manual edits.

**Result**  
The client accepted the proof, citing a 99.9% confidence level in machine authorship. The audit trail also reduced our internal compliance review time by 40%, and I learned that deterministic token‑level hashing provides both transparency and non‑repudiation for AI‑generated content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
