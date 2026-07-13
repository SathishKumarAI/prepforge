---
qid: q001
question: "What is the difference between Artificial Intelligence, Machine Learning, and Deep Learning?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Confirm the interviewer wants the *conceptual relationship*, not a history lecture. State your assumption out loud: "I'll treat these as nested scopes and give one concrete example of each."
2. **Mental model.** Picture three concentric circles: AI is the outer ring, ML sits inside it, DL sits inside ML. This single image drives the whole answer.
3. **Reason step by step.** Define AI broadly (any system doing tasks that need intelligence, *including rule-based systems that never learn*). Narrow to ML (learns patterns from data instead of hand-coded rules — decision trees, SVMs). Narrow again to DL (ML using multi-layer neural nets that learn hierarchical features, strong on images/audio/text). Then state the containment: every DL model is ML, every ML model is AI, not vice versa.
4. **Traps to avoid.** Do not imply they are synonyms or that "newer = better." Remember the counterexample: a symbolic expert system is AI but *not* ML.
5. **Sanity-check + delivery.** Test your claim with the counterexample above — if it holds, the nesting is right. Close by naming the discriminator for each layer: rules vs. learning-from-data vs. deep neural nets.
