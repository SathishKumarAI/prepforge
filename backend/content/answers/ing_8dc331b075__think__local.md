---
qid: ing_8dc331b075__think__local
question: 'Explain: Live coding: build the prompt for the next turn under a fixed
  token budget. The catch is our prefix cache.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 203
output_tokens: 484
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:25:21-05:00'
sources: []
---

**1️⃣ Clarify the problem & state assumptions**  
- We’re writing a “live‑coding” prompt generator that must fit inside a *fixed* token budget (e.g., 2048 tokens).  
- The system has a *prefix cache*: a chunk of text (often the earlier part of the conversation) that can be reused without counting against the budget.  
- Goal: build the next turn’s prompt so it respects the overall limit while maximizing useful content.

**2️⃣ Mental model / framework**  
Think of the total token allowance as a *budget* and the cache as an *in‑budget credit*. The prompt is built in two parts:  
1. **Cached prefix** – always included, no cost.  
2. **New suffix** – must fit within `max_tokens - len(prefix)`.

Use the *token counter* (e.g., tiktoken) to measure lengths and a greedy or heuristic approach to trim/expand content.

**3️⃣ Step‑by‑step reasoning**  
1. Load or generate the cached prefix.  
2. Count its tokens → `prefix_len`.  
3. Compute remaining budget: `remaining = max_tokens - prefix_len`.  
4. Build candidate suffixes (e.g., user instruction, context).  
5. For each candidate, count tokens; keep only those ≤ `remaining`.  
6. If none fit, truncate the longest part or drop optional sections until it fits.  
7. Concatenate: `prompt = prefix + suffix`.  

**4️⃣ Common traps to avoid**  
- *Double‑counting*: forgetting that cached text is free.  
- *Token misestimation*: using character counts instead of token counts.  
- *Over‑truncation*: cutting useful context because you didn’t first try a minimal version.  
- *Ignoring line breaks / formatting tokens* which can add to the count.

**5️⃣ Sanity‑check & communicate**  
- Print `prefix_len`, `remaining`, and final prompt length for debugging.  
- Verbally explain: “We’re using the cached prefix as free credit; we then trim the new content to fit within the leftover token budget.”  

This structured approach lets you reliably build prompts under a fixed token limit while leveraging a cache.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
