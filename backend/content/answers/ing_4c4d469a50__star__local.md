---
qid: ing_4c4d469a50__star__local
question: 'Explain: Study map — Mobile Engineer'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 322
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:00:50-05:00'
sources: []
---

**Situation** – In my last role as a mobile engineer at a fintech startup, we noticed the onboarding funnel for new users dropped by 28 % after our latest app update. The team suspected that the new UI was confusing, but we had no concrete data on where users were getting stuck.

**Task** – I was tasked with creating a “study map” to visualize user interactions across the onboarding flow, identify friction points, and propose design changes that would lift completion rates by at least 15 %.

**Action** – First, I instrumented our analytics stack (Mixpanel + Firebase) to capture every tap, scroll, and screen transition. Using Python’s pandas, I aggregated events into a directed graph where nodes were screens and edges represented transitions weighted by click-through counts. I then plotted the graph with NetworkX and Matplotlib, color‑coding edge thickness by drop-off rate. The map revealed that 62 % of users abandoned after the “Verify Identity” screen. I worked with UX to simplify the verification UI, added inline validation hints, and introduced a progress bar.

**Result** – Post‑deployment, onboarding completion jumped from 72 % to 88 %, exceeding our target by 10 %. The study map became a reusable dashboard for future feature rollouts, teaching me how data visualization can turn raw telemetry into actionable design insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
