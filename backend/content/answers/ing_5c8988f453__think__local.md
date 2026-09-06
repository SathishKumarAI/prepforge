---
qid: ing_5c8988f453__think__local
question: 'Explain: Document Databases — 15 Types of Databases and When to Use Them'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 513
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:06:09-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is a “document database”?* Assume we mean NoSQL document‑oriented stores (MongoDB, Couchbase, etc.).  
- *15 types of databases*: Interpret as 15 categories (e.g., relational, key‑value, graph, time‑series, search, in‑memory, columnar, object‑store, etc.) rather than literally 15 separate products.  
- *When to use them*: Focus on data model fit, scalability, consistency needs, and query patterns.

**2️⃣ Mental model / framework**  
Create a decision tree that maps common requirements → database type:  
1. **Data structure** (structured vs semi‑structured vs unstructured).  
2. **Query pattern** (simple lookups, aggregations, graph traversals, full‑text search).  
3. **Scalability & performance** (write‑heavy, read‑heavy, low latency).  
4. **Consistency & transactions** (strong ACID vs eventual consistency).  

Use this to evaluate each database type.

**3️⃣ Step‑by‑step reasoning**  
- List the 15 categories and their core strengths/weaknesses.  
- For each, give a concise “when” scenario: e.g., *Graph DB* → social network relationships; *Time‑series* → IoT sensor data; *Search Engine* → product catalog search.  
- Highlight trade‑offs (e.g., relational for strict schema vs document for flexibility).  

**4️⃣ Common traps to avoid**  
- Don’t conflate “NoSQL” with “document”; many NoSQL stores are key‑value or graph.  
- Avoid generic statements like “use it if you need scalability” without specifying the type of scaling (horizontal sharding vs read replicas).  
- Beware of over‑promising consistency in eventually consistent systems.

**5️⃣ Sanity‑check & communicate**  
- Verify each category has a clear, unique use case; no overlap.  
- Keep explanations short (1–2 sentences per type) to maintain clarity.  
- End with a quick decision guide: “If you need flexible JSON documents → document store; if you need relationships → graph DB,” etc.

This structured approach lets the candidate systematically answer similar “type‑vs‑use” questions in ML and data engineering contexts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
