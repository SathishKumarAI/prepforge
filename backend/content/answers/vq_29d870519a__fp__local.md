---
qid: vq_29d870519a__fp__local
question: What are the many kinds of statistical selection bias?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 409
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:28:00-05:00'
sources: []
---

Statistical selection bias arises whenever the sample that ends up in analysis is not a random draw from the target population, violating the *representativeness* assumption underlying inference.  
At its core, it is a mismatch between **sampling mechanism** and **population distribution**; every form can be framed as an unobserved weighting function \(w(x)\) that skews the empirical distribution relative to the true one.

| Bias type | Typical mechanism | Why it distorts estimates |
|-----------|-------------------|--------------------------|
| **Self‑selection** | Participants choose to join a study (e.g., online surveys). | Overrepresents those with strong opinions or higher motivation; \(w(x)\) correlates with the outcome. |
| **Attrition / non‑response** | Drop‑outs in longitudinal studies or missing survey answers. | Remaining sample may systematically differ; bias depends on dropout mechanism (MCAR, MAR, MNAR). |
| **Sampling frame error** | Census enumerators miss hard‑to‑reach households. | Certain subgroups are underrepresented; \(w(x)\) is zero for them. |
| **Coverage bias** | Using only email lists excludes non‑email users. | Alters marginal distributions of covariates. |
| **Survivorship bias** | Analyzing only companies that survived to 2025. | Excludes firms with poorer performance, inflating average outcomes. |

A **non‑obvious insight**: many biases are *invertible* if the weighting function \(w(x)\) can be estimated (e.g., via propensity scores). Correcting for bias becomes a problem of solving an inverse weighted estimation equation—essentially a **regularized deconvolution** of the observed distribution. Thus, selection bias is not merely a nuisance; it is a structured distortion that, if properly modeled, can be reversed using tools from inverse problems and optimal transport.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
