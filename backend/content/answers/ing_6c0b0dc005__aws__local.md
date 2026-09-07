---
qid: ing_6c0b0dc005__aws__local
question: Design a human review queue for a production LLM feature. What gets reviewed,
  and how much?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 508
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:28:14-05:00'
sources: []
---

**Customer Obsession + Ownership**

> *“We obsess over the customer’s experience and take full ownership of every step that impacts it.”*

### Situation
I led a team that rolled out an LLM‑powered recommendation engine for our e‑commerce platform. Early A/B tests showed a 12 % drop in click‑through rate (CTR) on pages where the model suggested products, indicating potential hallucinations or irrelevant content.

### Task
Design a **human review queue** to triage generated recommendations before they reach users, ensuring quality while keeping latency low.

### Action
1. **What gets reviewed**
   * **Top 10% of predictions by confidence score** (to catch edge cases).
   * Any recommendation containing **personal data or policy‑sensitive terms** flagged by the LLM’s internal classifier.
   * Random 0.5 % sampling from all outputs for continuous drift monitoring.

2. **How much**
   * Queue size capped at **200 items per hour** (≈1 item/second) to match SLA of 150 ms inference + 100 ms review time.

3. **Human workflow**
   * Two‑tier reviewers: *Tier‑1* verifies relevance; *Tier‑2* handles policy checks.
   * Use an internal web UI built on **AWS Amplify** with DynamoDB for state and SQS for task distribution.

4. **Automation & scaling**
   * Trigger reviews via **EventBridge** events from the inference Lambda.
   * Scale reviewers horizontally using **Fargate Spot** tasks; auto‑scale based on queue depth.
   * Cost ≈ $0.04/hr per reviewer (Spot) → <$10/day for 5 reviewers.

### Result
Within two weeks:
* CTR recovered to +3 % over baseline.
* Review latency stayed below SLA, with 99.7 % of items processed within 200 ms.
* Cost grew by only **$2/day** compared to the $15/day baseline for full manual review.

### Learnings
* **Dive Deep**: Continuous monitoring revealed that confidence alone wasn’t a perfect proxy; adding policy flags reduced false positives by 40 %.
* Bar‑raiser focus: I demonstrated ownership (end‑to‑end pipeline), depth (metric‑driven thresholds), and quantified impact (CTR +3 %) while iterating on the review criteria.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
