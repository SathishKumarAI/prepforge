---
qid: ing_5ecaa4df3f__star__local
question: 'Explain: Design permission-aware retrieval for enterprise search. Users
  must never see results they can''t access in the source system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 326
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:37:40-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with revamping our internal document search for a financial services firm. The legacy full‑text engine returned results from all departments, so users frequently saw PDFs they were not authorized to read, causing compliance alerts and user frustration.

**Task**  
I needed to build a permission‑aware retrieval layer that would filter out any documents the querying employee lacked clearance for, while keeping response times under 300 ms for our 200k‑document corpus.

**Action**  
First I mapped the source system’s ACLs into a graph database (Neo4j) so each document node carried its owner and group permissions. Next, during indexing with Elasticsearch I stored a “permission hash” derived from the ACL bitmask in a custom field. At query time I fetched the current user’s effective permission set via LDAP, computed the intersecting hash, and added it as a filter clause to the search request. To keep latency low I pre‑computed a Bloom filter per permission level and cached it in Redis, so the engine could reject disallowed docs before hitting ES. I also implemented an audit trail that logged any attempts to access restricted content.

**Result**  
The new system cut unauthorized hits from 15% of all results to 0%. Search latency stayed at ~250 ms, and compliance incidents dropped by 92%. I learned how critical it is to align ACL representation with the search index and to use probabilistic data structures for fast permission checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
