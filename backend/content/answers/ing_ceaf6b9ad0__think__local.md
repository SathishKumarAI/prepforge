---
qid: ing_ceaf6b9ad0__think__local
question: 'Explain: You''re given exports from three customer systems, each with its
  own customer records. Write code to produce one deduplicated set of entities, and
  explain your design.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 212
output_tokens: 443
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:36:27-05:00'
sources: []
---

**1️⃣ Clarify the problem & state assumptions**  
- What defines a “customer record”?  (e.g., name, email, phone).  
- Which fields are guaranteed unique identifiers?  (e.g., email).  
- How large can each export be?  (influences in‑memory vs streaming).  
- Are the three systems’ schemas identical or do they need mapping?  

**2️⃣ Mental model / framework**  
Treat this as a *record‑matching & deduplication* problem.  
Use a **canonicalization step** → map each record to a normalized key (e.g., lowercased email).  
Build an **index** (hash table) keyed by that canonical form, merging duplicates on the fly.

**3️⃣ Step‑by‑step reasoning**  
1. Load schema mapping or define a function converting each system’s fields into a unified DTO.  
2. Iterate through each export file sequentially:  
   - For every record, create its key (email → lower case).  
   - If key exists in the hash table, merge non‑conflicting data (e.g., union of phone numbers).  
   - Else insert as new entry.  
3. After all files processed, output the values of the hash table as the deduplicated set.

**4️⃣ Common traps to avoid**  
- Assuming email is always present; handle missing identifiers with secondary keys or fuzzy matching.  
- Forgetting case‑insensitive comparison → duplicate “John.Doe@EXAMPLE.com” vs “john.doe@example.com”.  
- Over‑merging fields that should be distinct (e.g., multiple addresses).  

**5️⃣ Sanity‑check & communicate**  
- Verify the count of unique keys vs total input records.  
- Spot‑check a few merged entries manually.  
- Explain design choices: why a hash table gives O(n) time, how canonicalization handles schema differences, and what trade‑offs (memory usage, potential false merges).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
