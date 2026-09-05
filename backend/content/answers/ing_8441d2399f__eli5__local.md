---
qid: ing_8441d2399f__eli5__local
question: 'Q: How do you prevent a model from "unlearning" general capabilities during
  fine-tuning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 241
total_tokens: 408
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:06:31-05:00'
sources: []
---

Think of a language model as a big library that already knows how to read, write, and answer many questions. Fine‑tuning is like adding a new section of books for a very specific topic—say, cooking recipes from a particular country. If you just pile those books on top of the whole library, some old shelves might get covered or misplaced, and readers could lose access to the general knowledge they used before.

To keep the original library intact while adding the new section, we use two tricks:

1. **Protect the core** – we lock most of the existing books so the fine‑tuning process can’t overwrite them.  
2. **Add the new shelves in a separate room** – we train only on the new recipe books and keep the old ones unchanged.

In practice, this means training with “parameter freezing” (locking the main model weights) or using a small “adapter” layer that learns the new task while leaving the rest of the model untouched. The result: the model keeps its general skills but also gains the new specialized knowledge without unlearning anything.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
