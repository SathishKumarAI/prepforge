---
qid: ing_ce4edf7750__fp__local
question: 'Explain: Collision Risks — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 456
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:19:10-05:00'
sources: []
---

**Collision Risks – Designing a URL Shortener**

*Fundamental Problem.*  
A URL shortener maps an arbitrary long string *L* (the original URL) to a compact key *K* that is appended to the domain: `short.ly/K`. The service must guarantee **uniqueness**—no two distinct URLs share the same key—while keeping keys short enough for human use.

*Why Uniqueness Must Hold.*  
If two URLs collide, users clicking on the shortened link will be redirected to an unintended target. This violates user trust and can lead to security breaches (e.g., phishing). Therefore, the mapping function *f(L) → K* must be **injective** over all inputs that have ever been shortened.

*Deeper Principle – Hash‑Function Space vs. Output Cardinality.*  
We typically generate *K* by hashing *L* and truncating to *n* bits (e.g., base‑62). The hash function produces a 2ⁿ possible outputs, but the universe of URLs is astronomically larger. By the pigeonhole principle, collisions are inevitable if we reuse raw hashes. To avoid them, we must **resolve** collisions deterministically: either by appending a counter or rehashing with salt until an unused key appears.

*Non‑obvious Insight.*  
Most designers treat collisions as a *probabilistic* problem and rely on very low collision rates (≈10⁻¹² for 64‑bit keys). However, the **entropy of user input** is often far lower than assumed: many URLs share common prefixes or domains. This *semantic clustering* inflates effective collision probability. A robust design therefore includes a **collision‑resistant lookup table** that maps candidate keys to original URLs and performs a quick existence check before issuing a new key, rather than relying solely on the hash’s randomness.

In short: injectivity is mandatory; enforce it by explicit collision detection and resolution, not just by choosing a large enough key space.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
