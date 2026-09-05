---
qid: ing_3dbf6afd2a__fp__local
question: A customer insists on fine-tuning an open model on their support tickets
  because "we want our own model." You think RAG over their knowledge base solves
  it. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 359
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:15:40-05:00'
sources: []
---

**Why fine‑tune is a red flag and why Retrieval‑Augmented Generation (RAG) wins**

The customer’s tickets form a *dynamic, highly contextual knowledge base*—not a static corpus that can be frozen for training. Fine‑tuning on this data risks **overfitting to noise**: the model learns idiosyncratic phrasing and internal jargon while forgetting general language patterns. Moreover, every new ticket would force another costly re‑training cycle; the marginal gain in accuracy is bounded by the *law of diminishing returns*—each added example adds less predictive power than the previous one.

RAG sidesteps these issues by keeping a **high‑capacity pre‑trained backbone** (which captures general language) and coupling it with an **efficient retrieval module** that fetches the most relevant tickets at inference time. This architecture is rooted in *information theory*: the backbone supplies the prior, while the retriever injects the *posterior* evidence specific to the user’s domain. The system scales linearly with knowledge growth—new tickets are simply indexed, no re‑training required.

**Non‑obvious insight:** A fine‑tuned model will inevitably *mis‑generalize* on unseen but similar queries because it has internalized spurious correlations present only in the training set. RAG preserves the model’s ability to “think” broadly and only consults domain data when statistically justified, yielding both robustness and explainability. Therefore, recommend a hybrid RAG pipeline: keep the pre‑trained engine unchanged, augment with a vector index of tickets, and let the system learn which pieces of knowledge to pull for each question.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
