---
qid: ing_2dc08de6cd__faang__local
question: 'Explain: Out of Scope — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 512
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:29:46-05:00'
sources: []
---

**Clarify**  
The interviewer wants you to identify machine‑learning problems that are *outside* the typical scope of a social‑network platform such as Facebook or Instagram.  I’ll assume they mean: “What ML use‑cases would not normally be built into these services?”  Key assumptions: we’re focusing on core product features (content feed, ads, safety) and not on peripheral business functions (e.g., internal HR analytics).

**Approach**  
1. List the canonical ML domains for social media.  
2. Map each domain to a “core” or “peripheral” category.  
3. Highlight examples that clearly fall outside core product goals.

**Depth**  

| Domain | Typical Use‑case in Facebook/Instagram | Why it’s *out of scope* |
|--------|---------------------------------------|-------------------------|
| **Recommendation (feed, stories)** | Personalized content ranking | Core feature |
| **Computer Vision (image tagging, AR filters)** | Auto‑tagging, visual search | Core feature |
| **Natural Language Processing (spam detection, hate‑speech filtering)** | Moderation, auto‑translation | Core feature |
| **Ad Targeting** | Demographic/behavioral bidding | Core feature |
| **Internal Ops (predictive maintenance of servers)** | Server load forecasting | Peripheral |
| **HR Analytics (employee churn prediction)** | Workforce planning | Peripheral |
| **Financial Forecasting for stock portfolio** | Market predictions | Not part of product |
| **Medical Imaging diagnostics** | Disease detection from scans | Unrelated domain |

Thus, ML tasks tied to *business operations* or *non‑user facing services*—like predicting employee turnover or stock prices—are out of scope for a social‑network’s core product.

**Edge Cases**  
- If the platform partners with third parties (e.g., health apps), some medical ML could become relevant.  
- Regulatory changes might push safety‑related ML into new categories, blurring boundaries.

**Optimize & Communicate**  
Conclude by stressing that “out of scope” is fluid: as platforms evolve (e.g., Facebook’s shift to Marketplace), previously peripheral ML can become central.  Emphasize the importance of aligning ML initiatives with user value and business strategy, and communicate this alignment clearly to stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
