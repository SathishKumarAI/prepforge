---
qid: ing_38ad109d86__faang__local
question: The agent answers from a customer's knowledge base, which contains outdated
  and contradictory articles. How do you prevent confidently wrong answers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 456
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:56:04-05:00'
sources: []
---

**Clarify**  
We need an agent that pulls facts from a legacy KB full of stale or conflicting entries. The goal is to avoid giving the user “confidently wrong” responses while still delivering useful information quickly. I’ll assume the KB is searchable (text, tags) and that we have some way to label articles with timestamps or editorial status.

**Approach**  
1. **Fact‑level validation** – before answering, the agent should cross‑check every claim against multiple sources in the KB.  
2. **Freshness & provenance scoring** – attach a recency weight and an author/editor confidence score to each snippet.  
3. **Uncertainty handling** – if conflicting evidence is found or no high‑confidence source exists, the agent must downgrade its certainty and optionally ask for clarification.

**Depth**  
- For each user query, retrieve top‑k candidate articles via TF‑IDF/embedding search.  
- Run a lightweight NLI module that extracts claims and maps them to KB facts.  
- Compute a *trust score* = min(recency_weight, source_confidence) × (1 – conflict_penalty).  
- If the trust score < threshold, reply with “I’m not sure” plus the most reliable partial info or suggest contacting support.  
Complexity: retrieval O(log N), claim extraction linear in article length; overall sub‑second for typical KB sizes.

**Edge Cases**  
- Articles that are identical but from different dates (duplicate drift).  
- User requests a fact that only appears once and is old.  
- Ambiguous queries leading to multiple high‑scoring snippets with contradictory answers.  
Test by injecting synthetic contradictions and measuring false‑positive rates.

**Optimize & Communicate**  
- Cache trust scores for frequently asked questions.  
- Periodically re‑rank articles when new content arrives.  
Explain the logic in a brief, confidence‑aware response: “Based on our most recent review (Jan 2025), the best available answer is … If you need more detail, let me know.” This keeps users informed and reduces the chance of confidently wrong answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
