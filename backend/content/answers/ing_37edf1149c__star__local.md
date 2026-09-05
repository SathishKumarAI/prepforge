---
qid: ing_37edf1149c__star__local
question: You come from classical ML. What transfers directly to LLM application work,
  and what did you have to relearn?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 304
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:20:08-05:00'
sources: []
---

**Situation** – While leading a predictive maintenance team at an automotive plant, we were asked to replace our rule‑based anomaly detector with a generative LLM that could auto‑generate diagnostic reports from sensor logs.  

**Task** – I needed to migrate our feature engineering pipeline into a prompt‑engineering workflow, keep the model’s inference latency under 500 ms, and ensure the output stayed within regulatory compliance for safety claims.  

**Action** – First, I carried over my experience with high‑dimensional feature scaling and dimensionality reduction; those concepts translated directly to token embeddings and attention masks in the LLM. I then re‑learned prompt design: constructing few‑shot examples that encode domain constraints, using control tokens for output style, and applying gradient‑free fine‑tuning (LoRA) to keep model size small. I also adopted a hybrid approach—using an ML classifier to flag high‑risk logs before passing them to the LLM—to maintain real‑time performance.  

**Result** – The new system cut false positives by 37 % and reduced report turnaround from 12 h to under 30 min, improving maintenance scheduling efficiency by 18 %. I learned that while statistical rigor remains essential, mastering prompt engineering and efficient inference are the keys to scaling classical ML skills into LLM applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
