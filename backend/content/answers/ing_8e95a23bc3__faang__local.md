---
qid: ing_8e95a23bc3__faang__local
question: Have feedback or questions? — Grind 75 - A better Blind 75 you can customize,
  by the author of Blind 75
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 599
total_tokens: 848
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:15:43-05:00'
sources: []
---

**Clarify**

> *“Have feedback or questions?”*  
> I’ll interpret this as: *“How would you evaluate a proposed improvement to the Blind 75 list (e.g., a custom, “Grind 75” version) and what key metrics/questions should you ask before adopting it?”*  
> Assumptions:  
> 1. The candidate is reviewing a curated list of algorithmic problems.  
> 2. They want objective criteria to judge its usefulness for interview prep.  

**Approach**

1. **Define the goal** – fast, high‑yield interview preparation.  
2. **Identify evaluation dimensions** – coverage, difficulty balance, relevance, learning value, maintenance effort.  
3. **Formulate concrete questions/metrics** for each dimension.  
4. **Prioritize feedback** that directly impacts interview performance.

**Depth**

| Dimension | What to check | Sample question / metric |
|-----------|---------------|-------------------------|
| Coverage | Does it span all core topics (arrays, strings, trees, DP, graphs, etc.)? | ≥ 90 % of questions map to at least one of the 10 interview pillars. |
| Difficulty balance | Are problems evenly distributed across easy/medium/hard? | Ratio ≈ 1:2:3 or similar; no > 30 % hard in a 75‑problem set. |
| Relevance | Do problems mirror real company questions (Google, Amazon, etc.)? | At least 70 % have been asked in recent interviews (verified via LeetCode, Glassdoor). |
| Learning value | Does each problem reinforce multiple concepts or patterns? | Minimum of two “solution patterns” per question. |
| Maintainability | Is the list easy to update and version‑controlled? | Single source‑of‑truth repo with automated linting for tags & difficulty. |

**Edge Cases**

- *Outdated questions*: a hard problem from 2010 may no longer reflect current interview trends.  
- *Redundancy*: multiple problems that are essentially the same algorithm (e.g., two “3Sum” variants).  
- *Bias toward specific companies*: over‑representation of one company's style can skew preparation.

**Optimize & Communicate**

*Improvements:*  
- Introduce a dynamic difficulty estimator (e.g., crowd‑sourced ratings) to keep balance.  
- Add “learning objectives” tags so candidates see which patterns they’re mastering.  

*Narrative:*  
“I’d start by validating that the custom list still covers all interview pillars, then check its difficulty spread and real‑world relevance. If I spot gaps—say, too many DP problems but few graph ones—I’d flag them for addition. Maintaining a single repo with automated checks keeps the set fresh without manual oversight.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
