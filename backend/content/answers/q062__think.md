---
qid: q062
question: "What are Type I and Type II errors?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** These only make sense inside hypothesis testing, so name the setup: a null H₀ that is either true or false, and a decision to reject or not. Assume a standard framing unless the interviewer gives a domain.
2. **Mental model.** Build the 2×2 truth-vs-decision grid in your head. The two error cells are the ones where the decision disagrees with reality. Map each to a familiar label: false positive and false negative.
3. **Reason step by step.** Type I = rejecting a *true* H₀ = false positive, probability α. Type II = failing to reject a *false* H₀ = false negative, probability β. Then add power = 1 − β to show you see the full picture.
4. **Traps to dodge.** Do not swap the two — a classic slip. Do not claim lowering α fixes everything; it trades Type I down but pushes Type II up. Remember only larger sample size shrinks both.
5. **Sanity-check and communicate.** Ground it with the medical-test analogy: Type I tells a healthy person they are sick, Type II tells a sick person they are well. Close by noting which error is costlier is context-dependent.
