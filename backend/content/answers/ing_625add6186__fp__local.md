---
qid: ing_625add6186__fp__local
question: 'Explain: 4.2 Requirement 2: URL Redirection — Design URL Shortener | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 408
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:34:34-05:00'
sources: []
---

**4.2 Requirement 2 – URL Redirection**

At its core a URL shortener solves *information retrieval* under extreme compression.  
The system must map an arbitrary long key (the original URL) to a tiny identifier and later recover the full address with negligible latency. The “redirection” requirement forces the design to obey three invariants:

| Invariant | Why it follows from first principles |
|-----------|--------------------------------------|
| **Deterministic lookup** | A user clicking *bit.ly/abc* must always reach the same destination; otherwise the function ceases to be a well‑defined mapping. |
| **O(1) latency** | The Internet’s user experience budget is measured in milliseconds; any additional hop beyond DNS resolution and HTTP headers would break the “instant” feel. |
| **Consistency under churn** | URLs may change, expire or be revoked; the system must gracefully handle updates without breaking cached redirects. |

These invariants imply a *hash‑table* style data structure: a key (the short code) maps to a value (the long URL). The deeper principle is *space‑time trade‑off*: we compress information (URL length → 6–8 chars) while keeping lookup time constant by using a distributed hash table or key‑value store with consistent hashing.  

**Non‑obvious insight:**  
Because the short code is itself a key, collisions are catastrophic—two users could be redirected to each other’s content. Instead of relying on random hashes (which risk collision and require re‑hashing), we can generate *incremental IDs* and encode them in base‑62. This guarantees uniqueness, preserves ordering (useful for analytics), and eliminates the need for a secondary “collision resolution” table—an elegant solution that many designs overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
