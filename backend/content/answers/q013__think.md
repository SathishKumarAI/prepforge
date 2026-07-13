---
qid: q013
question: "What is prompt engineering and why does it matter?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Two-part ask: *what it is* and *why it matters*. Assume they want practical techniques plus the business rationale, and say you'll cover both.
2. **Mental model.** Think of the prompt as the model's entire "program at inference" — you steer a fixed model purely through its input. Since LLM behavior is highly sensitive to phrasing, small wording changes shift results a lot.
3. **Reason step by step.** Define it as designing input text to elicit accurate, relevant, well-formatted outputs *without changing weights*. List techniques: clear instructions and explicit **output format**, **few-shot** examples, **chain-of-thought** ("think step by step"), **role/persona** framing, context/constraints, and **delimiters** separating instructions from data. Then answer "why": it's the **cheapest, fastest** way to adapt a general model — often avoiding costly fine-tuning — and it's central to reliability and safety (reducing hallucination and prompt-injection risk).
4. **Traps to avoid.** Don't confuse it with retraining weights, quantization, or encryption — those are distractors. Don't imply it's "just guessing wording"; it's a repeatable discipline.
5. **Sanity-check + delivery.** Verify your definition explicitly says weights are unchanged (that's what separates it from fine-tuning). Deliver: "designing input text to guide an LLM toward better outputs — the cheapest lever before you reach for fine-tuning or RAG."
