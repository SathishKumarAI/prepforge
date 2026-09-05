---
qid: ing_580ffa64ac__eli5__local
question: 'Explain: 124: System Design Interview — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 282
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:56:11-05:00'
sources: []
---

Imagine you’re building a giant library robot that must visit every book on the internet, read its title and a few sentences, and then bring that information back to your own shelves. In a **web‑crawler system‑design interview**, you explain how this robot works.

1. **Seed URLs** – the first books it starts from (simple list of websites).  
2. **Fetcher** – the part that “opens” each book’s page, like a reader grabbing a physical copy.  
3. **Parser** – reads the text and pulls out links to other books; this is your “extract links” step.  
4. **Scheduler/Queue** – decides which new book to open next, keeping track of what’s already read so it doesn’t waste time revisiting the same page.  
5. **Storage** – a database where you store each book’s title, snippet, and link for later search.

You also discuss limits: how many books (threads) can be opened at once, how to avoid being blocked by sites, and how to scale the robot as the library grows. This clear, step‑by‑step map shows the interviewee that they understand both the mechanics and practical challenges of crawling the web.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
