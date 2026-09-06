---
qid: ing_7e354a951b__fp__local
question: 'Explain: Time to First Token (TTFT) — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 509
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:33:57-05:00'
sources: []
---

**Time to First Token (TTFT)**  
In a generative‑model inference pipeline, the *first token* is the first discrete output produced after the model receives an input prompt. The **time to first token (TTFT)** is the elapsed wall‑clock time from the instant the request enters the system until that first token appears at the client.

---

### Why TTFT matters

1. **Latency perception**  
   Users judge responsiveness by the moment they see *any* answer, not by the eventual length of the response. A long TTFT feels unresponsive even if the rest of the generation is fast.

2. **Interactive workflows**  
   In chat or code‑completion systems, subsequent user edits depend on an immediate partial result. Delays in TTFT cascade into higher‑level latencies.

3. **Resource accounting**  
   Cloud billing often counts per request; a short TTFT reduces billed time for the same output length.

---

### Derivation from first principles

Let \(T_{\text{prep}}\) be preprocessing (tokenization, embedding), \(T_{\text{model}}\) the GPU‑bound forward pass to compute logits, and \(T_{\text{post}}\) post‑processing. The pipeline’s TTFT is:

\[
\text{TTFT} = T_{\text{prep}} + T_{\text{model}}
\]

*Why only these terms?*  
Post‑processing occurs **after** the first token is known; it does not affect the initial latency. The forward pass must produce the probability distribution for the next token, which requires a full matrix multiplication of the last hidden state with the weight matrix \(W_{\text{out}}\). This operation scales linearly with model size \(N\) and sequence length \(L\), but is independent of how many tokens will follow.

---

### Non‑obvious insight

The bottleneck in TTFT is **not** GPU throughput alone; it is the *latency* of a single forward pass. Even a powerful accelerator can be throttled by kernel launch overhead or memory copy latency when the batch size is one (as in interactive inference). Therefore, optimizing TTFT requires architectural changes that reduce per‑token compute—e.g., **prompt caching** and **kernel fusion**—rather than merely increasing FLOPs throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
