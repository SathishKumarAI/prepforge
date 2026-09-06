---
qid: ing_560ab75f3c__think__local
question: 'Explain: Things NOT to do — Storing Passwords Safely: A Comprehensive Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 409
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:40:29-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**

   - *Goal*: Explain bad practices in password storage, not how to store them securely.
   - *Assumptions*: Audience knows basic cryptography (hashing, salts) but may not be familiar with real‑world pitfalls.

**2️⃣ Adopt a “risk‑by‑action” framework**

   - Categorize actions by the type of vulnerability they create: **data leakage**, **weakness to brute force**, or **easier compromise via software bugs**.
   - Map each bad practice to its corresponding risk category.

**3️⃣ Step‑by‑step reasoning toward the answer**

   1. List the most common mistakes (plain text, weak hashing, no salt, reversible encryption).
   2. For each, describe *why* it fails: e.g., plain text → anyone with DB access sees passwords; unsalted hash → rainbow tables work.
   3. Show real‑world impact: breaches, regulatory fines, user trust loss.

**4️⃣ Avoid common traps**

   - Don’t conflate “bad practice” with “never used”; some legacy systems still do it.
   - Avoid technical jargon that obscures the key point; keep explanations concrete (e.g., “storing passwords as strings in a file”).
   - Don’t imply that encryption alone is sufficient—highlight that proper key management is essential.

**5️⃣ Sanity‑check and communicate clearly**

   - Verify each bullet covers a distinct risk type and includes an example.
   - Use short sentences, bold the actionable “don’ts”.
   - End with a quick recap: *“Never store passwords in plain text; never use MD5/SHA1 without salt; never rely on reversible encryption unless you manage keys securely.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
