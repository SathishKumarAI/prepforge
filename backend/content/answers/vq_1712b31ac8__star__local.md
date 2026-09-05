---
qid: vq_1712b31ac8__star__local
question: What is the difference between a LIST BOX and a COMBO BOX ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 351
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:49:28-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were revamping the user‑onboarding wizard that collected investment preferences. The design team wanted a clean, space‑saving interface for selecting asset classes.

**Task** – I had to choose between a list box and a combo box for the “Asset Class” field so that users could quickly pick one of eight options without scrolling too much or cluttering the form.

**Action** – First, I evaluated screen real estate: the list box would show all eight items at once, consuming 12 % more vertical space than the collapsed combo box. Next, I considered user flow: many customers were on mobile, so a combo box’s tap‑to‑open behavior was preferable for touch input. I also factored in accessibility—both controls support keyboard navigation, but the list box required a focus ring that could be lost if the window resized. Finally, I implemented the combo box with a searchable dropdown (using React‑Select) and added an “Other” option to capture rare asset types.

**Result** – The final form reduced the number of on‑screen elements by 30 %, cutting onboarding time from 2:15 min to 1:45 min. User satisfaction scores for the wizard rose by 18 % in our post‑launch survey, and we saw a 12 % higher completion rate on mobile devices. I learned that choosing between list box and combo box hinges on space constraints, interaction modality, and the need for dynamic filtering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
