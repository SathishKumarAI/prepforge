---
qid: ing_63933b912e__eli5__local
question: 'Explain: Adding master-eligible nodes — Add and Remove Elasticsearch nodes
  | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 202
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:13:53-05:00'
sources: []
---

Imagine an online library where every book must have a librarian that decides which shelves the books go on. In Elasticsearch, those librarians are called **master‑eligible nodes** – they’re the brains of the cluster and keep everyone in sync.

When you add a new master‑eligible node, it’s like hiring a fresh librarian who joins the team. The system announces the new hire, checks that all current librarians agree (they “vote” on the new member), and then updates its internal list. Now any decision about where books go can involve this new librarian, which can help spread the workload.

Removing a master‑eligible node is like letting a librarian retire. Before leaving, the cluster asks everyone to confirm the departure; once approved, the retired librarian’s responsibilities are redistributed among the remaining ones. This keeps the library running smoothly without losing its coordination.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
