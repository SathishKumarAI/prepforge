---
qid: q011
question: "At a high level, how does a large language model (LLM) generate text?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd explain it as next-token prediction. The model tokenizes the prompt, and a transformer uses self-attention across those tokens to predict a probability distribution over the next token. We sample one token from that distribution, append it, and repeat autoregressively until a stop condition. The model itself is a fixed set of weights trained on huge text corpora to minimize next-token prediction error; the "knowledge" lives in those weights.

To show **Dive Deep** I'd connect it to a generation feature I owned. Understanding that output is token-by-token sampling shaped two real decisions. First, latency scales with output length, so I capped max tokens and used streaming to cut perceived response time from 8 seconds to a sub-second first token. Second, because sampling is probabilistic, identical prompts vary, so I lowered temperature for deterministic tasks and added retries with validation.

The trade-off I'd name: larger models are more capable but cost more per token and add latency, so I picked model size per task tier. On AWS I'd serve this through Bedrock, streaming via Lambda and API Gateway.

A bar-raiser listens for whether I understand the autoregressive, probabilistic nature deeply enough to make correct engineering calls about latency, cost, and determinism, not just describe transformers abstractly.
