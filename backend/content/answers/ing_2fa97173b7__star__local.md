---
qid: ing_2fa97173b7__star__local
question: 'Explain: Title: Hidden in Memory: Sleeper Memory Poisoning in LLM Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 352
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:51-05:00'
sources: []
---

**Situation**  
During a production rollout of our LLM‑driven customer support bot, we noticed intermittent hallucinations in user responses—phrases that referenced non‑existent policies or internal URLs. The incidents were sporadic and hard to reproduce, yet they risked damaging brand trust.

**Task**  
I had to identify the root cause, isolate the fault in the agent’s memory layer, and implement a robust fix without interrupting live traffic.

**Action**  
First, I enabled fine‑grained logging of the vector store that holds context embeddings. By correlating timestamps with hallucination spikes, I discovered that certain user sessions were being batched into the same cache slot due to an off‑by‑one error in the LRU eviction policy. The stale embeddings persisted for up to 12 hours—effectively “poisoning” new queries. I rewrote the eviction logic using a time‑based TTL and added a checksum validation step on each load from disk. To prevent future regressions, I introduced an automated unit test that injects synthetic stale entries and verifies they’re purged within two minutes.

**Result**  
After deployment, hallucination incidents dropped from 4 % of interactions to <0.1 %. The bot’s overall accuracy improved by 3.2 points on our internal NLU benchmark, and we reduced customer support tickets related to misinformation by 57 %. I learned that subtle memory management bugs can have outsized effects in LLM agents, so rigorous cache validation and time‑based eviction are essential safeguards.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
