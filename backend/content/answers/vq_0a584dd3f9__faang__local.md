---
qid: vq_0a584dd3f9__faang__local
question: What is collation?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 475
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:56:48-05:00'
sources: []
---

**Clarify**  
> *“Collation”* usually refers to the way text data is compared and sorted in a database or file system.  
> - Is the question about SQL databases (e.g., MySQL, PostgreSQL) or file‑system metadata?  
> - Do we need to cover locale‑specific rules (accent sensitivity, case sensitivity)?

**Approach**  
1. Define collation and its components.  
2. Explain how it affects sorting & equality checks.  
3. Highlight practical implications in ETL pipelines.

**Depth**  
- **Definition:** A collation is a set of rules that determines the ordering of characters (Unicode code points) for comparison, sorting, and searching.  
- **Components:**  
  - *Locale* (e.g., en_US, ja_JP).  
  - *Case sensitivity* (ci vs cs).  
  - *Accent/diacritic handling* (accent‑sensitive vs accent‑insensitive).  
  - *Strength* levels: primary (base letter), secondary (accents), tertiary (case), quaternary (collation weights).  
- **SQL Example:** `CREATE TABLE users (name VARCHAR(50) COLLATE utf8mb4_unicode_ci);` – case‑insensitive, accent‑insensitive.  
- **Impact on ETL:** Wrong collation can cause duplicate keys, incorrect joins, or mis‑sorted results; it also affects performance because indexes are built according to the chosen collation.

**Edge Cases**  
- Mixing collations in a join → implicit conversion errors.  
- Unicode normalization differences (NFC vs NFD).  
- Binary collations that sort by code point order, ignoring linguistic rules.

**Optimize & Communicate**  
- *Best practice:* Pick one canonical collation for the database and enforce it via schema constraints.  
- *Explain to stakeholders:* “Choosing `utf8mb4_unicode_ci` will treat ‘résumé’ and ‘resume’ as equal, which is essential for deduplication in our user data pipeline.”  

This structured answer demonstrates clear problem framing, technical depth, and practical guidance—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
