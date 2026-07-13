---
qid: q002
question: "What is the Turing Test and what does it measure?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

I'd define it precisely: proposed by Alan Turing in 1950, the "imitation game" has a human judge exchange text with a hidden human and a hidden machine. If the judge can't reliably tell which is which, the machine passes. Crucially, it measures indistinguishability of behavior, not genuine understanding, consciousness, or reasoning correctness.

I'd then show **Learn and Be Curious** by connecting it to a real decision. On a customer-facing chatbot I built, "sounding human" was explicitly the wrong bar. A fluent, confident answer that was factually wrong hurt trust more than an honest "I don't know." So I optimized for grounded accuracy and deflection quality, not conversational realism, and added a retrieval layer plus confidence thresholds. That shifted our success metric from "human-likeness" to resolution rate, which rose from 61% to 78%.

I'd note modern critiques: the test rewards deception and ignores hallucination, so teams now use task-grounded evals, benchmarks, and human preference scoring instead. On AWS I'd evaluate such a system with Bedrock model evaluation and human-in-the-loop review via SageMaker Ground Truth.

A bar-raiser listens for whether I understand that a famous concept can be the wrong success metric, and that I chose measurable business outcomes over surface plausibility.
