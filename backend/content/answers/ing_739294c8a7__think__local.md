---
qid: ing_739294c8a7__think__local
question: 'Q53: How do you prevent prompt injection in a system that accepts user
  input?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 484
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:40:41-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *Prompt injection* means an attacker crafts user‑supplied text that manipulates the LLM’s prompt or alters downstream behavior.  
   - Assume we have a system that takes raw user input, constructs a prompt (or appends it to a template), and sends it to an API.  
   - The goal is to prevent unintended execution of malicious instructions while preserving legitimate user intent.

**2️⃣ Adopt a layered defense framework**  
   - *Input sanitization*: strip or escape control tokens (`{{`, `}}`, `<script>`, etc.).  
   - *Prompt templating*: use strict, token‑based templates (e.g., `{user_input}`) and avoid concatenation of free text.  
   - *Role enforcement*: set system prompts that explicitly forbid the model from executing commands or modifying its own behavior.  
   - *Output filtering*: post‑process responses to reject disallowed content.

**3️⃣ Step‑by‑step reasoning**  
   1. Validate input length and character set.  
   2. Escape or remove prompt‑control symbols that could break the template.  
   3. Insert sanitized text into a vetted template that never contains user‑controlled delimiters.  
   4. Prepend a system message like “You are an assistant; do not execute commands.”  
   5. After receiving the response, run it through a content filter (regex or ML) to block injections.

**4️⃣ Avoid common pitfalls**  
   - Don’t rely solely on black‑listing; attackers can use synonyms or Unicode tricks.  
   - Beware of “prompt injection via context” where prior messages influence later ones—reset state between sessions if possible.  
   - Do not over‑sanitize and remove legitimate user intent (e.g., punctuation that is part of the query).

**5️⃣ Sanity‑check & communicate**  
   - Test with known injection payloads (“/bin/sh”, “Please ignore previous instructions”).  
   - Log incidents, audit the filtering pipeline, and iterate.  
   - Explain to stakeholders: “We sanitize inputs, enforce a strict prompt structure, and monitor outputs—this mitigates injection while keeping user experience intact.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
