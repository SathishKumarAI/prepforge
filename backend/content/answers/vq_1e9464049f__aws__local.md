---
qid: vq_1e9464049f__aws__local
question: How does one get the value of a sequence into a PL/SQL variable?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 412
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:41:42-05:00'
sources: []
---

**Situation / Task**  
At a retail‑tech startup I was asked to pull the latest daily sales sequence number from an Oracle table into a PL/SQL variable so that downstream ETL jobs could reference it. The requirement was to do this in less than 200 ms for every nightly run, while ensuring no lock contention on the production database.

**Approach / Action**  
I wrote a lightweight anonymous block:

```plsql
DECLARE
    v_seq_val NUMBER;
BEGIN
    SELECT seq_sales.nextval INTO v_seq_val FROM dual;
    -- pass v_seq_val to downstream services via JSON or env var
END;
```

*Why this works:*  
- `nextval` is atomic and non‑blocking.  
- No cursors, no explicit locking – the database handles sequence concurrency.  
- The block compiles in < 1 ms; runtime is dominated by network latency (~50 µs per call).  

I wrapped it in an AWS Lambda (Python) that calls `cx_Oracle`, stores the value in DynamoDB for downstream jobs, and logs throughput via CloudWatch.

**Result**  
- Reduced nightly ETL start‑up time from 4 seconds to **0.8 seconds** – a **80 % speed‑up**.  
- Eliminated lock contention, preventing “ORA‑00054” errors that previously caused 3 min job failures.  

**Reflection (Bar‑raiser lens)**  
I owned the entire end‑to‑end flow, dived deep into Oracle’s sequence semantics, quantified impact with real metrics, and learned to keep the solution minimal so future changes remain frictionless. This aligns with **Ownership**, **Dive Deep**, and **Deliver Results** – Amazon’s core principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
