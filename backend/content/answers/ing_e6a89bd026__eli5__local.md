---
qid: ing_e6a89bd026__eli5__local
question: 'Explain: 2.3 Bandwidth Estimates — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 300
total_tokens: 468
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:40:25-05:00'
sources: []
---

**Bandwidth estimates for a music‑streaming service**

Imagine you’re the manager of a huge concert hall that can play music to thousands of fans at once.  
The *bandwidth* is the size of the pipes that carry sound from the stage to every seat. To keep everyone happy, you must know how wide those pipes need to be.

1. **Estimate the traffic** – First count how many listeners might tune in at peak time (say 10 000 users).  
2. **Find each user’s data rate** – A typical Spotify stream is about 160 kbps (kilobits per second).  
3. **Multiply** – Multiply users by their rate: 10 000 × 160 kbps ≈ 1.6 Gbps (gigabits per second). That’s the total pipe width you need for peak traffic.

4. **Add headroom** – Just like a concert hall has extra space for unexpected guests, give yourself a safety margin (e.g., 20 %) so that sudden spikes don’t choke the stream.

5. **Check real‑world numbers** – Compare your estimate with actual usage data from the past month; adjust if you’re over or underestimating.

By treating bandwidth like a set of pipes in a concert hall, you can design Spotify’s network to deliver smooth music without buffering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
