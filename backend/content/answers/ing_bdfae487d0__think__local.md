---
qid: ing_bdfae487d0__think__local
question: A conversation runs past the context window. What do you keep, and how do
  you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 361
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:30:22-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- *What is a “context window” here?* Assume it’s the token budget (e.g., 8 k tokens) that the model can process at once.  
- *Which parts of the conversation are essential?* Presume we want to preserve user intent, factual references, and any constraints or style guidelines.

**2️⃣ Adopt a “retention framework”**  
- **Core content**: facts, instructions, tone cues.  
- **Meta‑data**: speaker turns, timestamps, session IDs.  
- **Compression strategy**: summarise earlier turns while keeping key terms intact.

**3️⃣ Step‑by‑step reasoning**  
1. *Token audit*: count tokens of the current window plus new utterance.  
2. If overflow → decide what to drop:  
   - Prioritize recent turns (they’re more relevant).  
   - For older turns, replace with a concise summary that preserves intent and any constraints.  
3. Re‑evaluate token count; iterate until within limits.  
4. Append the new utterance.

**4️⃣ Common pitfalls to avoid**  
- Dropping constraints or style guidelines inadvertently.  
- Over‑compressing factual content (loss of precision).  
- Ignoring speaker turns, leading to misattributed statements.

**5️⃣ Sanity‑check & verbalise**  
- “I’ve kept the last 3 user–assistant exchanges verbatim, summarised earlier dialogue into two sentences, and preserved all instruction tags.”  
- Confirm token budget is respected.  
- If unsure, ask for clarification before proceeding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
