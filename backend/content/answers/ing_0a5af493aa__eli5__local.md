---
qid: ing_0a5af493aa__eli5__local
question: 'Explain: Constitutional Classifiers live demo — Constitutional Classifiers:
  Defending against universal jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 210
total_tokens: 378
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:51:51-05:00'
sources: []
---

**Imagine your AI is a smart librarian in a huge library (the “universal jailbreak” is like a thief trying to sneak out with any book).**

A **Constitutional Classifier** is the librarian’s set of rules written on a whiteboard—think of it as a *constitution* for the AI. When the AI receives a request, it first checks its own “whiteboard” and asks: *“Does this answer follow my rules?”* If it thinks the answer might let the thief slip through (i.e., reveal private data or give harmful instructions), it says no and rewrites a safer response.

During a live demo, Anthropic shows how this rule‑checking works in real time. The AI reads a user’s question, consults its constitutional rules, and either gives an answer that respects privacy and safety or politely refuses/redirects. It’s like the librarian constantly scanning for suspicious behavior and stopping it before the thief can escape.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
