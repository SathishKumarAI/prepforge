---
qid: ing_7a208bebcf__think__local
question: 'Explain: Currency — How to Design a System for Internationalization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 455
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:05:58-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   - *What* do we mean by “currency” (money units vs. locale‑specific formatting)?  
   - *Where* will the system operate? (web, mobile, API)  
   - Assume: users can be from any country, currencies change over time, and legal/financial rules differ per jurisdiction.

**2️⃣ Adopt a layered mental model**  
   1. **Data layer** – store amounts in a neutral unit (e.g., smallest fractional unit like cents).  
   2. **Business logic** – apply exchange rates, rounding rules, tax laws.  
   3. **Presentation layer** – format per locale (symbol placement, decimal/thousand separators).  
   4. **Governance layer** – versioning of rates, audit trails, compliance checks.

**3️⃣ Step‑by‑step reasoning**  
   - *Normalization*: always convert to a base currency before storing or aggregating.  
   - *Exchange rates*: fetch from trusted APIs; cache with TTL; handle missing data gracefully.  
   - *Rounding & precision*: use decimal types, not floating point.  
   - *Locale formatting*: use ICU libraries (Intl) to format amounts correctly.  
   - *Currency conversion on demand*: expose a service that accepts an amount, source currency, target currency, and returns the converted value plus metadata (rate used, timestamp).

**4️⃣ Common traps to avoid**  
   - Mixing up symbol and code (`$` vs `USD`).  
   - Using float for money → precision loss.  
   - Ignoring legal restrictions on cross‑border transfers or tax implications.  
   - Hard‑coding rates instead of dynamic fetching.

**5️⃣ Sanity‑check & communicate**  
   - Run unit tests with edge cases (tiny amounts, large sums).  
   - Verify formatting in a few locales manually.  
   - Explain the architecture verbally: “We store everything in cents, pull live rates, round per locale rules, and format using ICU, ensuring both accuracy and compliance.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
