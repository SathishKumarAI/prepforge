---
qid: ing_9b5c791814__think__local
question: Design a secure architecture for an agent that reads untrusted web/email
  content AND has access to a user's private data. How do you defeat prompt injection
  by construction?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 504
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:20:46-05:00'
sources: []
---

**1️⃣ Clarify the problem & state assumptions**  
- *What* is “untrusted web/email content”? Text that could be maliciously crafted to manipulate the agent’s behavior.  
- *What* is “user’s private data”? Sensitive personal info (PII, credentials, etc.) that must never leak or be misused.  
- *Goal*: Build a system where the LLM can process untrusted input **without** being tricked into leaking private data or performing unauthorized actions.  

**2️⃣ Adopt a layered security mental model**  
1. **Isolation layer**: run the LLM in a sandbox that cannot directly access private storage.  
2. **Policy layer**: enforce an explicit “no‑leak” rule set (e.g., via prompt templates, role‑based prompts).  
3. **Monitoring layer**: detect anomalies or policy violations before execution.  

**3️⃣ Step‑by‑step reasoning toward the answer**  
- *Pre‑process* untrusted input: strip URLs, truncate long passages, flag suspicious patterns.  
- *Wrap* the LLM call in a “safe prompt” that explicitly states the role (“You are an assistant that must not reveal private data”) and uses hard‑coded constraints.  
- *Execute* the model inside a container or VM with read‑only access to public content only; private data is supplied via secure APIs (e.g., token‑based lookups) rather than direct injection into prompts.  
- *Post‑process* the output: run a policy checker that scans for any mention of PII or commands that could breach isolation before returning to the user.  

**4️⃣ Common traps to avoid**  
- Letting private data leak via prompt concatenation.  
- Relying solely on model self‑regulation; LLMs can still hallucinate policy breaches.  
- Ignoring side‑channels (e.g., timing, error messages) that might reveal secrets.  

**5️⃣ Sanity‑check & communicate clearly**  
- Test with known prompt‑injection payloads and confirm no leakage.  
- Document the isolation boundaries, policy templates, and monitoring alerts so stakeholders can audit the system.  
- Explain to users: “Your data never touches the untrusted content; we only pull what you explicitly request.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
