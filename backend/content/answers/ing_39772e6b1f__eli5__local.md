---
qid: ing_39772e6b1f__eli5__local
question: 'Explain: Web Crawler — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 297
total_tokens: 456
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:07:35-05:00'
sources: []
---

Imagine a huge library that is constantly being built by people all over the world. A **web crawler** is like a diligent librarian who walks through every aisle, flips each page, and writes down what she finds so that anyone can look it up later.

- **Crawler (bot)**: The librarian itself, a program that visits web pages automatically.
- **URL (address)**: The book’s shelf number; the crawler reads this to know where to go next.
- **Queue**: A list of “to‑read” URLs, like the librarian’s reading list.
- **Politeness policy**: Rules telling the librarian not to shout or rush—this means the crawler waits a few seconds before visiting another page on the same site.
- **Index**: The librarian’s notebook that records key words and where they appear; search engines use this notebook to answer questions quickly.

The system design is simply: start with a seed list of URLs, put them in the queue, repeatedly take one URL from the queue, fetch its content, parse it for new URLs, add those back to the queue (respecting politeness), and store useful data in the index. This cycle continues, building an ever‑growing map of the web that anyone can search through later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
