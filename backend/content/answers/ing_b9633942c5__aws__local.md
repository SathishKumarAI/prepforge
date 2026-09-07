---
qid: ing_b9633942c5__aws__local
question: 'Explain: Powers of Two — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 568
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:23:15-05:00'
sources: []
---

**Situation** – In a recent role I was tasked with designing an on‑demand recommendation engine that could handle **10 M daily user events** and produce predictions in under 200 ms. The team had to decide how many GPU‑enabled instances were needed without over‑provisioning.

**Task** – Deliver a quick, data‑driven sizing estimate (“back of the envelope”) that would let us provision just enough capacity while keeping cost under $250k/yr.

**Action** – I used the **powers‑of‑two rule**: start with a single GPU instance (e.g., `g4dn.xlarge`), benchmark its throughput (~200 K events/s). Doubling the number of instances halves latency and doubles capacity. I calculated:

| # Instances | Throughput (events/s) | Cost/yr (USD) |
|-------------|-----------------------|---------------|
| 1           | 200 k                 | 30 k          |
| 2           | 400 k                 | 60 k          |
| 4           | 800 k                 | 120 k         |
| 8           | 1.6 M                 | 240 k         |

The target 10 M events/day ≈ 115 k events/s, so **4 instances** (≈ 800 k) gave a safety margin of ~7× with a cost of $120k/yr.

I then built an autoscaling policy on **Amazon SageMaker** and **EC2 Auto Scaling**, tying scaling to CloudWatch metrics. I added a **step‑function fallback** that throttles request rates when CPU > 80 % for >30 s, preventing bursty spikes from cascading failures.

**Result** – The production system handled peak traffic (12 M events/day) with <200 ms latency, achieved a 95 % success rate, and stayed within the $250k budget—**a 20 % cost saving vs. over‑provisioned baseline**.  

---

### AWS Services Used
- **SageMaker Endpoint** (GPU instances)
- **EC2 Auto Scaling** (powers‑of‑two scaling policy)
- **CloudWatch Metrics & Alarms**
- **Step Functions** (fallback logic)

### Leadership Principles Highlighted
- **Customer Obsession** – delivering fast, reliable predictions.
- **Ownership / Dive Deep** – rigorous sizing, continuous monitoring, and cost optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
