---
qid: q098
question: "What is marketing attribution and what are the main attribution models?"
topic: "Data Analytics"
model: "Claude Code (authored)"
sources: []
---

**Situation** At a DTC brand, the marketing team credited every conversion to the last ad clicked, so paid search looked like a hero and our top-of-funnel social spend looked worthless. They were about to cut the social budget that was actually driving discovery.

**Task** I was asked to build a fairer view of which channels deserved credit before the budget decision.

**Action** I explained that attribution is how you assign credit for a conversion across the touchpoints in a customer's journey, and the model you pick changes the story. Last-touch, what we used, credits only the final interaction. First-touch credits only the discovery channel. Linear splits credit evenly across all touches. Time-decay weights recent touches more. Position-based, or U-shaped, front-loads the first and last touch. I stitched our clickstream into full user journeys and ran linear and position-based models alongside last-touch so the team could compare.

**Result** Under position-based attribution, paid social earned about 30% of conversion credit instead of near zero, and the budget cut was reversed. Overall marketing-attributed ROAS looked 15% healthier once mid-funnel channels got their due. My lesson: attribution isn't one truth, it's a modeling choice, and last-touch systematically undervalues the channels that start the journey.
