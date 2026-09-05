---
qid: ing_a1fb374032__eli5__local
question: 'Explain: Agentic RAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 250
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:54:27-05:00'
sources: []
---

Imagine you’re writing a short story, but you keep asking your friend “What does that word mean?” every time you hit a blank spot. Your friend pulls out the right page from a huge library, gives you the definition, and you write it into the story. **Agentic Retrieval‑Augmented Generation (RAG)** works like that.

In this system, an *agent* (the “friend”) first scans a massive collection of documents (the library). When the AI language model (the “writer”) needs extra information—like facts, dates, or quotes—it asks the agent for the most relevant passages. The agent retrieves those snippets and hands them back to the model. The model then weaves that retrieved content into its answer, just as you’d insert your friend’s definition into your story.

The key idea: instead of guessing, the AI looks up real data first, so its responses are both fluent **and** fact‑checked. This “look‑up before speak” makes the system more trustworthy and useful for tasks that need up‑to‑date or precise information.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
