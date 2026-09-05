---
qid: ing_8dc06eb46e__eli5__local
question: 'Explain: High-Level System Design — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 259
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:21:19-05:00'
sources: []
---

Imagine you’re building a giant library that can read every book on the internet and decide which ones are useful for your research. A **web crawler** is like a diligent librarian who walks through streets (web pages), follows signs (links), and writes down key facts.

1. **Seed URLs** – the first few books you hand to the librarian.
2. **Crawler workers** – many librarians working in parallel, each picking up a book, reading it, and noting every new reference they find.
3. **Queue (or frontier)** – a shared list where all discovered links are stored so nobody repeats work.
4. **Politeness policy** – the librarian waits a polite pause before visiting the same library again, preventing over‑loading servers.
5. **Duplicate filter** – a quick check to avoid re-reading the same book twice.
6. **Storage layer** – a filing cabinet where the librarian writes down the page’s content and metadata for later retrieval.

By coordinating these parts—starting points, workers, queue, politeness, duplicate checks, and storage—the system can continuously harvest fresh web pages efficiently, just like a well‑managed library of knowledge.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
