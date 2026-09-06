---
qid: ing_560ab75f3c__fp__local
question: 'Explain: Things NOT to do — Storing Passwords Safely: A Comprehensive Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 459
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:07:45-05:00'
sources: []
---

**Why the “do‑not” list is a design rule, not a checklist**

At its core, password storage is an optimization problem: *minimise the probability that an attacker recovers any secret while keeping system performance acceptable*. Any deviation from this optimum leaks information or makes recovery trivial.

| Forbidden practice | Why it breaks the optimum |
|---------------------|---------------------------|
| **Plain‑text storage** | The objective function (security) is zero; the constraint (efficiency) is irrelevant. An attacker who gains read access gets all secrets instantly. |
| **Unsalted hashing** | The cost of a precomputed rainbow table becomes negligible. By adding a unique salt per user, you effectively re‑run the hash for each candidate, keeping the cost linear in users rather than constant. |
| **Fast hashes (MD5/SHA1)** | They were designed for speed, not security. Attackers can test billions of guesses per second. Slow, memory‑hard functions like Argon2 or bcrypt introduce a *computational bottleneck* that scales with the attacker's hardware. |
| **Hard‑coded keys** | Treating a key as static data violates Kerckhoffs’s principle: “A system should remain secure even if everything except the secret key is known.” If an insider leaks the key, all passwords are compromised. |
| **Storing password history** | If you keep old hashes in the same table, a breach gives attackers multiple seeds to attack current passwords with fewer guesses (birthday paradox). Separate archives or discard them entirely. |

### Non‑obvious insight  
Even if every user chooses a strong password, *the system’s security hinges on the cost function*—how hard it is for an attacker to evaluate each guess. By forcing that cost to grow **superlinearly** with the number of guesses (e.g., memory‑hard salts), you transform brute‑force into a practical impossibility. The key takeaway: **security is not about how “good” a password looks; it's about making every attempt expensive enough that attackers never try them.**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
