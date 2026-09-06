---
qid: ing_7d37517e73__think__local
question: 'Explain: The God Prompt — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 437
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:17:17-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Define *“God Prompt”* (a single, overly‑broad prompt that tries to capture everything).  
   - Assume the audience knows basic prompting but may not grasp why such prompts break down.  

**2️⃣ Adopt a “prompt quality ladder” framework**  
   - **Level 1: Targeted sub‑prompts** → focus on one task or concept.  
   - **Level 2: Modular chaining** → feed outputs as inputs to the next step.  
   - **Level 3: Iterative refinement** → use feedback loops rather than a monolithic request.  

**3️⃣ Step‑by‑step reasoning**  
   1. List typical anti‑patterns of God Prompts (e.g., “Explain everything about X”).  
   2. For each, illustrate the cognitive overload on the model: too many tokens, ambiguous intent.  
   3. Show how decomposition into smaller prompts maps to the ladder levels.  
   4. Highlight concrete benefits: higher precision, easier debugging, better control over tone and depth.  

**4️⃣ Avoid common traps**  
   - Don’t assume “more detail = better”; excessive detail can dilute focus.  
   - Beware of circular reasoning when chaining outputs that depend on earlier ambiguous answers.  
   - Skip the temptation to rely solely on a single prompt even if it seems efficient; iteration often wins.  

**5️⃣ Sanity‑check & communicate clearly**  
   - Re‑read the explanation aloud, checking for jargon overload.  
   - Use analogies (e.g., “God Prompt is like trying to read an entire encyclopedia in one glance”).  
   - End with a quick tip: start small, test, then expand only if needed.  

This structured thought process keeps your answer focused, illustrates pitfalls concretely, and equips the reader to spot and avoid God Prompt anti‑patterns in practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
