---
qid: ing_6db9498db7__fp__local
question: 'Explain: SSD vs. eMMC — What is an SSD (Solid-State Drive)?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 477
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:57:36-05:00'
sources: []
---

**What is an SSD?**  
At its core, a solid‑state drive (SSD) solves the *“how do we store data so that it can be read and written fast, reliably, and with low power?”* problem by replacing moving parts with memory cells.  

1. **Fundamental architecture** – An SSD is a collection of NAND flash chips, each a grid of floating‑gate transistors that can hold 0 or 1 in a *charge state*. Unlike magnetic disks, the charge can be read electrically in microseconds, and writing only requires applying a high voltage to flip a cell’s state.  
2. **Why it must work this way** – The NAND array is organized into pages (typically 4 KB) that are written sequentially, while blocks (512 KB–8 MB) can be erased only as a whole. This asymmetry drives the *wear‑leveling* and *garbage‑collection* algorithms: the drive must spread writes evenly across blocks to avoid premature failure, and reclaim space by moving valid pages out of blocks slated for erase.  
3. **Connection to deeper principles** – The SSD’s performance hinges on *information theory*: each cell encodes a single bit but, due to program/erase cycles, we need error‑correcting codes (ECC) that add redundancy. The drive’s controller uses *coding* and *queueing* theory to keep I/O stalls minimal while respecting the physical limits of NAND.  
4. **Non‑obvious insight** – Most people think SSD speed is just “no moving parts,” but the real bottleneck is *erase latency*. Because erasing a block takes hundreds of milliseconds, modern SSDs use *overprovisioning* (extra hidden storage) and *write amplification* reduction to hide this cost. Understanding that an SSD’s throughput is bounded by how often it can erase blocks reveals why high‑end drives allocate 10–20 % more NAND than the user capacity.  

Thus, an SSD is a highly engineered system that turns charge states into fast, low‑power storage by mastering the physics of flash, the math of coding, and the logistics of wear‑leveling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
