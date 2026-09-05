---
qid: ing_a2bedcdf8b__star__local
question: 'Explain: Classification & normalization front-end'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 341
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:58:16-05:00'
sources: []
---

**Situation** – In the summer of 2023 I was part of a fintech startup building a credit‑risk assessment tool for small businesses. The data scientists had trained a gradient‑boosted model, but when we shipped it to our React front end the UI kept showing wildly varying risk scores that looked like “spam” to users.

**Task** – My job was to make the classification output understandable and trustworthy on the client side: map raw probability scores into user‑friendly categories (low, medium, high) and ensure consistent scaling across different devices.

**Action** – I first added a lightweight Node.js microservice that wrapped the model’s predict function. On the front end I implemented a two‑step normalization pipeline in TypeScript: 1) a min‑max scaler recalculated from the training set statistics to map raw probabilities into a 0–100 scale; 2) a custom soft‑max layer to smooth out extreme values and prevent “catastrophic” jumps. Then I created a reusable `RiskBadge` component that rendered color‑coded badges, using CSS variables for consistent styling. Finally, I wrote unit tests with Jest to validate that the same raw score always produced the same badge across browsers.

**Result** – After deployment users reported a 45 % reduction in confusion complaints, and the click‑through rate on risk reports rose from 12 % to 27 %. I learned how subtle front‑end transformations—like proper normalization and classification mapping—can dramatically improve user trust in AI outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
