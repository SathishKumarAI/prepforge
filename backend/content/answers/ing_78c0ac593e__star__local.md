---
qid: ing_78c0ac593e__star__local
question: 'Explain: In that box, we have number 10 — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 413
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:35:30-05:00'
sources: []
---

**Situation:**  
In the analytics dashboard for our e‑learning platform, the “Course Popularity” widget displayed a bar labeled “10 – Python Full Course for Beginners.” The number 10 was ambiguous; stakeholders wanted to know what it represented so they could decide whether to promote or retire the course.

**Task:**  
I needed to decode that figure—was it enrollment count, completion rate, rating score, or something else—and present a clear explanation backed by data. I also had to recommend a next step for marketing based on my findings.

**Action:**  
1. Exported raw event logs (enrollments, completions, ratings) from the database into Pandas.  
2. Ran a quick exploratory analysis: plotted enrollment vs. completion per course; calculated mean rating scores.  
3. Cross‑checked the “10” against each metric: it matched exactly the average rating out of 10 for that course, not the enrollment or completion numbers (which were 4 k and 1.2 k respectively).  
4. Created a concise Tableau dashboard showing the rating distribution and highlighted that the course had an 8.7 mean rating but only 30% completion—an alarming drop-off.

**Result:**  
I delivered a live demo to product managers, clarifying that “10” meant the average star rating. They realized the course was highly rated yet poorly retained, so they launched a targeted retention email campaign and added a mid‑course quiz to boost engagement. Within two weeks, completion rose from 30% to 45%, and we saw a 15% increase in overall revenue from this course line. I learned that always validating ambiguous metrics with raw data prevents costly misinterpretations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
