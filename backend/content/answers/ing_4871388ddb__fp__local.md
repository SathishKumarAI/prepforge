---
qid: ing_4871388ddb__fp__local
question: 'Explain: Memory and Connectors — Semantic Kernel'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 353
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:39:23-05:00'
sources: []
---

**Why Semantic Kernel needs “Memory” and “Connectors”**

A language model is a *stateless* function: given an input prompt it returns the next token distribution, but it forgets everything that came before. Yet real‑world agents must *retain* facts (user preferences, past actions) and *interact* with external systems (databases, APIs).  
The **Memory** component supplies a persistent *knowledge base*—a collection of key–value pairs or structured documents—that can be queried during prompt generation. It solves the fundamental problem of *contextual continuity*: without it, each inference would start from scratch, violating the principle that downstream predictions should condition on all relevant prior evidence (Bayes’ rule).  

**Connectors** are the plumbing between the kernel and any external service. They expose a unified interface for I/O—REST, gRPC, SQL, file systems—so that the kernel can retrieve or update memory entries, call external APIs, or stream results. This addresses the *integration* problem: the model must be agnostic to where data lives but still have access to it when needed.  

A non‑obvious insight is that **Connectors are not just adapters; they act as an implicit policy layer**. By controlling which connectors a kernel instance can use, you effectively shape its inductive bias—restricting or expanding the hypothesis space of the agent’s reasoning process. Thus memory + connectors together turn a pure inference engine into a *closed‑loop* decision system that respects both internal persistence and external reality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
