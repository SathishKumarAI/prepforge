---
qid: ing_dc7693ee41__fp__local
question: 'Explain: When would you put a whole contract in the context window instead
  of retrieving over it? Defend the answer with numbers.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 479
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:48:02-05:00'
sources: []
---

**When the contract is short enough that its full token count fits comfortably inside the model’s context window *and* the downstream task requires a holistic view (e.g., legal compliance checks, clause‑level consistency), it makes sense to push the whole text into the prompt instead of relying on retrieval.**

---

### Why this works

1. **Token budget**  
   - GPT‑4‑32k can handle ~32 000 tokens.  
   - A typical 10‑page contract (~3 000–5 000 words) is ≈15 000–25 000 tokens (≈0.5–0.8 of the window).  
   - The remaining budget (~7 000–17 000 tokens) covers the prompt, instructions, and answer.

2. **No retrieval latency**  
   - Retrieval introduces an extra round‑trip to a vector store (usually 10–50 ms per query).  
   - Full context eliminates this overhead; useful when real‑time or batch processing is required.

3. **Global coherence**  
   - Some tasks need cross‑section reasoning (e.g., detecting contradictions across clauses).  
   - Retrieval returns only a handful of snippets, potentially missing subtle interactions that require seeing the whole document.

4. **Cost per token**  
   - OpenAI’s pricing: GPT‑4‑32k ≈ $0.03/1 000 tokens for prompt + $0.06/1 000 for completion.  
   - If you retrieve 10 snippets (≈5 000 tokens) and process them separately, you pay twice the cost plus retrieval overhead.  
   - Sending one full contract (~20 000 tokens) costs roughly $0.6 per pass—often cheaper than multiple retrieval‑plus‑prompt cycles.

---

### Non‑obvious insight

**Context length is not a linear resource; it’s a *shared* budget across prompt, retrieved snippets, and answer.**  
When you push the entire contract into the prompt, you free up tokens for richer instructions or longer responses, which can dramatically improve accuracy—especially in legal NLP where nuance matters more than raw speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
