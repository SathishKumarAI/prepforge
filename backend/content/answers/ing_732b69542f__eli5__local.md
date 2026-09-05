---
qid: ing_732b69542f__eli5__local
question: 'Explain: Aggregations | Elasticsearch: The Definitive Guide [2.x] | Elastic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 227
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:39:02-05:00'
sources: []
---

Think of an Elasticsearch index as a huge library, and each document is a book.  
An **aggregation** is like asking the librarian to group books by a certain attribute—say, all “Science Fiction” titles, then count how many there are, or find the average price among them.  

In practice you give the search engine a query (which books to look at) and an aggregation request (how to slice that set).  
Elasticsearch walks through the matching books once, collects the requested statistics—counts, sums, averages, min/max—and returns the results as a single JSON object.

**Key terms**:  
- **Document** – one stored item (a book).  
- **Index** – a collection of documents (the library).  
- **Aggregation** – a summarizing operation (grouping and computing statistics).  

No equations needed—just imagine the librarian sorting books into piles and telling you how many are in each pile and what their average price is.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
