---
qid: ing_8c30170181__think__local
question: How does prompt injection work against agents via tool results, and what
  actually mitigates it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 529
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:19:34-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *Prompt injection* here means an attacker manipulating the text that an LLM receives (e.g., by crafting a user query or tool output).  
- *Agents via tool results* refers to systems where the LLM is an “agent” that calls external tools and then feeds those results back into its own prompt.  
- Assume we’re dealing with commercial LLMs (OpenAI, Anthropic, etc.) and typical tool‑calling workflows.

**2️⃣ Mental model: data flow & attack surface**  
```
User input → Agent LLM → Tool API call → Tool output → Agent LLM (re‑prompt)
```
- The vulnerable spot is the re‑prompt stage: the agent concatenates tool output with its internal prompt.  
- Injection succeeds if the attacker can inject text that alters the agent’s subsequent reasoning or actions.

**3️⃣ Step‑by‑step reasoning toward mitigation**  
a. Identify *where* the tool result enters the prompt (string concatenation, JSON field, etc.).  
b. Determine *how* the LLM interprets it (free‑form vs. structured).  
c. Apply a guard: sanitize or escape special tokens that could change prompt semantics.  
d. Prefer *structured* interfaces—e.g., pass tool output as a separate key/value pair rather than raw text.  
e. Enforce *role separation*: the agent should treat tool results as data, not part of its instruction set.  
f. Add post‑processing checks (sanity, sanity‑check prompts) before executing derived actions.

**4️⃣ Common traps to avoid**  
- Assuming that “tool output is safe” because it comes from an API; attackers can still inject via crafted queries.  
- Relying solely on the LLM’s internal safety filters—these are not foolproof for injection.  
- Ignoring that even sanitized text can be misinterpreted if token boundaries change.

**5️⃣ Sanity‑check & communicate**  
- Test with edge cases: tool outputs containing newlines, quotes, or prompt‑like syntax.  
- Explain to stakeholders: “We’re isolating tool data from instruction flow and sanitizing all injected content.”  
- Document the guard logic so that future developers see why each step matters.

By walking through these steps—clarify, model, reason, avoid pitfalls, then validate—you can systematically understand and mitigate prompt injection against agents via tool results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
