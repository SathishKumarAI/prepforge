---
qid: ing_5ccb6f204f__faang__local
question: 'Explain: Chapter Quizzes — Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 553
total_tokens: 787
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:19:23-05:00'
sources: []
---

## Clarify  
We’re asked to **design a “Chapter Quiz” feature** for an online learning platform (e.g., Coursera). The goal: let instructors create quizzes tied to specific chapters, students answer them, and the system records scores, tracks progress, and generates analytics.  
Assumptions to confirm:  

- Quizzes are multiple‑choice or short‑answer, max 20 questions.  
- Each student can attempt once per quiz; retakes allowed after a cooldown.  
- Data must be GDPR‑compliant.  

## Approach  
1. **Data model** – `Course → Chapter → Quiz → Question`.  
2. **API surface** – CRUD for quizzes, submit answer endpoint, score retrieval.  
3. **Scoring engine** – immediate grading with weighted answers.  
4. **Analytics layer** – aggregate per‑question difficulty, student performance.  

## Depth  
- **Schema** (simplified):  
  ```sql
  CREATE TABLE Quiz (
      id BIGINT PRIMARY KEY,
      chapter_id BIGINT REFERENCES Chapter(id),
      title TEXT,
      time_limit INT,
      created_at TIMESTAMP
  );
  CREATE TABLE Question (
      id BIGINT PRIMARY KEY,
      quiz_id BIGINT REFERENCES Quiz(id),
      prompt TEXT,
      correct_option INT, -- index of the right answer
      weight FLOAT DEFAULT 1.0
  );
  ```
- **Submission**: POST `/quizzes/:id/attempt` → store `Attempt(id, user_id, timestamp)`, and `Answer(attempt_id, question_id, chosen_option)`.  
- **Scoring**: iterate over answers, sum `weight * (chosen == correct)`; store result.  
- **Complexity**: O(n) per attempt where n = #questions (≤20). Storage is linear in attempts.  

## Edge Cases  
- Student submits after time limit → mark as timed‑out, score 0.  
- Duplicate question IDs across quizzes → enforce uniqueness constraint.  
- Offline submissions → queue to backend for later grading.  

## Optimize & Communicate  
- **Cache** quiz metadata (Redis) to reduce DB hits on fetches.  
- **Batch grading** during off‑peak hours if quiz size grows.  
- Explain trade‑offs: immediate scoring is simpler but could mis‑grade if dynamic content; batch allows complex rules.  

This design balances simplicity, scalability, and compliance while giving interviewers clear insight into my structured problem‑solving skills.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
