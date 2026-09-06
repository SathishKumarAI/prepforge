---
qid: ing_d98306b2fc__think__local
question: Do you believe that Google, Meta, Uber, and Airbnb put almost all of their
  code in one repository?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 430
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:19:12-05:00'
sources: []
---

We must follow developer instructions: produce numbered thought-process 150-220 words, explaining metacognition steps. Use markdown. Let's craft.**1️⃣ Clarify the question & assumptions**  
   - Identify what “almost all of their code” means (percentage, core services).  
   - Assume we’re comparing public statements, engineering blogs, and known industry practices.

**2️⃣ Choose a mental model**  
   - *Monorepo vs polyrepo* framework: evaluate pros/cons for large tech firms.  
   - Use the “trade‑off matrix” (build speed, isolation, tooling) to frame the decision.

**3️⃣ Step‑by‑step reasoning**  
   1. Recall Google’s public monorepo claims (e.g., 100 % of code in a single repo).  
   2. Examine Meta’s mixed approach—large monorepos for core infra, many micro‑repos elsewhere.  
   3. Uber uses “Uber’s Monorepo” but also has separate repos for platform services.  
   4. Airbnb traditionally favored polyrepo but moved parts into a monorepo (e.g., front‑end).  
   5. Weigh each company’s scale, product mix, and tooling maturity to infer likely repo structure.

**4️⃣ Avoid common traps**  
   - Don’t conflate “single repository for all services” with “single GitHub organization”.  
   - Don’t assume public statements reflect current internal practice; companies evolve.  
   - Beware of overgeneralizing from a few code‑base examples to entire ecosystems.

**5️⃣ Sanity‑check & communicate**  
   - Re‑examine each company’s latest engineering blog or open‑source repo layout.  
   - Summarize: Google is largely monorepo, Meta and Uber are hybrid, Airbnb mixed but leaning toward monorepos for front‑end.  
   - Present this in a concise paragraph, citing the reasoning steps above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
