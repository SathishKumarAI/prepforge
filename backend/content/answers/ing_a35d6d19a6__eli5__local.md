---
qid: ing_a35d6d19a6__eli5__local
question: What is the difference between reference-based and reference-free evaluation,
  and why do BLEU, ROUGE and exact match fail on LLM output?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 252
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:56:59-05:00'
sources: []
---

Imagine judging a cooking contest by tasting the dish (reference‑free) versus comparing it only to a recipe that was already written (reference‑based).  

**Reference‑based evaluation** asks, “How close is my answer to this particular example?” It measures overlap with one or more *reference* texts.  
**Reference‑free evaluation** looks at the answer itself—its quality, coherence, and usefulness—without comparing it to a single model answer.

Large language models (LLMs) can write many different correct sentences that still satisfy the prompt. BLEU, ROUGE, and exact match only count words or phrases that appear in the reference. If an LLM says “I think the best way is to train with data X” while the reference says “Using dataset X is optimal,” these scores will be low even though both are right. They miss synonyms, paraphrases, and new ideas because they rely on literal overlap rather than meaning.

So, for LLM output we need tools that understand context and intent, not just surface word matches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
