---
qid: ing_4054a6519d__faang__local
question: What are the disadvantages of SSDs? — What is an SSD (Solid-State Drive)?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 431
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:13:30-05:00'
sources: []
---

**Clarify**  
The interviewer asks for “disadvantages of SSDs” after a brief definition of what an SSD (Solid‑State Drive) is. I’ll confirm whether they want hardware‑level drawbacks (e.g., cost, endurance) or system‑level issues (e.g., wear‑leveling complexity).  

**Approach**  
1. Define SSD succinctly.  
2. List core disadvantages in bullet form: cost per GB, write endurance, data recovery, latency under heavy writes, and flash‑specific quirks.  
3. For each point, give a quick technical reason and any trade‑off.  

**Depth**  
- **Cost**: NAND flash is more expensive than magnetic platters; price drops slowly.  
- **Write Endurance**: Each cell has ~10k–100k program/erase cycles → wear‑out in heavy write workloads (e.g., databases). Mitigated by overprovisioning and wear‑leveling algorithms.  
- **Data Recovery**: No heads to magnetically read; recovery is often impossible or costly.  
- **Write Amplification & Latency**: Garbage collection can introduce latency spikes and additional writes, hurting performance under sustained write bursts.  
- **Thermal Throttling**: High write activity raises temperature, triggering throttling that reduces throughput.  

**Edge Cases**  
- Very low‑cost consumer SSDs may have weaker controller firmware → higher failure rates.  
- Enterprise SSDs with DRAM cache mitigate latency but add complexity and cost.  
- Flash type (SLC vs TLC) dramatically changes endurance; I’d test under synthetic write workloads.  

**Optimize & Communicate**  
I’d finish by contrasting SSD benefits (speed, shock‑resistance) against these drawbacks, emphasizing that choice depends on workload: read‑heavy gaming vs write‑intensive logging. This shows balanced judgment and clear communication—key for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
