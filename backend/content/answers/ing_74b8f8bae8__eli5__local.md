---
qid: ing_74b8f8bae8__eli5__local
question: How do you handle retrieval in a multi-turn conversation?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 203
total_tokens: 361
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:41:49-05:00'
sources: []
---

Think of a multi‑turn chat as a long dinner party where each guest (you, me, the system) keeps a small notebook to remember what was said. When you ask a new question, the “retrieval” step is like flipping back through that notebook to find relevant notes from earlier dishes in the conversation.

In practice, the system stores every turn as a short text snippet. When a new query arrives, it quickly scans those snippets (using simple keyword matching or a lightweight search) and pulls out the most useful ones. Those snippets are then fed into the language model along with your current question, so the answer can reference past topics just like a friend who remembers earlier parts of the meal.

So retrieval in multi‑turn chat is simply: keep a tidy list of previous turns, quickly look up the relevant ones when you need them, and let the model weave them back into the new reply.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
