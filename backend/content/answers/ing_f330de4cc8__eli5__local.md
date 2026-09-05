---
qid: ing_f330de4cc8__eli5__local
question: 'Explain: Bi-Encoder vs Cross-Encoder — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 230
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:59:26-05:00'
sources: []
---

Imagine you’re looking for the best recipe in a big cookbook (the candidate set).  
A **Bi‑Encoder** is like taking each recipe’s title and description, turning it into its own short note (“summary card”). You then compare the question (“What dish do I want?”) to each card separately. This is fast but only uses a rough comparison—like judging a book by its cover.

A **Cross‑Encoder** is like opening every recipe, reading the whole text together with your question, and scoring how well they match. It’s slower because you read everything, but it captures subtle details—just as tasting a dish gives a richer judgment than seeing only the label.

In reranking, we first sift candidates quickly with Bi‑Encoders, then re‑evaluate the top few with Cross‑Encoders to pick the best match. This two‑step “cover → taste” process balances speed and accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
