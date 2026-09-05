---
qid: ing_9801830dd8__star__local
question: How do you measure inter-annotator agreement on a human labelling effort,
  and what do you do when your annotators disagree a lot?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 364
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:44-05:00'
sources: []
---

**Situation:**  
While leading a data‑collection sprint for an NLP model to detect hate speech, we hired five native speakers to label 10,000 tweets. After the first round, our internal metrics showed a Cohen’s κ of only 0.38—well below the acceptable threshold of 0.70.

**Task:**  
I needed to improve agreement quickly so that the training set would be reliable and the project could stay on schedule.

**Action:**  
First, I ran Krippendorff’s α to confirm the low reliability across all categories. Then I organized a two‑hour workshop where we walked through the annotation guide, clarified ambiguous terms, and reviewed examples of borderline cases. I introduced a “gold standard” subset that annotators had to master before proceeding. For any tweet still contested after this refresher, we set up an adjudication process: a senior linguist resolved disputes, and disagreements were logged for future guideline tweaks. I also added a confidence flag so annotators could mark uncertain items, which reduced the number of contentious cases by 45%.

**Result:**  
After these interventions, κ rose to 0.78 across all labels, and inter‑annotator disagreement dropped from 30% to 12%. The improved dataset accelerated model training, reducing error rates by 18% on our validation set. I learned that iterative guideline refinement combined with targeted adjudication is essential for high‑quality labeling at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
