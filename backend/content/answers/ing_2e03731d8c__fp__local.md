---
qid: ing_2e03731d8c__fp__local
question: 'Explain: Introduction — How LedgerStore Supports Trillions of Indexes at
  Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 532
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:42:46-05:00'
sources: []
---

**How LedgerStore scales to trillions of indexes**

At its core, an index is a *lookup table* that maps a key (e.g., user‑ID) to the location of the data it references. The fundamental problem at Uber is that every ride, payment, and telemetry event must be retrievable by dozens of keys—driver ID, vehicle ID, geographic region, timestamp, fare type, etc.—while still keeping write throughput in the hundreds of thousands per second.

LedgerStore solves this by turning indexing into a *distributed log* rather than a set of mutable tables. Each index entry is appended to an immutable segment on disk; segments are sharded across nodes using consistent hashing on the key hash. Because the log is append‑only, write latency collapses to the cost of a single network round‑trip and local disk seek, regardless of how many indexes point to the same record. Reads are served by a small in‑memory bloom filter per segment that tells whether the key exists; if it does, a two‑phase lookup follows: first a hash table gives the offset within the segment, then a binary search on the sorted list of keys finds the exact position. This combination of *hash‑based partitioning* and *sorted append‑only storage* yields O(1) amortized writes and O(log n) reads while keeping the memory footprint minimal.

**Why it must work this way**

The immutable log guarantees *exactly‑once* semantics without locks: once an entry is written, it never changes, so concurrent readers see a consistent snapshot. Partitioning by key hash eliminates hotspots; each node handles a contiguous slice of the key space, ensuring load balance even as new keys appear. The sorted nature of segments enables efficient range queries (e.g., all rides in a time window) without scanning the entire index.

**A non‑obvious insight**

Most index systems treat “many indexes” as many copies of data. LedgerStore’s insight is to *share* storage across indexes by using the same underlying log for every key type. Because each segment stores the raw key and its offset, any number of logical indexes can be derived from it at query time without duplicating rows. This dramatically reduces disk usage—trillions of index entries map to a few terabytes of append‑only logs—while still delivering sub‑millisecond latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
