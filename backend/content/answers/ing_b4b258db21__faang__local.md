---
qid: ing_b4b258db21__faang__local
question: What is a Trace? — Ai Evals Comprehensive Study Guide
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 443
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:43:45-05:00'
sources: []
---

**Clarify**  
The interviewer asks: *“What is a trace in the context of AI evaluations?”*  
Assumptions: we’re dealing with model‑level debugging, not system logs; “trace” refers to the sequence of intermediate states/operations that an inference engine records while processing input.

---

**Approach**  
1. Define what a trace captures (activations, attention weights, token decisions).  
2. Explain why it’s useful: reproducibility, fault isolation, performance profiling.  
3. Mention common tooling (e.g., OpenAI’s `tracer`, Hugging Face’s `transformers` hooks).  
4. Briefly touch on privacy/security concerns.

---

**Depth**  
A *trace* is a structured log of every computational step a model performs during inference or training. For transformers, it includes token embeddings, layer‑wise hidden states, self‑attention matrices, and the final logits. Traces enable deterministic replay: given the same seed and inputs, you can re‑run the exact path to validate fixes or compare models. They also expose bottlenecks—e.g., a particular attention head that dominates memory usage. In practice, frameworks expose `Tracer` objects that record tensors with metadata (shape, dtype) and optionally gradients. The resulting trace is serialized (JSON/Protobuf) for downstream analysis.

---

**Edge Cases**  
- **Large models**: traces can become terabytes; sampling or pruning is required.  
- **Dynamic computation graphs**: conditional branches may produce variable-length traces.  
- **Privacy**: user data might leak if traced tokens are logged verbatim.

---

**Optimize & Communicate**  
To reduce overhead, enable *lazy tracing* (only record when a flag is set) and compress tensors (e.g., quantization). For communication, I’d illustrate with a diagram of a transformer layer, labeling trace points. Conclude by noting that traces are indispensable for debugging complex AI systems at scale, aligning with FAANG’s emphasis on reliability and observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
