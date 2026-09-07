---
qid: ing_f62d9fa2aa__faang__local
question: 'Explain: RAG, Agents and Context Engineering — Ml Interview Prep'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 553
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:12:28-05:00'
sources: []
---

## Clarify  
You’re asking for a concise overview of **Retrieval‑Augmented Generation (RAG)**, **Agentic models**, and **Context Engineering**—the three pillars often cited when preparing for ML interviews at FAANG companies.

## Approach  
1. Define each concept.  
2. Explain how they interlock in modern NLP pipelines.  
3. Highlight key trade‑offs and evaluation metrics.  

## Depth  
| Concept | What it is | Typical use‑case | Core tech | Trade‑offs |
|---------|------------|------------------|-----------|------------|
| **RAG** | Combines a retrieval module (vector DB or BM25) with a generative LM, feeding retrieved passages as extra input. | Knowledge‑intensive Q&A, legal drafting. | Embedding encoder + dense retriever + fine‑tuned GPT‑style decoder. | Retrieval latency vs. hallucination risk; index freshness. |
| **Agentic Models** | LLMs that autonomously orchestrate sub‑tasks (API calls, planning) via a policy network or RL‑HF. | Complex workflows: booking travel, debugging code. | Prompt‑based control + environment interface + reinforcement learning. | Sample inefficiency; interpretability of internal decisions. |
| **Context Engineering** | Crafting the prompt/context window to maximize relevance and reduce hallucinations (chunking, summarization, instruction tuning). | All LLM inference. | Sliding windows, hierarchical prompts, retrieval‑based context. | Memory limits; balancing specificity vs. generality. |

These components often form a stack: **Agent → RAG** for knowledge fetching, wrapped in a **Context Engine** to keep the prompt within token budgets.

## Edge Cases  
- Retrieval returns noisy or contradictory docs → hallucination amplification.  
- Agent policy overfits to training environment; fails on unseen APIs.  
- Context window truncation drops critical cues → loss of coherence.

## Optimize & Communicate  
1. **Index update strategy** (incremental embeddings) to reduce stale knowledge.  
2. **RL‑HF with safety constraints** to curb harmful agent actions.  
3. **Dynamic context sizing** (adaptive token budgets) for edge devices.  

When explaining, emphasize the *“why”* behind each trade‑off and how you’d validate performance: BLEU/ROUGE for RAG output, success rate + latency for agents, perplexity & hallucination metrics for context engineering. This narrative showcases structured thinking, technical depth, and practical awareness—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
