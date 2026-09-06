---
qid: ing_ba21a01b62__think__local
question: What is the difference between pull and push CDNs?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 393
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:13:49-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Assume “CDN” means a Content Delivery Network that serves web assets (images, JS/CSS).  
- “Pull” vs. “Push” refers to how the origin‑server’s content is replicated or delivered.

**2️⃣ Mental model / framework**  
- Treat the CDN as a two‑step system: **Origin** → **Cache nodes** → **End user**.  
- The key variable is *when* the cache node obtains data from the origin.

**3️⃣ Step‑by‑step reasoning**  

| Pull CDN | Push CDN |
|----------|----------|
| Cache node requests (pulls) content on first client request; stores it for future hits. | Origin proactively pushes / pre‑loads content to all or selected edge nodes before any user request. |
| On cache miss, origin is hit, response sent back through CDN, then cached. | No initial origin hit needed; content already present at edges. |
| Simpler setup—no need to orchestrate push jobs; good for dynamic or rarely‑accessed assets. | Requires build/automation pipeline; best when content changes infrequently but traffic is high (e.g., static site builds). |

**4️⃣ Common traps to avoid**  
- Confusing *push* with “push updates” (like WebSockets); it’s about initial distribution, not live streaming.  
- Assuming push always means “faster”; if content is rarely accessed, pull may be more efficient.

**5️⃣ Sanity‑check & verbalize**  
- Ask: “What happens when a user first requests an asset?” In pull the edge fetches; in push it already has it.  
- Communicate that the choice hinges on traffic patterns, update frequency, and operational complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
