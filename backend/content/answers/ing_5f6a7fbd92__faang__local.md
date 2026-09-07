---
qid: ing_5f6a7fbd92__faang__local
question: 'Explain: timestamps — GitHub - lib/pq: Go PostgreSQL driver for database/sql
  \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 634
total_tokens: 882
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:26:16-05:00'
sources: []
---

**Clarify**  
The question asks how the `lib/pq` PostgreSQL driver handles **timestamp** types when interfacing with Go’s `database/sql`. We’ll assume a typical use‑case: reading and writing `TIMESTAMP`, `TIMESTAMPTZ`, and `DATE` columns, and that the user wants to know what Go type is used, how time zones are handled, and any pitfalls.

**Approach**  
1. Map PostgreSQL timestamp types → Go `time.Time`.  
2. Explain how `lib/pq` scans values into `time.Time` (or pointers).  
3. Cover timezone handling: local vs UTC.  
4. Mention driver flags (`TimeZone`, `UseLegacyDatetimeStyle`).  
5. Highlight edge cases: nil timestamps, DST transitions, precision loss.

**Depth**  

| PostgreSQL type | Go type used by pq | Notes |
|-----------------|--------------------|-------|
| `TIMESTAMP` (no TZ) | `time.Time` (interpreted in the client’s local zone) | If you want UTC, use `UseTZ=true` or cast in SQL. |
| `TIMESTAMPTZ` | `time.Time` with location set to UTC by default | Driver parses the offset and stores the instant in UTC. |
| `DATE` | `time.Time` (midnight of that day) | Time component zeroed; useful for dates only. |

*Scanning*:  
```go
var ts time.Time
err := row.Scan(&ts)
```
If a column is NULL, scan into a pointer (`*time.Time`) to capture nil.

*Time zone conversion*:  
- `pq` always stores UTC internally.  
- When writing, it emits the timestamp in UTC unless you set `UseTZ=true`.  
- The driver respects the `TimeZone` connection option to interpret literal timestamps without an offset.

**Edge Cases**  

| Scenario | What breaks? | Test |
|----------|--------------|------|
| NULL timestamps | Uninitialized `time.Time` (zero value) | Scan into `*time.Time`; check nil. |
| DST jump days | Ambiguous local times | Use UTC or specify timezone in query. |
| Sub‑microsecond precision | Truncated to microseconds | Verify with `NOW()::TIMESTAMP(9)`; ensure driver supports 9 digits. |

**Optimize & Communicate**  
- For high‑volume reads, consider using the `pq.Array` helper for bulk timestamp slices.  
- If you need to preserve client time zone, set `TimeZone=America/New_York` in DSN and use `UseTZ=true`.  
- Document these settings early so downstream services don’t misinterpret dates.

*Key takeaway*: In `lib/pq`, timestamps map cleanly to Go’s `time.Time`; just be mindful of nil values, time‑zone defaults, and precision when designing your schema and queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
