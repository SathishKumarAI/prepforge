---
qid: ing_831f32a1a8__faang__local
question: 'Explain: Choose the Right Granularity — Checksums | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 513
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:49:42-05:00'
sources: []
---

**Clarify**  
We’re asked how to decide the *granularity* of checksum checks in a distributed storage system (e.g., S3, Bigtable). Clarifying: “Granularity” refers to the size of data units that get an individual checksum—byte‑stream vs. block vs. file. Assumptions: we care about integrity, latency, bandwidth, and failure rates; we can trade off checksum computation cost against recovery speed.

**Approach**  
1. **Characterize workload** – read/write patterns, object sizes, network constraints.  
2. **Map error models** – random bit flips vs. chunk corruption.  
3. **Define metrics** – mean time to detect (MTTD), mean time to repair (MTTR), storage overhead.  
4. **Select candidate granularities** – per‑block (e.g., 64 KB), per‑object, or hybrid.

**Depth**  
- *Per‑block*: high detection probability; minimal MTTR because only a small chunk is replaced. Overhead: more checksum metadata (~1–2 % of data).  
- *Per‑object*: low overhead; larger MTTR (full object download/replication). Suitable when objects are large and network bandwidth is scarce.  
- *Hybrid*: compute block checksums for hot regions, file checksum for cold archives. Use Bloom filters to decide which path to take.

Complexity: checksum calculation O(n) where n = data size; storage overhead linear in granularity count. Trade‑offs: finer granularity → more CPU and metadata but faster recovery; coarser granularity → less compute but risk larger loss windows.

**Edge Cases**  
- Small objects (< block size): fall back to object checksum.  
- Rapid churn (hot spot writes): may incur frequent recomputation.  
- Corruption patterns spanning multiple blocks: per‑object checksums alone won’t catch it; need inter‑block redundancy or erasure coding.

**Optimize & Communicate**  
Iterate by profiling real traffic; adjust block size to balance CPU vs. bandwidth. Explain to interviewers that the “right” granularity is context‑dependent, driven by workload characteristics and system constraints, not a one‑size‑fits‑all answer. Use clear diagrams or pseudocode if time allows to show how metadata is stored and looked up during read/write paths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
