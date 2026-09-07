---
qid: ing_72190dc83a__faang__local
question: Design a token budget for an agent with a 200k context window. How do you
  allocate it, and how do you enforce it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 606
total_tokens: 856
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:08:57-05:00'
sources: []
---

**Clarify**

> *Problem:* We have an LLM agent that can see up to **200 k tokens** in a single prompt (context window).  
> *Goal:* Devise a **token‑budget policy**: decide how many tokens each component of the conversation (history, memory, instructions, external data) may consume, and describe enforcement mechanisms.  
> *Assumptions to confirm:*  
> 1. Tokens are counted via GPT‑4‑turbo tokenizer.  
> 2. The agent can pre‑process or truncate content before sending it to the LLM.  
> 3. We have access to a token counter API and a wrapper that injects constraints.

**Approach**

1. **Define budget buckets:**  
   - System prompt: 5 k tokens (fixed).  
   - Current user turn: 10 k tokens (max).  
   - Agent reply: 10 k tokens (max).  
   - Conversation history: remaining capacity after above, capped at 170 k.  
2. **Prioritize content:** rank by recency and relevance; older turns are pruned first.  
3. **Token‑aware truncation:** use a sliding window that removes entire messages until the budget fits.  
4. **Enforcement:** wrap every API call with a pre‑check; if total >200 k, raise an error or trigger automatic trimming.

**Depth**

- **History pruning algorithm:**  
  ```python
  def prune_history(messages, max_tokens=170_000):
      tokens = sum(toks(msg) for msg in messages)
      while tokens > max_tokens:
          # drop oldest message
          removed = messages.pop(0)
          tokens -= toks(removed)
      return messages
  ```
- **Complexity:** O(n) per trim (n = #messages).  
- **Trade‑offs:** Aggressive pruning may lose context; we mitigate by embedding a lightweight vector store to re‑inject salient facts if needed.

**Edge Cases**

- Extremely long system prompt → exceeds 5 k: reject or truncate.  
- User message >10 k tokens → stream the request, chunking it.  
- History contains large files (images/text): pre‑summarize before tokenizing.  

**Optimize & Communicate**

- Cache token counts for static messages to avoid recomputation.  
- Log every budget violation; provide a “budget audit” report for debugging.  
- Communicate policy in docs: *“The agent’s context window is 200 k tokens. We enforce a 5 k system prompt, 10 k user/response windows, and prune history beyond 170 k.”*  

This structured budget keeps the agent within limits while preserving as much relevant conversation as possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
