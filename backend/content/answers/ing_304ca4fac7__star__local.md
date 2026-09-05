---
qid: ing_304ca4fac7__star__local
question: Engagement metrics and wellbeing metrics disagree. How do you build a system
  that resolves that?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 338
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:05:02-05:00'
sources: []
---

**Situation:** At my last company we launched a new learning‑platform feature that encouraged daily micro‑learning sessions. Engagement dashboards showed a 35% lift in session frequency, but wellbeing surveys reported a 12% rise in user stress scores.

**Task:** I was tasked with designing a system that could reconcile these conflicting signals and provide actionable insights for product owners while safeguarding user well‑being.

**Action:** First, I mapped both metric streams into a unified data lake using Snowflake, tagging each event with context (time of day, session length, content type). Next, I built an ML pipeline in Python that calculated a composite “Health‑Engagement Index” by normalizing engagement scores against stress indicators and applying a weighted loss function. I also set up an online A/B test framework (Optimizely) to validate the index on real traffic, iterating on weights until we achieved a 0.2‑point improvement in overall user satisfaction while maintaining engagement gains. Finally, I automated alerts in Grafana that trigger when stress metrics exceed a threshold for any cohort.

**Result:** The new system reduced reported stress by 18% over three months while keeping daily sessions up by 27%. It also gave the product team a clear, data‑driven way to balance growth and user health. I learned that aligning disparate KPIs often requires creating a composite metric that respects domain constraints and continuous experimentation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
