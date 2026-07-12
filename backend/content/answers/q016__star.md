---
qid: q016
question: "What is hallucination in LLMs and how can it be mitigated?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was running an LLM-powered financial-research assistant, and during a beta a user caught it citing a completely fabricated earnings figure with a fake source. In finance, that's a serious trust and compliance problem.

**Task** I was asked to measurably reduce hallucinations before we could go to general availability.

**Action** I defined hallucination clearly for the team: when the model generates fluent but factually false or unsupported content, because it predicts plausible tokens rather than verifying truth. Then I layered mitigations. I added RAG so answers were grounded in retrieved filings, instructed the model to say "I don't know" when context was insufficient, and lowered temperature for factual queries. I built a verification step that checked every cited number against the source document, and I added an eval set to track a hallucination rate over time.

**Result** Our measured hallucination rate fell from 22% to about 4%, and fabricated citations dropped to near zero, which cleared us for launch. The lesson: you can't fully eliminate hallucination, but grounding, abstention, and automated fact-checking control it.
