---
qid: vq_6d43370f9c__star__local
question: Why is data cleansing so important?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 342
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:03:12-05:00'
sources: []
---

**Situation**  
While leading the NLP model for a customer‑service chatbot at a fintech startup, we had just finished ingesting over 2 million support tickets from four legacy systems. The raw dataset contained misspelled product names, duplicate entries, and inconsistent date formats.

**Task**  
I needed to transform that noisy corpus into a clean training set that would let the model achieve >90 % intent‑recognition accuracy before the product launch in two months.

**Action**  
First, I wrote a Python pipeline using Pandas and spaCy to detect duplicates via fuzzy matching (Jaro–Winkler ≥0.95) and remove them. Then, I built a custom dictionary of 350 industry terms and applied a spell‑checker with context awareness to correct tokens that spanned multiple fields. For dates, I standardized all timestamps to ISO 8601 using dateutil, which allowed downstream time‑series features. Finally, I ran a sanity check with a sample of 5,000 tickets, manually verifying the corrections, and logged every change in an audit table for reproducibility.

**Result**  
The cleaned dataset reduced token‑level noise by 78 %, leading to a 12 % lift in intent accuracy (from 78 % to 90 %). Deployment went live on schedule, and our churn prediction module subsequently cut customer‑issue resolution time by 18 %. This experience reinforced that rigorous data cleansing is the foundation of reliable AI, turning raw mess into actionable intelligence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
