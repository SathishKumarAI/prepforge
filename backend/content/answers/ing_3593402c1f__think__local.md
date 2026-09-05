---
qid: ing_3593402c1f__think__local
question: Long context windows keep getting cheaper. Why not drop retrieval and stuff
  the whole repo into context for every request?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 418
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:32:30-05:00'
sources: []
---

**1. Clarify the premise & assumptions**  
   - *What* is meant by “long context windows” (e.g., 32k‑token vs 8k)?  
   - Assume we’re talking about a single LLM inference call, not fine‑tuning.  
   - Assume the repo size exceeds typical context limits but might fit if costs drop.  

**2. Adopt a mental model: cost–benefit trade‑off**  
   - **Cost**: token count × per‑token compute + memory/latency overhead.  
   - **Benefit**: full knowledge of the repo vs. retrieval‑based partial view.  
   - Consider *model performance* (accuracy, hallucination) as a function of context length.

**3. Step‑by‑step reasoning**  
   1. Estimate total tokens in the repo.  
   2. Compare to max context and compute extra tokens needed for padding/metadata.  
   3. Calculate inference cost per request vs. retrieval pipeline cost (indexing, query).  
   4. Evaluate latency: large contexts increase GPU memory bandwidth usage.  
   5. Assess diminishing returns: beyond a point, more tokens add noise rather than useful signal.

**4. Common traps to avoid**  
   - Assuming “cheaper” means *free*: inference time and memory still grow linearly.  
   - Ignoring that longer contexts can hurt model quality (attention dilution).  
   - Overlooking the need for dynamic pruning or chunking when only part of the repo is relevant.

**5. Sanity‑check & verbalize**  
   - Ask: “Does this scale to millions of files?” → likely not.  
   - Summarize: “While cheaper long contexts make stuffing entire repos feasible in theory, practical limits (token budget, latency, model degradation) and the fact that only a subset is usually relevant keep retrieval‑based approaches preferable.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
