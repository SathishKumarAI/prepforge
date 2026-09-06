---
qid: ing_8269018991__think__local
question: 'Explain: Usage: run before every prompt change or model switch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 433
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:36:33-05:00'
sources: []
---

We need to reveal the thinking process, not just answer. Follow numbered list. Provide 150-220 words.**1. Clarify the context and assumptions**  
   - The user refers to a *procedure* that must be executed whenever a new prompt is issued or the AI model changes.  
   - Assume we’re dealing with an interactive system (chatbot, API client, or fine‑tuning pipeline) where state can leak between runs.

**2. Adopt a mental model of “state isolation”**  
   - Think of each session as a sandbox: you want to start fresh so that the new prompt receives no residual context or hidden variables from the previous one.

**3. Step‑by‑step reasoning toward the answer**  
   1. Identify what “run before every change” means—typically a function like `reset()` or `clear_cache()`.  
   2. List its responsibilities: flush conversation history, reset token counters, clear internal buffers, reinitialize model weights if swapped.  
   3. Explain why it’s necessary: to avoid context leakage, ensure reproducibility, and prevent unintended biases.

**4. Common traps to avoid**  
   - Forgetting that some models cache embeddings; simply deleting the prompt isn’t enough.  
   - Assuming a global reset is cheap—re‑loading large weights can be expensive.  
   - Over‑resetting: wiping user‑specific personalization when you only needed a partial context clear.

**5. Sanity‑check & verbalize the explanation**  
   - Verify that each bullet addresses a real need (context isolation, reproducibility).  
   - Communicate it clearly: “Before every new prompt or model switch, invoke `reset_context()` to flush all temporary data so the next query starts from a clean slate.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
