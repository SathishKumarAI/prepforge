---
qid: ing_928724a115__star__local
question: 'Explain: 🔢 Numbers and formulas to know cold — Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 352
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:26:01-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we launched a new credit‑score model that needed to recommend personalized offers to users with no prior interaction data. The product manager flagged that the “cold‑start” problem could hurt conversion rates, and our team had only two weeks before the go‑live.

**Task** – I was responsible for designing a lightweight feature set and scoring formula that would generate accurate predictions for cold users while keeping latency under 50 ms on our edge servers.

**Action** – First, I mapped out the key demographic variables (age, location, device type) and built a simple linear regression baseline:  
`Score = β0 + β1·Age + β2·LocationIndex + β3·DeviceScore`.  
I then introduced an exponential decay factor to account for the uncertainty of unseen users: `AdjustedScore = Score × e^(−λ·t)` where *t* is days since user creation and λ was tuned via cross‑validation. To keep inference fast, I pre‑computed the β coefficients on a Spark cluster and deployed them as a lightweight Java service that returned scores in 30 µs.

**Result** – The cold‑start model achieved an AUC of 0.72 versus the previous heuristic’s 0.58, boosting offer click‑through by 18% in the first month post‑launch. I learned how to balance statistical rigor with engineering constraints, and that a simple decay term can effectively capture uncertainty without heavy feature pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
