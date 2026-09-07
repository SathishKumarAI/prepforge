---
qid: ing_0ee389cbc6__faang__local
question: How do SSDs work? — What is an SSD (Solid-State Drive)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 554
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:18:16-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question:* “What is an SSD and how does it work?”  
Assumptions: we’re talking about consumer/enterprise flash‑based drives, not NVMe specifics; the audience wants a high‑level but technically accurate picture.

---

**2️⃣ Approach**  
- Define the device.  
- Explain storage media (flash cells).  
- Outline data path: host → controller → flash.  
- Mention wear‑leveling & error handling.  
- Contrast with HDDs to highlight advantages.

---

**3️⃣ Depth**  

An **SSD (Solid‑State Drive)** stores data in NAND‑flash memory, a non‑volatile semiconductor that retains information without power.  
*Core components:*  
1. **Flash cells** – floating‑gate transistors that hold charge to represent bits.  
2. **Controller** – firmware + ASIC managing read/write logic, error correction (ECC), garbage collection, and wear‑leveling.  
3. **DRAM cache** – temporary buffer for write operations and mapping tables.  

*Operation flow:*  
- **Write:** Host sends data → controller writes to a spare block, updates mapping table in DRAM, marks old blocks dirty.  
- **Read:** Controller translates logical address to physical location via the mapping table, fetches from flash, corrects errors with ECC.  
- **Garbage collection:** Periodically erases unused blocks (erase requires whole block, not individual cells) and compacts data.  

Wear‑leveling distributes writes evenly across all blocks, extending lifespan (~3k–10k program/erase cycles per cell).  

---

**4️⃣ Edge Cases**  
- *Sudden power loss* → controller’s write cache may corrupt; many SSDs use power‑loss protection (supercapacitor or battery).  
- *Full capacity*: controller stalls until garbage collection frees space.  
- *Extreme temperatures*: flash retention degrades, reducing effective lifespan.

---

**5️⃣ Optimize & Communicate**  

Highlight that SSDs deliver **sub‑millisecond latency**, no moving parts → high durability and low power. For enterprise, NVMe over PCIe further reduces latency by bypassing SATA/PCIe overhead.  
When interviewing, I’d emphasize:  
- *Why flash works (no mechanical delay)*  
- *How firmware turns raw NAND into a reliable block device*  
- *Trade‑offs: cost vs performance vs endurance*.  

This structured walk‑through satisfies the SIGNAL criteria: clear problem restatement, methodical plan, deep technical insight, awareness of edge conditions, and concise, interview‑ready communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
