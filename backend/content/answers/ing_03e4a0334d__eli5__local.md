---
qid: ing_03e4a0334d__eli5__local
question: 'Explain: Neo4j'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 247
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:41:32-05:00'
sources: []
---

Think of Neo4j as a **smart city map** where every building (node) is linked by roads (relationships). Instead of storing everything in flat tables like a spreadsheet, Neo4j keeps the streets and intersections, so you can instantly ask questions such as “Which friends live near my friend’s coffee shop?” or “What movies did actors who worked with Tom Hanks also star in?”

- **Node**: a single item (e.g., a person, movie, city).  
- **Relationship**: the connection between two nodes (e.g., “FRIENDS_WITH”, “ACTED_IN”).  
- **Label**: a tag that groups similar nodes (e.g., all people are `Person`).  
- **Property**: extra details on a node or relationship (name, year, rating).  

Because Neo4j stores the roads themselves, it can follow paths quickly—just like a driver who knows the quickest route through traffic. That’s why graph databases like Neo4j shine when you need to explore how things are connected in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
