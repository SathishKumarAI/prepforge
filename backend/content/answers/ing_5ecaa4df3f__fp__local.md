---
qid: ing_5ecaa4df3f__fp__local
question: 'Explain: Design permission-aware retrieval for enterprise search. Users
  must never see results they can''t access in the source system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 459
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:26:10-05:00'
sources: []
---

**Why we need it**

Enterprise search aggregates content that lives behind fine‑grained ACLs (roles, groups, document tags). If the indexer blindly crawls and stores a full text vector for every page, a user who lacks read permission will still see a relevant snippet in the results list. That violates security policy and can leak metadata (titles, URLs).

**The principle**

Treat “visibility” as an *information filter* that must be applied *before* relevance scoring. In probability‑theoretic terms we want  
\(P(\text{doc}|\text{query},\text{user}) \propto P(\text{query}|\text{doc})\,P(\text{doc}\,|\,\text{user})\).  
Since \(P(\text{doc}\,|\,\text{user}) = 0\) for inaccessible docs, the posterior is zero; they never contribute to ranking.  

**Implementation**

1. **Permission metadata at index time** – store each document’s ACL bitmap (or hash of user‑group IDs).  
2. **Query‑time masking** – build a *permission filter* that intersects the query result set with the current user’s bitmap. This is essentially a Boolean AND between two bitsets, which can be done in sub‑millisecond time on modern SSDs.  
3. **Re‑rank only visible docs** – once the mask is applied, run the usual BM25/embedding scoring on the reduced set; no need to re‑score invisible items.

**Non‑obvious insight**

Because the mask is applied *after* retrieval but before ranking, we avoid duplicating expensive similarity computations for every user. The cost of masking grows linearly with the number of users who share the same ACL, not with the total user base—thanks to bitset sharing and caching of common permission sets. This “filter‑then‑rank” strategy scales from a handful of admins to thousands of employees without compromising security or latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
