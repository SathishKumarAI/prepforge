---
qid: ing_138f3b404d__faang__local
question: 'Explain: Dynamic Context Routing — Context Window Management for Long-Running
  Agents: Strategies and Tradeoffs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 451
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:28:55-05:00'
sources: []
---

**Dynamic Context Routing – Context Window Management for Long‑Running Agents**

| Step | What to do |
|------|------------|
| **Clarify** | *Problem:* LLM agents keep interacting over hours/days but the model’s token limit forces us to prune past context. We need a policy that keeps relevant information while staying within budget. <br>*Assumptions:* 1) Token budget is fixed (e.g., 4 k). 2) Agent logs are sequential and can be segmented. 3) Relevance scores can be computed from embeddings or heuristics. |
| **Approach** | 1️⃣ Encode each conversation segment into a compact vector.<br>2️⃣ Maintain an *active window* of recent segments (size `w`).<br>3️⃣ When adding a new segment, compute its relevance to the current query and to past segments. <br>4️⃣ Use a **priority queue** to keep top‑k segments that fit in the token budget; evict least relevant ones. |
| **Depth** | *Algorithm:* `for seg in stream: encode(seg); score = sim(query, seg)+α*sim(prev_seg,seg)`; push into heap; if total_tokens>limit → pop lowest. Complexity: O(n log k) per update, memory O(k). Trade‑offs: higher α favours coherence but may keep stale info; lower α keeps novelty but risks forgetting context. |
| **Edge Cases** | • Sudden topic shift → old segments become irrelevant.<br>• Highly repetitive dialogue → compression loss grows.<br>• Token budget tight → aggressive pruning leads to hallucination. Test by simulating long‑running dialogues with known ground truth. |
| **Optimize & Communicate** | *Improvements:* 1) Cache embeddings; 2) Use hierarchical pooling (sentence→paragraph). 3) Adaptive `α` based on detected drift. Explain that this balances recency, relevance, and token constraints—exactly the trade‑offs interviewers look for in a context‑routing design. |

*Word count: ~190*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
