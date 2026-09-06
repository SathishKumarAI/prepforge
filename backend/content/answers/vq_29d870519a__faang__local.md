---
qid: vq_29d870519a__faang__local
question: What are the many kinds of statistical selection bias?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 489
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:03:23-05:00'
sources: []
---

**Clarify**  
The interviewer is asking for *types* of statistical selection bias—systematic errors that arise when the sample used to estimate a quantity differs from the target population.  
Assumptions: we’re dealing with observational data (not randomized experiments), and the goal is to enumerate common bias mechanisms rather than to derive formulas.

**Approach**  
I’ll list major categories, give a short definition for each, and note typical contexts where they appear. I’ll keep it within 200 words, using markdown bullets for clarity.

**Depth**

| Bias type | What it means | Typical source |
|-----------|---------------|----------------|
| **Sampling bias** | The sample is not representative of the population (e.g., convenience samples). | Web‑scraped data from only one forum. |
| **Survivorship bias** | Only “surviving” units are observed, omitting failures. | Analyzing only successful startups to estimate average growth. |
| **Non‑response bias** | Respondents differ systematically from non‑respondents. | Survey respondents skew younger than the overall demographic. |
| **Self‑selection bias** | Individuals choose to participate, creating a non‑random subset. | Users who opt into a beta test are more tech‑savvy. |
| **Exclusion bias** | Certain groups are omitted by design or error. | A clinical trial excludes patients over 65. |
| **Attrition bias** | Loss of participants over time changes the sample composition. | Longitudinal study where sicker subjects drop out. |
| **Measurement bias** | Errors in data collection systematically distort values. | GPS devices that over‑estimate distance for certain terrains. |

**Edge cases**  
- Mixed biases: a dataset may suffer from both sampling and non‑response bias simultaneously.  
- Bias can be subtle (e.g., “model selection bias” when hyperparameters are tuned on the same data used to evaluate performance).  

**Optimize & communicate**  
I’d finish by noting that detecting bias often requires domain knowledge, exploratory plots, and sensitivity analyses; mitigation strategies include stratified sampling, weighting adjustments, or causal inference techniques. This concise yet structured overview aligns with FAANG expectations: clear framing, organized delivery, technical depth, and awareness of practical implications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
