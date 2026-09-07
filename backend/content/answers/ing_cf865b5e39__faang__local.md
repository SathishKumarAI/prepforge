---
qid: ing_cf865b5e39__faang__local
question: Your agent's context window fills up mid-task. What are your options?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 477
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:42:58-05:00'
sources: []
---

**Clarify**  
We’re asked how an LLM‑powered agent can keep working when its 8 K token context window is exhausted while a task is still ongoing. Key assumptions: the agent has access to a short‑term memory buffer, a long‑term knowledge store (e.g., vector DB), and can perform API calls to fetch or summarize data.

**Approach**  
1. **Trigger a context‑reset routine** when usage > 70% of capacity.  
2. **Compress current conversation** into a concise “session summary” via a summarization model.  
3. **Prune low‑value tokens** (e.g., redundant clarifications, filler).  
4. **Persist the summary** to long‑term memory; optionally embed it for retrieval later.  
5. **Continue the task** with the cleaned prompt.

**Depth**  
- *Summarization*: Use a lightweight encoder‑decoder or a distilled model to produce a < 200‑token recap that preserves intent, user preferences, and pending actions.  
- *Pruning*: Remove repeated system messages and past user utterances beyond the last 3 turns unless they contain critical context.  
- *Memory*: Store the summary in a vector store; when re‑entering the task, retrieve it to reconstruct context.  
- *Complexity*: Summarization is O(n) on token count, pruning is O(1) per token, overall overhead ≈ few ms per reset.  

**Edge Cases**  
- **Highly dynamic tasks** (e.g., real‑time data streams): summarizing may lose fine granularity; consider chunking into smaller “micro‑sessions”.  
- **User reverts to earlier context**: need a fallback to the long‑term store.  
- **Summaries misrepresent intent**: test with adversarial prompts that probe for hallucinations.

**Optimize & Communicate**  
Explain that we balance *recall fidelity* against *prompt size*. We’ll log reset events and monitor downstream task success rates, iterating on summarization length. In an interview, I’d emphasize the modularity of this routine so it can be swapped out with a more advanced RL‑based compression if needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
