---
qid: ing_5a061b149e__think__local
question: 'Explain: Date-Tiered Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 215
output_tokens: 609
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:56:43-05:00'
sources: []
---

### 1. Clarify the ask & set assumptions  
- **Goal**: Explain *date‑tiered compaction* (DTC) in ScyllaDB, focusing on SSTable compaction and strategy choices.  
- **Audience**: Readers know basic LSM‑tree concepts but not Scylla’s specifics.  
- **Scope**: Cover why DTC exists, how it works (tiers, age buckets), its impact on read/write performance, and typical use‑cases.

### 2. Adopt a mental model / framework  
1. **LSM‑tree refresher** – SSTables → compaction → merge/rewrite.  
2. **Compaction strategy taxonomy** – Size‑Tiered (STCS), Leveled (LCS), Time‑Based (DTC).  
3. **Scylla’s implementation layer** – how DTC is parameterized and integrated with the storage engine.

### 3. Step‑by‑step reasoning toward an answer  
- Start by recalling that Scylla stores writes in memory tables, flushes to immutable SSTables on disk.  
- Explain *date‑tiered* as a strategy where SSTables are grouped into **age tiers** (e.g., <1 h, 1–24 h, >24 h).  
- When compaction runs, it merges all SSTables within the same tier, creating a new one that inherits the tier’s age.  
- Highlight key differences from size‑tiered: DTC keeps write amplification low for time‑series workloads and reduces read amplification by keeping recent data small.  
- Mention parameters (`dtr_compaction_min_threshold`, `dtr_compaction_max_threshold`, `dtr_compaction_size_in_mb`) that control tier boundaries.  
- Discuss trade‑offs: higher compaction frequency → more I/O, but faster reads for hot data; older tiers may become large and slow to read if not further leveled.

### 4. Common traps & wrong turns to avoid  
- **Confusing DTC with Leveled** – they both use “levels” but are based on time vs size.  
- **Assuming DTC is always better** – for workloads without a temporal locality, STCS may still be preferable.  
- **Neglecting the role of `dtr_compaction_time_in_ms`** – it governs how often compaction runs; mis‑configuring can starve reads.

### 5. Sanity‑check & verbalize the explanation  
- Verify that each point logically follows from the previous one and ties back to Scylla’s design goals.  
- Keep sentences concise, use analogies (e.g., “like sorting mail by delivery date”).  
- End with a quick recap: DTC keeps data age‑ordered, merges within tiers, balances write/read workloads for time‑series data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
