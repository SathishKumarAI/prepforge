---
qid: ing_c4539e2080__fp__local
question: 'Tradeoffs: Where Does Fact X Go? — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 402
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:59:22-05:00'
sources: []
---

**Where a fact lives in an AI agent – memory or state – is a question about *information locality* versus *causal control*.**

1. **Fundamental problem:**  
   An agent must decide whether to treat a piece of data as a *persistent datum* (memory) that can be queried later, or as a *transient variable* (state) that drives the current policy. The trade‑off is between *access speed + generality* and *contextual relevance + safety*.

2. **Why it must work this way:**  
   - **Memory** is indexed by a learned key; retrieving it incurs a cost proportional to the size of the memory (e.g., attention complexity).  
   - **State** is local, updated in‑situ, and can be overwritten or gated with minimal overhead.  

3. **Deeper principle – Information Bottleneck:**  
   The agent compresses observations into state when the *mutual information* between that observation and future rewards is high locally but low globally. Conversely, facts that are useful across many contexts (high global mutual information) belong in memory.

4. **Non‑obvious insight:**  
   A fact that appears “irrelevant” to the current action can still be stored in state if it *anticipates* a future reward structure—effectively acting as a *predictive cue*. This anticipatory encoding is what enables few‑shot adaptation: the agent keeps a short‑term memory of the new instruction (state) while also writing the generalized schema into long‑term memory.

**Bottom line:**  
Place fact X in state when its *local causal impact* on immediate policy exceeds the cost of maintaining it; otherwise, encode it in memory to preserve generality and reduce repeated inference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
