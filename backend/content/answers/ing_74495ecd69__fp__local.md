---
qid: ing_74495ecd69__fp__local
question: 'Explain: Your LLM bill tripled this quarter. Design a cost-engineering
  programme - attribution, cascades, context management.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 559
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:12:17-05:00'
sources: []
---

**Why the bill surged**

The bill is essentially *tokens × price per token*. A tripling means either a spike in total tokens or an upgrade to a more expensive model. The former can happen when (i) prompt‑engineering leaks context, (ii) recursive calls or pipelines generate “cascading” prompts, and (iii) the system repeatedly re‑asks for clarification.

**Attribution – where do tokens go?**

1. **Prompt & System messages** – 20 % of usage often lies here; verbose instructions inflate length.
2. **User context** – every piece of user history added to the prompt adds a linear cost.
3. **Intermediate steps** – if the LLM calls itself or other services (e.g., retrieval, summarization) inside a single API call, those internal prompts double‑count tokens.

Create a *token‑budget ledger* that tags each token with its origin (prompt, context, cascade). This allows you to see which component drives the cost.

**Cascades – preventing runaway loops**

- **Depth limits**: cap recursive calls at two levels; beyond that, use a summariser or fallback.
- **Token caps per call**: enforce a hard ceiling on prompt length (e.g., 2 k tokens). Exceeding it triggers truncation or compression.

**Context management – keep only what matters**

1. **Sliding windows**: maintain a rolling buffer of the last *N* turns, discarding older turns automatically.
2. **Semantic summarisation**: before appending new context, compress the buffer with a lightweight model (e.g., T5‑small) to 200 tokens, preserving intent while dropping redundancy.
3. **Role‑based pruning**: user messages that are purely clarifying or administrative can be dropped from future prompts.

**Putting it together**

1. Instrument every API call with a *token‑audit* module that logs source and count.  
2. Run the audit nightly; any component exceeding its quota triggers an alert.  
3. Deploy the cascade guard as a middleware layer, ensuring depth and length limits are respected before forwarding to the LLM.

**Non‑obvious insight**

Most people treat context as “free” data, but *semantic density* is key: compressing context by 30 % can cut token usage by 50 % while preserving accuracy. The trick is to invest in a lightweight summariser that runs locally; its cost amortises across thousands of calls and dramatically reduces the per‑token price burden.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
