---
qid: ing_79df55a353__think__local
question: 'Explain: Capacity Estimation — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 451
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:04:11-05:00'
sources: []
---

**1️⃣ Clarify the goal & scope**  
   - Confirm that “capacity estimation” refers to predicting how many requests/queries a ML system can handle before bottlenecks appear.  
   - Note assumptions: steady‑state traffic, no extreme spikes, typical latency targets, and hardware specs (CPU, GPU, memory).  

**2️⃣ Adopt the classic System‑Design framework**  
   - *Define requirements*: throughput, latency, consistency, cost.  
   - *Identify core components*: data ingestion, preprocessing, model inference, caching, monitoring.  
   - *Determine bottlenecks*: compute, I/O, network, storage.  

**3️⃣ Reason step‑by‑step**  
   1. **Model inference cost**: measure FLOPs or latency per request on target hardware.  
   2. **Compute capacity**: (available CPU/GPU cycles) ÷ (cycles per inference).  
   3. **I/O & network**: estimate data size per request; compute bandwidth needed and compare to link limits.  
   4. **Memory footprint**: model + batch + intermediate tensors → fit in RAM/VRAM.  
   5. **Add safety margin** (e.g., ×1.2–×1.5) for load spikes or errors.  

**4️⃣ Avoid common pitfalls**  
   - Don’t ignore the *pre‑processing* step; it can dominate latency.  
   - Assume linear scaling; in reality, contention and caching effects cause sub‑linear growth.  
   - Forget to account for *model updates* or *A/B testing* traffic that adds overhead.  

**5️⃣ Validate & communicate**  
   - Cross‑check numbers against a small benchmark run.  
   - Present results as a table: request size, latency, throughput, resource usage, and projected limit.  
   - Explain assumptions clearly so interviewers can question or adjust them.  

Following this systematic, assumption‑aware process shows you can translate ML workloads into concrete capacity estimates—exactly what system‑design interviews aim to test.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
