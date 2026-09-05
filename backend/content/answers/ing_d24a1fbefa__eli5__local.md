---
qid: ing_d24a1fbefa__eli5__local
question: 'Explain: Netflix System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 351
total_tokens: 509
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:08:20-05:00'
sources: []
---

Imagine Netflix as a giant library that must hand out the right book (movie) to millions of readers at once.  
The **front‑end** is like the library’s entrance: it shows titles, plays previews, and remembers what you liked. It talks to a fast **API layer** that answers questions in milliseconds—“Show me all dramas starring Tom Hanks.”  

Behind the scenes, a **catalog service** keeps a master list of every title, its metadata, and where it lives on disk (the **storage layer**). When someone requests a film, the API asks this catalog for the file’s location. The media is then streamed from a huge cluster of servers called a **CDN** (content delivery network) that sits close to you so buffering stays low.

To keep up with millions of viewers, Netflix uses **micro‑services**—tiny, independent programs that each handle one job (recommendations, billing, search). They talk through a lightweight messaging system (think a postal service that never loses letters).

Finally, everything is monitored: if a server goes down, the system automatically redirects traffic to healthy ones, just like a library would move books to another shelf.  

Key terms:  
- **API**: Interface that lets software ask for data.  
- **CDN**: Network of servers spread worldwide to deliver content quickly.  
- **Micro‑service**: Small, focused program that does one task.  

This architecture lets Netflix show you a movie in seconds, even when millions are watching at the same time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
