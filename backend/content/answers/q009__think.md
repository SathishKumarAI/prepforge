---
qid: q009
question: "What is a knowledge graph?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Assume they want the data model plus why it's useful, not a specific product tour. State that you'll define the structure, then its purpose.
2. **Mental model.** Picture a network: **entities as nodes**, **relationships as edges**. The atomic unit is a **triple** `(subject, predicate, object)`, e.g., `(Paris, capitalOf, France)`. Facts become a traversable graph.
3. **Reason step by step.** Define it as a structured representation of information as connected entities and relations. Then list what the structure buys you: semantic relationships enable **reasoning/inference** (e.g., transitivity), flexible multi-hop queries, and schemas/ontologies that constrain valid entity types and relations. Name real uses — search engines' Knowledge Graph, recommendations, question answering, and **grounding LLMs with facts to cut hallucination**.
4. **Traps to avoid.** Don't confuse it with a chart of metrics, a neural-network layer, or a decision-tree visualization — those are the distractors. Don't imply it's just a table; the value is the connections.
5. **Sanity-check + delivery.** Verify your example decomposes cleanly into subject/predicate/object; if it doesn't, it isn't a triple. Mention the tooling (graph DBs like Neo4j, RDF/SPARQL) and deliver: "a network of entities connected by relationships, typically stored as triples."
