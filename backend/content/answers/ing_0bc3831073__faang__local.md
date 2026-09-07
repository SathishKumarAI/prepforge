---
qid: ing_0bc3831073__faang__local
question: 'Explain: Algorithms — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 502
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:11:23-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Explain the “Spaced Repetition” algorithm used in learning systems (e.g., Anki) and how it’s applied in machine‑learning‑based flashcard apps.  
*Assumptions to confirm:*  
- Audience knows basic ML concepts but not spaced repetition specifics.  
- Focus on algorithmic mechanics, not UI design.

**2️⃣ Approach**  
I’ll:  
1. Define spaced repetition.  
2. Outline the classic SM‑2 scheduling logic (used by Anki).  
3. Show how ML can refine interval predictions.  
4. Highlight evaluation metrics and trade‑offs.

**3️⃣ Depth**  
- **Core idea:** After each review, schedule next exposure based on recall quality; longer intervals for correct answers, shorter if forgotten.  
- **SM‑2 algorithm:**  
  - `EF` (Easiness Factor) starts at 2.5.  
  - Update: `EF' = EF + 0.1 – (5–q)*(0.08+ (5–q)*0.02)` where `q∈[0,5]`.  
  - Intervals: 1 day → `n`‑th review → `interval = prev_interval * EF`.  
- **ML enhancement:** Train a regression model (e.g., gradient boosting) to predict optimal next interval using features like time spent, previous intervals, user’s consistency.  
- **Complexity:** SM‑2 is O(1) per card; ML inference adds O(d) where `d` is feature count, negligible for typical flashcard sets.

**4️⃣ Edge Cases**  
- New cards: start with 1 day interval.  
- Extremely low EF → cap at 1.3 to avoid too‑short intervals.  
- Forgetting curves vary by subject; ML can adapt per topic.  
- Test on synthetic data where recall probability decays exponentially.

**5️⃣ Optimize & Communicate**  
- **Improvement:** Periodically retrain the ML model with logged outcomes to capture evolving user behavior.  
- **Narration tip:** Emphasize how spaced repetition blends human cognition (forgetting curves) with algorithmic scheduling, and how ML fine‑tunes this for personalized learning efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
