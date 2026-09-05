---
qid: ing_d7cf690f61__eli5__local
question: A chat assistant re-sends a long conversation history on every turn. How
  do you avoid recomputing all of it, and what are the pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 271
total_tokens: 449
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:16:39-05:00'
sources: []
---

Imagine your chat assistant is like a chef who keeps a recipe book in front of them while cooking. Every time a guest asks for another dish (a new message), the chef could scroll through the whole book to remember all previous dishes, but that would take forever and waste energy. Instead, the chef writes down only the *essential* notes—like key ingredients and steps—in a short sticky‑note list that sits on the counter. When a new request comes in, the chef adds it to the sticky note and uses that quick reference to decide what to cook next.

In AI terms, the “sticky note” is called a **context window** or **prompt chunk**: a trimmed snapshot of recent conversation that fits within the model’s memory limits. The assistant keeps a running log (the full history) but sends only this snippet to the model each turn. This avoids recomputing the entire past and saves compute.

Pitfalls arise if you cut too much: missing crucial context can make answers wrong or repetitive. If you keep too much, you hit token limits and slow processing. Balancing what stays in the window versus what’s archived is key—just like a chef decides which ingredients to note on the sticky note.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
