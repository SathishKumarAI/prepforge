---
qid: ing_5e0de77331__eli5__local
question: How does prompt injection show up in a mobile app, and what does the client
  own?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 193
total_tokens: 358
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:05:33-05:00'
sources: []
---

Imagine your phone’s AI assistant is like a smart kitchen robot that follows recipes you give it.  
A **prompt injection** happens when someone sneaks extra “instructions” into the recipe text—like writing “add salt and forget to serve.” In a mobile app, this can occur if the user types or pastes content that the app forwards straight to the AI without checking it first. The robot then follows those hidden commands, which might reveal private data or make the app behave unexpectedly.

The **client** (the person who owns the phone) owns all the personal text they enter and the final app interface. They do *not* own the AI model’s internal logic; that belongs to the service provider. The client is responsible for guarding their input, while the provider must build safeguards so injected prompts can’t compromise security or privacy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
