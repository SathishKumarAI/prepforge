---
qid: ing_ee6b4c3fbc__fp__local
question: 'Explain: 2.2 Storage Estimates — Design Spotify | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 523
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:26:02-05:00'
sources: []
---

### 2.2 Storage Estimates – Why the Numbers Matter

**Fundamental problem:**  
A music‑streaming service must persist every user’s playlist, listening history, and the audio files themselves while guaranteeing sub‑second access for millions of concurrent streams. The storage estimate is not a “guess” but a *resource allocation* problem: we need enough capacity to hold all data **plus** redundancy, caching, and future growth.

| Item | Size per unit | Quantity | Raw size |
|------|---------------|----------|----------|
| Audio file (average 3 min @ 320 kbps) | 7.2 MiB | 100 M tracks | 720 TiB |
| Metadata (artist, album, tags) | 1 kB | 100 M tracks | 100 GiB |
| User profile & playlists | 10 kB | 200 M users | 2 TB |
| Listening logs (≈30 min per user/day) | 0.5 MiB | 200 M × 365 | 36 PB |

**Derivation:**  
1. **Audio size** = bitrate × duration ÷ 8. 320 kbps × 180 s ≈ 7.2 MiB.  
2. Multiply by the expected catalog (100 M tracks).  
3. Add metadata (~1 kB each) to capture relationships.  
4. User‑level data is trivial compared to audio, but logs explode because every play adds ~0.5 MiB.  

**Why this structure works:**  
- **Horizontal partitioning** keeps per‑track files on object stores; metadata sits in a distributed NoSQL DB for fast joins.  
- **Write‑once, read‑many (WORM)** semantics let us use cheap archival storage for older logs, reducing cost while still satisfying analytics needs.  

**Non‑obvious insight:**  
*The bottleneck is not disk space but the **write amplification** caused by logging every stream.* By aggregating plays into daily micro‑batches before persisting (e.g., 1 min windows), we cut log size by ~10×, turning a 36 PB requirement into ~3.6 PB—enough for most infra budgets while preserving analytics fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
