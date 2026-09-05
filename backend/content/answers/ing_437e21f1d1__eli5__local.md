---
qid: ing_437e21f1d1__eli5__local
question: 'Explain: System Design: AI Search Infrastructure — Perplexity AI Interview
  Prep 2026: Process, Questions & What to Expect'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 336
total_tokens: 509
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:23:33-05:00'
sources: []
---

Imagine you’re building a giant library that can answer any question in seconds.  
The **search infrastructure** is the way the library keeps its books (data) organized, finds the right one fast, and shows it to the user without breaking.

1. **Data ingestion** – like cataloguing new books on shelves. You pull raw text from the web, clean it, split it into small chunks (think of each chunk as a page), and store those pages in a fast‑access database.

2. **Embedding & indexing** – picture turning every page into a tiny fingerprint that tells you what topics it covers. Those fingerprints are stored in an index (a super‑efficient “search engine” for the fingerprints). When someone asks a question, their query is turned into its own fingerprint and compared against the index to find the most similar pages.

3. **Retrieval & ranking** – once you’ve found candidate pages, you rank them by relevance (like a librarian deciding which books are best answers) and send the top ones back.

4. **Serving & scaling** – you run many copies of this system behind load balancers so that millions of people can ask questions at once without slowing down.

In an interview you’ll be asked to describe each part, explain trade‑offs (speed vs accuracy, storage vs compute), and design how the pieces fit together in a real‑world, high‑traffic scenario. Think of it as building the most efficient, fault‑tolerant library that never runs out of books.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
