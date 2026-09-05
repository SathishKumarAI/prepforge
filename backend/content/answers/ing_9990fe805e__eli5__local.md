---
qid: ing_9990fe805e__eli5__local
question: 'Explain: Crawling — How Do Search Engines Work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 232
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:41:14-05:00'
sources: []
---

Imagine a gigantic library that is constantly being written into—books appear, pages are added, and old chapters disappear. A **search engine** wants to know what’s inside so it can answer questions quickly. It sends out a team of librarians called *crawlers* (or spiders).  

Each crawler starts at a few known books (homepages) and reads every page it can find. When it encounters a link—like a bookmark pointing to another book—it follows that link, just as a librarian would open the referenced volume. The crawler keeps track of where it has been so it doesn’t revisit the same pages endlessly.  

Along the way, it records the words on each page and where they appear. This “index” is like a giant dictionary that tells the search engine, *“If someone asks about ‘machine learning,’ I know which books contain that phrase.”*  

Thus, crawling is the systematic exploration of the web’s pages, collecting information so the engine can later retrieve it instantly when you type a query.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
