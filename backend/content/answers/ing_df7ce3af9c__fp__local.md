---
qid: ing_df7ce3af9c__fp__local
question: What AI models and providers does Mastra support?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 648
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:55:06-05:00'
sources: []
---

### Why Mastra’s AI‑model portfolio looks the way it does

Mastra is built to *plug into any LLM ecosystem* that offers a **well‑defined API** (REST/JSON or gRPC) and exposes **token‑based pricing**.  
1. **Interoperability first** – A developer can swap models without rewriting inference code, so Mastra mirrors the OpenAI‑style endpoint (`/v1/chat/completions`).  
2. **Cost control** – By supporting providers that expose token usage (OpenAI, Anthropic, Google Gemini, Cohere, Mistral, Azure OpenAI, AWS Bedrock), Mastra can aggregate spend and enforce per‑project budgets.  
3. **Feature parity** – All listed models support the same core capabilities: chat, embeddings, fine‑tuning hooks, and streaming. This guarantees that a workflow built for one provider will run unchanged on another.

| Provider | Core Models (as of 2026) | Typical Use |
|----------|------------------------|-------------|
| **OpenAI** | GPT‑4o, GPT‑3.5‑turbo, GPT‑4o mini | General chat, code generation |
| **Anthropic** | Claude 3.5 Sonnet, Claude 3 Opus | Safety‑heavy reasoning, policy‑compliant content |
| **Google** | Gemini Pro, Gemini 1.5 Flash | Multimodal (image+text), high‑throughput inference |
| **Cohere** | Command R+, Command X | Retrieval‑augmented generation, summarization |
| **Mistral AI** | Mistral 7B, Mixtral 8x7B | Open‑source LLMs with low latency |
| **Azure OpenAI** | GPT‑4o via Azure | Enterprise‑grade SLAs, hybrid cloud |
| **AWS Bedrock** | Claude, Titan, Anthropic, Llama 2 | Managed multi‑provider orchestration |

#### One non‑obvious insight
> **The “token” is the unifying currency across all providers.**  
> Because every model exposes token counts for both prompts and completions, Mastra can *price* any request uniformly regardless of vendor. This means a single billing dashboard works even when you mix GPT‑4o and Gemini 1.5 Flash in one application—something most platforms treat as separate silos.

In short, Mastra supports the major, API‑standard LLMs from OpenAI, Anthropic, Google, Cohere, Mistral AI, Azure OpenAI, and AWS Bedrock to give developers a single, cost‑aware abstraction over the entire modern LLM landscape.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
