---
qid: ing_91ba57a1cc__star__local
question: 'Explain: The Screenshot-Reason-Act Loop — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 326
total_tokens: 564
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:24:06-05:00'
sources: []
---

**Situation:**  
While leading the AI‑powered customer support bot for a telecom provider, we noticed that our automated troubleshooting script was often giving generic “try rebooting” answers and customers were still frustrated—CSAT dipped to 68%.

**Task:**  
I needed to redesign the bot’s interaction flow so it could capture a screenshot of the user’s error message, reason out the root cause, act with a precise fix, and close the loop—all within three conversational turns.

**Action:**  
1. Implemented an image‑capture widget in the chat UI that automatically uploads screenshots to our secure S3 bucket.  
2. Built a lightweight CNN model (MobileNetV2) fine‑tuned on 12k labeled error images to classify issues into 15 categories, giving us a 92 % accuracy.  
3. Integrated the classifier with a rule‑based reasoner that mapped each category to a tailored troubleshooting script stored in DynamoDB.  
4. Added an “Auto‑Apply Fix” option that triggered scripted API calls (e.g., reset network settings) when confidence > 0.85, all logged for audit.

**Result:**  
Within two weeks of deployment, CSAT rose from 68% to 83%, and the average resolution time dropped by 35%. I learned that combining lightweight vision models with a clear reason‑act loop can dramatically improve user experience without heavy infrastructure costs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
