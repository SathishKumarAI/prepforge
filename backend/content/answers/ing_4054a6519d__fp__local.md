---
qid: ing_4054a6519d__fp__local
question: What are the disadvantages of SSDs? — What is an SSD (Solid-State Drive)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 421
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:21:12-05:00'
sources: []
---

**Disadvantages of SSDs – a principled view**

SSDs store data in floating‑gate or tunnelling‑oxide transistors that must be flipped between “0” and “1”. Each flip consumes charge and gradually degrades the cell’s ability to hold a stable voltage, a phenomenon called *wear*. Because wear is uneven—hot spots form where write traffic concentrates—the device must employ *wear‑leveling* algorithms. These add latency (a few microseconds per write) and complexity, turning an otherwise trivial “set bit” operation into a multi‑step process that involves block erasure, data relocation, and garbage collection.  

The need to erase entire blocks before rewriting introduces **write amplification**: the ratio of physical writes to logical writes can exceed 1 ×, inflating power consumption and shortening lifetime. This inefficiency is invisible in simple read‑only workloads but becomes critical in write‑heavy databases or virtual machines.

Economically, the per‑gigabyte cost of NAND flash remains higher than magnetic media because each cell requires a dedicated transistor stack and isolation circuitry; scaling density involves thinner oxides, which further accelerate wear and error rates. Thus, the fundamental trade‑off is *durability vs. density*: pushing for larger capacities or faster speeds inevitably increases the probability of bit errors, demanding more robust ECC (error‑correcting codes) and larger controller logic—both cost drivers.

**Non‑obvious insight:**  
While many cite “limited write cycles” as a drawback, the real constraint is *write‑amplification* hidden inside wear‑leveling. Even if a drive has nominal 3 M‑cycle endurance, aggressive garbage collection can reduce usable life to a fraction of that number in high‑write scenarios. This subtle effect explains why SSDs sometimes fail months after purchase despite having plenty of cycles left on the rating sheet.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
