---
qid: ing_32171efd4b__aws__local
question: 'Explain: 🔔 You Found the Shortcut. Don''t Lose It.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 343
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:18:22-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I was building a fraud‑detection model that needed to score millions of transactions per day with < 1 % false positives. The first week we hit an accuracy plateau at 92 % and the engineering team feared “the shortcut” would be lost when they pivoted to a new pipeline.

**Action (Technical & Leadership)**  
I *took ownership* and *dove deep* into the data:  
1. **Feature audit** – used Amazon SageMaker Feature Store to version features, revealing that a single engineered feature (“transaction‑time delta”) was the real driver of performance.  
2. **Model simplification** – replaced an 8‑tree ensemble with a single XGBoost model (using SageMaker Autopilot), reducing inference latency by 60 % while maintaining 92.3 % accuracy.  
3. **CI/CD pipeline** – built a SageMaker Pipelines workflow that automatically retrains when the feature drift exceeds 5 %, ensuring the shortcut persists.

**Result**  
- Reduced cost per inference from $0.02 to $0.007 (≈ 65 % savings).  
- Maintained accuracy, yielding a $1.2M annual uplift in detected fraud.  
- Achieved 99.9 % uptime with an ALB + Auto Scaling group behind the endpoint.

**Reflection**  
I learned that *bias for action* can preserve critical insights while simplifying systems—an approach I’ll apply to every ML project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
