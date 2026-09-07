---
qid: ing_0d2f41cb7a__faang__local
question: 'Explain: Cody — Cody - Sourcegraph docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 479
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:14:42-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *Cody*, the AI‑powered coding assistant built into Sourcegraph. Assume the audience knows basic Git tooling but not Cody’s internals or use cases.

**Approach**  
1. Define what Cody is and its primary value proposition.  
2. Explain how it integrates with Sourcegraph (browser, IDEs).  
3. Outline the underlying tech stack—LLM fine‑tuning, indexing, context window.  
4. Highlight key features (code completion, search, refactor suggestions).  
5. Touch on privacy/security guarantees.

**Depth**  
Cody is a conversational code assistant that runs inside Sourcegraph’s web UI or via extensions in VS Code, JetBrains, etc. It leverages a fine‑tuned LLM (e.g., OpenAI GPT‑4o) that ingests the entire repository graph—ASTs, documentation, commit history—to provide contextually aware completions and explanations. When you type a prompt, Cody queries Sourcegraph’s search engine to retrieve relevant snippets, then feeds them into the model with a short “context window” (≈ 8 k tokens). The response is streamed back as code blocks or inline suggestions, allowing real‑time feedback. Privacy is preserved because all data stays within your organization’s deployment; no source code leaves the premises unless you opt‑in to a public API.

**Edge Cases**  
- **Large repos**: indexing time spikes; mitigated by incremental syncs.  
- **Ambiguous prompts**: Cody may hallucinate; we provide “confidence” tags and allow user overrides.  
- **Non‑text files**: binary blobs are ignored, but docstrings still surface.

**Optimize & Communicate**  
Future work could shard the index for sub‑second lookups or incorporate reinforcement learning from developer feedback loops. When presenting this to interviewers, I’d emphasize how Cody reduces cognitive load by surfacing relevant code patterns and how its architecture cleanly separates search, model inference, and UI, enabling scalable deployments—key traits that FAANG teams value in AI tooling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
