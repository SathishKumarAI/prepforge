---
qid: ing_d58dacf831__think__local
question: What is prompt injection, and how is it different from a jailbreak?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 409
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:01:49-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
   - *Prompt injection* means an attacker crafts input that manipulates the LLM’s internal prompt or context, causing it to reveal hidden data or deviate from intended behavior.  
   - A *jailbreak* is a specific kind of injection aimed at bypassing safety filters so the model can produce disallowed content.  
   Assume the user wants a conceptual distinction, not code examples.

**2️⃣ Adopt a mental model**  
   Use a two‑axis framework:  
   • **Target** – internal prompt (injection) vs. safety guardrails (jailbreak).  
   • **Goal** – unintended data extraction or policy evasion.  

**3️⃣ Step‑by‑step reasoning**  
   1. Explain how LLMs treat user text as part of the prompt.  
   2. Show that by inserting hidden tokens or special markers, an attacker can “inject” new instructions.  
   3. Contrast with a jailbreak: it specifically tries to override content‑filtering logic.  
   4. Note overlap: many jailbreaks are actually injections, but not all injections aim to jailbreak.

**4️⃣ Common traps**  
   - Mixing up *prompt injection* (context manipulation) with *adversarial prompt* (model misbehaviour).  
   - Assuming jailbreaks only work on unsafe content; they can also extract data.  
   - Forgetting that some systems mitigate both via prompt sanitisation and policy enforcement.

**5️⃣ Sanity‑check & verbalise**  
   • Re‑state the key difference: injection = “changing the prompt”, jailbreak = “breaking safety rules”.  
   • Give a short, concrete example for each to ensure clarity.  
   • End with a quick reminder that defenses often combine both sanitisation and policy checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
