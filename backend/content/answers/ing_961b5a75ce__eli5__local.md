---
qid: ing_961b5a75ce__eli5__local
question: What is GraphRAG, and when is the knowledge-graph structure worth the complexity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 202
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:35:42-05:00'
sources: []
---

**GraphRAG** is like a smart recipe book that not only stores recipes (text) but also shows how ingredients connect to each other in a big map.  
Think of a *knowledge graph* as a city map where every landmark (concept, fact, person) is a dot and the roads between them are relationships. GraphRAG lets an AI walk through this city, pick up useful facts from nearby landmarks, and weave them into its answer—just as a chef might gather spices from neighboring stalls before cooking.

When to use it?  
If your questions need *deep context* or involve many interrelated pieces (e.g., medical diagnostics, legal research), the graph’s extra structure helps avoid missing hidden links. For simple fact‑checking or one‑off queries, the plain text approach is lighter and faster; the map’s complexity isn’t worth it then.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
