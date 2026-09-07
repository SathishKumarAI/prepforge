---
qid: ing_ed3755e7b0__faang__local
question: How do you handle time in retrieval - 'latest' queries, superseded documents,
  and questions about the past?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 467
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:51:56-05:00'
sources: []
---

**Clarify**  
We’re building a retrieval‑augmented AI that must: (1) return the most recent version of a fact (“latest” queries); (2) ignore or supersede stale documents; and (3) handle historical questions accurately. I’ll assume we have an indexed corpus with timestamps, a versioning policy, and a downstream NLU component.

**Approach**  
1. *Index augmentation*: Store each document’s `created_at`, `updated_at`, and `superseded_by` metadata.  
2. *Pre‑filtering*: When a query is parsed for time intent (e.g., “latest”, “as of 2018”), use the NLU to extract a temporal window.  
3. *Candidate ranking*: Score candidates by relevance AND recency, using a linear combination: `score = α*tfidf + β*(1 - age/τ)`.  
4. *Version resolution*: If a document has a `superseded_by` pointer, skip it unless the query explicitly requests legacy info.  
5. *Fallback to knowledge graph*: For purely historical queries, route to a time‑aware KG that stores facts with validity ranges.

**Depth**  
- Complexity: Pre‑filtering is O(1) per candidate; ranking remains O(n log n).  
- Trade‑offs: A higher β favours freshness but may hurt recall for niche topics.  
- Consistency: Use snapshot isolation on the index to avoid stale reads during updates.

**Edge Cases**  
- Ambiguous time cues (“latest” vs “most recent update”). Test with synonyms and user clarifications.  
- Documents without timestamps – default to ingestion time or flag as unknown.  
- Supersession chains longer than one level – ensure recursive resolution.

**Optimize & Communicate**  
Future improvements: learn β via reinforcement from user click‑through; integrate a “time‑aware” transformer that natively encodes document age. I’ll explain the pipeline step‑by‑step, highlighting how metadata drives retrieval decisions and how we balance freshness against relevance, ensuring interviewers see clear reasoning, solid design choices, and awareness of pitfalls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
