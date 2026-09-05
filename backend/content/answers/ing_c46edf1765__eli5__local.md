---
qid: ing_c46edf1765__eli5__local
question: 'Explain: Hawk — METR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 304
total_tokens: 458
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:47:17-05:00'
sources: []
---

**Hawk‑METR – the idea behind it**

Think of a hawk watching over a city’s traffic lights. The hawk sees cars (data points) arriving, and when one car passes a light, the hawk’s “attention” spikes—just as that event can influence what happens next. In machine learning, we use a *Hawkes process* to capture this self‑exciting behaviour: one event makes future events more likely.

The METR part is just a dataset of real traffic flows in Los Angeles (the **METR‑LA** data). It gives us the times and speeds of cars at many road sensors, exactly what we need for our hawk’s observation.

So, “Hawk‑METR” is a learning model that watches the METR‑LA traffic data with Hawkes‑style logic: each recorded vehicle speed can trigger an increased chance of a similar pattern soon after. It learns how traffic waves spread, just like a hawk predicting where a flock will move next.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
