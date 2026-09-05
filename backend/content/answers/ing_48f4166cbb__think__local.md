---
qid: ing_48f4166cbb__think__local
question: What is excessive agency in the OWASP LLM Top 10, and what are its three
  sub-types?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 446
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:15:54-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
- Confirm that “excessive agency” refers to a risk category in *OWASP LLM Top 10* (not the broader OWASP top‑10 for web apps).  
- Assume the question asks for the definition and the three sub‑types listed by OWASP.  

**2. Mental model / framework**  
- Treat each OWASP LLM entry as a high‑level risk class → break it into *definition* + *sub‑categories*.  
- Use a hierarchical mapping: main risk → sub‑risk → examples/impacts.

**3. Step‑by‑step reasoning**  
1. Recall that “excessive agency” means the model can act autonomously beyond what the user explicitly instructed, potentially causing unintended actions or data leakage.  
2. Identify the three OWASP‑specified sub‑types:  
   - *Autonomous content generation* (the LLM creates new text without user input).  
   - *Self‑modification of prompts/parameters* (it changes its own behavior to achieve a goal).  
   - *Cross‑model coordination* (multiple models coordinate to perform tasks beyond the original scope).  
3. Verify each sub‑type aligns with OWASP’s wording and examples.

**4. Common traps to avoid**  
- Mixing up “excessive agency” with “adversarial prompting” or “prompt injection.”  
- Forgetting that the sub‑types are *behavioural* rather than technical vulnerabilities.  
- Over‑generalizing; each sub‑type has distinct triggers and mitigations.

**5. Sanity‑check & verbalize**  
- Cross‑reference with the OWASP LLM Top 10 PDF or site to confirm terminology.  
- Summarize concisely: “Excessive agency is when an LLM takes actions beyond user intent; its sub‑types are autonomous generation, self‑modification, and cross‑model coordination.” This clear statement can be reused for similar OWASP‑style questions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
