---
qid: ing_5ecaa4df3f__faang__local
question: 'Explain: Design permission-aware retrieval for enterprise search. Users
  must never see results they can''t access in the source system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 462
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:24:24-05:00'
sources: []
---

**1️⃣ Clarify**  
We need a search engine that returns documents *only* from the set of records a user is authorized to see. The source system already enforces permissions; we must not expose any record that would violate those rules, even when the query matches it.

Key assumptions:  
- Permissions are expressed per‑document (or per‑folder) and can be queried in O(1).  
- Search index contains all documents’ metadata and content.  
- Users have a role or ACL list available at query time.

**2️⃣ Approach**  
1. **Index augmentation** – store each document’s permission token(s) as part of the inverted index.  
2. **Query‑time filtering** – after matching terms, intersect the result set with the user’s permission set.  
3. **Lazy pruning** – if a query returns millions of hits, filter early by scanning only the top‑K scored docs until enough results are collected.

Alternatively, pre‑filter at index time: maintain per‑role sub‑indices and route queries to the relevant shard.

**3️⃣ Depth**  
- *Complexity*: Inverted‑list lookup is O(1) per term. Permission intersection is O(|hits|) but can be accelerated with bitsets or Bloom filters.  
- *Trade‑offs*: Storing permissions in every posting increases index size but gives instant filtering; pre‑splitting indices reduces runtime cost at the expense of higher storage and maintenance overhead.

**4️⃣ Edge Cases**  
- Permission changes after indexing → need incremental reindexing or versioned postings.  
- Users with no access to any hit → return empty set, not “no results found.”  
- Highly granular ACLs (e.g., per field) require fine‑grained filtering logic.

**5️⃣ Optimize & Communicate**  
Explain that we’ll benchmark both strategies on realistic data; start with the lightweight bitset filter for rapid iteration. If latency remains high for large result sets, switch to role‑sharded indices and explain how this scales horizontally. Throughout, keep interviewers informed of assumptions, trade‑offs, and next steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
