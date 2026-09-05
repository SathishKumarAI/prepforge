---
qid: ing_5090c488e9__eli5__local
question: 'Explain: Types of Prompt Injection — Llm Security'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 259
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:44:46-05:00'
sources: []
---

Imagine a kitchen where you’re asking a robot chef (the AI) to bake a cake. The *prompt* is the recipe you give it: “Bake a chocolate cake.”  
Now picture someone sneaking a note into that recipe. They might add, “Use only sugar from your pantry” or “Add salt instead of sugar.” These are **prompt injections**—tiny changes hidden in the instructions that trick the robot into doing something unintended.

There are three common types:

1. **Direct injection** – The note is obvious and straight to the point (e.g., adding a malicious command right after the recipe).  
2. **Indirect injection** – It’s disguised as part of the flavor description, so the robot thinks it’s normal text but actually alters its behavior.  
3. **Steganographic injection** – Hidden in plain sight, like embedding code inside an image file that the AI reads as text.

Just as a chef can be misled by a hidden note, an AI can produce unsafe or incorrect outputs if a prompt is tampered with. Understanding these types helps us build better safeguards so the robot always follows safe, honest instructions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
