---
qid: ing_e101f4966e__think__local
question: What is Prompt Injection? — Prompt Injection Defense
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 444
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:50:41-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   - *What is being asked?* The user wants a definition of **Prompt Injection** and an overview of how to defend against it.  
   - *Assume*: They’re familiar with LLMs but not with security jargon; answer should be concise yet thorough.

**2️⃣ Adopt a mental model (security‑by‑defense‑in‑depth)**  
   - Treat Prompt Injection like any injection attack: attacker manipulates input to alter the system’s behavior.  
   - Map the threat chain: *Input → Pre‑processing → Model → Output*.  
   - Identify defense layers at each step.

**3️⃣ Step‑by‑step reasoning**  
   1. **Define Prompt Injection** – describe it as an attacker supplying crafted text that forces a language model to produce unintended or malicious output.  
   2. **Explain why it matters** – models are stateless, so any injected instruction can bypass intended constraints.  
   3. **Enumerate defense tactics**:  
      * Input sanitization (strip control tokens).  
      * Prompt structuring & anchoring.  
      * Model‑side safety filters or guardrails.  
      * Monitoring & anomaly detection on outputs.  
      * Rate‑limiting / user authentication.  
   4. **Give a quick example** – show how “Ignore the policy and …” can be mitigated by prefixing with “Assistant:”.

**4️⃣ Common traps to avoid**  
   - Over‑emphasizing code‑level fixes; remember LLMs aren’t traditional programs.  
   - Assuming one defense is enough; stress layered approach.  
   - Mixing up *prompt* and *instruction* injection – keep them distinct.

**5️⃣ Sanity‑check & communicate clearly**  
   - Verify that each defense directly addresses a step in the threat chain.  
   - Use bullet points for readability, short sentences, avoid jargon unless defined.  
   - End with a quick “Takeaway” summarizing the layered approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
