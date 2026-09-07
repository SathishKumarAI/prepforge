---
qid: ing_9d505bcc3b__faang__local
question: 'Explain: You ship a policy to 300 robots. It works in the lab and degrades
  in the field. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 414
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:49:55-05:00'
sources: []
---

**Clarify**  
You’re deploying a policy (e.g., navigation or safety rule) to 300 autonomous robots. In controlled tests the behavior is correct, but once in the field performance drops: robots fail more often, latency spikes, or the policy triggers unsafe actions.  
Assumptions to verify:  
- Are all 300 robots identical in hardware/software?  
- What environmental differences exist between lab and field (signal loss, temperature, obstacles)?  
- Is there a central log collection mechanism?  

**Approach**  
1. Instrument the policy with telemetry (state, decision times, sensor readings).  
2. Aggregate logs from all units; segment by deployment batch.  
3. Reproduce failure scenarios in a scaled‑down field test while capturing metrics.  

**Depth**  
- **Statistical analysis** of error rates per robot to spot outliers.  
- **Hypothesis testing**: e.g., “Does GPS jitter correlate with policy failures?”  
- **Root cause isolation**: run the policy on a single robot in the lab but feed it field‑like sensor noise to see if errors surface.  
Complexity is O(N log N) for sorting logs, negligible; trade‑off between detailed telemetry (more overhead) vs quick diagnostics.

**Edge Cases**  
- Sensor drift or calibration differences across units.  
- Network latency causing policy updates to arrive late.  
- Unseen obstacles in the field that were absent during lab tests.  
Test by intentionally varying each factor and observing policy response.

**Optimize & Communicate**  
Once root causes are identified, apply fixes: e.g., add sensor fusion, throttle decision frequency, or introduce a fallback mode. Summarize findings to stakeholders with clear metrics (error rate reduction, latency improvement). Emphasize that systematic telemetry + statistical analysis turned an opaque “field degradation” into actionable insights—exactly the structured reasoning interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
