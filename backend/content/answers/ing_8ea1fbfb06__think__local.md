---
qid: ing_8ea1fbfb06__think__local
question: 'Explain: Back-of-the-Envelope Estimation — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 529
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:29:21-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - The question wants a *back‑of‑the‑envelope* (BOE) estimate for building a Spotify‑style music streaming service.  
   - Assume: 100 M active users, 10 K songs per user on average, 30 min daily listening, 5 % peak concurrency.  
   - Focus on high‑level metrics: storage, bandwidth, compute, cost.

**2️⃣ Adopt a simple BOE framework**  
   - Break the system into core subsystems: catalog (metadata), media store, CDN, user service, analytics.  
   - For each, estimate *size* × *rate* → *cost*.  
   - Use “rule‑of‑thumb” numbers: 1 GB ≈ $0.02/month on S3, 1 Gbps ≈ $0.10/hour for CDN, etc.

**3️⃣ Reason step‑by‑step**  
   - **Catalog**: 100 M users × 10 K songs = 1 T song records. At 200 bytes each → ~200 GB.  
   - **Media store**: 1 T songs × 4 MB (average MP3) ≈ 4 PB.  
   - **Bandwidth**: 100 M users × 30 min/day × 1 Mbps ≈ 500 Gbps peak → ~10 Tbps sustained.  
   - **Compute**: CDN edge nodes, transcoding batch jobs, analytics cluster; rough compute cost ~$200k/month.  
   - Sum up to get a ballpark $5–10M/year.

**4️⃣ Watch out for common pitfalls**  
   - Forgeting peak vs average traffic.  
   - Underestimating storage for backups & replicas.  
   - Ignoring costs of transcoding, DRM, and user‑specific features (playlists, recommendations).  

**5️⃣ Sanity‑check & verbalize**  
   - Compare with known public figures: Spotify’s 200 GB catalog in 2016 was ~$0.04/GB → ~$8k/month for metadata alone.  
   - Verify bandwidth against CDN pricing tiers; adjust if >10× the estimate.  
   - Present the final numbers as a rough “order‑of‑magnitude” figure, emphasizing assumptions and highlighting where deeper analysis is needed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
