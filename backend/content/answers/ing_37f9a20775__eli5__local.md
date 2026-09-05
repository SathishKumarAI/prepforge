---
qid: ing_37f9a20775__eli5__local
question: 'Explain: Beyond single-shot: agentic RAG and GraphRAG'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 261
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:04:36-05:00'
sources: []
---

Think of writing a story with the help of a team of expert librarians.  
In **single‑shot RAG** you ask one librarian for a few books, read them, then write your story in one go—no back‑and‑forth.

With **agentic RAG**, the librarian becomes an *active helper*. You give it a goal (e.g., “write a convincing pitch”), and it keeps asking more questions, fetching new passages, and refining its own plan until you’re satisfied. It’s like having a research assistant who can decide what to look up next and adjust the story on the fly.

**GraphRAG** adds a map of the library’s shelves—each book is a node, and links show how topics relate. The assistant navigates this graph: it follows clues from one passage to another, building a web of facts that fit together logically. It’s like tracing a trail through interconnected rooms so you end up with a richer, more coherent narrative.

Both methods let the AI “talk” with its sources, instead of just pulling a single chunk and finishing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
