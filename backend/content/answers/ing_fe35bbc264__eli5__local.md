---
qid: ing_fe35bbc264__eli5__local
question: 'Explain: The Quality Gap — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 216
total_tokens: 373
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:17:38-05:00'
sources: []
---

Imagine you’re sorting a pile of mail for a busy office. First, the post office’s scanner reads every envelope and puts it into rough categories (business, personal, junk) – that’s like an AI model’s initial ranking: quick but not perfect. After this first pass, someone looks at each group again and decides which letters truly belong where, maybe moving a few from “personal” to “business” because they contain important contracts. That second look is the **reranking strategy**.

In machine learning, models often produce a list of possible answers (the initial ranking). The *quality gap* is the difference between that list and the best possible answer. Reranking strategies use extra checks—like grammar rules, context clues, or external knowledge—to shuffle the list until the top pick matches what a human would choose. It’s a simple, practical way to tighten the model’s output without redesigning the whole system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
