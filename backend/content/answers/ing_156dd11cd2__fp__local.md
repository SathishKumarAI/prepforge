---
qid: ing_156dd11cd2__fp__local
question: Why Base62? — Design URL Shortener | System Design Interview | AlgoMaster.io
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 572
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:50:46-05:00'
sources: []
---

**Why Base‑62? A First‑Principles View**

A URL shortener’s core job is to map a huge set of long URLs to a *compact, unique key* that can be typed into a browser and decoded back.  
From an information–theoretic standpoint each character in the key carries \(\log_2(62)\approx 5.95\) bits of entropy if we use the 26 + 26 + 10 alphanumerics (A‑Z, a‑z, 0‑9).  

Suppose we expect \(N\) distinct URLs.  
The minimal key length \(L\) satisfies

\[
62^L \ge N
\;\;\Longrightarrow\;\;
L = \left\lceil \frac{\log N}{\log 62} \right\rceil .
\]

Thus, for a billion (\(10^9\)) URLs we need only \(L=6\) characters:  
\(62^5 \approx 916M < 10^9 < 62^6 \approx 56B\).  
A six‑character string is short enough to be memorable while still providing an astronomically low collision probability.

**Why not base‑64?**  
Base‑64 expands the alphabet to include `+` and `/`, which are *URL‑unsafe* characters requiring percent‑encoding. That adds extra bytes in HTTP requests and complicates routing. Base‑62 keeps all symbols safe for URLs, URLs, and DNS without encoding.

**Non‑obvious insight:**  
Using a dense base (like 62) not only shrinks the key but also **reduces the probability that two distinct long URLs map to the same short code when we employ a deterministic generator (e.g., counter or hash modulo \(62^L\))**. Because each increment changes many bits of the underlying integer, the resulting base‑62 string jumps across the space more uniformly than naïve hashing, minimizing clustering and making distribution of hits more even.

In short, Base‑62 balances **information density**, **URL safety**, and **collision avoidance**—the three pillars that make a URL shortener efficient and user‑friendly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
