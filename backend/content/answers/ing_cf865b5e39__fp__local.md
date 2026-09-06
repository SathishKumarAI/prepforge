---
qid: ing_cf865b5e39__fp__local
question: Your agent's context window fills up mid-task. What are your options?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 521
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:21:38-05:00'
sources: []
---

When a language‑model’s context window (the token budget that can be kept in memory) is exhausted mid‑task, the agent faces an information‑budget constraint: every new prompt consumes space that might otherwise hold past dialogue or data.  
From first principles this is a **bounded‑memory optimization problem**—you must decide which tokens to keep so that future predictions remain maximally informative.

### 1. Summarise and truncate
Compress the oldest content into a concise summary (e.g., “User: …; System: …”) and delete raw text.  
*Why it works*: A well‑crafted summary preserves semantic intent while reducing token count, letting the model still access high‑level context.  
*Non‑obvious insight*: The summariser should be **context‑aware**—include recent turn cues (e.g., “User wants to know…”) because relevance decays non‑linearly with distance.

### 2. Sliding window
Drop only the earliest turns, keeping a fixed‑size window of the most recent dialogue.  
*Why it works*: Empirically, language models rely more on immediate context; older turns contribute diminishing marginal utility.  
*Non‑obvious insight*: If the task is *long‑term* (e.g., planning), retain a **structured memory** (key facts) outside the window rather than discarding them.

### 3. External knowledge store
Persist critical facts in an external database or key‑value store, referencing only identifiers inside the prompt.  
*Why it works*: Keeps token count low while preserving arbitrarily large knowledge.  
*Non‑obvious insight*: The retrieval policy itself can be learned; e.g., “fetch fact X if probability of needing it > 0.7”.

### 4. Prompt engineering with placeholders
Use a template that reserves slots for future content (e.g., “[USER_HISTORY]”) and fill them incrementally as the conversation progresses.  
*Why it works*: Allows the model to anticipate structure and reduce token overhead by reusing placeholder tokens.

---

**Bottom line:** Treat context window management as a *resource‑allocation problem*. Optimal strategies blend summarisation, selective retention, and external memory, guided by how information relevance decays with distance—a principle that often goes unnoticed but is essential for robust long‑form dialogue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
