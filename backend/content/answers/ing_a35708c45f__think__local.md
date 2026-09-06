---
qid: ing_a35708c45f__think__local
question: 'Explain: Go Style Guide — Uber Engineering \u2014 Where the Digital World
  Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 409
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:52:22-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Confirm you’re addressing *Uber’s Go style guide* (not a generic Go style or another company).  
- Assume the reader knows basic Go syntax but may not be familiar with Uber’s specific conventions or why they matter.

**2️⃣ Adopt a “code‑reviewer” mental model**  
- Think of the guide as a set of rules that keep large, distributed codebases readable and safe.  
- Frame each rule as *what it does*, *why it matters*, and *how to apply it in practice*.

**3️⃣ Step‑by‑step reasoning**  
1. **Identify core themes** (e.g., naming conventions, error handling, dependency injection).  
2. **Map Uber’s unique twists** (like the “context” package usage or their custom logger patterns).  
3. **Show examples**: contrast a non‑Uber snippet with the compliant version.  
4. **Explain tooling support** (golangci‑lint configs, pre‑commit hooks) that enforces these rules automatically.

**4️⃣ Avoid common traps**  
- Don’t conflate Uber’s style guide with the official Go style; keep them distinct.  
- Beware of over‑generalizing: some conventions are specific to Uber’s microservice architecture.  
- Resist the temptation to quote the guide verbatim without context—explain *why* each rule exists.

**5️⃣ Sanity‑check & verbalize**  
- Re‑read your answer as if you’re teaching a newcomer: does it flow logically?  
- Use a quick “if‑then” test (e.g., “If a function returns an error, what must I do?”).  
- Summarize the key take‑away at the end so the reader can remember the purpose of Uber’s guide.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
