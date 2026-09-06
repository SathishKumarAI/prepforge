---
qid: ing_5ab9187b84__think__local
question: 'Explain: III. Config — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 346
total_tokens: 537
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:58:55-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**

- Confirm that “III. Config” refers to the third of the 12‑Factor app principles (configuration in the environment).  
- Assume the audience knows the 12 factors but may need a refresher on the whole list.

**2️⃣ Mental model / framework**

Treat each factor as an *app design rule*. For “Config”, use the “externalize configuration” principle: separate code from settings. Think of it as “code + environment variables = runtime behaviour”.

**3️⃣ Step‑by‑step reasoning**

1. Define the factor’s purpose: keep config out of source, store in env.  
2. Explain why (security, portability, CI/CD).  
3. Show how to implement: `export DB_URL=…`, use a library (`dotenv`, `os.getenv`).  
4. Mention best practices: no hard‑coded secrets, use secret managers, version‑control only non‑secret defaults.  
5. Illustrate with a tiny code snippet and deployment example (Docker compose or Heroku).

**4️⃣ Common traps to avoid**

- Mixing config with code (`config.py` with hard‑coded values).  
- Storing secrets in Git.  
- Over‑loading env vars, leading to confusion.

**5️⃣ Sanity‑check & verbalize**

- Verify the explanation covers purpose, how‑to, why it matters.  
- Re‑state the rule succinctly: “All config should be stored in environment variables, not in code.”  
- End with a quick recap of the other factors for context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
