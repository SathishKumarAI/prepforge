---
qid: ing_64b2698d8d__eli5__local
question: 'Explain: Every prompt I ship keeps getting heavier'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 213
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:15:34-05:00'
sources: []
---

Think of a machine‑learning model as a very attentive librarian who can only look at a certain number of books at once—let’s call this limit the “context window.” Every time you send a prompt, it’s like giving the librarian a stack of books to read before answering. If your prompts keep getting heavier, that means each stack is growing: more sentences, longer words, extra details—all add up to more “pages” (tokens) that the librarian must hold in mind.

Because the librarian can’t forget what she’s already seen, each new prompt pushes earlier information toward the edge of her memory. If you keep piling on heavy stacks, the librarian starts losing earlier context or has to skip parts, so your answers become slower or less accurate. The key is to trim unnecessary words or split big prompts into smaller, lighter batches that fit comfortably inside the librarian’s window.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
