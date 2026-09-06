---
qid: vq_2d0d1905a7__think__local
question: What are the nine different types of Indexes?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 401
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:21:44-05:00'
sources: []
---

**1️⃣ Clarify & Scope**  
- Ask: *Is this about database indexes or file‑system indexes?*  
- Assume relational DBMS (SQL) as most common; note that other systems have variations.

**2️⃣ Build a Mental Map**  
- Think of “index” as a data structure that speeds up lookups.  
- Recall the classic categories: *B‑tree, hash, bitmap, full‑text, spatial, XML, compressed, inverted, and column‑store*—these cover most vendors’ offerings.

**3️⃣ Step‑by‑Step Reasoning**  
1. List all index types I know from experience (e.g., B‑Tree, Hash).  
2. Group them by underlying algorithm or purpose (ordering vs. hashing, text search, spatial).  
3. Verify each group includes a distinct type and that together they sum to nine.  
4. Cross‑check against documentation of major DBMSs (PostgreSQL, Oracle, SQL Server) to ensure no missing variant.

**4️⃣ Avoid Common Traps**  
- Don’t conflate *clustered* vs. *non‑clustered*—they’re properties, not separate types.  
- Don’t double‑count “bitmap” and “compressed bitmap” as two; treat compression as an option.  
- Beware of vendor‑specific names that hide the same underlying structure (e.g., Oracle’s *bitmap index* vs. PostgreSQL’s *GiST* for spatial).

**5️⃣ Sanity Check & Communicate**  
- Quick mental test: pick a DBMS, list its indexes; do they match the nine?  
- Explain each type briefly to a peer—if I can’t describe it in one sentence, revisit that point.  
- End with a concise bullet‑point summary for quick recall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
