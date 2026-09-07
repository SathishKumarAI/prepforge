---
qid: ing_7316546646__faang__local
question: 'Explain: Availability in numbers — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 633
total_tokens: 903
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:11:30-05:00'
sources: []
---

**1️⃣ Clarify**

The interviewer wants a concise explanation of how “availability” is measured in large‑scale systems (e.g., GitHub) and what the key numbers mean.  
Assumptions to confirm:  
- We’re talking about *service availability* (percentage of time users can access the service).  
- The metric should be expressed as a percentage or “nines.”  

**2️⃣ Approach**

1. Define the core formula.  
2. Show how it translates into “4 nines” vs. “99 %”.  
3. Explain MTBF and MTTR, and why they matter.  
4. Give a quick example with GitHub‑style numbers.

**3️⃣ Depth**

- **Availability** \(A\) = \(\frac{\text{Uptime}}{\text{Uptime} + \text{Downtime}}\).  
  - Expressed as a percentage: \(A_{\%}=A\times100\%\).  
  - “nines” notation: e.g., 99.999 % ≈ **five nines** = ~5 minutes downtime per year.

- **Mean Time Between Failures (MTBF)** – average time the system runs before a failure.  
- **Mean Time To Repair (MTTR)** – average time to recover after a failure.

Relationship: \(A \approx 1 - \frac{MTTR}{MTBF}\) (for small downtime).  

**Example (GitHub‑style)**  
Suppose GitHub’s MTBF = 10 000 h, MTTR = 0.5 h.  
\(A ≈ 1 - \frac{0.5}{10\,000} = 0.99995\) → **99.995 %** (≈ 4 nines), ~3 minutes downtime per year.

**4️⃣ Edge Cases**

- *Burst failures*: MTTR may be longer than the average, skewing availability downward.  
- *Partial outages*: If only a subset of users is affected, overall uptime may still be high but perceived availability drops.  
- *Time‑varying MTBF*: During traffic spikes, MTBF can shrink; need to monitor real‑time metrics.

**5️⃣ Optimize & Communicate**

- **Improve MTTR**: automated rollback, health checks, and self‑healing services reduce downtime dramatically.  
- **Redundancy**: geo‑replication increases MTBF by isolating failures.  
- **Communication**: explain to stakeholders that “99.999 %” sounds perfect but actually allows ~5 minutes of downtime per year; align expectations with business impact.

By framing availability in terms of uptime, MTBF/MTTR, and nines, you give interviewers a clear, quantitative view of reliability—exactly what FAANG leaders look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
