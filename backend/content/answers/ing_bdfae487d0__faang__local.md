---
qid: ing_bdfae487d0__faang__local
question: A conversation runs past the context window. What do you keep, and how do
  you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 519
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:04:18-05:00'
sources: []
---

**Clarify**  
We’re asked: *When a dialogue exceeds an LLM’s context window (e.g., 8 K tokens), which past turns should we retain and how do we choose them?*  
Assumptions to confirm:  
- The model is stateless; we must feed the chosen history each turn.  
- All conversation content is equally available in memory.  
- We care about both coherence (recall of facts) and privacy/security.

**Approach**  
1. Token‑budgeting: compute remaining window size after adding current prompt.  
2. Prioritize turns by relevance → recency, topic change, user intent.  
3. Compress or summarize less critical segments.  
4. Validate that the trimmed history still satisfies constraints (length, privacy).

**Depth**  
*Relevance Scoring*: For each turn \(t_i\), compute a score \(s_i = \alpha\,R + \beta\,C + \gamma\,F\) where  
- \(R\): recency weight (higher for recent turns).  
- \(C\): content overlap with current user query (cosine similarity of embeddings).  
- \(F\): fact importance (e.g., named‑entity density, user‑asked facts).  
Select the top‑\(k\) turns whose cumulative token count ≤ budget.  

*Compression*: Use a lightweight summarizer or prompt‑based “summarize” instruction on low‑score segments to reduce tokens while preserving key entities.  

*Privacy*: Strip or redact any PII before inclusion.

**Edge Cases**  
- Rapid topic switches: ensure we don’t drop the last turn that introduced a new subject.  
- Extremely long messages: may need aggressive summarization or chunking.  
- Memory limits on token budget (e.g., 4 K vs 8 K): adjust \(\alpha,\beta,\gamma\) accordingly.

**Optimize & Communicate**  
We can pre‑compute embeddings for all turns and cache them, making relevance scoring O(1). Use a greedy knapsack algorithm to fit the best set within token limits. In interviews, I’d explain: “I first rank turns by a weighted relevance metric, then greedily pack them until the context budget is met, summarizing any overflow.” This showcases clear problem framing, quantitative design, and practical trade‑offs—all key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
