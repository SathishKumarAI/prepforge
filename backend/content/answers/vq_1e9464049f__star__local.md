---
qid: vq_1e9464049f__star__local
question: How does one get the value of a sequence into a PL/SQL variable?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 372
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:50:40-05:00'
sources: []
---

**Situation** – At my previous employer we had a legacy billing system that generated invoice IDs using an Oracle sequence `INVOICE_SEQ`. The batch job that created invoices ran nightly, but the application layer was written in PL/SQL and expected the new ID to be returned as part of the procedure call. When I joined, the existing code used `SELECT INVOICE_SEQ.NEXTVAL` inside a cursor fetch loop, which caused a race condition and occasional duplicate IDs under high load.

**Task** – I needed to refactor the batch routine so that each invoice creation step reliably captured the sequence value into a PL/SQL variable before inserting the record, ensuring atomicity and eliminating contention on the sequence object.

**Action** – I rewrote the procedure to use the `RETURNING INTO` clause. Inside the transaction I executed:

```plsql
DECLARE
  v_invoice_id INVOICE_SEQ%TYPE;
BEGIN
  INSERT INTO invoices (customer_id, amount)
    VALUES (:cust_id, :amt)
    RETURNING invoice_id INTO v_invoice_id;

  -- Use v_invoice_id for downstream processing
END;
```

This approach fetched the sequence value directly into `v_invoice_id` without an extra SELECT, guaranteeing that the ID matched the inserted row and avoiding locking issues. I also added a bulk‑collect version for batch inserts to improve throughput.

**Result** – The updated routine cut the nightly job runtime from 12 minutes to 7 minutes on average, eliminated duplicate ID errors, and improved overall system reliability. I learned that leveraging `RETURNING INTO` is often cleaner than separate SELECTs when working with sequences in PL/SQL.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
