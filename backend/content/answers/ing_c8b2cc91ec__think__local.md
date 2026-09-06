---
qid: ing_c8b2cc91ec__think__local
question: What is context pollution in agents, and how do you deal with it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 441
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:11:44-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
*Assume “agents” refers to autonomous software (e.g., LLM‑based assistants) that maintain internal state or memory over time.*  
*Define “context pollution” as the accumulation of irrelevant, stale, or contradictory information in an agent’s working context, which degrades reasoning and decision‑making.*

**2️⃣ Adopt a mental model**  
Treat the agent’s context like a *working memory buffer*: it holds recent facts, user goals, and prior actions. Pollution occurs when this buffer overflows with noise or outdated data—analogous to human short‑term memory clutter.

**3️⃣ Step‑by‑step reasoning**  
1. **Identify sources of pollution**: repeated prompts, long conversations, back‑and‑forth dialogue, or external data feeds.  
2. **Quantify relevance**: assign a decay score or timestamp; higher scores → more likely to be purged.  
3. **Apply pruning policies**:  
   * *Time‑based*: remove entries older than X minutes/hours.  
   * *Priority‑based*: keep only items tagged with high importance (e.g., user goals).  
4. **Validate consistency**: run a lightweight inference to detect contradictions before re‑insertion.  
5. **Re‑inject cleaned context**: feed the pruned set back into the model for fresh reasoning.

**4️⃣ Common traps to avoid**  
* Forgetting that pruning too aggressively may delete useful long‑term knowledge.*  
* Relying solely on timestamps—context relevance isn’t purely temporal.*  
* Ignoring user intent drift; what’s irrelevant now might become relevant later.*

**5️⃣ Sanity‑check & communicate**  
- **Test**: simulate a conversation, log context size before/after pruning.  
- **Explain**: “We’re trimming the agent’s memory to keep only the most recent and relevant facts, so its responses stay coherent.”  

This framework can be reused for any system that maintains mutable state over time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
