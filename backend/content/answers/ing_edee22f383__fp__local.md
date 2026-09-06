---
qid: ing_edee22f383__fp__local
question: Walk me through continuous batching in an LLM inference server. Why does
  it beat static batching?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 469
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:25:15-05:00'
sources: []
---

### From the fundamental trade‑off

An LLM inference server receives a stream of user queries that arrive at random times.  
Each query must be forwarded to the GPU (or TPU) for a matrix‑multiply pass, and the
response is returned as soon as possible.  The **objective** is twofold:

1. **Minimise latency** – each individual request should finish quickly.  
2. **Maximise throughput** – the aggregate number of tokens processed per second.

If we form *static batches* (e.g., “every 32 requests, run a single forward pass”), we
satisfy (2) only when the queue is full; otherwise we idle the accelerator and incur
high latency for the few requests that arrive early.  
Conversely, if we process each request independently we achieve low latency but waste
GPU resources because the kernel launch overhead dominates.

### Continuous batching

Continuous batching treats the stream of requests as a *continuous flow*:

1. **Dynamic accumulation** – incoming tokens are appended to an in‑flight buffer until
   either (a) a time threshold is hit or (b) the GPU’s memory budget is reached.
2. **Kernel reuse** – the same forward‑pass kernel processes all buffered tokens in one
   launch, amortising launch cost across many tokens.
3. **Fine‑grained scheduling** – once the batch is executed, results are routed back to
   their originating request without waiting for a fixed-size window.

This approach preserves the GPU’s high utilisation while guaranteeing that no request
waits longer than the chosen time threshold, thus delivering lower tail latency and higher
throughput simultaneously.

### Non‑obvious insight

The key benefit comes from **temporal locality of reference** in the transformer’s
attention matrices. When requests are interleaved continuously, many tokens share the
same positional encodings and past context slices; continuous batching can exploit this
by reusing cached intermediate activations across adjacent requests, a phenomenon that
static batching misses because it forces artificial boundaries between unrelated queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
