---
qid: vq_29d870519a__think__local
question: What are the many kinds of statistical selection bias?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 509
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:20:06-05:00'
sources: []
---

**Meta‑Answering Blueprint for “Kinds of Statistical Selection Bias”**

1. **Clarify & State Assumptions**  
   - *Goal*: Identify all plausible selection biases that can distort statistical inference.  
   - *Assume* the audience knows basic probability but may not recall specific bias names.  
   - *Decide* to focus on well‑documented categories (sampling, nonresponse, survivorship, etc.) and note any overlaps.

2. **Choose a Mental Model**  
   - Think of selection bias as **“the sample is not representative because the inclusion mechanism depends on the outcome or related variables.”**  
   - Map each bias onto this template: what variable drives inclusion? how does it relate to the target parameter?

3. **Step‑by‑Step Reasoning**  
   1. List common sampling designs (simple random, stratified, cluster).  
   2. For each, recall known pitfalls—e.g., *cluster* → “design effect” bias.  
   3. Add non‑sampling sources: nonresponse, attrition, truncation, measurement error that masquerades as selection.  
   4. Identify classic examples: survivorship bias (only survivors counted), self‑selection bias (volunteers differ from non‑participants).  
   5. Group by mechanism: *probability‑based* vs *non‑probability*, *time‑dependent* vs *static*.  

4. **Common Traps to Avoid**  
   - Mixing up “bias” with “variance.”  
   - Overloading terms (e.g., calling any missing data a bias).  
   - Forgetting that some biases are mitigated by design (e.g., randomization) but not eliminated.  
   - Assuming all selection biases produce the same direction of error.

5. **Sanity‑Check & Communicate**  
   - Cross‑check each bias against a reputable source (e.g., *Kuhn, 2013* or *Cochran, 1977*).  
   - Ensure examples illustrate the mechanism clearly.  
   - Present as a concise list with brief definitions and a quick note on mitigation strategies.

Use this scaffold whenever you need to enumerate selection biases in statistics—adapt it by swapping “bias” for any other statistical concept!

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
