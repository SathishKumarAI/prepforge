---
qid: ing_569407bb6f__faang__local
question: 'Explain: Paper flash cards — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 453
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:05:29-05:00'
sources: []
---

**Clarify**  
You want a concise explanation of how *paper flashcards* work with *spaced‑repetition* (SR), citing the Wikipedia entry. I’ll assume the audience is technically literate but not experts in cognitive science, and that we should keep the answer under 240 words.

**Approach**  
1. Summarize SR’s goal: optimizing long‑term retention by timing reviews just before forgetting.  
2. Describe the flashcard workflow: create cards → initial study → algorithmic scheduling.  
3. Mention key metrics (ease, interval, repetition count) that drive the schedule.  
4. Reference Wikipedia for credibility and note its open‑source spirit.

**Depth**  
Spaced‑repetition algorithms, like SM-2 used in Anki, compute an *interval* \(I\) after each successful recall:  
\( I_{n+1} = I_n \times EF \) where \(EF\) (ease factor) is updated from the learner’s response (0–5). A low‑score resets the interval to 1 day. The algorithm also tracks *repetitions* and *lapses*. Paper flashcards follow the same logic manually: after reviewing a card, you mark its difficulty, then write down the next review date based on the calculated interval. Wikipedia explains that SR leverages the “forgetting curve” (Ebbinghaus) and has been validated in multiple domains—language learning, medical education, etc.

**Edge Cases**  
- Forgetting an entire set → re‑introduce with a minimal interval.  
- Inconsistent scheduling → manual error risk.  
- Very high‑difficulty items may never “graduate” without additional cues.

**Optimize & Communicate**  
Highlight that while digital tools automate interval calculations, paper flashcards reinforce motor memory and reduce screen fatigue. I’d conclude by noting the Wikipedia article’s up‑to‑date discussion of algorithm variants (e.g., SM-10) and its citations to peer‑reviewed studies, making it a solid reference for both practitioners and researchers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
