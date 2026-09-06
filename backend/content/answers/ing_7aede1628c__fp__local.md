---
qid: ing_7aede1628c__fp__local
question: 'Explain: But it should never happen that amount — Database Design Tips
  | Choosing the Best Database in a System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 350
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:26:10-05:00'
sources: []
---

In system‑design interviews, a common stipulation is that **“the same record must never be inserted twice under the same key”**—i.e., *duplicate writes* are forbidden.  
Why is this rule essential?  

1. **Deterministic state** – A database’s contract is to expose a unique mapping from keys to values. If two identical inserts could coexist, the system would have to decide which one wins or merge them arbitrarily, destroying referential integrity.  
2. **Idempotence & retry safety** – Network glitches and retries are inevitable. If an insert were allowed twice, a client might unknowingly create two rows, leading to subtle bugs (e.g., double‑charged payments). Enforcing uniqueness guarantees that repeated requests have the same effect as a single one.  
3. **Index efficiency** – Indexes rely on key uniqueness to provide O(log n) lookups. Duplicate keys would force full scans or complex merge logic, eroding performance guarantees.  

The deeper principle is *information entropy*: a key should map to a single state; otherwise the system’s uncertainty increases and entropy rises. By eliminating duplicates we reduce entropy, making the database more predictable and easier to reason about.  

**Non‑obvious insight:**  
Even if you think “duplicates are harmless,” they silently inflate storage and degrade cache locality. A tiny 1 % duplication rate can double disk I/O in high‑write workloads because every duplicate forces a separate page fault. Thus, designing for strict key uniqueness is not just a correctness safeguard—it’s an optimization that keeps the system lean and fast.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
