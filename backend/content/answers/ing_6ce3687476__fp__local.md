---
qid: ing_6ce3687476__fp__local
question: 'Explain: Encode the ID — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 411
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:55:59-05:00'
sources: []
---

**Why encode an ID?**  
A URL‑shortening service must map a *huge* space of original URLs to *tiny* keys (e.g., `abc123`). The core problem is: given a counter that grows unbounded, produce a compact, reversible representation without collisions.  

1. **Fundamental requirement:** each key must be unique and recoverable in O(1).  
2. **Space efficiency:** we want the shortest string possible for an N‑th URL.  
3. **Uniformity & security:** avoid obvious patterns that could be guessed or enumerated.

**Derivation from information theory**  
A counter value \(k\) has \(\lceil \log_2 k\rceil\) bits of entropy. To encode it in the smallest base‑\(b\) string, we need \(\lceil \log_b k\rceil\) characters. Choosing a large alphabet (e.g., 62 alphanumerics or Base64) minimizes length. Thus the key is simply the counter expressed in that base:  

```
encode(k):
    s = ""
    while k > 0:
        s = alphabet[k % b] + s
        k //= b
    return s
```

Decoding reverses this process, giving \(O(L)\) time where \(L\) is key length.

**Non‑obvious insight:**  
Using *randomized* IDs (e.g., UUIDs) eliminates the counter but introduces a 1 % collision risk and longer strings. The deterministic base conversion guarantees zero collisions while still being optimal in length, which is why most production shorteners adopt it.  

Thus, encoding the ID as a base‑\(b\) representation solves uniqueness, minimality, and reversibility—all derived from basic entropy limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
