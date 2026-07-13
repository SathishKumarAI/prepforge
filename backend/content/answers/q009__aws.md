---
qid: q009
question: "What is a knowledge graph?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd define a knowledge graph as a structured representation of entities as nodes and their relationships as typed edges, forming a network of facts, often expressed as subject-predicate-object triples. Unlike a flat table, it captures how things connect, so you can traverse relationships and infer new facts.

To show **Customer Obsession** and **Dive Deep** I'd ground it in a product-recommendation and search feature I owned. We modeled products, categories, brands, and customer interactions as a graph, which let us answer "customers who bought this also relate to that" through multi-hop traversal rather than brittle joins. Linking previously siloed catalog and behavioral data lifted related-item click-through by 18%.

I'd cover the trade-offs I weighed: graphs excel at connected queries and flexible schemas but are harder to keep consistent and can be slower for bulk analytics than a columnar warehouse. So I used the graph for relationship queries and kept aggregate reporting in Redshift. On AWS I'd name Amazon Neptune for the graph store, OpenSearch for text lookup, and Bedrock knowledge bases when grounding an LLM against it.

A bar-raiser listens for whether I understand when a graph earns its complexity, connected, multi-hop questions, versus when a relational or columnar store is simpler, and that I quantified the customer benefit.
