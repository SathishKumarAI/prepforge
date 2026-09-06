---
qid: ing_e6c1c5b104__fp__local
question: 'Explain: Your PM wants AI-powered summarization in the app. Walk me through
  the on-device vs cloud decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 575
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:09:33-05:00'
sources: []
---

### On‑device vs. Cloud for AI Summarization  
**Problem space** – The app must compress long text into a short, coherent synopsis in real time while preserving user intent and privacy.

| Factor | On‑device (edge) | Cloud |
|--------|------------------|-------|
| **Latency** | Deterministic, sub‑100 ms, no network jitter. | Variable; round‑trip can hit 200–500 ms, plus queuing. |
| **Privacy / Trust** | All data stays local; zero egress risk. | Data leaves device; subject to regulatory and user‑trust constraints. |
| **Model size & compute** | Requires a *compact* transformer (≈10 M params) or distilled RNN; GPU/Neural Engine usage is bounded by battery life. | Can deploy large GPT‑style models (hundreds of MBs); cloud GPUs handle peak load. |
| **Consistency / Availability** | Works offline; unaffected by connectivity drops. | Dependent on network; outages break service. |
| **Update cadence** | Updates via OTA; user must install a new app version. | Continuous model updates without user action. |

#### Decision logic (derived from optimization principles)

1. **Define the utility function**  
   \(U = \alpha\cdot \text{accuracy} + \beta\cdot \text{latency penalty} - \gamma\cdot \text{privacy cost}\).  
   The weights \(\alpha,\beta,\gamma\) are set by product metrics (engagement, churn).

2. **Compute expected utility** for each deployment mode:  
   *Edge*: \(U_{\text{edge}} = \alpha a_e - \beta l_e - \gamma 0\).  
   *Cloud*: \(U_{\text{cloud}} = \alpha a_c - \beta (l_c + \delta_{\text{network}}) - \gamma p\).

3. **Choose the mode with higher \(U\)**.  

#### Non‑obvious insight  
Because *accuracy* improves super‑linearly with model size, the marginal gain from moving to cloud is often offset by the *privacy cost* (\(\gamma p\)). In practice, a well‑distilled 10 M‑parameter transformer can achieve >85 % of full‑size accuracy while keeping \(U_{\text{edge}}\) above \(U_{\text{cloud}}\), especially when users are sensitive to data leakage. Thus, the principled choice is often edge, unless the product explicitly monetizes premium summarization features that justify a higher privacy risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
