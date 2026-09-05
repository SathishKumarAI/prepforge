---
qid: ing_81d5ad0601__eli5__local
question: 'Explain: Agentic Filtering and Plan Revision — Agentic Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 232
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:02:30-05:00'
sources: []
---

Think of a writer who wants to answer a question by pulling the best passages from a library (the “retrieved” text) and then writing an essay.  
**Agentic filtering** is like the writer first skimming every passage and only keeping the ones that fit the story they want to tell. The writer decides which bits are useful, discarding others even if the computer thought they were relevant.  
**Plan revision** is what happens after the writer drafts a rough outline: they read it back, spot gaps or awkward turns, and rewrite parts of the plan before filling in details again.  

In AGENTIC‑RAG, the “writer” is an AI that actively selects (filters) retrieved snippets and then revises its own outline (plan) to produce a coherent, accurate answer. This two‑step process gives the model more control over what it uses and how it structures the final text, leading to clearer, more reliable responses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
