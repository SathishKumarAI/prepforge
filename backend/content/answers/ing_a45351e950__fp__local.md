---
qid: ing_a45351e950__fp__local
question: 'Explain: Request a Unique ID — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 448
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:55:50-05:00'
sources: []
---

**Why a “unique ID” is the core of every URL shortener**

The fundamental task is mapping an arbitrary long URL **→** a compact token that can be embedded in a public address.  
To be usable, two requirements hold:

1. *Injectivity*: distinct original URLs must produce distinct tokens; otherwise a user would lose the link they intended to shorten.  
2. *Compactness*: the token must be short enough for human‑friendly sharing while still allowing an astronomically large namespace.

The first requirement forces us to guarantee uniqueness, which is essentially a collision‑free mapping problem. The second drives us toward a minimal alphabet (e.g., Base62) and a deterministic algorithm that never repeats once the counter space is exhausted.

**Deriving the solution**

- **Counter + Base conversion**: Start with an ever‑increasing integer (`counter`). Convert it to Base62; this yields a unique, monotonically growing token.  
- **Avoid predictability & security**: Apply a lightweight reversible permutation (e.g., XOR with a secret key or a Feistel network) before the base conversion so that tokens are not trivially guessable by attackers.  
- **Scalability**: In a distributed system, split the counter range into shards and let each shard own a contiguous block; this preserves uniqueness without coordination.

**Non‑obvious insight**

A purely hash‑based scheme (e.g., SHA‑256 → 6 chars) appears attractive for speed, but it *must* incorporate a *nonce* or state to guarantee injectivity. Without that extra entropy the system reverts to a pure lookup table, losing the elegance of stateless generation. Thus, the counter‑plus‑shuffling pattern is both mathematically sound and practically efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
