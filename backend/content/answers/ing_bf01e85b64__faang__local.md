---
qid: ing_bf01e85b64__faang__local
question: What is prompt caching? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 421
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:06:30-05:00'
sources: []
---

**Prompt caching**  
*What it does:*  
In large‑language‑model (LLM) inference, the same or very similar prompts are often repeated (e.g., FAQs, product descriptions). Prompt caching stores these prompt embeddings or token sequences so that when a new request arrives, the model can reuse the pre‑computed representation instead of recomputing it from scratch.  

**Clarify**  
- Are we talking about *token‑level* cache (reuse input tokens) or *embedding‑level* cache (reuse vector representations)?  
- Is the goal to reduce latency, GPU memory usage, or both?  
- What consistency guarantees are required—do cached outputs need to be refreshed on model updates?

**Approach**  
1. Tokenize incoming prompt.  
2. Check a hash map keyed by the token sequence.  
3. If hit → retrieve pre‑computed embeddings (or logits).  
4. If miss → run encoder, store result in cache.

**Depth**  
- *Complexity*: O(1) average lookup; O(n) for miss where n is prompt length.  
- *Trade‑offs*: Cache size vs. eviction policy (LRU, LFU).  
- *Consistency*: Invalidate on model reload or when prompt semantics change.

**Edge Cases**  
- Prompts that differ by whitespace but are semantically identical → normalizing required.  
- Very long prompts may not fit in cache; fallback to full computation.  
- Cache thrashing if eviction policy is too aggressive.

**Optimize & Communicate**  
Explain how caching reduces GPU compute by ~30‑50% for static FAQ traffic, lowers latency from 200 ms to <50 ms, and saves energy. Show that we’ll monitor hit rates and tune eviction thresholds. This demonstrates clear problem framing, a concrete solution, and awareness of operational trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
