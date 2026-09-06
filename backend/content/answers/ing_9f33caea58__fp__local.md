---
qid: ing_9f33caea58__fp__local
question: 'Explain: Short Code Length — Design URL Shortener | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 553
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:43:54-05:00'
sources: []
---

### Why the “short” part matters

In a URL‑shortening service every user request produces a *code* that must be
*unique*, *compact*, and *stable*.  
The fundamental problem is mapping an arbitrarily large set of original URLs to a
finite alphabet (say, 62 characters) while keeping the code length as small as
possible.  

Let \(N\) be the expected number of distinct URLs we will store.  
With an alphabet of size \(\Sigma = |\text{chars}|\), a string of length \(L\)
provides \(\Sigma^L\) possible codes.  
To guarantee uniqueness with high probability we need

\[
\Sigma^L \gtrsim N \quad\Longrightarrow\quad
L \ge \log_\Sigma N .
\]

This is simply the *information‑theoretic lower bound*: a code must carry at
least \(\log_2 N\) bits, and each character carries \(\log_2 \Sigma\) bits.

#### Derivation of the optimal length

1. **Entropy**: The entropy \(H(U)\) of the distribution over URLs is
   \(\sum p_u \log(1/p_u)\).  
   If we assume a uniform distribution (worst case for space), then
   \(H = \log_2 N\).
2. **Encoding cost**: Each character adds \(\log_2 \Sigma\) bits, so the expected
   code length is \(L_{\text{exp}} = H / \log_2 \Sigma\).  
   This matches the lower bound when we use an optimal prefix code (e.g.
   Huffman or arithmetic coding) and a *fixed* alphabet.

Thus the minimal *average* length is \(H/\log_2\Sigma\); for a uniform case it
reduces to \(\lceil\log_\Sigma N\rceil\).

#### Non‑obvious insight

Most designs focus on collision handling, but the **most efficient** way to keep
codes short is to *reuse* already‑generated codes by mapping them back to the
same URL.  
If we maintain a bidirectional map and only generate new codes when a user
requests a brand‑new URL, the expected code length stays at the theoretical
minimum until the pool saturates.  This lazy generation strategy avoids
pre‑allocating a massive namespace and automatically adapts to traffic patterns,
a trick that is often overlooked in interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
