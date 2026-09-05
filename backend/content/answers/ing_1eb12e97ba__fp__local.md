---
qid: ing_1eb12e97ba__fp__local
question: 'Explain: NVL: links within groups, PCIe between them'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 425
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:11:27-05:00'
sources: []
---

**Why a GPU fabric must combine two link families**

Modern accelerators are built as *many‑core* systems: dozens of compute tiles, each with its own cache hierarchy, interleaved memory controllers, and I/O interfaces. The fundamental problem is to expose *high‑bandwidth, low‑latency communication* between tiles while keeping the physical wiring manageable.

1. **Intra‑group (NVLink)**  
   • Each group of 8–12 GPUs shares a dense mesh of point‑to‑point links.  
   • Bandwidth per link (~25 Gb/s) far exceeds PCIe, and the mesh routing gives *constant‑latency* paths independent of how many GPUs are in the group.  
   • This solves the “bottleneck” that would arise if every pair had to go through a single switch: the cost scales with the number of links rather than the number of tiles.

2. **Inter‑group (PCIe)**  
   • Groups are stitched together over PCIe, which is a *serial bus* already present on motherboards and data‑center interconnects.  
   • PCIe is slower (~16–32 Gb/s per lane) but its electrical design tolerates longer distances and higher fanout without massive silicon area.

**Deep insight:**  
The hybrid fabric exploits the *asymmetry* of communication patterns: most data movement happens locally within a group (high volume, tight coupling), while only occasional bulk transfers cross groups. By assigning the *appropriate link technology* to each pattern—NVLink for dense, low‑latency traffic and PCIe for sparse, long‑haul traffic—the system achieves both high performance **and** scalability without an explosion of silicon area or power.

Thus NVLink links are the “inner‑core highways” that keep a GPU cluster moving fast; PCIe are the “outer‑ring roads” that connect those highways to the wider world.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
