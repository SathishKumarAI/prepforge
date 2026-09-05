---
qid: vq_c79cacdccf__fp__local
question: How do one-load multi-line records?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 437
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:55:52-05:00'
sources: []
---

**Why multiline records matter**

When a database‑style file stores a logical “record” that spills over several physical lines (e.g., a CSV with quoted fields containing newlines), naïve line‑by‑line parsing misinterprets the record boundary and corrupts data. The core problem is to *detect* where one logical unit ends while still treating each physical line as an atomic read.

**The principle that guarantees correctness**

Treat the file as a stream of **tokens** (characters) rather than lines. A record is delimited by a token sequence that cannot appear inside a field—most often a *unescaped* newline or a sentinel like `\0`. The algorithm then:

1. Read characters into a buffer until the delimiter is seen.
2. If the delimiter is escaped (e.g., inside quotes), ignore it and continue.
3. Once an unescaped delimiter is found, emit the accumulated string as one record.

This is essentially a finite‑state machine: states are “outside field”, “inside quoted field”, “after escape character”. The FSM guarantees that every possible input leads to exactly one transition per character, ensuring O(n) time and O(1) extra space.

**A non‑obvious insight**

Most tutorials stop at “read until newline” or “skip quoted fields”. The subtlety is that *whitespace* outside quotes can be part of the record separator. For example, a blank line between records should be ignored, but a line that starts with spaces followed by `\n` must still terminate the previous record. By normalizing whitespace **before** state transitions (e.g., trimming leading/trailing spaces in the “outside field” state), you avoid accidental splits and keep the algorithm robust across varied file styles.

In short: treat the stream as a token machine, detect unescaped delimiters with an FSM, and normalize whitespace early to handle edge cases that otherwise break multiline‑record loaders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
