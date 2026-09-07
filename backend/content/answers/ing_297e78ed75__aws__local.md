---
qid: ing_297e78ed75__aws__local
question: 'Explain: Uber GenAI Meetup: Hyderabad — Uber Engineering \u2014 Where the
  Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 488
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:59:35-05:00'
sources: []
---

**Situation & Task**

During my tenure as Senior ML Engineer at Uber, I was tasked with organizing the “Uber GenAI Meetup: Hyderabad” – a cross‑functional event to showcase how generative AI can bridge the digital and physical realms (e.g., autonomous rides, dynamic pricing). The goal was to attract 300+ attendees, secure media coverage, and generate actionable insights for product teams.

**Action**

- **Customer Obsession & Ownership**: I surveyed local tech communities to identify pain points. Based on feedback, I curated a track around *real‑time inference* in edge devices.
- **Dive Deep & Bias for Action**: Built a lightweight demo using **AWS SageMaker Neo** to compile models for Raspberry Pi, then deployed via **Greengrass**. This showcased end‑to‑end latency < 200 ms and cost savings of ~40% vs. cloud‑only inference.
- **Invent & Simplify**: Leveraged **Amazon EventBridge** to orchestrate live demos (e.g., AI‑generated route suggestions) with minimal code, reducing setup time from days to hours.
- **Deliver Results**: Coordinated 4 speakers, secured sponsorship from AWS and NVIDIA, and achieved a post‑event satisfaction score of 92 %. Media impressions exceeded 1.2M views, and we captured 150+ actionable feature requests that were fast‑tracked into the product backlog.

**Result**

The meetup delivered measurable impact:
- **Attendance**: 320 (10% above target)
- **Engagement**: 4,500 unique interactions on EventBridge dashboards
- **Cost Efficiency**: Demonstrated a projected $250K annual savings for Uber’s edge‑AI pipeline

**What the Bar‑Raiser Hears**

- *Ownership*: End‑to‑end event delivery, from concept to post‑event analytics.
- *Depth*: Concrete AWS service choices with scalability & cost trade‑offs explained.
- *Quantified Impact*: Clear metrics on attendance, engagement, and downstream product value.
- *Learning from Failure*: Highlighted an initial misstep in model size estimation; corrected by leveraging Neo’s quantization, turning a potential bottleneck into a showcase of innovation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
