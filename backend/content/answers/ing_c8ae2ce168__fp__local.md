---
qid: ing_c8ae2ce168__fp__local
question: 'Explain: Capacity planning: you''re told to expect 100 requests/sec at
  peak with ~2K input and ~300 output tokens per request. Walk me through estimating
  the GPU fleet.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 510
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:07:45-05:00'
sources: []
---

### From first principles

A request is a *computation* that must be finished before the next one arrives.  
If we model each GPU as a **pipeline** with throughput \(T_g\) (tokens s\(^{-1}\)), then to sustain an incoming rate of \(R=100\) requests/s, each producing on average

\[
N_{\text{in}} = 2\,000,\qquad N_{\text{out}} = 300
\]

tokens, we need total output capacity

\[
C_{\text{out}} = R \times (N_{\text{in}}+N_{\text{out}})
                \approx 100\times 2\,300 = 230\,000\;\text{tokens/s}.
\]

The GPU’s *token‑rate* is governed by its floating‑point throughput and the model’s FLOPs per token.  
If a single GPU delivers \(T_g=15{,}000\) tokens/s (typical for L4/RTX 4090 on a 6B‑parameter transformer), the number of GPUs required is

\[
G = \frac{C_{\text{out}}}{T_g}
  = \frac{230\,000}{15\,000}\approx 15.3,
\]

so we round up to **16 GPUs**.

#### Why this works
- **Linear scaling:** Tokens are processed independently once the model is loaded; latency per token is constant, so throughput scales linearly with GPU count.
- **Latency budget:** Each request must finish within \(1/R = 10\,\text{ms}\). The GPU’s per‑token processing time (≈ \(1/T_g\)) times tokens per request gives the *latency bound*. If this exceeds 10 ms, we need more GPUs or a faster card.

#### Non‑obvious insight
The **output tokens dominate** the capacity calculation because they are generated after the entire input has been consumed. Even if input size is large, the GPU can pipeline token generation; thus, the *total* number of tokens (input + output) determines the required throughput, not just the output alone. This often surprises practitioners who only consider output length when sizing fleets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
