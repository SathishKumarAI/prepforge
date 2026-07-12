---
qid: q029
question: "How does linear regression work and what are its key assumptions?"
topic: "Machine Learning"
model: "Claude Code (authored)"
sources: []
---

**Situation** At a real-estate analytics firm, our house-price linear model looked fine on average but produced wild, sometimes negative predictions for expensive homes. Stakeholders were losing trust.

**Task** I needed to diagnose why a linear regression was misbehaving and fix it by respecting its assumptions.

**Action** I started from the mechanics: linear regression fits a weighted sum of features by minimizing squared error, solving for coefficients that best fit a straight-line relationship. Then I checked its key assumptions one by one. Linearity was violated because price grew nonlinearly with square footage, so I log-transformed the target. Residual plots showed heteroscedasticity, non-constant variance, which the log helped. I found two strongly correlated features causing multicollinearity and dropped one after checking VIF. I also confirmed residuals were roughly normal and independent.

**Result** After honoring those assumptions, R-squared rose from 0.68 to 0.83 and the crazy predictions disappeared. My takeaway: linear regression is only as good as its assumptions, so plotting residuals and checking linearity, independence, constant variance, and multicollinearity is not optional, it's the actual work.
