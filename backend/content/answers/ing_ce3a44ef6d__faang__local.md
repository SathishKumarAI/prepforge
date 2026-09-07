---
qid: ing_ce3a44ef6d__faang__local
question: Tell me about a time your eval metrics and real user feedback disagreed.
  Which did you trust?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 418
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:40:08-05:00'
sources: []
---

**Clarify**  
You’re asking for an instance where quantitative performance (A/B test / MSE) and qualitative user feedback diverged, and how I decided which signal to follow.

*Assumptions I’d confirm:*  
1. The metric was the primary KPI tied to business value.  
2. Feedback came from a representative sample of high‑engagement users.  
3. No data integrity issues (e.g., tracking bugs).

**Approach**  
1. Re‑examine both signals for bias or noise.  
2. Map each to downstream business outcomes (retention, revenue).  
3. Run an additional targeted test focused on the user segment that voiced concerns.

**Depth**  
In a recommendation engine revamp, the lift metric improved 12 % but early adopters reported “irrelevant content.” I audited the click‑through data and found it was inflated by bots from a single partner domain. After filtering, the lift dropped to 3 %. Concurrently, NPS for that cohort fell by 7 points. I prioritized the user feedback because:  
- The metric distortion threatened long‑term trust.  
- The product goal was *personal relevance*, not raw click volume.  
I then retrained the model with a stricter diversity penalty, which restored the lift to 5 % and lifted NPS back above baseline.

**Edge Cases**  
- Metrics could be noisy if traffic spikes temporarily.  
- Feedback may be unrepresentative if only vocal users are sampled.  
Test by simulating bot traffic and running a blind split test.

**Optimize & Communicate**  
I would document the audit process, present both metrics side‑by‑side, and recommend a hybrid KPI: *effective engagement* (clicks minus bot‑adjusted) + user‑rated relevance score. This signals to stakeholders that data integrity and real user sentiment are jointly valued.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
