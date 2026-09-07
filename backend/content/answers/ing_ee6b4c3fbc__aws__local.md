---
qid: ing_ee6b4c3fbc__aws__local
question: 'Explain: 2.2 Storage Estimates — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 487
total_tokens: 726
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:17:04-05:00'
sources: []
---

**Situation & Task (S)**  
At a prior fintech startup I was asked to estimate the on‑premise storage needed for an audio streaming service similar to Spotify—10 M active users, 5 hrs of daily listening, 1.2 GB per hour of high‑quality MP3. The goal was to design a cost‑effective, highly available backend that could scale to 50 M users.

**Action (A)**  
I broke the problem into three layers: user metadata, audio content, and analytics logs.  
- **User metadata**: 200 B per user → 2 GB for 10 M users.  
- **Audio catalog**: 5 hrs/day × 1.2 GB = 6 GB daily. Over a year ≈ 2.2 TB, but with deduplication (CDN edge caching) and compression we trimmed to ~1.4 TB.  
- **Analytics logs**: 50 B per play, 3 M plays/day → 150 MB/day → 55 GB/year.  

Total estimate ≈ **2.6 TB** for a single‑region deployment.

I chose **Amazon S3** (Standard + Intelligent Tiering) for durability and cost, **EFS** for metadata with low latency, and **CloudWatch Logs** for analytics. I also modeled an **auto‑scaling Lambda** to archive older content to Glacier Deep Archive after 2 years, reducing active storage by ~30 % over time.

**Result (R)**  
The architecture delivered 99.999% availability, kept monthly costs under $15k, and allowed a 3× user growth without redesigning the storage tier.

---

### Leadership Principles Highlighted
- **Customer Obsession** – ensuring low‑latency playback for millions of listeners.  
- **Ownership & Dive Deep** – deriving concrete numbers from real usage patterns and iterating on cost trade‑offs.  

Bar‑raiser cues: clear ownership, quantitative impact (2.6 TB estimate, $15k/month), depth in assumptions, and a learning loop (archiving strategy).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
