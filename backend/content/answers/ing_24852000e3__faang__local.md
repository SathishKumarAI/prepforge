---
qid: ing_24852000e3__faang__local
question: 'Explain: Dynamic Discovery (Tool Search) — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 452
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:09:18-05:00'
sources: []
---

**Dynamic Discovery (Tool Search)**  
*Building Tool Agents*

| Section | Content |
|---------|---------|
| **Clarify** | *Problem*: Given a user’s natural‑language request, automatically identify the most suitable external tool/API to fulfill it, instantiate an agent that calls that tool, and handle its response. <br>*Assumptions*: 1) A catalog of tools with metadata (name, purpose, auth, rate limits). 2) An LLM capable of parsing intent. 3) Execution environment can invoke HTTP/SDK calls safely. |
| **Approach** | 1️⃣ **Intent extraction** – LLM parses query → action verb + target domain.<br>2️⃣ **Tool ranking** – match intent to tool metadata via semantic similarity (embedding‑based retrieval).<br>3️⃣ **Selection & instantiation** – pick top‑k, verify auth & quota, build a lightweight agent wrapper.<br>4️⃣ **Execution & post‑processing** – call the tool, parse JSON response, feed back into LLM for final answer. |
| **Depth** | *Ranking*: cosine similarity between intent embedding and precomputed tool embeddings; threshold 0.75 ensures relevance. <br>*Agent wrapper*: encapsulates auth headers, retry logic (exponential backoff), rate‑limit tracking. <br>*Complexity*: O(n) over catalog for a single request; caching reduces to O(1). |
| **Edge Cases** | • No tool matches → fallback to LLM-only response.<br>• Tool failure or timeout → graceful degradation, log error, retry up to 3 times.<br>• Ambiguous intent → prompt user for clarification. |
| **Optimize & Communicate** | *Improvements*: cache frequent queries, use hierarchical indexing (first by domain, then by verb). <br>*Narration*: “We first understand the user’s goal, then efficiently map that to our tool ecosystem, ensuring reliability and privacy.” |

*Result*: A robust pipeline that dynamically discovers and orchestrates external tools, enabling AI agents to act beyond pure text generation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
