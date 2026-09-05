---
qid: ing_2db5fde30c__star__local
question: 'Q51: Your agent takes 47 LLM calls to complete a task that should take
  5. How do you debug this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 332
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:59:44-05:00'
sources: []
---

**Situation:**  
In a recent chatbot deployment for an e‑commerce support bot, the intent classification pipeline was hitting a bottleneck: each user query required 47 calls to our LLM backend instead of the expected ~5, pushing latency from under 500 ms to nearly 4 s and inflating costs by 8×.

**Task:**  
I had to pinpoint why the agent was over‑talking with the LLM, reduce calls to ≤6 per request, and keep accuracy above 92%.

**Action:**  
First, I instrumented the call graph in OpenTelemetry, capturing prompt size, token usage, and response latency for every LLM invocation. The telemetry revealed that the “fallback chain” was repeatedly triggered because a custom schema validator failed on malformed JSON from earlier prompts. I refactored the validator to use `pydantic` with strict parsing, added a retry limiter, and introduced a lightweight in‑memory cache (`aiocache`) for repeated prompt templates. Then I rewrote the orchestration logic: instead of a linear chain, I switched to a decision tree that first checks confidence thresholds locally using embeddings (FAISS) before making any LLM call.

**Result:**  
The number of LLM calls dropped from 47 to 4 on average, cutting latency to 320 ms and reducing cost per request by 85%. The accuracy remained at 93%, and I documented the debugging workflow for future teams. This exercise taught me that systematic telemetry + targeted schema validation can eliminate unnecessary LLM chatter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
