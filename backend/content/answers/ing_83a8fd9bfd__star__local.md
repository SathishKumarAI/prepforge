---
qid: ing_83a8fd9bfd__star__local
question: Define SLOs for a customer support agent. Every span returns 200 and latency
  is fine. What do you actually alert on?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 419
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:56:43-05:00'
sources: []
---

**Situation** – In my last role I was tasked with improving the reliability of our AI‑powered chat support for a fintech app that handled $12 M in daily transactions. The system already guaranteed a 200 OK response every span and kept latency below 150 ms, yet we still had sporadic bursts of failed user sessions reported by the front‑end.

**Task** – I needed to define meaningful SLOs and set up alerts that would surface real problems before users noticed them, without flooding ops with noise from transient spikes.

**Action** – First, I mapped out the customer journey: request → model inference → response rendering. I defined an **SLO for successful user resolution rate** (≥ 99.5% of chat sessions ending with a ticket closure) and a **latency SLO** on the end‑to‑end time (≤ 200 ms 95th percentile). For alerts, I created three metrics:  
1. **Failure ratio per minute** – trigger if > 0.5% of requests return non‑200 status or timeout.  
2. **Latency outliers** – alert when the 99th percentile exceeds 300 ms for more than two consecutive minutes.  
3. **Model confidence drift** – monitor the average predicted confidence; a drop below 0.65 over ten requests signals potential data shift.

I used Prometheus with Grafana dashboards and set up PagerDuty escalation policies that differentiated between “minor latency spike” (auto‑escalate after 5 min) and “persistent failure ratio” (immediate alert).

**Result** – After deployment, we reduced user complaints by 35% and increased ticket closure rate to 99.8%. The alerting system cut false positives by 60%, letting the team focus on genuine incidents. I learned that SLOs must reflect real business outcomes, not just infrastructure metrics, and that a tiered alert strategy balances visibility with operational efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
