---
qid: ing_69cd8b0480__faang__local
question: 'Explain: SSD form factors — What is an SSD (Solid-State Drive)?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 465
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:49:42-05:00'
sources: []
---

**Clarify**  
The interviewer wants a clear, technical definition of a *Solid‑State Drive* (SSD) and why its form factor matters for system design.

**Approach**  
1. Define SSD fundamentals (flash memory, controller).  
2. Highlight key physical aspects: interface (SATA, NVMe), enclosure shape/size.  
3. Relate to use cases (desktop vs mobile).  

**Depth**  
An SSD is a storage device that uses non‑volatile flash memory chips plus an embedded controller to manage read/write operations, caching, wear‑leveling, and error correction. Unlike spinning disks, it has no moving parts, giving sub‑millisecond seek times, higher IOPS, lower latency, and better shock tolerance.

*Form factor* refers to the physical dimensions and connector type:  
- **2.5 inch SATA** (classic laptop/desktop) – 69 mm × 100 mm, 7 mm tall, uses a SATA III interface (~6 Gb/s).  
- **M.2 (2280)** – 22 mm wide × 80 mm long, thickness varies; supports both SATA and NVMe over PCIe lanes.  
- **PCI‑Express add‑in cards** – full‑size or half‑height, delivering 4–32 Gb/s per lane for high‑end servers.  

The choice impacts performance (NVMe > SATA), power draw, thermal envelope, and compatibility with motherboard sockets.

**Edge Cases**  
- Legacy systems lacking M.2 slots → must use SATA adapters.  
- Thermal throttling in small form factors can degrade sustained throughput.  
- Some consumer SSDs ship with proprietary firmware that limits over‑provisioning; enterprise drives expose advanced SMART metrics.

**Optimize & Communicate**  
Explain trade‑offs: a 2.5 inch SATA drive is cheaper and universally supported but slower than an M.2 NVMe unit, which fits in thin laptops yet may need active cooling. Conclude by summarizing that understanding SSD form factor allows architects to balance cost, performance, and physical constraints for the target workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
