---
qid: ing_5974c45142__fp__local
question: 'Explain: Compression and Downsampling — InfluxData'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 494
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:14:41-05:00'
sources: []
---

### Why Compression & Down‑Sampling Matter for Time‑Series

When a sensor emits data every millisecond, the raw stream grows at **O(t)** bytes per second. Queries rarely need that resolution; most dashboards ask “average temperature over the last hour.”  
Thus we face an *information bottleneck*: keep enough bits to answer typical queries while discarding useless detail.

#### Compression
InfluxDB uses **run‑length + delta** encoding for timestamps and **delta‑encoding with bit‑packing** for values.  
*Run‑length* exploits that time gaps between samples are usually constant (e.g., 1 s). We store the first timestamp, then a single “step” value, reducing each subsequent timestamp to *0 bits*.  
*Delta* encodes differences between successive measurements; if a sensor’s value changes slowly, many deltas are small and fit into fewer bits. This is a direct application of **information theory**: we transmit only the entropy that actually changes.

#### Down‑Sampling
Down‑sampling aggregates raw points into *chunks* (e.g., 1 min windows) using functions like min/max/mean. The key insight is that many queries are *linear or convex*, so the aggregated value preserves query answers within a bounded error:  
\[
\text{error} \leq \max_{\text{chunk}} |x_i - \bar{x}_{\text{chunk}}|
\]
Thus we can guarantee that any linear query over the original series is approximated by the down‑sampled series with a provable bound.

#### Non‑Obvious Insight
Most people think compression and down‑sampling are separate; in InfluxDB they intertwine. The *same delta‑encoded chunks* serve both as compressed storage **and** the basis for on‑the‑fly aggregation: when a query requests a 5‑min average, the database simply averages pre‑computed chunk statistics, avoiding recomputation of raw points.

In short, compression reduces entropy, down‑sampling reduces dimensionality, and together they turn an unwieldy stream into a query‑friendly summary while preserving mathematical guarantees.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
