---
qid: ing_82605fae9e__star__local
question: Some annotators are pasting your tasks into ChatGPT and submitting the output.
  How do you detect and handle it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 307
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:54:10-05:00'
sources: []
---

**Situation:**  
At my last gig, we were labeling a large medical imaging dataset for an AI diagnostic model. A few annotators started copying the prompt we sent them into ChatGPT and pasting back the generated captions instead of writing their own notes. This compromised data quality and threatened our compliance with HIPAA.

**Task:**  
I needed to detect those instances automatically, flag them for review, and implement a workflow that discouraged this behavior while maintaining productivity.

**Action:**  
First, I built a lightweight script that computed text similarity between each submitted label and the original prompt using TF‑IDF cosine similarity. Any score above 0.9 triggered an alert. I then added a checksum of the prompt into our annotation tool so the backend could verify authenticity in real time. For annotators flagged as suspicious, the system sent a pop‑up reminder with guidelines on what constitutes valid human annotation and offered a short training module. Simultaneously, I introduced a “confidence” score that penalized overly generic responses, which were typical of AI‑generated text.

**Result:**  
Within two weeks, the flagging rate dropped from 18% to under 2%. Our labeling error margin improved by 12%, and we saved an estimated $15k in potential rework. I learned that combining lightweight NLP checks with clear process boundaries can effectively curb unintended automation abuse without stifling human contribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
