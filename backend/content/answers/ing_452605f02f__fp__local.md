---
qid: ing_452605f02f__fp__local
question: 'Explain: Your agent needs to remember things across sessions. Would you
  use a vector store or rolling summarisation? Defend the choice.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 399
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:32:43-05:00'
sources: []
---

When an agent must retain knowledge over multiple interactions, the core requirement is *efficient retrieval under bounded memory*.  
From a **probabilistic inference** view, each user query can be seen as sampling from a distribution over the joint space of past states and current goals. The agent’s internal representation should therefore approximate the posterior \(P(\text{state}|\text{history})\) with minimal entropy loss.

A vector store preserves raw embeddings of every utterance; it keeps the full *information content* but incurs linear growth in storage and retrieval cost. Rolling summarisation, by contrast, applies a lossy compression step that aggressively reduces dimensionality, thereby lowering memory usage at the expense of discarding fine‑grained context.

The trade‑off is governed by **rate–distortion theory**: we must decide how much distortion (information loss) can be tolerated for a given rate (memory). If the agent’s decisions hinge on precise details—e.g., tracking evolving user preferences or legal compliance—then the *mutual information* between past utterances and future actions is high, demanding low distortion. In such cases, a vector store is justified despite its cost.

However, most conversational agents operate under *sparse relevance*: only a small subset of prior turns influences the next step. Rolling summarisation can capture this by applying an attention‑based encoder that selectively aggregates salient facts, thus achieving near‑optimal rate–distortion with far fewer parameters.

**Non‑obvious insight:** The optimal choice is not static; it should *adapt* to the evolving relevance profile. By monitoring the entropy of retrieved vectors during runtime, an agent can switch between dense vector retrieval and lightweight summarisation on the fly—essentially performing online rate–distortion control. This dynamic hybrid strategy often outperforms any fixed architecture while respecting memory limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
