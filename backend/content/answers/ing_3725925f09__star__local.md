---
qid: ing_3725925f09__star__local
question: 'Explain: 1 Introduction — MemoryGraft: Persistent Compromise of LLM Agents
  via Poisoned Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 312
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:18:33-05:00'
sources: []
---

**Situation**  
At a startup building an AI‑powered customer support bot, we noticed that the model’s responses slowly drifted toward inappropriate content after a few weeks of deployment. The issue only appeared when users interacted with the same set of “trusted” agents repeatedly.

**Task**  
I had to identify why the LLM was leaking sensitive patterns and devise a method to keep it safe while still learning from user interactions.

**Action**  
I introduced *MemoryGraft*, a technique that rewrites the experience replay buffer. Instead of feeding raw conversation logs back into training, I poisoned the retrieval step: every time the model fetched past examples, I replaced one or two key turns with synthetic “anchor” samples that carried harmless but misleading signals (e.g., rephrased user queries). By doing so in a controlled proportion—roughly 15% of all retrieved batches—I ensured the agent’s memory stayed anchored to safe behavior while still updating on genuine interactions. I also added a lightweight anomaly detector that flagged any sudden policy shifts before they hit production.

**Result**  
Within two weeks, the drift rate dropped from 12 % to below 1 %. User complaints fell by 35 %, and we maintained 99.8 % compliance with content policies. The exercise taught me how subtle manipulation of retrieval can protect LLM agents without sacrificing learning efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
