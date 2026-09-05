---
qid: ing_6aaff189cf__star__local
question: 'Explain: Role-title decoder — Interview Process And Behavioral'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 341
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:55-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a new AI‑powered recruitment platform, and the hiring team needed a way to automatically match job titles with internal role descriptions for better candidate filtering.

**Task:**  
I was tasked with building a “role‑title decoder” that could take any free‑text title from an applicant’s résumé or LinkedIn profile and map it to one of our predefined internal role categories, while also scoring the confidence level for each match.

**Action:**  
First, I gathered 12 k labeled titles from our HR database and cleaned them with regexes and spaCy’s tokeniser. Then I trained a fine‑tuned BERT model on these labels, adding an auxiliary classification head that outputs both the role ID and a confidence score. To handle ambiguous titles, I implemented a fallback rule: if the top two probabilities were within 5 %, the system flags the entry for manual review. Finally, I wrapped the model in a Flask API, integrated it into our ATS, and set up an A/B test to monitor performance.

**Result:**  
Within three weeks of deployment, the decoder reduced title‑matching errors by 78 % (from 23 % to 5 %), cutting manual review time from 4 hrs/day to 30 min. The confidence scores helped recruiters prioritize high‑confidence matches, improving interview scheduling speed by 25 %. I learned that combining deep learning with rule‑based safety nets often yields the most reliable production systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
