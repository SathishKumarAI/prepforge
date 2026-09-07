---
qid: ing_8c638b3b29__aws__local
question: 'Explain: RR (Random Replacement) — Top 8 Cache Eviction Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 504
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:31-05:00'
sources: []
---

**Answer – Random Replacement (RR) & 8 Key Cache‑Eviction Policies**

*Leadership Principles:* **Ownership** – I own the end‑to‑end cache strategy; **Dive Deep** – I dissect each policy’s trade‑offs.

**Situation / Task:** At my previous e‑commerce platform we had a 10 GB in‑memory product catalog cache. Latency spikes during flash sales forced me to audit eviction policies and propose a scalable, cost‑effective solution.

**Action (Technical):**  
1. **Implemented RR** – simplest policy: on miss, pick a random key for eviction.  
2. Benchmarked against 7 others:  
   - LRU (Least Recently Used)  
   - LFU (Least Frequently Used)  
   - FIFO (First In First Out)  
   - ARC (Adaptive Replacement Cache)  
   - Clock‑LRU (hardware‑friendly approximation of LRU)  
   - TinyLFU (combination of frequency and recency)  
   - GDSU (Greedy Dual Size/Utility).  

3. Used **Amazon CloudWatch** to collect hit‑ratio, latency, CPU usage; **AWS Lambda** for lightweight simulation; **DynamoDB** for persistent key metadata.  

4. Chose **Redis on Amazon ElastiCache** as the in‑memory store—supports all policies natively, offers 99.9 % availability, and auto‑scales.

5. Deployed a **canary rollout**: 10 % traffic switched to each policy; measured impact over 48 h.

**Result:**  
- RR was fastest (CPU < 30 %) but hit‑ratio dropped 12 %.  
- TinyLFU gave the best balance: +8 % hit‑ratio, latency ↓ 18 ms, cost ↑ 5 % (due to larger memory).  
- Final choice: **TinyLFU** on ElastiCache with auto‑scaling; overall cache efficiency improved by 15 %, reducing backend DB load by 20 %.  

**Learnings:**  
- Simpler policies can win when traffic is uniformly random.  
- Always validate against real workload patterns—what works in theory may not hold in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
