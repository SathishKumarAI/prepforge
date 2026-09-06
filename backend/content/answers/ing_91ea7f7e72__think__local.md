---
qid: ing_91ea7f7e72__think__local
question: How would you serve a large mixture-of-experts model on a statically scheduled
  fabric when expert selection is data-dependent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 559
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:44:28-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- *What is “statically scheduled fabric”*?  Assume a pre‑wired network (e.g., FPGA or ASIC) where routing/compute resources are fixed at design time.  
- *Data‑dependent expert selection* means the control flow depends on runtime inputs, not compile‑time constants.  
- *Goal*: keep throughput high while honoring the fabric’s static nature.

**2️⃣ Adopt a “static routing + dynamic gating” framework**  
Treat each expert as a dedicated compute block with its own input buffer and output interface. The fabric provides fixed interconnects to all experts; only the control logic decides which path is active for each data sample.

**3️⃣ Step‑by‑step reasoning**  

1. **Pre‑allocate expert pipelines**: Map every expert onto a distinct pipeline segment of the fabric (e.g., a chain of MAC units).  
2. **Design a selector controller**: Implement a lightweight, deterministic finite state machine (FSM) that reads the data‑dependent key and outputs one-hot enable signals for the desired expert’s input buffer.  
3. **Time‑division multiplexing (TDM)**: If the number of experts exceeds available parallel lanes, schedule them in time slots; the FSM ensures correct slot allocation per sample.  
4. **Buffer staging**: Use double‑buffered queues so that while one sample is being routed to an expert, the next sample can be fetched and queued for its own expert.  
5. **Back‑pressure handling**: Include simple handshaking (ready/valid) between selector and experts to avoid stalls.

**4️⃣ Common traps to avoid**  

- *Assuming full parallelism*: In a static fabric you cannot instantiate more pipelines than resources allow; over‑allocating leads to routing congestion.  
- *Neglecting control latency*: The FSM’s decision time must fit within the pipeline cycle; otherwise you’ll lose throughput.  
- *Ignoring buffer sizes*: Small buffers cause frequent stalls when expert processing times vary.

**5️⃣ Sanity‑check & communicate**  

- **Throughput check**: Compute cycles per sample = (expert latency + selector delay) / number of parallel lanes. Ensure it meets target FPS.  
- **Explain to stakeholders**: “We keep the fabric static by assigning each expert a fixed lane; a tiny controller decides which lane receives each input on the fly, so we get data‑dependent routing without dynamic reconfiguration.”  

By following this static‑routing + dynamic‑selection pattern you can serve a mixture‑of‑experts model efficiently on a statically scheduled fabric.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
