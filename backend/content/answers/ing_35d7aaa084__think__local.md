---
qid: ing_35d7aaa084__think__local
question: 'Explain: Geo queries — Geo queries | Elasticsearch Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 383
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:32:59-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is a “geo query” in ES?* – Ask whether the user wants the mechanics (point/box/shape), scoring, or use‑cases.  
- Assume they’re familiar with basic ES concepts but new to spatial features.

**2️⃣ Mental model / framework**  
- Think of Elasticsearch as a search engine that can index *geo_point* and *geo_shape* fields.  
- A geo query is just another “query clause” that filters or scores documents based on their geographic location relative to a shape (circle, polygon, etc.).

**3️⃣ Step‑by‑step reasoning**  
1. Explain the two primary field types: `geo_point` (lat/lon) vs `geo_shape`.  
2. Show how to index data with these fields.  
3. Walk through the query DSL for each type of geo filter (`geo_distance`, `geo_bounding_box`, `geo_polygon`, `geo_shape`).  
4. Discuss scoring options: distance‑based or shape intersection.  
5. Mention performance tips (use point‑in‑polygon vs pre‑computed indexes).

**4️⃣ Common traps to avoid**  
- Mixing up GeoJSON format vs ES’s legacy lat/lon order.  
- Forgetting the `distance_type` (`arc`, `plane`).  
- Assuming all geo queries are automatically cached—only filter contexts benefit.

**5️⃣ Sanity‑check & communicate**  
- Re‑read the answer to ensure each query example actually matches the field type used.  
- Ask the user if they need code snippets or just a conceptual overview.  
- End with a quick summary: “You index geo fields → use one of the DSL clauses → tune scoring and performance.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
