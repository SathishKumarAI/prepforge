---
qid: ing_bbbde0d004__fp__local
question: 'Explain: Query an Absent URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 586
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:43:10-05:00'
sources: []
---

### Why a Bloom Filter for “Absent URL” Queries?

In a high‑traffic web service we often need to answer *“has this URL ever been seen?”* quickly and with minimal storage.  
The problem is a set membership test on an enormous universe (all possible URLs) where most queries will be **negative** (the URL never appeared). We want:

1. **Constant‑time lookups** – no database roundtrip.  
2. **Space efficiency** – we cannot store every seen URL explicitly.  
3. **Acceptable false positives** – a few wrong “yes” answers are tolerable; the system can fall back to a heavier check.

A Bloom filter satisfies exactly these constraints. It is built from *k* independent hash functions mapping a key to *m* bits. Inserting sets those bits to 1. To query, we check if all corresponding bits are set. If any bit is 0 → **definitely absent**; if all 1 → **possibly present** (false positive risk).

#### Derivation

Let \(p\) be the probability a particular bit remains 0 after inserting \(n\) URLs:
\(p = \left(1-\frac{1}{m}\right)^{kn} \approx e^{-kn/m}\).  
The false‑positive rate is then
\(f = (1-p)^k \approx \left(1-e^{-kn/m}\right)^k\).

Choosing \(k = \frac{m}{n}\ln 2\) minimizes \(f\), giving the classic expression
\(f \approx \left(\tfrac12\right)^k\).
Thus, for a target \(f\), we set \(m = -\tfrac{n \ln f}{(\ln 2)^2}\).

#### Non‑obvious Insight

A Bloom filter is *not* just a compressed hash table; it’s a **probabilistic sketch** that trades a tiny error probability for linear space. The key insight is that the bits encode *information about set structure*, not individual elements. Because each bit aggregates many URLs, a single bit flip can “mask” an entire subset of URLs. This collective encoding explains why false positives cluster: if a particular hash pattern becomes saturated, any URL mapping to it will falsely appear present. Therefore, monitoring bit‑saturation gives early warning of when the filter needs resizing—something naive designers often overlook.

In practice, Bloom filters let systems answer “has this URL been seen?” in microseconds with megabytes of RAM, while keeping the false‑positive rate below a user‑defined threshold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
