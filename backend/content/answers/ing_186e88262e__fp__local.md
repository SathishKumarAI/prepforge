---
qid: ing_186e88262e__fp__local
question: What is an SSD (Solid-State Drive)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 380
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:57:36-05:00'
sources: []
---

In a computer system the **problem** to solve is *fast, reliable access to data*.  
Traditional spinning disks (HDDs) use magnetic platters and a moving head; the head must locate the correct sector before reading or writing. The latency of this mechanical motion dominates overall I/O time.

A **Solid‑State Drive (SSD)** replaces that mechanical bottleneck with an array of NAND flash cells, each cell holding one or more bits as charge levels. Reading is performed by applying a voltage to a wordline and sensing the resulting current through a transistor; writing changes the charge in selected cells via Fowler–Nordheim tunnelling. Because there is no moving part, the *seek time* collapses from milliseconds to nanoseconds, giving sub‑millisecond latency.

The deeper principle is **parallelism**: SSDs contain many memory chips operating concurrently. While one chip writes, another can read, and the controller’s error‑correcting code (ECC) and wear‑leveling algorithms distribute operations across cells to avoid hotspots. This parallels parallel computing where throughput scales with the number of concurrent units.

A non‑obvious insight: **write amplification**—the ratio of physical writes to logical writes—is largely governed by the flash block erase granularity, not just the amount of data written. Even if you overwrite a single byte, an entire block (typically 128 KB–1 MB) must be erased and rewritten, so SSD performance hinges on how effectively the controller minimizes this amplification.

Thus, SSDs solve the latency problem by eliminating mechanical motion and exploiting massive parallelism, while their efficiency is bounded by flash’s erase‑granularity constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
