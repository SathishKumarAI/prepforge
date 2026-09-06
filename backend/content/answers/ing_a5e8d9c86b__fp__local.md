---
qid: ing_a5e8d9c86b__fp__local
question: 'Explain: Leveled Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 521
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:58:37-05:00'
sources: []
---

### Leveled Compaction (LC)

**What problem does LC solve?**  
In a log‑structured merge tree each write is appended to an immutable SSTable. Reads must merge multiple tables; if many small tables exist, read amplification explodes and compactions become costly. LC keeps the number of overlapping files *constant* while preserving fast writes.

**How it works – from first principles**  
1. **Levels & size ratios.**  
   Level 0 may hold at most *k* SSTables; each higher level is *R* times larger (typical R = 10). This geometric growth guarantees that the total data volume in level i is bounded by \(R^{\,i}\) times the base size, so only a logarithmic number of levels is needed.

2. **Compaction policy.**  
   When a level exceeds its quota, a *compaction job* merges all SSTables from that level into a single SSTable in the next level. Because each merge produces one output file, the write amplification per key remains O(1). Reads still hit only the latest version of a key (the newest SSTable) plus at most one file per level.

3. **Overlap control.**  
   Level 0 is allowed to overlap; subsequent levels are kept *non‑overlapping* by design. This guarantees that, for any read, the number of files examined is bounded by the number of levels (≈ log₍R₎ N).

**Why it must work this way**  
- **Space vs. I/O trade‑off.** The geometric size ratio keeps disk usage linear while limiting compaction fan‑out.  
- **Write amplification.** Each key is rewritten only when its SSTable moves to the next level, yielding a constant factor rather than O(log N).  
- **Read latency.** Non‑overlapping higher levels mean that a read touches at most one file per level.

**Non‑obvious insight**  
The *k* limit on Level 0 is not arbitrary; it directly controls write amplification and the probability of key collisions during compaction. A larger *k* reduces compaction frequency but increases read cost, while a smaller *k* does the opposite. Thus LC’s parameters encode an optimal point in the space–time trade‑off curve for LSM‑based stores.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
