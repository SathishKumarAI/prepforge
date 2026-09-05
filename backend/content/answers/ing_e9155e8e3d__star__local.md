---
qid: ing_e9155e8e3d__star__local
question: 'Explain: Use case: User posts a tweet — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 391
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:14:15-05:00'
sources: []
---

**Situation:**  
At my previous startup we built a real‑time recommendation engine that surfaced trending topics to users as soon as they posted a new tweet. The platform had to ingest millions of tweets per day, run sentiment and topic modeling in near‑real time, and update the user’s feed within 2 seconds.

**Task:**  
I was responsible for designing the end‑to‑end ML pipeline that would classify each tweet into one of our curated categories (sports, politics, entertainment) and score its virality potential so we could surface it to the right audience without overloading downstream services.

**Action:**  
First, I set up a Kafka stream to buffer tweets and used Spark Structured Streaming for feature extraction—embedding with BERT, extracting metadata (retweet count, user influence). For classification I trained an XGBoost model on 1 M labeled examples; the model achieved 92 % F1. To estimate virality, I built a lightweight regression that predicted expected retweets in the next hour using features like early engagement and hashtag popularity. We deployed the models via TensorFlow Serving behind an autoscaling gRPC gateway. Finally, we added a feedback loop: every 15 minutes the system re‑trained on new data, ensuring drift was mitigated.

**Result:**  
The new pipeline cut latency from 8 seconds to 1.5 seconds and increased the click‑through rate of recommended tweets by 18 %. The model drift component reduced misclassifications by 25 %, and we saw a 12 % lift in overall user engagement on our platform. I learned how critical end‑to‑end monitoring and incremental retraining are for maintaining ML quality at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
