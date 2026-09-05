---
qid: ing_195bb3b7de__fp__local
question: 'Explain: Classify — LlamaIndex | AI Agents for Document OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 366
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:00:14-05:00'
sources: []
---

**Why we need two distinct tools**

The *fundamental problem* is to turn unstructured text in documents (PDFs, scanned images, etc.) into actionable knowledge that an agent can reason about and act on.  
- **LlamaIndex** solves the *representation* side: it builds a vector‑indexed graph of all tokens, paragraphs, and semantic entities, enabling fast retrieval, similarity search, and fine‑grained grounding for downstream models.  
- **AI agents for OCR + workflows** tackle the *execution* side: they orchestrate end‑to‑end pipelines—capturing images, running OCR, normalizing layouts, and feeding results into LlamaIndex or directly to a language model that decides next steps (e.g., “extract table 3”, “summarize invoice”).

The split is enforced by two deep principles:

1. **Information bottleneck** – The index must compress raw OCR output while preserving mutual information with the query space; agents, conversely, must preserve temporal causality and task dependencies.
2. **Modularity in optimization** – Training an end‑to‑end agent that also learns indexing would conflate two objectives (retrieval accuracy vs. policy efficiency), leading to a brittle system.

**Non‑obvious insight:**  
An index can be *dynamic* without retraining the entire model: by storing token embeddings as mutable vectors, agents can update only the affected nodes during a workflow run. This lazy re‑indexing keeps retrieval latency low while still allowing the agent to adapt to new documents on the fly—something most people overlook when they treat indexing and execution as static monoliths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
