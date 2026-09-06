---
qid: ing_d7b9b3478a__think__local
question: 'Explain: When would you decompose a task into multiple prompts instead
  of one? Explain least-to-most prompting.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 411
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:10:55-05:00'
sources: []
---

**1. Clarify the problem & set assumptions**  
   - Assume we’re working with a large‑language model (LLM) that can handle only a limited token budget per prompt.  
   - The task may be multi‑faceted (e.g., “write an essay, then critique it”).  
   - We want to keep the user experience smooth and avoid overwhelming the model.

**2. Adopt a mental framework: “Task decomposition + iterative refinement”**  
   - Treat the overall goal as a *pipeline*: break it into sub‑tasks that each fit comfortably within token limits.  
   - Use *least‑to‑most prompting* to gradually add constraints, letting the LLM first generate broadly before tightening requirements.

**3. Step‑by‑step reasoning**  
   1. **Identify independent components** (e.g., outline, body, critique).  
   2. **Order them by dependency**: start with the most foundational (outline) and finish with the most detailed (final draft).  
   3. For each component, craft a concise prompt that includes only the necessary context.  
   4. Feed outputs of earlier steps as context for later prompts, ensuring continuity.  

**4. Common traps to avoid**  
   - *Over‑prompting*: too many small prompts lead to loss of coherence.  
   - *Token waste*: including irrelevant background text in each prompt.  
   - *Stale context*: forgetting to pass previous outputs forward.

**5. Sanity‑check & communicate**  
   - Verify that each sub‑task’s output is self‑contained and can be combined later.  
   - Explain to the user that this staged approach keeps each request concise, improves accuracy, and respects token limits—essentially a “least‑to‑most” strategy: start broad, then progressively constrain the model for higher fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
