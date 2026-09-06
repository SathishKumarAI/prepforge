---
qid: ing_be85ddbbe3__think__local
question: 'Explain: Storage (Per Day) — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 589
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:32:28-05:00'
sources: []
---

**1. Clarify the ask and state assumptions**  
   - *What is “Storage (Per Day)”?* Assume it means how much data WhatsApp would need to store each day for all messages, media, and metadata.  
   - *Scope:* focus on text, images, videos, voice notes, status updates; ignore video calls or voice chats that don’t persist.  
   - *User base:* pick a realistic number (e.g., 2 billion active users).  
   - *Average usage patterns:* estimate per‑user daily message count and media ratio.

**2. Mental model / framework**  
   - Break the problem into *per‑message* storage: metadata, content, thumbnails, backups.  
   - Scale by *users × daily traffic*.  
   - Account for *redundancy* (replication, erasure coding) and *storage tiering* (hot vs cold).  
   - Consider *compression* and *deduplication* for media.

**3. Step‑by‑step reasoning**  
   1. **Estimate average message size:** e.g., 200 B text + 50 B metadata → ~250 B per text msg.  
   2. **Average daily messages per user:** say 50, giving 12.5 kB/day/user.  
   3. **Media share:** assume 10% of messages are media; average image 1 MB, video 5 MB. Compute weighted avg.  
   4. **Total per‑user daily storage:** sum text + media + thumbnails (e.g., 0.2×).  
   5. **Scale to user base:** multiply by 2 billion → total bytes/day.  
   6. **Add overheads:** replication factor (3×), metadata, logs, backups → inflate ~1.5–2×.  
   7. **Convert to familiar units** (TB, PB) and compare with known data center capacities.

**4. Common traps to avoid**  
   - Forgetting media proportion; over‑ or under‑estimating image/video sizes.  
   - Ignoring that many users never send media daily.  
   - Neglecting compression/encoding gains.  
   - Overlooking backup retention policies (e.g., 30 days) which multiply storage.

**5. Sanity check & verbalize**  
   - Cross‑check against industry benchmarks: e.g., WhatsApp reportedly stores ~2 PB of data; see if your calc lands near that.  
   - Explain each assumption clearly, show the math line by line, and highlight where uncertainty lies so interviewers know you’re thinking critically rather than guessing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
