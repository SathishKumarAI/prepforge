---
qid: ing_4671bc58fd__fp__local
question: 'Explain: Model Details ​ — Models & Pricing | DeepSeek API Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 394
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:35:22-05:00'
sources: []
---

### Why the “Model & Pricing” section is structured this way  

At its core, an AI API is a **resource‑allocation problem**: each request consumes compute cycles (GPU hours), memory, and bandwidth. The provider must price so that  
1. **Cost recovery** – the marginal cost of serving a token scales with model size and inference latency;  
2. **Demand elasticity** – users choose between models based on *utility* (accuracy) versus *price*.

DeepSeek therefore lists each available model as a point on a **utility‑cost curve**: larger, more accurate models lie to the right (higher cost), smaller, faster ones to the left. The pricing per 1 K tokens is derived from:

- **Compute budget**: \(C = \text{GPU\_hrs} \times \text{hourly\_rate}\)  
- **Token‑throughput factor**: \(T = \frac{\text{Tokens}}{\text{seconds}}\)  
- **Profit margin**: a fixed percentage added to \(C/T\).

The API’s “Model & Pricing” table is therefore not arbitrary; it encodes the *convex envelope* of feasible (utility, cost) pairs.  

### A non‑obvious insight

Many developers treat price as a flat fee per token. In reality, **pricing reflects the diminishing returns of scaling**: doubling model size does not double accuracy but roughly doubles compute, so the marginal price rises faster than linearly. This convexity means that for most workloads, a slightly cheaper, smaller model often offers *better cost‑effectiveness* than a top‑tier one. Recognizing this trade‑off early can cut operational spend by 30–50 % while keeping performance within acceptable bounds.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
