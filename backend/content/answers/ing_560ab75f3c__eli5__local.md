---
qid: ing_560ab75f3c__eli5__local
question: 'Explain: Things NOT to do — Storing Passwords Safely: A Comprehensive Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 302
total_tokens: 467
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:53:10-05:00'
sources: []
---

**What NOT to do when you’re trying to keep passwords safe**

Think of a password as a secret recipe for a cake that only you should bake.  
If you write the recipe on a sticky note and leave it on your fridge, anyone who walks by can read it—just like storing plain text passwords in a file or database is a big no‑no.

**Avoid these shortcuts:**

1. **Plain text storage** – keep no unencrypted copy anywhere.  
2. **Hard‑coded keys** – never embed the same password inside your code; attackers who steal the code get it too.  
3. **Weak salts or no salting** – a salt is a random “flavor” added to each password before hashing; without it, two identical passwords look the same.  
4. **Reusing old passwords** – if one gets compromised, all accounts using that recipe are at risk.  
5. **Low‑strength hash functions** (like MD5 or SHA‑1) – they’re fast enough for attackers to crack quickly.

Treat each password like a unique, secret ingredient: mix it with a fresh salt, use a strong, slow hashing algorithm (e.g., bcrypt), and never leave the recipe written down in plain sight. This keeps your “cake” safe even if someone sneaks into your kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
