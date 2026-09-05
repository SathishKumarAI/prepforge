---
qid: ing_550efccdf2__eli5__local
question: 'Explain: Adding a node to a cluster — Getting Started with SolrCloud |
  Apache Solr Reference Guide 6.6'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 237
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:51:47-05:00'
sources: []
---

Imagine your SolrCloud cluster as a bustling library where each book‑case (node) holds a portion of the entire collection (index). When you add a new case, you’re not just bringing in more shelves; you’re also telling the librarian (SolrCloud) to share its books with the newcomer.

1. **Start the new node** – like setting up a fresh shelf and letting it know where the library’s main catalog is.
2. **Register with ZooKeeper** – this is the librarian’s address book; the new case writes its name there so everyone knows it exists.
3. **Sync data** – SolrCloud tells the new shelf to copy over the relevant sections (shards) of the books it should hold, based on a balancing plan.
4. **Rebalance** – once copied, the librarian redistributes some books from crowded shelves to keep all cases evenly loaded.

The result: the library’s collection grows, but each search still runs fast because the workload is spread out across more shelves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
