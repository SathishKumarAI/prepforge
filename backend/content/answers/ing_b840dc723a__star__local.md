---
qid: ing_b840dc723a__star__local
question: 'Explain: Clarifying questions & assumptions — Meeting Assistant'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 354
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:40:00-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a virtual meeting‑assistant that transcribed talks, flagged action items, and sent follow‑up emails. Early demos showed the bot misidentified key decisions and often sent incomplete minutes to stakeholders.

**Task:**  
I had to reduce false positives in decision detection by 40% while keeping real‑time transcription latency under 200 ms so users could see highlights instantly.

**Action:**  
First, I ran a listening session with five product managers, asking clarifying questions: “What exactly counts as a decision? Do you want the full sentence or just the verb?” Their responses revealed that many “decisions” were actually “commitments.” I documented these assumptions in a shared spec and built an annotation tool so annotators could flag *decision* vs. *commitment*. Next, I retrained our NER model on this new corpus, adding a lightweight rule‑based post‑processor to catch negations (“I will not…”) that the neural net missed. Finally, I introduced a confidence threshold: only highlights above 0.85 trigger an email, with lower‑confidence items queued for manual review.

**Result:**  
After two sprints, decision detection accuracy rose from 65% to 92%, and the bot’s false‑positive rate dropped by 45%. Stakeholder satisfaction scores improved from 3.8/5 to 4.7/5 in our quarterly survey. I learned that early clarification and user‑centric assumption testing can dramatically shift a model’s real‑world performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
