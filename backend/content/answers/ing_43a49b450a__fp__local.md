---
qid: ing_43a49b450a__fp__local
question: 'Explain: Sequence Number — Amazon Kinesis Data Streams Terminology and
  concepts - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 420
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:29:41-05:00'
sources: []
---

In a Kinesis shard every record is written to an immutable log.  
The **sequence number** is the *only* identifier that tells you where that
record lives in that log.  

---

### Why it must exist

A shard behaves like a single‑writer, multiple‑reader FIFO queue.  
Readers can seek arbitrarily far back (for replay or recovery) and must be able to
resume exactly where they left off.  To do so the system needs:

1. **Monotonicity** – later writes must get higher identifiers so that “next”
   is unambiguous.
2. **Uniqueness per shard** – two records in the same shard cannot share a number.
3. **No gaps** – otherwise readers could miss data if they rely on contiguous
   numbers.

The sequence number satisfies all three: it’s a 128‑bit unsigned integer that
increases with each put, guaranteeing order and uniqueness, and it is assigned by
Kinesis at write time so no two writers can collide.

---

### Deeper principle

This is an instance of *consistency through total ordering*.  
By giving every record a global order within its shard, Kinesis turns the
distributed append‑only log into a deterministic stream that any consumer can
replay from any point.  The sequence number is thus the logical address of a
record—much like a file offset in a disk.

---

### Non‑obvious insight

Because the sequence number is **not** just a timestamp, consumers cannot
deduce when the record was produced merely by looking at it.  
Instead they must query the `ApproximateArrivalTimestamp` field or rely on
application‑level metadata.  This separation protects Kinesis from replay
attacks and ensures that downstream systems can handle out‑of‑order arrivals
without misinterpreting temporal order.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
