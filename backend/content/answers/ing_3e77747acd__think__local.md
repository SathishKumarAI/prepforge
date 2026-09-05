---
qid: ing_3e77747acd__think__local
question: 'Q: Why is "Prompt Sanitization" harder than "SQL Sanitization"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 471
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:52:27-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- *What is “prompt sanitization”?* – filtering user‑supplied text before feeding it into a language model so that it can’t cause disallowed behavior (e.g., hallucinations, policy violations).  
- *What is “SQL sanitization”?* – escaping/parameterizing inputs to prevent injection attacks.  
Assume we’re comparing the difficulty of designing robust defenses for each.

**2️⃣ Mental model / framework**  
Treat each as a *text‑to‑output* security problem but with different constraints:  
- SQL → deterministic, well‑defined grammar, known attack vectors.  
- Prompt → open‑ended language, many possible triggers (biases, policy violations), and the model’s internal state matters.

Use the “attack surface” lens: number of possible malicious manipulations vs. tractable mitigation techniques.

**3️⃣ Step‑by‑step reasoning**  
a. Enumerate SQL attacks (injection, union, blind). b. Note that escaping/parameterization covers all due to known grammar. c. For prompts, enumerate attack styles: jailbreaks, prompting for disallowed content, steering the model’s behavior. d. Observe each style can be crafted in countless ways because language is combinatorial. e. Show that a single sanitization rule rarely blocks all variants; new phrasing or context shifts can bypass it. f. Conclude that the space of malicious prompts is vast and continuously evolving.

**4️⃣ Common traps to avoid**  
- Over‑generalizing “SQL injection” as the only threat in databases.  
- Assuming that because a prompt can be sanitized, it’s trivial—forget about context switching or prompt chaining.  
- Ignoring that language models can reinterpret sanitized text (e.g., paraphrase) to recover forbidden content.

**5️⃣ Sanity‑check & communicate**  
Re‑phrase the answer: “SQL sanitization is hard‑coded against a fixed syntax; prompts are free‑form, with an infinite attack surface, so defenses must be more flexible and adaptive.” Then test it against examples (e.g., simple escape vs. jailbreak). This confirms the logic and makes the explanation clear to others.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
