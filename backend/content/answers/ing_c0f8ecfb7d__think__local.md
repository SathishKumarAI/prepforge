---
qid: ing_c0f8ecfb7d__think__local
question: 'Explain: Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 397
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:40:53-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   • Confirm that the user wants a *conceptual* overview of spaced‑repetition as described on Wikipedia (not an implementation guide).  
   • Assume the audience has basic ML knowledge but may be new to memory‑techniques.

**2. Adopt a mental model**  
   • Treat spaced repetition as a *learning‑rate scheduling* problem: how often to revisit data points to maximize retention.  
   • Map it onto reinforcement learning terms (state = current recall probability, action = next review interval).

**3. Step‑by‑step reasoning**  
   1. Start with the historical context (Ebbinghaus forgetting curve).  
   2. Explain the core principle: review items just before they’re forgotten.  
   3. Show how intervals grow exponentially (e.g., 1 day → 4 days → 10 days…).  
   4. Mention key algorithms from Wikipedia (SM‑2, SM‑90, etc.).  
   5. Relate to ML: training data “retention” vs. “forgetting” and curriculum learning.

**4. Avoid common pitfalls**  
   • Don’t conflate spaced repetition with standard curriculum scheduling; emphasize the *adaptive* interval aspect.  
   • Resist oversimplifying by saying “just repeat more”; explain why timing matters.  
   • Skip deep technical math unless asked—keep it conceptual.

**5. Sanity‑check & communicate**  
   • Re‑read the Wikipedia section to ensure no major detail is omitted.  
   • Summarize in plain language, then ask if deeper details (e.g., algorithmic formulas) are needed.  

Follow this structure to produce a concise yet thorough explanation that aligns with Wikipedia’s description while staying accessible to an ML audience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
