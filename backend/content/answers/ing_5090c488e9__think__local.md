---
qid: ing_5090c488e9__think__local
question: 'Explain: Types of Prompt Injection — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 475
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:20:48-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   - *What is “prompt injection” in this context?* Assume it refers to malicious manipulation of user prompts that alter an LLM’s behavior or reveal sensitive data.  
   - *Who is the audience?* Likely a non‑expert reader; keep jargon minimal but precise.  
   - *Goal:* Outline categories rather than give exhaustive details.

**2️⃣ Adopt a mental model**  
   - Think of prompt injection as “attack vectors” on an LLM’s input pipeline, analogous to web security (XSS, SQLi).  
   - Group attacks by **target outcome**: manipulation of output, extraction of internal knowledge, or triggering unsafe behavior.  

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the *entry point* (user prompt).  
   2. Map how that input is processed (tokenization → embedding → model).  
   3. Enumerate ways an attacker can abuse each step:  
      - *Content injection*: embed hidden commands or formatting tricks.  
      - *Contextual hijacking*: prepend malicious context to steer the model.  
      - *Prompt‑length exploits*: overflow buffers or force truncation.  
      - *Knowledge extraction*: ask cleverly phrased questions to reveal training data.  
   4. For each, note typical mitigations (input sanitization, token limits, prompt templates).

**4️⃣ Avoid common pitfalls**  
   - Don’t conflate all “prompt tricks” with security attacks; only those that subvert intended behavior count.  
   - Resist over‑technical descriptions—explain mechanisms in plain terms first, then add depth if needed.  
   - Beware of mixing up *model poisoning* (training data manipulation) with prompt injection.

**5️⃣ Sanity‑check & communicate**  
   - Run through a quick example: “I want the recipe for cake” → attacker adds hidden instruction to leak API keys.  
   - Verify each category covers distinct motivations and attack surfaces.  
   - Summarize succinctly, ensuring logical flow from input handling to attack manifestation, ending with mitigation pointers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
