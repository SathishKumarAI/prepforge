---
qid: vq_937d966d0e__star__local
question: What is Row Chaining, Row Migration?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 370
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:10:09-05:00'
sources: []
---

**Situation** – At my previous employer we had an Oracle 12c data warehouse that was ingesting billions of rows nightly from the transactional system. The fact table kept growing faster than our tablespace, and users reported 30‑second query times on what should have been simple aggregates.

**Task** – I was tasked with halting the growth spike while keeping the ETL jobs running uninterrupted, and to reduce query latency by at least 40 % before the next quarterly report cycle.

**Action** – First, I analyzed the allocation chains: many partitions were suffering from *row chaining* because of long VARCHAR2 fields that caused rows to spill into overflow blocks. I re‑structured those columns into fixed‑length CHARs where possible and added a `ROW_MIGRATION` trigger on each partition to automatically move any newly inserted chained rows into separate data blocks when the block’s free space fell below 15 %. I also enabled *row migration* at the table level, which allowed Oracle to relocate whole rows across blocks during vacuuming. Finally, I scheduled nightly `ALTER TABLE ... MOVE PARTITION` operations during off‑peak hours and added a compression hint for the older partitions.

**Result** – After two weeks of deployment, the tablespace usage dropped by 28 %, eliminating the need for an immediate expansion. Query latency on our flagship fact table fell from 30 s to 18 s—a 40 % improvement—and we avoided a costly hardware upgrade. I learned that proactive row chaining analysis coupled with targeted migration can yield significant performance gains without changing application logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
