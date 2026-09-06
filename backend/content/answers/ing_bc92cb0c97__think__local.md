---
qid: ing_bc92cb0c97__think__local
question: 'Explain: Drawbacks of REST — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 447
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:25:49-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Confirm that “drawbacks of REST” refers to typical limitations when compared to GraphQL (e.g., over‑fetching, under‑fetching, versioning).  
- Assume the audience knows basic HTTP verbs but may not be experts in API design.  

**2️⃣ Adopt a comparison framework**  
- Use a two‑column table: *REST* vs *GraphQL*.  
- Pick dimensions that matter to developers: data fetching, schema evolution, caching, tooling, learning curve, and performance.  

**3️⃣ Step‑by‑step reasoning**  
1. **Identify pain points in REST** – e.g., multiple round‑trips for related resources, rigid URL patterns, lack of type safety.  
2. **Map each pain point to a GraphQL advantage** – single endpoint, introspection, strong typing.  
3. **Quantify where REST still shines** – simple CRUD, built‑in caching via HTTP headers, mature ecosystem.  
4. **Highlight trade‑offs** – GraphQL’s complex query language, potential over‑fetching if not constrained, server‑side validation overhead.  

**4️⃣ Common traps to avoid**  
- Don’t conflate “REST is slow” with “GraphQL is fast”; performance depends on implementation.  
- Avoid blanket statements like “REST can’t do real‑time updates”; note that WebSockets or SSE are orthogonal.  
- Beware of overemphasizing GraphQL’s benefits without acknowledging its learning curve and tooling maturity.

**5️⃣ Sanity‑check & verbalize**  
- Re‑read the answer to ensure each comparison point is backed by a concrete example.  
- Explain it out loud as if teaching: “In REST, fetching a user and their posts requires two endpoints; GraphQL lets you request both in one call.”  
- End with a balanced verdict: REST remains suitable for simple services; GraphQL excels when clients need flexible data shapes or reduced round‑trips.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
