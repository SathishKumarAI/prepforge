---
qid: q009
question: "What is a knowledge graph?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** At a healthcare data company, our search over clinical documents kept missing obvious connections, like linking a drug to the conditions it treats, because everything was stored as flat text records. Clinicians were frustrated.

**Task** I was tasked with building a system that could answer relationship queries like "what medications interact with this diagnosis."

**Action** I designed a knowledge graph, which represents information as entities (nodes) connected by typed relationships (edges), forming subject-predicate-object triples. I modeled drugs, conditions, and symptoms as nodes and relationships like "treats" and "interacts-with" as edges, loading it all into Neo4j. Because the structure captured semantics explicitly, I could traverse multi-hop relationships in a Cypher query rather than doing keyword matching. I also linked entities to a standard ontology so synonyms resolved to the same node.

**Result** Multi-hop clinical queries that were previously impossible now returned in under 200ms, and we surfaced drug-interaction warnings we'd been missing entirely. Adoption by the clinical team rose about 40%. The lesson: modeling data as entities and relationships unlocks reasoning that flat storage can't.
