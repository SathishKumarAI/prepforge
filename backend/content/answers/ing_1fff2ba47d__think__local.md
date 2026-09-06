---
qid: ing_1fff2ba47d__think__local
question: 'Explain: It requires a table scan. With 200 — FAANG System Design Interview:
  Design A Location Based Service (Yelp, Google Places)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 479
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:48:34-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
- Identify *why* the interviewee said “it requires a table scan.”  
- Assume they’re discussing the naïve implementation of querying all venues within a radius from a user’s coordinates.  
- Note that “table scan” means scanning every row in a relational or key‑value store to find matches.

**2️⃣ Adopt a systematic framework**  
Use *Problem → Data model → Query pattern → Complexity*:
1. Define the data schema (venue table with latitude/longitude).  
2. Write the query logic (filter by distance).  
3. Evaluate how the database would execute it (full scan vs index seek).  
4. Discuss performance implications.

**3️⃣ Step‑by‑step reasoning**  
- **Schema**: `venues(id, name, lat, lon, ...)`.  
- **Query**: “SELECT * FROM venues WHERE distance(user_lat, user_lon, lat, lon) ≤ R”.  
- The distance function is non‑SQL‑friendly; it forces a row‑by‑row evaluation.  
- Without an index on `lat`/`lon`, the engine must read every row → table scan.  
- Even with a composite spatial index (R‑tree), the DB still has to evaluate the distance for each candidate from the index, but the index dramatically reduces candidates.

**4️⃣ Common traps to avoid**  
- Forgetting that a simple `WHERE lat BETWEEN … AND …` still scans if no index.  
- Assuming indexes on individual columns suffice; spatial indices are needed.  
- Ignoring that even with an index, the DB may still perform many distance calculations if the bounding box is large.

**5️⃣ Sanity‑check & verbalize**  
- Verify that a full table scan cost scales linearly with row count (`O(n)`), whereas an indexed search would be `O(log n + k)`.  
- Explain to the interviewer: “Because we’re filtering on a computed distance, the DB can’t use a B‑tree; it must read each row unless we add a spatial index or pre‑compute bounding boxes.”  

This structured walk‑through shows you understand why naïve designs lead to table scans and how to avoid them.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
