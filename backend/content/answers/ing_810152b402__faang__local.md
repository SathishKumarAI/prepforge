---
qid: ing_810152b402__faang__local
question: 'Explain: Problem 1: Data normalization — Reconciliation in Payment'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 477
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:44:58-05:00'
sources: []
---

**Clarify**  
We need to explain how data normalization is used for reconciling payment records—i.e., matching transactions from two disparate sources (e.g., bank feeds vs. merchant logs) so that amounts, dates, and identifiers line up. I’ll assume the inputs are semi‑structured CSV/JSON files with possible typos, varying date formats, and currency differences.

**Approach**  
1. **Schema mapping & type casting** – define a canonical schema (transaction_id, amount_cents, timestamp_utc, currency).  
2. **Field normalization** – strip whitespace, lower‑case strings, parse dates to ISO 8601 UTC, convert currencies using real‑time rates.  
3. **Deduplication & fuzzy matching** – use hash of key fields; for near‑misses apply Levenshtein distance or token‑based similarity on merchant names.  
4. **Reconciliation logic** – compute diffs: amount mismatches → flag, date offsets within a tolerance window (±2 days) → auto‑match, otherwise manual review queue.

**Depth**  
- Parsing dates with `dateutil.parser` ensures 99% coverage of formats; fallback to regex for legacy patterns.  
- Currency conversion uses the `forex-python` library or a cached API to avoid latency.  
- Deduplication runs in O(n log n) time via sorting and then linear scan, keeping memory footprint low.  
- Fuzzy matching is optional but reduces false negatives; we set a similarity threshold of 0.85.

**Edge Cases**  
- Missing or null fields → treat as “unknown” and flag for review.  
- Extremely large amounts causing integer overflow → use Python’s `Decimal`.  
- Timezone mismatches leading to off‑by‑one‑day errors → always convert to UTC first.

**Optimize & Communicate**  
Future improvements: batch processing with Spark for millions of rows, incremental reconciliation via change logs, and a UI dashboard showing reconciliation status. I’d present the pipeline diagram, explain trade‑offs (e.g., fuzzy matching increases CPU but reduces manual work), and quantify expected error rate drop from 5% to <1%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
