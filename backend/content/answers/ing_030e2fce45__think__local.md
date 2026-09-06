---
qid: ing_030e2fce45__think__local
question: 'Explain: Human evaluation — GitHub - huggingface/evaluation-guidebook:
  Sharing both practical insights and theoretical knowledge about LLM evaluation that
  we gathered while managing the Open LLM Leaderboard and designing lighteval! \u00b7
  GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 678
total_tokens: 908
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:56:02-05:00'
sources: []
---

### 1. Clarify the context  
- **What**: “Human evaluation” refers to having people judge model outputs rather than relying solely on automatic metrics.  
- **Why**: LLMs can produce fluent but incorrect or biased text; human raters capture nuance, safety, and real‑world usefulness that numbers miss.  
- **Assumptions**: Raters are trained, diverse enough to represent target users, and the evaluation protocol is reproducible.

### 2. Mental model / framework  
1. **Define the dimension(s) of quality** (e.g., correctness, relevance, fluency, safety).  
2. **Choose a scale or rubric** (Likert‑style, binary pass/fail, comparative ranking).  
3. **Sample prompts & outputs** uniformly from the test set.  
4. **Collect judgments**, ensuring each sample is evaluated by multiple raters to compute inter‑rater reliability.

### 3. Step‑by‑step reasoning toward a robust human eval pipeline  

| Step | What to do | Why it matters |
|------|------------|----------------|
| **Prompt selection** | Randomly sample or stratify by difficulty, domain, or prompt type. | Avoid bias; cover edge cases. |
| **Rater recruitment & training** | Provide guidelines, examples, and calibration exercises. | Reduces variance and aligns interpretations. |
| **Annotation interface** | Clear layout: prompt, model output(s), rating fields. | Minimizes cognitive load, reduces errors. |
| **Rating protocol** | Use multiple raters per item; compute average or majority vote. | Increases reliability (e.g., Krippendorff’s α). |
| **Statistical analysis** | Compute mean scores, confidence intervals, and compare models. | Allows rigorous comparison beyond raw averages. |
| **Iterate & refine** | Update rubric based on rater feedback; re‑evaluate if needed. | Ensures the metric stays relevant as models evolve. |

### 4. Common traps to avoid  
- **Over‑reliance on a single metric** (e.g., accuracy) that ignores safety or bias.  
- **Ignoring inter‑rater variability**—reporting raw scores without reliability checks can be misleading.  
- **Sampling bias**: evaluating only “easy” prompts skews results upward.  
- **Rater fatigue**: long sessions degrade quality; use breaks or short batches.

### 5. Sanity‑check & communicate the process  
1. **Pilot test** on a small subset, verify that ratings correlate with intuition.  
2. **Report key statistics**: average score ± CI, inter‑rater reliability (α > 0.7 is good).  
3. **Explain limitations**: e.g., cultural biases in raters, limited prompt coverage.  
4. **Present findings** visually (box plots, bar charts) and narratively—highlight where models excel or fail.

By following this structured approach, human evaluation becomes a reliable complement to automatic metrics, giving stakeholders confidence that an LLM performs well not just on numbers but on real‑world criteria that matter to users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
