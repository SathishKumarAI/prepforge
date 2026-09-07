---
qid: ing_15569d22cd__faang__local
question: What is context rot, and what compaction strategies do you use in long-running
  agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 540
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:32:43-05:00'
sources: []
---

**Clarify**  
You’re asking about *context rot*—the degradation of a dialogue agent’s internal state over time—and how to compact that context for long‑running sessions (e.g., customer support bots or personal assistants). I’ll assume we’re dealing with transformer‑based LLMs that keep recent turns in memory and can optionally summarize or prune older data.

**Approach**  
1. Detect when the token budget is near exhaustion.  
2. Decide which history slices are still relevant (recency, salience).  
3. Apply a compaction technique: *summarization*, *chunk‑merging*, or *latent encoding*.  
4. Replace old turns with the compacted representation while preserving essential intent.

**Depth**  

| Strategy | How it works | Complexity | Trade‑offs |
|----------|--------------|------------|-------------|
| **Summarization (extractive/abstractive)** | Run a lightweight summarizer over past turns, keep ~200–300 tokens. | O(n log n) for token count n; summarizer inference cost. | Loses fine‑grained detail but keeps overall intent. |
| **Chunk‑merging** | Merge adjacent turns into larger “super‑turns” (e.g., every 3 turns). | Linear in number of chunks. | May obscure turn boundaries; easier to rollback if needed. |
| **Latent encoding** | Encode each turn as a fixed‑size vector via an encoder network, store vectors. During inference, decode on demand or fuse with prompt. | O(n) for encoding; decoding cost at use. | Requires extra model, but allows very compact storage and flexible retrieval. |

In practice I combine *summarization* for the oldest context with *chunk‑merging* for medium‑age turns, and keep raw tokens for the last few exchanges.

**Edge Cases**  
- Rapid topic switches: summarizer may miss new intent → add a salience score based on keyword overlap.  
- Sensitive data: ensure summaries don’t leak private info; apply redaction before storing.  
- Model drift: periodically re‑evaluate summarization quality against ground truth dialogues.

**Optimize & Communicate**  
To improve, I’d experiment with *adaptive* budgets—dynamically increase tokens when the user asks for clarification. I’d also log compression ratios and error rates to validate that context rot is mitigated without hurting response quality. In an interview, I’d emphasize this iterative validation loop and how it aligns with production reliability metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
