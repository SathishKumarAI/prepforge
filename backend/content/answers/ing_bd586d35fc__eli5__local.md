---
qid: ing_bd586d35fc__eli5__local
question: 'Explain: Add a URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 245
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:37:09-05:00'
sources: []
---

**Adding a URL to a Bloom filter (in system design)**  

Think of a Bloom filter as a “digital sieve” that tells you whether something *might* be in a huge list, without storing the whole list. Imagine you have a giant book of URLs and you want to know quickly if a new one is already there. Instead of keeping every page, you keep just a few tiny “memory chips.”  

When you add a URL, you run it through several simple hash functions (like turning the URL into different fingerprints). Each fingerprint points to a specific bit in a long array and sets that bit to 1. The array is the sieve. Later, when someone asks if a URL might be present, you hash it again; if all corresponding bits are 1, the filter says “probably yes.” If any bit is 0, it’s definitely not there.  

So adding a URL is just setting a handful of bits in the array—fast, cheap, and perfect for quick look‑ups in large systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
