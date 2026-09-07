---
qid: ing_76eef60b3b__faang__local
question: 'Explain: Query Type Analysis — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 456
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:20:30-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Query‑Type Analysis for Hybrid Search* – the process of determining whether a user’s query should be handled by pure keyword search, semantic retrieval, or a mix, and how we combine those engines.

Assumptions:  
- The system has both an inverted‑index (keyword) engine and a vector‑search (semantic) engine.  
- Queries can be short (“apple”) or long (“best low‑cost laptops with 16 GB RAM”).  
- We want relevance, latency, and cost in mind.

**Approach**  
1. **Query profiling** – token counts, presence of stopwords, intent signals.  
2. **Scoring heuristics** – weight keyword vs semantic scores based on query length, ambiguity.  
3. **Hybrid ranking** – merge results by re‑ranking or weighted voting.  
4. **Feedback loop** – use click‑through data to adjust weights.

**Depth**  
- *Short queries* → high keyword weight (exact matches matter).  
- *Long queries* → higher semantic weight (context, synonyms).  
- Use a lightweight classifier (e.g., logistic regression on n‑gram features) to output a “semantic probability.”  
- Final score = α·keyword_score + (1–α)·vector_score; α is dynamic per query.  
- Complexity: O(N log N) for ranking, where N is result set size; cost linear in index size.

**Edge Cases**  
- Ambiguous terms (“bass” as fish or instrument).  
- Very rare words not in embeddings → fallback to keyword only.  
- Zero‑click queries → trigger manual review.

**Optimize & Communicate**  
Start with a simple rule‑based α (e.g., 0.7 for ≤3 tokens) and progressively replace it with learned weights. Explain trade‑offs: higher semantic weight improves recall but may introduce noise; lower weight keeps latency low. Convey that the hybrid model balances precision, recall, and resource usage, which is what interviewers look for in a scalable search system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
