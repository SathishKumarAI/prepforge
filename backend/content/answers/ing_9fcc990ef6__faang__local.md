---
qid: ing_9fcc990ef6__faang__local
question: 'Q46: How do you manage context window limits with long conversations?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 426
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:55:34-05:00'
sources: []
---

**Clarify**  
We’re asked how to keep a conversation coherent when the model’s token limit (e.g., 8 K for GPT‑4) is exceeded. Assume we have an interactive chat where users send many turns and we must preserve context, privacy, and latency.

**Approach**  
1. **Summarize & truncate** – keep only the most recent N tokens or turns.  
2. **Hierarchical memory** – maintain a short “live” buffer plus a compressed long‑term summary.  
3. **Sliding window + relevance scoring** – slide over past turns, weight by relevance to current query.  
4. **External store** – persist user state in a database and inject only needed fields.

**Depth**  
- Use *dynamic truncation*: start with the last 2000 tokens; if still >8 K, replace older turns with their sentence‑level summary (e.g., via T5).  
- Maintain a **pointer cache**: store key entities and actions in a JSON blob; inject into prompt as “Context: {…}”.  
- Complexity: summarization is O(n) per turn; memory fetch O(1); overall latency ~50 ms.  
- Trade‑off: fidelity vs. brevity—summary may lose nuance, but keeps context within limits.

**Edge Cases**  
- Very long single utterances (e.g., user pastes a document). → chunk and summarize before appending.  
- Sensitive data leakage in summaries; ensure redaction rules.  
- Rapid back‑and‑forth turns that exceed 8 K even after summarization → fall back to “context too large” prompt.

**Optimize & Communicate**  
Iterate on the summary length empirically: start at 200 tokens, adjust based on perplexity metrics. Explain to interviewers that this balances token budget with conversational fidelity, and note that we can cache summaries across sessions for faster retrieval.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
