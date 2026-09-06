---
qid: ing_fbf222c081__fp__local
question: 'Explain: The latency budget is the design — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 440
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:55:22-05:00'
sources: []
---

**Latency budget in a realtime voice agent**

A voice agent must respond before the user’s perceptual “frozen” threshold—typically ~200 ms for speech.  
The *latency budget* is therefore the maximal end‑to‑end delay that still yields an acceptable experience.

Start with the fundamental problem: each user utterance \(U\) triggers a pipeline  
\(U \xrightarrow{\text{capture}}\;\xrightarrow{\text{pre‑process}}\;\xrightarrow{\text{inference}}\;\xrightarrow{\text{post‑process}}\;\xrightarrow{\text{synthesis}}\;S\).  
Let the total time be \(T = t_c + t_p + t_i + t_s\).  
Human cognitive load dictates that if \(T > T_{\max}\) (≈ 200 ms), the user perceives a lag, leading to frustration or abandonment.  

From queuing theory, each component behaves as a service station with mean service time \(\mu^{-1}\) and variance \(\sigma^2\). The overall *tail* of the latency distribution is dominated by the slowest station; thus the budget must be split proportionally to their variances:  
\(t_k = T_{\max} \times \frac{\sigma_k}{\sum_j\sigma_j}\).  

A non‑obvious insight: **the budget should not only limit mean latency but also cap variance**. A low‑variance, slightly longer path can feel more responsive than a fast yet highly jittery one because human perception is sensitive to outliers (“spikes”) rather than the average. Hence, design each module to meet both a hard maximum and a tight confidence interval (e.g., 95 % of runs < 150 ms). This dual constraint turns latency budgeting from a simple timing exercise into an optimization problem grounded in human‑centered probability theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
