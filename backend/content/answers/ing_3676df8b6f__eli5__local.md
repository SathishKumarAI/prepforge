---
qid: ing_3676df8b6f__eli5__local
question: 'Explain: Inference and Fine-tuning Costs — GitHub - zai-org/CogAgent: An
  open-sourced end-to-end VLM-based GUI Agent \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 198
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:01:53-05:00'
sources: []
---

Think of a language model like a giant library that already knows how to answer questions. **Inference** is when you ask it something—just pulling a book from the shelf. The “cost” is the energy (and money) needed to fetch, read, and deliver that answer; for large models this can be a few cents per query.

**Fine‑tuning** is like hiring a librarian to reorganize the library so it’s easier to find specific books you care about. You give the model extra training data, and it rewrites its own internal “index.” That process consumes far more resources—often hundreds of dollars for a single fine‑tune—because it must reprocess all the text many times.

So inference is quick, cheap answering; fine‑tuning is slow, expensive, but makes the model better at your exact needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
