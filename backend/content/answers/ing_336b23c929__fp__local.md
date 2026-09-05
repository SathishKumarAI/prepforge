---
qid: ing_336b23c929__fp__local
question: A Copilot chat feature has a p95 latency budget of 3 seconds to first useful
  content. Where does the time go, and how do you cut it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 533
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:54:20-05:00'
sources: []
---

**Where the 3 s budget hides**

| Stage | Typical cost | Why it matters |
|-------|--------------|----------------|
| **Client‑side bootstrap** (JS load + WebSocket handshaking) | 0.4 s | Early‑bird latency; any delay stalls the whole pipeline. |
| **Transport & TLS handshake** | 0.3 s | RTT dominates on mobile or congested links; it's fixed per request. |
| **Model inference** (GPU/TPU forward pass + beam search) | 1.2 s | The *core* of Copilot; scales with prompt size and beam width. |
| **Post‑processing & formatting** (token‑to‑text, syntax highlighting) | 0.3 s | Still non‑negligible if done on the server. |
| **Server‑side routing & auth** | 0.2 s | Small but additive; can be parallelised. |
| **Client rendering** (first paint of “…” spinner + first line) | 0.5 s | Perceived latency; users expect something instantly. |

**How to shave the budget**

1. **Pre‑warm inference** – keep a small pool of warmed‑up GPU kernels so the first token is almost instant.
2. **Progressive decoding** – stream the first few tokens (or even a single “placeholder” line) while the rest loads; this turns *latency* into *asynchronous progress*.
3. **Adaptive beam width** – start with a narrow beam for the first 20 tokens, widen only if confidence drops; reduces compute by ~30 %.
4. **Edge‑side tokenisation** – move BPE to the client so the server skips that micro‑step (~0.05 s).
5. **Transport multiplexing** – batch multiple user requests over a single WebSocket to amortise handshake costs.

**Non‑obvious insight**

Latency is *not* purely about faster hardware; it’s fundamentally an *information bottleneck*. The first useful content contains the most “value per byte” for the user. By designing the system to **maximise information throughput in the earliest tokens**—through adaptive beam width and progressive decoding—you reduce perceived latency more than by simply cutting compute time. This principle turns a hard 3 s budget into a *user‑centric* service that feels instant even when the underlying compute remains unchanged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
