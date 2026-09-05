---
qid: ing_e0214e61e7__star__local
question: 'Explain: Traffic — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 368
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:56:55-05:00'
sources: []
---

**Situation:**  
While leading a data‑science sprint for a ride‑hailing app, the product team needed a quick estimate of daily traffic load to validate the new surge‑pricing algorithm before committing to costly infrastructure upgrades.

**Task:**  
Build an “back‑of‑the‑envelope” model that could predict peak vehicle demand and network latency with minimal data and computation, so we could iterate on pricing logic in under two days.

**Action:**  
I gathered anonymized trip logs from the past month (≈ 2 M rides) and extracted key features: hour of day, weekday flag, weather code, and city‑wide event indicators. Using a lightweight Poisson regression in Python (scikit‑learn), I fit demand as a function of these variables, then projected the next week’s traffic by multiplying the mean hourly rate by the expected number of rides per vehicle. For latency, I leveraged a simple queuing theory approximation (M/M/1) with an estimated service time derived from historical dispatch times. I wrapped both models in a Jupyter notebook, added sanity checks for outliers, and visualized results with Altair.

**Result:**  
The model delivered daily peak traffic predictions within 10 % of the observed counts and identified a 30‑minute window where latency would exceed SLA by 20 %. With these numbers, the ops team approved a temporary server pool expansion that cut average wait time from 45 s to 32 s during surges. I learned how to balance statistical rigor with speed, and that even simple models can drive critical infrastructure decisions when resources are tight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
