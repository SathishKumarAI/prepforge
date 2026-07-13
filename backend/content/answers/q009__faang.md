---
qid: q009
question: "What is a knowledge graph?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll confirm the interviewer wants the data model, a real example, and why it's useful—not a deep dive into one specific ontology language.

**Approach** — Define the structure (entities, relationships), give the triple representation, then cover uses and trade-offs.

**Depth** — A knowledge graph is a structured representation of real-world entities and the relationships between them, stored as a graph where **nodes are entities** (people, places, products) and **edges are typed relationships**. The atomic unit is a *triple*: (subject, predicate, object)—e.g., (Einstein, bornIn, Ulm). Entities carry attributes and types, often organized by an ontology/schema defining allowed relationship types. This lets machines traverse and reason over connected facts. Real examples: Google's Knowledge Graph powering info panels, product graphs, and enterprise KGs linking customers, orders, and support tickets. Storage uses graph databases (Neo4j) or RDF triple stores queried with SPARQL/Cypher.

**Edge cases** — Construction and cleaning are hard—entity resolution (merging duplicates), schema evolution, and keeping facts current. Incompleteness and conflicting sources cause wrong inferences. Scale in traversal queries can be costly.

**Optimize & communicate** — I'd connect it to modern AI: knowledge graphs ground LLMs by supplying verifiable, structured facts (a form of retrieval), reducing hallucination, and enable multi-hop reasoning that flat text can't. Framing a KG as "facts plus their explicit relationships, queryable by machines" is the crisp signal, then anchoring with the triple.
