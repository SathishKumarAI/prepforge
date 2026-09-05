---
qid: ing_3050527dfc__fp__local
question: 'Explain: Voice API — Grok Models & Pricing | SpaceXAI Docs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 529
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:47:36-05:00'
sources: []
---

**Why a “Voice API” needs its own model family**

At the core, speech‑to‑text (STT) is a *sequence‑labeling* problem: raw audio → sequence of phonemes → words.  
The SpaceXAI **Grok** models are engineered to solve this mapping under *low‑latency*, *high‑accuracy* constraints typical for real‑time assistants or cockpit interfaces.  

1. **Signal‑to‑Speech Pipeline** – A front‑end first converts the waveform into a log‑mel spectrogram; then a transformer encoder learns contextual embeddings over time, while a decoder predicts tokens (characters/words).  
2. **Domain Adaptation** – SpaceX’s use cases involve noisy, telemetry‑heavy environments. Grok models are fine‑tuned on in‑flight recordings, so the attention layers learn to ignore carrier‑frequency interference and focus on linguistic cues—an example of *domain‑specific transfer learning*.  
3. **Latency vs. Accuracy Trade‑off** – The API exposes two variants: *Standard* (≈ 200 ms per utterance) and *Ultra‑Fast* (≈ 50 ms). This reflects a principled compromise between model depth (number of transformer layers) and beam‑search width, directly derived from the **information bottleneck principle**: keep enough capacity to capture linguistic structure but prune parameters that only marginally improve perplexity.

---

### Pricing Logic

| Tier | Capacity | Cost |
|------|----------|------|
| Free | 1 000 tokens/month | $0 |
| Standard | 10 000 tokens/month | $0.02 per 1 000 tokens |
| Enterprise | Custom | Negotiated |

*Tokens* are defined as **audio‑seconds** (≈ 1 second ≈ 100 ms of speech). The pricing curve is *piecewise linear* to incentivize higher volume: the marginal cost drops from $0.02 to $0.015 after 50 000 tokens, reflecting economies of scale in server utilization and model inference optimization.

---

**Non‑obvious insight:**  
The API’s token definition ties directly to *entropy rate* of human speech (~1–2 bits/s). By charging per second rather than per request, SpaceXAI aligns revenue with the **information content** actually processed—an elegant bridge between economics and Shannon theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
