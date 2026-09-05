---
qid: ing_f0a6f939e1__star__local
question: Your new prompt improves aggregate pass rate by 3 points, but one customer
  segment drops 8. How do you catch this before shipping, and what do you do about
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 328
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:29:17-05:00'
sources: []
---

**Situation:**  
At a SaaS firm building an AI‑powered tutoring platform, we rolled out a new prompt set to boost overall exam pass rates. Early A/B tests showed a 3‑point lift in aggregate scores, but the data also revealed that students from the “Advanced STEM” segment fell by 8 points.

**Task:**  
I needed to identify why that high‑performing cohort was hurt and decide whether to pause shipping or tweak the prompts before release.

**Action:**  
1. **Data deep dive:** I pulled per‑question, per‑topic analytics for both segments, then ran a hypothesis test on answer quality distributions.  
2. **Prompt audit:** Using our prompt version control, I compared the new prompt against the old one in a sandboxed environment and logged the model’s internal confidence scores.  
3. **Stakeholder interviews:** I spoke with 12 Advanced STEM users to capture qualitative feedback—many reported that the new prompts were too generic and omitted domain‑specific jargon.  
4. **Rapid prototyping:** I rewrote three high‑impact prompts to include technical terms and re‑ran unit tests, then performed a targeted A/B test on a small subset of Advanced STEM users.

**Result:**  
The revised prompts restored a 5‑point gain for the Advanced STEM group while maintaining the overall +3 aggregate lift. We shipped the update with an internal flag allowing rollback if future metrics dipped. I learned that segment‑level monitoring and quick hypothesis‑driven iterations are critical when balancing broad gains against niche performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
