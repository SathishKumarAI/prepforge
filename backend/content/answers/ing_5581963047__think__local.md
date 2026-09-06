---
qid: ing_5581963047__think__local
question: 'Explain: Latency budget (p95, the table interviewers want to see)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 614
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:38:32-05:00'
sources: []
---

**1. Clarify what’s being asked and state assumptions**  
   - *Clarification*: The interviewer wants a concise explanation of “latency budget” with emphasis on the **p95 (95th percentile)** metric, likely in the context of an API or micro‑service.  
   - *Assumptions*:  
     1. The audience has basic familiarity with latency and percentiles but may not know why p95 is chosen over mean or max.  
     2. We’re talking about real‑world production systems (e.g., web services, data pipelines).  

**2. Adopt a mental model that ties goals to constraints**  
   - Treat the **latency budget** as a *resource constraint* analogous to a CPU budget: it’s the maximum time you allow for a request so that overall system performance meets SLAs.  
   - Use the **percentile framework**: mean, median, 95th percentile (p95), and max; explain why p95 is a sweet spot—captures tail behavior without being overly pessimistic like max.

**3. Step‑by‑step reasoning to build the answer**  
   1. Define latency & its importance in user experience.  
   2. Explain percentiles, especially p95: “out of every 100 requests, 95 finish within this time.”  
   3. Show how to calculate a budget: pick an SLA target (e.g., 200 ms), then set the p95 budget slightly higher (say 250–300 ms) to allow for variability while still meeting the SLA on average.  
   4. Mention monitoring: collect per‑request latencies, compute rolling p95, alert when it exceeds the budget.  
   5. Tie back to design decisions: caching, circuit breaking, request prioritization.

**4. Common traps to avoid**  
   - Don’t conflate *average latency* with *p95*.  
   - Avoid picking a “hard” max; tail events can be rare but catastrophic.  
   - Forget that the budget is *dynamic*: it should evolve as traffic patterns change.  
   - Over‑emphasize numbers without explaining why p95 is a practical target.

**5. Sanity‑check & verbalise clearly**  
   - Re‑read the explanation to ensure each sentence transitions logically: definition → why percentile → how to set → monitoring → implications.  
   - Use an analogy (e.g., “think of p95 as a safety margin for 95% of users, giving you wiggle room for spikes”).  
   - End with a quick example or a one‑sentence takeaway that the interviewer can remember.

By following this structured thought process, you’ll deliver a clear, interview‑ready explanation of latency budgets and the significance of p95.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
