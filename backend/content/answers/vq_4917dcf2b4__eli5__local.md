---
qid: vq_4917dcf2b4__eli5__local
question: What is Clustering, and how does it work?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 235
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:10:20-05:00'
sources: []
---

Think of clustering as a smart librarian sorting a huge pile of books that have no labels.  
The librarian looks at the books’ covers—color, size, texture—and groups together those that look alike: all thick red spines go in one shelf, all small blue ones in another.  

In AI, *clustering* does the same thing with data points (numbers, images, text). Each point has attributes (its “cover”). The algorithm measures how close two points are—using a simple distance rule like “how many steps apart on a map?” Points that fall within a certain closeness threshold are put in the same cluster. It repeats this until all points belong to some group.

Key terms:  
- **Data point** – an individual item being grouped (e.g., a customer record).  
- **Distance metric** – a rule for judging how similar two points are (like Euclidean distance on a map).  

The result is groups that share common characteristics, just as the librarian’s shelves help you find books by visual similarity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
