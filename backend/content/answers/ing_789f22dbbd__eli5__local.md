---
qid: ing_789f22dbbd__eli5__local
question: 'Explain: Read Replicas — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 173
total_tokens: 332
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:47:46-05:00'
sources: []
---

Imagine a busy library (your database) where patrons ask for books all day long. The librarian (primary server) can only handle so many requests at once, so the library hires several assistant librarians (read replicas). Each assistant has an exact copy of every book and simply shows the requested pages to visitors—no writing or editing allowed. Because they work in parallel, the library can answer more questions without slowing down the main librarian’s job.

In a database system, read replicas are identical copies that serve only “read” queries (SELECT statements). They keep up with the primary by replaying changes, so all users see fresh data while the primary focuses on writes. Adding replicas lets you scale read traffic horizontally—just like more assistants let more patrons be served simultaneously.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
