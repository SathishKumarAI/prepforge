---
qid: ing_298d700057__eli5__local
question: 'Explain: Sort order — Sort search results | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 229
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:41:39-05:00'
sources: []
---

Think of Elasticsearch like a giant library that can instantly find books you’re looking for.  
When the librarian gives you a list, you might want it sorted by **title**, or by how many people checked out each book last month. In Elasticsearch, “sort order” is exactly that: a rule telling the search engine to arrange its results in a particular way.

* **Field** – the column you’re sorting on (e.g., `price`, `date_added`).  
* **Order** – either **asc** (ascending) or **desc** (descending).  

If you ask for “products sorted by price descending,” Elasticsearch will first pull all matching products, then line them up from most expensive to least. It’s like telling the librarian: “Show me the newest books first.” The mechanism simply reorders the list after it finds the matches; it doesn’t change what items are found.

So, sort order is just a friendly instruction on how you want your search results displayed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
