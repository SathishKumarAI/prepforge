---
qid: ing_1d0c6261c9__fp__local
question: 'Explain: Getting started — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 471
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:08:02-05:00'
sources: []
---

## Why “Cody” matters for ML developers

When you write a model, the real bottleneck is **knowledge discovery**: finding the right API call, debugging a shape mismatch, or understanding a new library’s syntax. Cody—Sourcegraph’s AI pair‑programmer—is built around *information retrieval + language modeling*. It treats your codebase as a massive knowledge graph and answers queries by retrieving relevant snippets before generating completions. This two‑step pipeline guarantees that the suggestions are **contextually grounded** rather than purely hallucinated, which is crucial for safety in production ML pipelines.

## How to start

1. **Install the Cody extension**  
   ```bash
   # VS Code
   code --install-extension sourcegraph.cody-ai
   ```
2. **Authenticate** – Link your Sourcegraph account (or use a personal token).  
3. **Open a repository** – Cody automatically indexes your current repo and its dependencies.  
4. **Ask a question** – In any editor window, type `// @cody` followed by your query, e.g.  
   ```python
   # @cody
   how do I normalize a PyTorch tensor to unit L2 norm?
   ```
5. **Read the response** – Cody will surface the most relevant code block and a short explanation.  
6. **Iterate** – Refine your prompt or ask follow‑ups; Cody keeps track of context, so you can drill down into performance tips or best‑practice patterns.

## One non‑obvious insight

Cody’s *retrieval first* strategy means it can surface **deprecated API usage** before suggesting a fix. If you’re on an older version of TensorFlow, the retrieved snippet will highlight that `tf.layers` is deprecated and suggest `tf.keras.layers`. This pre‑emptive warning saves debugging time that would otherwise arise from runtime errors—a subtle advantage that most developers overlook until they hit production.

---

By grounding AI suggestions in your actual codebase, Cody turns a generic LLM into a *context‑aware collaborator*, dramatically accelerating ML development while keeping you in control of the final output.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
