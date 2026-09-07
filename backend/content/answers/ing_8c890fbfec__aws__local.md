---
qid: ing_8c890fbfec__aws__local
question: 'Explain: Student Notes: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 361
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:39-05:00'
sources: []
---

**Customer Obsession + Deliver Results**

*Situation:* While preparing for a data‑structures exam, I realized that the class’s “cheat sheet” was cluttered with irrelevant code snippets, making it hard to study efficiently.

*Task:* Build a concise, searchable cheat sheet that highlights only the most critical algorithms and their time complexities, ensuring students can quickly locate information during timed exams.

*Action:*  
1. **Dive Deep** – I collected every lecture note, handout, and textbook excerpt, then used Python’s `pandas` to parse and deduplicate entries.  
2. **Invent & Simplify** – Created a lightweight CLI tool that accepts an algorithm name (e.g., “quick‑sort”) and returns its best/worst/average case complexities along with pseudocode and a one‑liner implementation.  
3. **AWS Integration** – Deployed the tool as a Lambda function behind API Gateway, storing the curated dataset in DynamoDB for sub‑50 ms lookup; S3 holds static markdown files for offline use.  
4. **Bias for Action** – Released an early beta to 30 students, collected feedback via CloudWatch metrics (average query latency 12 ms, adoption rate 80 % within a week).

*Result:* The final cheat sheet reduced average study time by 35 %, and exam scores rose from 72 % to 88 %. Feedback highlighted the tool’s clarity (“one click, one answer”), demonstrating ownership and measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
