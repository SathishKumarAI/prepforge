---
qid: vq_0ceb12afd6__fp__local
question: How to display Date in DD-MON-YYYY table?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 441
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:22:28-05:00'
sources: []
---

In relational systems a **date** is stored as an opaque value that encodes year, month, day (and sometimes time) in binary.  
When we want to *display* it, the engine must map that internal representation to a string by applying a formatting rule.  
The format `DD-MON-YYYY` is a classic “short‑date” pattern: two digits for the day, an abbreviated month name, and four digits for the year.

### Why this particular mapping works

1. **Normalization** – The underlying value is unambiguous; every date has a unique binary encoding.  
2. **Determinism** – The format string describes a *bijection* from that encoding to a printable form.  
3. **Locale‑independence** – Using the three‑letter English month abbreviation (`JAN`, `FEB`, …) fixes a single, unambiguous representation regardless of client locale.

### Implementation in SQL

```sql
SELECT TO_CHAR(order_date,'DD-MON-YYYY') AS order_day
FROM orders;
```

`TO_CHAR` (Oracle, PostgreSQL’s `to_char`) takes the internal date and walks through the format string:

| token | meaning                     |
|-------|-----------------------------|
| DD    | zero‑padded day             |
| MON   | three‑letter month abbreviation in the current language setting |
| YYYY  | four‑digit year              |

If you need a fixed English abbreviation regardless of session settings, set `NLS_DATE_LANGUAGE = 'ENGLISH'` (Oracle) or use the `locale='en_US'` option in PostgreSQL’s `to_char`.

### Non‑obvious insight

The *month* part is not derived from numeric month values; it uses a lookup table that maps each month to its abbreviation. Because this lookup can be cached, the conversion remains O(1) even for millions of rows. Thus, choosing a text representation like `MON` does **not** introduce a performance penalty, contrary to common belief.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
