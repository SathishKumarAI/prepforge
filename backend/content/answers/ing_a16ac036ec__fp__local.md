---
qid: ing_a16ac036ec__fp__local
question: 'Explain: Context retrieval and agentic search — Effective context engineering
  for AI agents \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 419
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:49:05-05:00'
sources: []
---

**Why we need *context retrieval* + *agentic search***  
An AI’s output is conditioned on the data it “sees” at inference time. If that data is a static prompt, the model can only use information encoded in its weights—an expensive, brittle training process. In real‑world tasks (e.g., legal research, coding assistance), relevant facts are scattered across documents or APIs. The fundamental problem is *information locality*: the model must locate, retrieve, and act on the right pieces of data without being re‑trained for each new query.

**Derivation from first principles**

1. **Information theory**: A model’s predictive entropy is reduced when it has access to the correct evidence \(E\). The optimal policy maximizes \(\mathbb{E}[H(Y|E)]\), where \(Y\) is the desired output.
2. **Decision‑theoretic search**: Treat retrieval as a sequential decision problem. Each query step yields an observation; the agent balances *exploration* (probing new sources) against *exploitation* (refining known evidence). The Bellman equation formalizes this trade‑off, leading to *agentic* policies that learn when to stop searching.
3. **Geometry of representation**: Retrieval embeddings align the query vector with document vectors in a high‑dimensional space. The agent then navigates this manifold by selecting neighbors that most reduce posterior uncertainty.

**Non‑obvious insight**  
The “search horizon” is not a fixed hyperparameter but an emergent property of the *value* the model assigns to future evidence. A well‑engineered retrieval system learns to prune irrelevant documents early, saving compute while preserving accuracy—an outcome that naïve prompt engineering can never achieve.

In short, context retrieval supplies the data, and agentic search supplies the algorithm to decide *how much* of that data is necessary for optimal performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
