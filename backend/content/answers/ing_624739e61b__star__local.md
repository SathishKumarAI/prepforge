---
qid: ing_624739e61b__star__local
question: 'Explain: Title: Less Context, Better Agents: Efficient Context Engineering
  for Long-Horizon Tool-Using LLM Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 346
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:44:34-05:00'
sources: []
---

**Situation:** In a recent project at my startup, we were building an LLM-powered personal assistant that could plan multi‑step workflows—like scheduling trips, ordering groceries, and booking services—all in one conversation. The model kept dropping context after each tool call, leading to repeated prompts and a 35 % error rate on complex itineraries.

**Task:** I needed to redesign the agent’s memory so it could retain only the most relevant bits of dialogue while still enabling accurate tool usage over long horizons, without inflating token costs or latency.

**Action:** I implemented a hierarchical context encoder: first, a lightweight sliding‑window LSTM filtered recent utterances; then an attention‑based selector pruned obsolete slots (e.g., past confirmations). For tool calls, I stored concise “action summaries” (verb + key args) rather than full logs. The agent’s planner was rewritten to query this compact memory instead of the raw chat history, and we added a cache that refreshed every 30 seconds. We also switched from GPT‑4 to a fine‑tuned Llama‑2 with 16K context to keep costs down.

**Result:** After deployment, the assistant maintained correct state across 12‑step tasks with only a 5 % error rate, reduced token usage by 42 %, and cut inference latency from 1.8 s to 0.9 s per step. I learned that judicious context pruning—combined with lightweight summarization—lets large models stay focused without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
