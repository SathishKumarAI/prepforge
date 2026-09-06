---
qid: ing_dc7693ee41__think__local
question: 'Explain: When would you put a whole contract in the context window instead
  of retrieving over it? Defend the answer with numbers.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 430
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:31:06-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
   - Identify what “whole contract” means (size in tokens).  
   - Assume a typical LLM (e.g., GPT‑4) with ~8 k–32 k token context.  
   - Assume we have two retrieval options: *full‑copy* vs *segment‑by‑segment*.  

**2. Adopt a mental model**  
   - Treat the task as an **information‑access trade‑off**:  
     *Full copy → one prompt, no back‑and‑forth.*  
     *Segmented retrieval → multiple prompts, higher latency but finer control.*  
   - Use the **token budget vs. relevance** framework to decide.

**3. Step‑by‑step reasoning**  
   1. Compute contract size in tokens (e.g., 15 k).  
   2. Compare to context window (say 32 k).  
   3. If size ≤ window, full copy is feasible; otherwise segmentation needed.  
   4. Consider downstream use: if the prompt requires *entire* context at once (e.g., summarization or legality check), prefer full copy.  
   5. Estimate cost: one large prompt vs. multiple smaller prompts with retrieval overhead.

**4. Common traps to avoid**  
   - Assuming larger context always improves quality; in practice, longer prompts can dilute focus.  
   - Forgetting that token limits include prompt + answer tokens.  
   - Ignoring API call costs for each segment retrieval.

**5. Sanity‑check & verbalize**  
   - Verify token counts: contract (15 k) < window (32 k).  
   - Confirm that the task truly needs all clauses simultaneously.  
   - Explain to a colleague: “We’ll embed the whole contract because it fits in the model’s context and we need a holistic view; otherwise, we’d fetch pieces on demand.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
