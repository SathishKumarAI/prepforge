---
qid: ing_dc7693ee41__faang__local
question: 'Explain: When would you put a whole contract in the context window instead
  of retrieving over it? Defend the answer with numbers.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 470
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:11:08-05:00'
sources: []
---

**Clarify**  
You’re deciding whether to load an entire contract (≈ 30 k tokens) into the LLM’s context or to fetch only relevant excerpts via a vector‑store lookup. The key assumptions:  
- **Token limit** of the model (e.g., GPT‑4 8 K or 32 K).  
- **Retrieval latency** (~5–10 ms per call) and cost.  
- **Document importance** – does the user need a holistic view or only specific clauses?  

**Approach**  
1. Compute token budget left after prompt + expected answer.  
2. If the contract fits, embed it directly; else, enable retrieval.  
3. Use chunking (1 k tokens) for retrieval to avoid overlap and preserve context relevance.

**Depth**  
- **Full‑context path:** 30 k tokens ≤ 32 K → load whole doc. Benefit: no round‑trips, consistent token ordering, no retrieval error. Overhead: higher memory usage (~0.5 GB per batch) but negligible latency (<1 ms).  
- **Retrieval path:** 30 k / 1 k ≈ 30 chunks → 30 calls × 8 ms = ~240 ms extra; cost ≈ $0.0002 per call (OpenAI). For high‑volume services, cumulative latency can hit seconds and costs rise linearly.  

**Edge Cases**  
- Contracts >32 K tokens: must retrieve.  
- Extremely short contracts (<5 k): always load for speed.  
- Legal compliance: if the policy requires audit trails of exact text, retrieval may be preferred.

**Optimize & Communicate**  
Use a hybrid: pre‑filter with metadata (e.g., “Is this contract a lease?”) to decide path. Communicate to stakeholders that full‑context saves cost and latency for most contracts; retrieval only triggers when size exceeds the model’s limit or when user requests specific clauses. This balances performance, expense, and compliance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
